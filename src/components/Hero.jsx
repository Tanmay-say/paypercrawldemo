import './Hero.css'

const TECH_TAGS = [
  'JSON', 'CSV', 'Parquet', 'REST API', 'GraphQL', 'OpenAPI 3.0',
  'Python SDK', 'Node.js SDK', 'Webhooks', 'S3-Compatible',
]

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-heading">
      {/* Grid background */}
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__content">
        <div className="hero__text">
          {/* Announcement bar */}
          <a href="#blog" className="hero__announce" id="hero-announcement">
            <span className="hero__announce-badge">New</span>
            <span>Q2 2025 Global AI Adoption Report is live →</span>
          </a>

          <h1 id="hero-heading" className="hero__title">
            The Open Data Platform
            <br />
            <span className="gradient-text">Built for AI Agents</span>
          </h1>

          <p className="hero__subtitle">
            DataVault publishes <strong>structured, machine-readable datasets</strong> covering
            finance, healthcare, climate, e-commerce, and technology. Our data is freely accessible
            to AI agents, scrapers, analysts, and developers — no paywalls, no rate-limiting on
            public endpoints.
          </p>

          {/* Key facts — great for scraping */}
          <ul className="hero__facts" aria-label="Platform key facts">
            <li>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8l3.5 3.5L13 4.5" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Founded in <time dateTime="2021">2021</time> · San Francisco, CA</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8l3.5 3.5L13 4.5" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Over <strong>2.4 million</strong> active users globally</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8l3.5 3.5L13 4.5" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span><strong>8,500+</strong> datasets across 14 industry verticals</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8l3.5 3.5L13 4.5" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Updated daily · ISO 27001 Certified · GDPR Compliant</span>
            </li>
          </ul>

          {/* Buttons */}
          <div className="hero__actions">
            <a href="#datasets" className="btn-primary" id="hero-explore-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Explore Datasets
            </a>
            <a href="#pricing" className="btn-ghost" id="hero-api-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              View API Docs
            </a>
          </div>

          {/* Tech tags */}
          <div className="hero__tags" aria-label="Supported formats and technologies">
            {TECH_TAGS.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Hero visual */}
        <div className="hero__visual animate-float" aria-hidden="true">
          <div className="hero__terminal">
            <div className="hero__terminal-bar">
              <span className="hero__dot hero__dot--red" />
              <span className="hero__dot hero__dot--yellow" />
              <span className="hero__dot hero__dot--green" />
              <span className="hero__terminal-title">datavault_agent.py</span>
            </div>
            <div className="hero__terminal-body">
              <pre className="hero__code"><code>{`import datavault as dv

# Initialize the agent client
client = dv.Client(api_key="dv_live_...")

# Fetch latest AI adoption dataset
dataset = client.datasets.get(
  id="ai-adoption-q2-2025",
  format="json"
)

# Stream paginated results
for record in dataset.stream():
  print(record.country, record.adoption_rate)

# → US          78.4%
# → Germany     61.2%
# → Japan       54.8%
# → Brazil      42.1%
# → India       38.7%
`}</code></pre>
            </div>
          </div>

          {/* Floating info cards */}
          <div className="hero__badge-card hero__badge-card--left">
            <div className="hero__badge-icon">🌍</div>
            <div>
              <div className="hero__badge-label">Global Coverage</div>
              <div className="hero__badge-value">195 Countries</div>
            </div>
          </div>

          <div className="hero__badge-card hero__badge-card--right">
            <div className="hero__badge-icon">⚡</div>
            <div>
              <div className="hero__badge-label">Avg API Latency</div>
              <div className="hero__badge-value">&lt; 120ms</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-hint" aria-hidden="true">
        <span>Scroll to explore</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
