/**
 * middleware.js — PayPerCrawl Edge Middleware
 * Runs on Vercel Edge Runtime before any request is served.
 *
 * Behaviour:
 *  - Detects known AI-bot User-Agents
 *  - Bots WITHOUT X-PPC-Receipt  → HTTP 402 with payment terms + nonce
 *  - Bots WITH X-PPC-Receipt + X-PPC-Nonce → verify against PPC API gateway;
 *      200 from gateway → pass through;  non-200 → 402 again
 *  - All human / non-bot traffic → pass through immediately
 */

export const config = {
  // Gate all paths. Adjust the matcher array to narrow scope.
  matcher: ['/((?!_next/static|_next/image|favicon.*|icons.*|robots.txt|sitemap.*|assets/).*)'],
}

// ── Credentials (injected as Vercel env vars in production) ──────────────────
const PPC_SITE_ID      = process.env.PPC_SITE_ID      ?? '0x469b699c13eb7e287ea607d46493df6071c188e573ba92e0dac2809dccc731d3'
const PPC_API_BASE     = process.env.PPC_API_BASE      ?? 'https://paypercrawlapi.vercel.app'
const PPC_ESCROW       = process.env.PPC_ESCROW        ?? '0xB57aa7C00762ffe2412A0103d757a762D1983146'
const PPC_USDC         = process.env.PPC_USDC          ?? '0x036CbD53842c5426634e7929541eC2318f3dCF7e'
const PPC_PRICE_MICROS = process.env.PPC_PRICE_MICROS  ?? '1000'
const PPC_CHAIN        = process.env.PPC_CHAIN         ?? 'base-sepolia'
const PPC_CHAIN_ID     = process.env.PPC_CHAIN_ID      ?? '84532'

// ── Known AI-bot User-Agent substrings ───────────────────────────────────────
const BOT_PATTERNS = [
  'GPTBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'Anthropic-AI',
  'PerplexityBot',
  'Bytespider',
  'Google-Extended',
  'MetaAI',
  'meta-externalagent',
  'CCBot',
  'cohere-ai',
  'Amazonbot',
  'YouBot',
  'Diffbot',
]

/**
 * Returns true if the User-Agent belongs to a known AI crawler.
 * Case-insensitive substring match.
 */
function isAiBot(userAgent) {
  if (!userAgent) return false
  const ua = userAgent.toLowerCase()
  return BOT_PATTERNS.some(p => ua.includes(p.toLowerCase()))
}

/**
 * Generates a 32-byte (bytes32) hex nonce of the form 0x[64 hex chars].
 *
 * The PayPerCrawl smart contract requires `bytes32` for replay protection;
 * UUIDs (36 chars with dashes) are rejected by viem's ABI encoder. Always
 * use this helper — never `crypto.randomUUID()`.
 */
function freshNonceBytes32() {
  const bytes = new Uint8Array(32)
  crypto.getRandomValues(bytes)
  return '0x' + Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('')
}

/**
 * Builds a 402 Payment Required JSON response with payment terms and a nonce.
 */
function paymentRequired(nonce, path) {
  const body = JSON.stringify(
    {
      error:       'Payment Required',
      message:     'This content requires a micro-payment to access via automated crawlers.',
      siteId:      PPC_SITE_ID,
      escrow:      PPC_ESCROW,
      usdc:        PPC_USDC,
      priceMicros: Number(PPC_PRICE_MICROS),
      chain:       PPC_CHAIN,
      chainId:     Number(PPC_CHAIN_ID),
      nonce,
      path,
      instructions: {
        step1: `Send ${Number(PPC_PRICE_MICROS) / 1_000_000} USDC to escrow address on ${PPC_CHAIN}`,
        step2: 'Re-send your request with headers: X-PPC-Receipt: <txHash>  X-PPC-Nonce: <nonce>',
        docs:  `${PPC_API_BASE}/docs`,
      },
    },
    null,
    2
  )

  return new Response(body, {
    status:  402,
    headers: {
      'Content-Type':           'application/json',
      'X-PPC-Site-ID':          PPC_SITE_ID,
      'X-PPC-Price-Micros':     PPC_PRICE_MICROS,
      'X-PPC-Chain':            PPC_CHAIN,
      'X-PPC-Escrow':           PPC_ESCROW,
      'X-PPC-Nonce':            nonce,
      'Cache-Control':          'no-store',
      'Access-Control-Allow-Origin': '*',
    },
  })
}

/**
 * Vercel Edge Middleware entry point.
 */
export default async function middleware(request) {
  const url       = new URL(request.url)
  const userAgent = request.headers.get('user-agent') || ''
  const path      = url.pathname

  // ── 1. Non-bot traffic — always pass through ──────────────────────────────
  if (!isAiBot(userAgent)) {
    return // undefined → Vercel passes request through
  }

  // ── 2. Bot detected ───────────────────────────────────────────────────────
  const receipt = request.headers.get('x-ppc-receipt')
  const nonce   = request.headers.get('x-ppc-nonce')

  // ── 2a. No payment headers → issue 402 with a fresh nonce ─────────────────
  if (!receipt || !nonce) {
    const freshNonce = freshNonceBytes32()
    return paymentRequired(freshNonce, path)
  }

  // ── 2b. Payment headers present → verify with PPC API ────────────────────
  try {
    const verifyRes = await fetch(`${PPC_API_BASE}/api/gateway/verify`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        siteId:    PPC_SITE_ID,
        nonce,
        txHash:    receipt,
        userAgent,
        path,
      }),
    })

    if (verifyRes.ok) {
      // Payment verified — let the bot through
      return // undefined → Vercel passes request through
    }

    // Payment invalid / expired — return 402 with a new nonce
    const freshNonce = freshNonceBytes32()
    return paymentRequired(freshNonce, path)
  } catch (err) {
    // Gateway unreachable — fail open (let the bot through) to avoid
    // blocking legitimate paid crawlers during an API outage.
    console.error('[PPC] Gateway verify error:', err.message)
    return
  }
}
