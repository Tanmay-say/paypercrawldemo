import { useState } from 'react'
import './Datasets.css'

const ALL_DATASETS = [
  {
    id: 'ds-001',
    name: 'Global AI Adoption Index 2025',
    category: 'Technology',
    badge: 'badge-cyan',
    records: '4.2M records',
    updated: 'Updated daily',
    format: 'JSON, CSV, Parquet',
    license: 'CC BY 4.0',
    size: '12.4 GB',
    coverage: '195 countries',
    description: 'Comprehensive survey data tracking AI tool adoption rates, investment levels, workforce impact, and regulatory posture across 195 countries. Includes government, enterprise, and SME segments from 2020–2025.',
    tags: ['AI', 'Adoption', 'Survey', 'Government', 'Enterprise'],
    apiEndpoint: '/v2/datasets/ai-adoption-index-2025',
    sampleFields: ['country_code', 'ai_adoption_rate', 'investment_usd', 'workforce_displaced', 'regulatory_score'],
  },
  {
    id: 'ds-002',
    name: 'World Stock Market Daily OHLCV',
    category: 'Finance',
    badge: 'badge-green',
    records: '38.7B records',
    updated: 'Real-time',
    format: 'JSON, CSV, Parquet, FIX',
    license: 'CC BY 4.0',
    size: '2.1 TB',
    coverage: '82 exchanges',
    description: 'Daily Open-High-Low-Close-Volume data for equities, ETFs, and indices across 82 global exchanges. Historical data from 1990 to present. Includes adjusted prices, dividends, and splits.',
    tags: ['Stocks', 'OHLCV', 'Finance', 'Historical', 'Equity'],
    apiEndpoint: '/v2/datasets/stock-market-ohlcv',
    sampleFields: ['ticker', 'exchange', 'date', 'open', 'high', 'low', 'close', 'volume', 'adj_close'],
  },
  {
    id: 'ds-003',
    name: 'Climate Change Indicators Database',
    category: 'Climate',
    badge: 'badge-blue',
    records: '14.8B records',
    updated: 'Daily from NOAA/ESA',
    format: 'NetCDF, JSON, CSV',
    license: 'ODC-ODbL',
    size: '487 GB',
    coverage: 'Global (0.25° grid)',
    description: 'Multi-decade climate indicator dataset including temperature anomalies, sea-level rise, CO₂ concentrations, ice-sheet extent, and extreme weather events. Sources: NOAA, ESA, NASA GISS.',
    tags: ['Climate', 'Temperature', 'CO2', 'Sea Level', 'NOAA'],
    apiEndpoint: '/v2/datasets/climate-indicators',
    sampleFields: ['lat', 'lon', 'date', 'temp_anomaly_c', 'co2_ppm', 'sea_level_mm', 'precipitation_mm'],
  },
  {
    id: 'ds-004',
    name: 'E-Commerce Product Catalog (Global)',
    category: 'E-Commerce',
    badge: 'badge-orange',
    records: '890M records',
    updated: 'Hourly',
    format: 'JSON, CSV, Avro',
    license: 'CC BY 4.0',
    size: '340 GB',
    coverage: '50 platforms, 180 countries',
    description: 'Aggregated product listing data from 50 major e-commerce platforms including pricing, ratings, reviews, categories, and availability. Includes cross-platform deduplication and price history.',
    tags: ['E-Commerce', 'Products', 'Pricing', 'Reviews', 'Retail'],
    apiEndpoint: '/v2/datasets/ecommerce-catalog',
    sampleFields: ['product_id', 'title', 'platform', 'price_usd', 'rating', 'review_count', 'category', 'availability'],
  },
  {
    id: 'ds-005',
    name: 'Clinical Trials Outcomes Registry',
    category: 'Healthcare',
    badge: 'badge-pink',
    records: '8.4M records',
    updated: 'Weekly from ClinicalTrials.gov',
    format: 'JSON, CSV, FHIR R4',
    license: 'CC BY-NC 4.0',
    size: '28 GB',
    coverage: '189 countries, 2000–2025',
    description: 'Complete registry of clinical trial outcomes from 2000 to present. Includes phase data, intervention types, primary/secondary endpoints, adverse events, and final results for 8.4M study arms.',
    tags: ['Healthcare', 'Clinical Trials', 'FHIR', 'FDA', 'Pharma'],
    apiEndpoint: '/v2/datasets/clinical-trials',
    sampleFields: ['nct_id', 'phase', 'drug_name', 'condition', 'outcome', 'p_value', 'sample_size', 'sponsor'],
  },
  {
    id: 'ds-006',
    name: 'Real Estate Transactions & Valuations',
    category: 'Real Estate',
    badge: 'badge-purple',
    records: '1.2B records',
    updated: 'Weekly',
    format: 'JSON, CSV',
    license: 'CC BY-SA 4.0',
    size: '92 GB',
    coverage: '45 countries',
    description: 'Historical and current property transaction data including sale prices, rental yields, property attributes, and neighborhood demographics. Covers residential and commercial segments across 45 countries.',
    tags: ['Real Estate', 'Property', 'Valuation', 'Rental', 'Transactions'],
    apiEndpoint: '/v2/datasets/real-estate-transactions',
    sampleFields: ['property_id', 'country', 'city', 'zip', 'price_usd', 'sqft', 'bedrooms', 'transaction_date', 'rental_yield'],
  },
]

