import { useState } from 'react'
import './Pricing.css'

const PLANS = [
  {
    id: 'plan-free',
    name: 'Free',
    tagline: 'For individuals & exploration',
    monthlyPrice: 0,
    annualPrice: 0,
    badge: null,
    features: [
      { label: 'Access to 500+ public datasets', included: true },
      { label: '10,000 API calls / month', included: true },
      { label: 'JSON & CSV export', included: true },
      { label: 'Community support', included: true },
      { label: 'Rate limit: 10 req/sec', included: true },
      { label: 'Parquet & Avro export', included: false },
      { label: 'Real-time streaming (SSE)', included: false },
      { label: 'Dataset versioning', included: false },
      { label: 'SLA guarantee', included: false },
      { label: 'Dedicated support', included: false },
    ],
    ctaLabel: 'Get Started Free',
    ctaId: 'plan-free-cta',
    ctaVariant: 'ghost',
    apiLimits: {
      callsPerMonth: '10,000',
      rateLimit: '10 req/sec',
      dataRetention: '30 days',
      maxDatasets: 500,
    },
  },
  {
    id: 'plan-pro',
    name: 'Pro',
    tagline: 'For growing teams & startups',
    monthlyPrice: 79,
    annualPrice: 63,
    badge: 'Most Popular',
    features: [
      { label: 'Access to all 8,500+ datasets', included: true },
      { label: '5,000,000 API calls / month', included: true },
      { label: 'JSON, CSV, Parquet & Avro export', included: true },
      { label: 'Priority email support', included: true },
      { label: 'Rate limit: 500 req/sec', included: true },
      { label: 'Real-time streaming (SSE)', included: true },
      { label: 'Dataset versioning (30 snapshots)', included: true },
      { label: '99.9% SLA guarantee', included: true },
      { label: 'Webhook notifications', included: true },
      { label: 'Dedicated support', included: false },
    ],
    ctaLabel: 'Start 14-Day Free Trial',
    ctaId: 'plan-pro-cta',
    ctaVariant: 'primary',
    apiLimits: {
      callsPerMonth: '5,000,000',
      rateLimit: '500 req/sec',
      dataRetention: '1 year',
      maxDatasets: 8500,
    },
  },
  {
    id: 'plan-enterprise',
    name: 'Enterprise',
    tagline: 'For large-scale AI & data teams',
    monthlyPrice: null,
    annualPrice: null,
    badge: null,
    features: [
      { label: 'Unlimited API calls', included: true },
      { label: 'All Pro features included', included: true },
      { label: 'Custom dataset requests', included: true },
      { label: 'Dedicated account manager', included: true },
      { label: 'Rate limit: Unlimited', included: true },
      { label: 'Real-time streaming (SSE + WebSocket)', included: true },
      { label: 'Unlimited dataset versioning', included: true },
      { label: '99.99% SLA + uptime credits', included: true },
      { label: 'On-premise / VPC deployment', included: true },
      { label: 'SOC 2 Type II audit reports', included: true },
    ],
    ctaLabel: 'Contact Sales',
    ctaId: 'plan-enterprise-cta',
    ctaVariant: 'ghost',
    apiLimits: {
      callsPerMonth: 'Unlimited',
      rateLimit: 'Custom',
      dataRetention: 'Custom',
      maxDatasets: 'All + Custom',
    },
  },
]

