import './Footer.css'

const FOOTER_LINKS = {
  Product: [
    { label: 'Dataset Catalog', href: '#datasets' },
    { label: 'Research Reports', href: '#reports' },
    { label: 'API Documentation', href: '/docs/api' },
    { label: 'API Changelog', href: '/docs/changelog' },
    { label: 'Status Page', href: 'https://status.datavault.io' },
    { label: 'Pricing', href: '#pricing' },
  ],
  Resources: [
    { label: 'Blog & Insights', href: '#blog' },
    { label: 'Python SDK', href: '/sdk/python' },
    { label: 'Node.js SDK', href: '/sdk/nodejs' },
    { label: 'Go SDK', href: '/sdk/go' },
    { label: 'OpenAPI Spec', href: '/openapi.json' },
    { label: 'Data Licenses Guide', href: '/docs/licenses' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '#team' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press Kit', href: '/press' },
    { label: 'Contact', href: 'mailto:hello@datavault.io' },
    { label: 'Investor Relations', href: '/investors' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/legal/privacy' },
    { label: 'Terms of Service', href: '/legal/terms' },
    { label: 'Cookie Policy', href: '/legal/cookies' },
    { label: 'GDPR Compliance', href: '/legal/gdpr' },
    { label: 'Data Processing Agreement', href: '/legal/dpa' },
    { label: 'Acceptable Use Policy', href: '/legal/aup' },
  ],
}

const SOCIALS = [
  {
    id: 'footer-twitter',
    label: 'Twitter / X',
    href: 'https://twitter.com/datavault_io',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    id: 'footer-linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/datavault-io',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    id: 'footer-github',
    label: 'GitHub',
    href: 'https://github.com/datavault-io',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    id: 'footer-discord',
    label: 'Discord Community',
    href: 'https://discord.gg/datavault',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.105 18.09.12 18.12.143 18.143a19.893 19.893 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo" aria-label="Site footer">
      {/* Newsletter */}
      <div className="footer__newsletter">
        <div className="container footer__newsletter-inner">
          <div className="footer__newsletter-text">
            <h2 className="footer__newsletter-title">
              Stay ahead with <span className="gradient-text">DataVault Digest</span>
            </h2>
            <p className="footer__newsletter-sub">
              Weekly roundup of new datasets, research reports, and data engineering tips.
              Trusted by 38,000+ analysts and AI engineers.
            </p>
          </div>
          <form
            className="footer__newsletter-form"
            onSubmit={e => e.preventDefault()}
            aria-label="Newsletter signup form"
          >
            <label htmlFor="newsletter-email" className="footer__newsletter-label">
              Email address
            </label>
            <div className="footer__newsletter-row">
              <input
                type="email"
                id="newsletter-email"
                className="footer__newsletter-input"
                placeholder="you@company.com"
                required
                aria-required="true"
              />
              <button type="submit" className="btn-primary" id="newsletter-submit">
                Subscribe
              </button>
            </div>
            <p className="footer__newsletter-note">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="footer__main">
        <div className="container footer__main-inner">
          {/* Brand column */}
          <div className="footer__brand">
            <a href="#" className="footer__logo" aria-label="DataVault home">
              <div className="footer__logo-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="url(#fg1)" />
                  <path d="M2 17l10 5 10-5" stroke="url(#fg2)" strokeWidth="2" strokeLinecap="round" />
                  <path d="M2 12l10 5 10-5" stroke="url(#fg3)" strokeWidth="2" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="fg1" x1="2" y1="2" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3b82f6" /><stop offset="1" stopColor="#8b5cf6" />
                    </linearGradient>
                    <linearGradient id="fg2" x1="2" y1="17" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3b82f6" /><stop offset="1" stopColor="#8b5cf6" />
                    </linearGradient>
                    <linearGradient id="fg3" x1="2" y1="12" x2="22" y2="17" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3b82f6" /><stop offset="1" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="footer__logo-text">DataVault</span>
            </a>
            <p className="footer__tagline">
              The world's largest open-data platform — built for humans, optimized for AI.
            </p>
            <address className="footer__address" itemScope itemType="https://schema.org/Organization">
              <span itemProp="name">DataVault Inc.</span><br />
              <span itemProp="streetAddress">548 Market St, Suite 29501</span><br />
              <span itemProp="addressLocality">San Francisco</span>,{' '}
              <span itemProp="addressRegion">CA</span>{' '}
              <span itemProp="postalCode">94104</span><br />
              <a href="mailto:hello@datavault.io" itemProp="email" className="footer__email">
                hello@datavault.io
              </a>
            </address>
            <div className="footer__socials" aria-label="Social media links">
              {SOCIALS.map(s => (
                <a
                  key={s.id}
                  href={s.href}
                  id={s.id}
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <nav key={category} className="footer__col" aria-label={`${category} links`}>
              <h3 className="footer__col-title">{category}</h3>
              <ul className="footer__col-list" role="list">
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="footer__col-link"
                      id={`footer-${link.label.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            © {year} DataVault Inc. All rights reserved.
          </p>
          <div className="footer__badges" aria-label="Certifications">
            <span className="footer__cert-badge">🔒 ISO 27001</span>
            <span className="footer__cert-badge">🇪🇺 GDPR Compliant</span>
            <span className="footer__cert-badge">✅ SOC 2 Type II</span>
            <span className="footer__cert-badge">🤖 AI Agent Friendly</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