const CATEGORIES = ['All', 'Technology', 'Finance', 'Climate', 'E-Commerce', 'Healthcare', 'Real Estate']

export default function Datasets() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [expandedId, setExpandedId] = useState(null)

  const filtered = activeCategory === 'All'
    ? ALL_DATASETS
    : ALL_DATASETS.filter(d => d.category === activeCategory)

  return (
    <section className="datasets" id="datasets" aria-labelledby="datasets-heading">
      <div className="container">
        <header className="datasets__header">
          <div className="section-label">
            <span className="dot" aria-hidden="true" />
            Open Datasets
          </div>
          <h2 id="datasets-heading" className="datasets__title">
            Explore <span className="gradient-text">8,500+ Datasets</span>
          </h2>
          <p className="datasets__subtitle">
            Every dataset is publicly accessible, machine-readable, and enriched with
            metadata. Browse by category or search the full catalog via our API.
          </p>
        </header>

        {/* Category filter */}
        <nav className="datasets__filter" aria-label="Dataset category filter">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              id={`filter-${cat.toLowerCase().replace(/\s/g, '-')}`}
              className={`datasets__filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Dataset cards */}
        <div className="datasets__grid" role="list" aria-label="Filtered datasets">
          {filtered.map(ds => (
            <article
              key={ds.id}
              id={ds.id}
              className="datasets__card glass-card"
              role="listitem"
              data-category={ds.category}
              data-format={ds.format}
              data-license={ds.license}
            >
              <div className="datasets__card-top">
                <span className={`badge ${ds.badge}`}>{ds.category}</span>
                <span className="datasets__update">{ds.updated}</span>
              </div>

              <h3 className="datasets__card-name">{ds.name}</h3>
              <p className="datasets__card-desc">{ds.description}</p>

              {/* Metadata grid */}
              <dl className="datasets__meta">
                <div>
                  <dt>Records</dt>
                  <dd>{ds.records}</dd>
                </div>
                <div>
                  <dt>Size</dt>
                  <dd>{ds.size}</dd>
                </div>
                <div>
                  <dt>Coverage</dt>
                  <dd>{ds.coverage}</dd>
                </div>
                <div>
                  <dt>License</dt>
                  <dd>{ds.license}</dd>
                </div>
              </dl>

              {/* Tags */}
              <div className="datasets__tags" aria-label="Dataset tags">
                {ds.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              {/* Expandable details */}
              {expandedId === ds.id && (
                <div className="datasets__expanded">
                  <div className="datasets__api-block">
                    <div className="datasets__api-label">API Endpoint</div>
                    <code className="datasets__api-endpoint">
                      GET https://api.datavault.io{ds.apiEndpoint}
                    </code>
                  </div>
                  <div>
                    <div className="datasets__api-label">Sample Fields</div>
                    <div className="datasets__fields">
                      {ds.sampleFields.map(f => (
                        <code key={f} className="datasets__field">{f}</code>
                      ))}
                    </div>
                  </div>
                  <div className="datasets__format-row">
                    <span className="datasets__api-label">Formats:</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>{ds.format}</span>
                  </div>
                </div>
              )}

              <div className="datasets__card-footer">
                <button
                  className="btn-ghost datasets__detail-btn"
                  id={`${ds.id}-expand`}
                  onClick={() => setExpandedId(expandedId === ds.id ? null : ds.id)}
                  aria-expanded={expandedId === ds.id}
                >
                  {expandedId === ds.id ? 'Hide Details' : 'View Schema & API'}
                </button>
                <a
                  href={`https://api.datavault.io${ds.apiEndpoint}`}
                  className="btn-primary datasets__access-btn"
                  id={`${ds.id}-access`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Access Dataset →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="datasets__footer-cta">
          <p>Can't find what you're looking for?</p>
          <a href="#pricing" className="btn-primary" id="datasets-request-btn">Request a Dataset</a>
        </div>
      </div>
    </section>
  )
}