const FAQS = [
  {
    id: 'faq-1',
    q: 'Can AI agents and automated scrapers use the free tier?',
    a: 'Yes. The Free tier is explicitly designed to support AI agents, automated crawlers, and data pipelines. Our robots.txt file allows all well-behaved bots. The only restriction is the 10,000 calls/month cap and 10 req/sec rate limit.',
  },
  {
    id: 'faq-2',
    q: 'What data formats are supported?',
    a: 'DataVault supports JSON, CSV, Parquet (Apache), Avro, NetCDF (climate data), FHIR R4 (healthcare), and FIX protocol (financial data). The Free plan includes JSON and CSV. Parquet and Avro require Pro or above.',
  },
  {
    id: 'faq-3',
    q: 'Is the data updated in real time?',
    a: 'Depends on the dataset. Financial and logistics datasets update in real time. Climate and e-commerce data updates hourly or daily. Survey and research datasets update weekly or on publication. All datasets display their update frequency in the catalog.',
  },
  {
    id: 'faq-4',
    q: 'What licenses cover the data?',
    a: 'Most public datasets are licensed under Creative Commons Attribution 4.0 (CC BY 4.0), which allows commercial use, redistribution, and use in AI training — with attribution. Some datasets use ODC-ODbL or CC BY-NC 4.0. License is always displayed per dataset.',
  },
  {
    id: 'faq-5',
    q: 'How do I authenticate my API requests?',
    a: 'All API requests use Bearer token authentication. Include your API key in the Authorization header: Authorization: Bearer dv_live_xxxx. Free tier keys can be generated instantly from your dashboard. No credit card required.',
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <section className="pricing" id="pricing" aria-labelledby="pricing-heading">
      <div className="container">
        <header className="pricing__header">
          <div className="section-label">
            <span className="dot" aria-hidden="true" />
            Pricing
          </div>
          <h2 id="pricing-heading" className="pricing__title">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="pricing__subtitle">
            Start free. Scale as you grow. No hidden fees, no per-dataset charges.
            All plans include full access to the DataVault API.
          </p>

          {/* Toggle */}
          <div className="pricing__toggle" role="group" aria-label="Billing frequency">
            <span className={!annual ? 'pricing__toggle-label active' : 'pricing__toggle-label'}>Monthly</span>
            <button
              className={`pricing__toggle-switch ${annual ? 'on' : ''}`}
              onClick={() => setAnnual(!annual)}
              aria-pressed={annual}
              id="pricing-annual-toggle"
              aria-label="Toggle annual billing"
            >
              <span className="pricing__toggle-knob" />
            </button>
            <span className={annual ? 'pricing__toggle-label active' : 'pricing__toggle-label'}>
              Annual
              <span className="pricing__toggle-save">Save 20%</span>
            </span>
          </div>
        </header>

        {/* Plans */}
        <div className="pricing__grid" role="list">
          {PLANS.map(plan => (
            <article
              key={plan.id}
              id={plan.id}
              className={`pricing__card glass-card ${plan.badge ? 'pricing__card--featured' : ''}`}
              role="listitem"
              data-plan={plan.name.toLowerCase()}
            >
              {plan.badge && (
                <div className="pricing__popular-badge" aria-label="Most popular plan">
                  ⭐ {plan.badge}
                </div>
              )}

              <div className="pricing__plan-header">
                <h3 className="pricing__plan-name">{plan.name}</h3>
                <p className="pricing__plan-tagline">{plan.tagline}</p>
              </div>

              <div className="pricing__price">
                {plan.monthlyPrice !== null ? (
                  <>
                    <span className="pricing__currency">$</span>
                    <span className="pricing__amount">
                      {annual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="pricing__period">/mo</span>
                  </>
                ) : (
                  <span className="pricing__custom">Custom</span>
                )}
              </div>

              {annual && plan.monthlyPrice > 0 && (
                <p className="pricing__billed-annually">
                  Billed annually · ${plan.annualPrice * 12}/yr
                </p>
              )}

              {/* API Limits */}
              <dl className="pricing__limits">
                {Object.entries(plan.apiLimits).map(([key, val]) => (
                  <div key={key} className="pricing__limit-item">
                    <dt className="pricing__limit-key">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())}
                    </dt>
                    <dd className="pricing__limit-val">{val}</dd>
                  </div>
                ))}
              </dl>

              {/* Features */}
              <ul className="pricing__features" aria-label={`${plan.name} plan features`}>
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`pricing__feature ${feature.included ? '' : 'pricing__feature--excluded'}`}
                  >
                    {feature.included ? (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8l3.5 3.5L13 4.5" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M4 4l8 8M12 4l-8 8" stroke="#4a5568" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    )}
                    {feature.label}
                  </li>
                ))}
              </ul>

              <a
                href={plan.name === 'Enterprise' ? 'mailto:sales@datavault.io' : '#'}
                className={plan.ctaVariant === 'primary' ? 'btn-primary pricing__cta' : 'btn-ghost pricing__cta'}
                id={plan.ctaId}
                style={{ justifyContent: 'center' }}
              >
                {plan.ctaLabel}
              </a>
            </article>
          ))}
        </div>

        {/* FAQ */}
        <div className="pricing__faq" id="faq">
          <h3 className="pricing__faq-title">Frequently Asked Questions</h3>
          <div className="pricing__faq-list">
            {FAQS.map(faq => (
              <div key={faq.id} id={faq.id} className="pricing__faq-item glass-card">
                <button
                  className="pricing__faq-question"
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  aria-expanded={openFaq === faq.id}
                  id={`${faq.id}-btn`}
                >
                  {faq.q}
                  <svg
                    width="18" height="18" viewBox="0 0 24 24" fill="none"
                    className={`pricing__faq-chevron ${openFaq === faq.id ? 'open' : ''}`}
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {openFaq === faq.id && (
                  <p className="pricing__faq-answer">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
