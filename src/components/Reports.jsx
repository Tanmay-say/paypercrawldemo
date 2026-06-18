import './Reports.css'

const REPORTS = [
  {
    id: 'report-001',
    title: 'State of AI in Enterprise 2025',
    subtitle: 'Annual Research Report · 148 Pages',
    date: '2025-05-15',
    displayDate: 'May 15, 2025',
    category: 'Technology',
    badge: 'badge-cyan',
    readTime: '22 min read',
    summary: 'Our flagship annual report surveying 12,400 enterprise decision-makers across 68 countries. Key findings include 78% of Fortune 500 companies now deploy generative AI in production, enterprise AI budgets grew 142% YoY, and agentic AI systems are the top investment priority for 2025–2026.',
    keyFindings: [
      '78% of Fortune 500 companies deploy GenAI in production (vs. 34% in 2023)',
      'Average enterprise AI budget: $14.2M (+142% YoY)',
      'Top use cases: coding assistants (84%), customer service bots (71%), document analysis (68%)',
      'Agentic AI cited as #1 investment priority by 62% of CTOs',
      'AI governance frameworks in place at only 31% of surveyed firms',
    ],
    authors: ['Dr. Sarah Chen', 'Marcus Webb', 'Priya Nair'],
    downloadUrl: '/reports/state-of-ai-enterprise-2025.pdf',
  },
  {
    id: 'report-002',
    title: 'Global E-Commerce Benchmark Report Q1 2025',
    subtitle: 'Quarterly Industry Report · 92 Pages',
    date: '2025-04-02',
    displayDate: 'April 2, 2025',
    category: 'E-Commerce',
    badge: 'badge-orange',
    readTime: '15 min read',
    summary: 'Q1 2025 global e-commerce performance benchmarks across 50 platforms and 180 countries. Total global GMV reached $1.47T in Q1 (+23% YoY). Mobile commerce now accounts for 67% of transactions. Cross-border e-commerce grew 38% driven by APAC and LATAM markets.',
    keyFindings: [
      'Global Q1 GMV: $1.47 trillion (+23.4% YoY)',
      'Mobile commerce share: 67.3% (up from 58.9% in Q1 2024)',
      'Cross-border transactions grew 38% led by APAC/LATAM',
      'Average cart abandonment rate: 71.2% globally',
      'Same-day delivery adoption: 29% of orders in top-10 markets',
    ],
    authors: ['Leila Ahmadi', 'Tom Fairweather'],
    downloadUrl: '/reports/ecommerce-benchmark-q1-2025.pdf',
  },
  {
    id: 'report-003',
    title: 'Climate Data Synthesis Report 2024–2025',
    subtitle: 'Joint Research · NOAA × DataVault · 204 Pages',
    date: '2025-03-20',
    displayDate: 'March 20, 2025',
    category: 'Climate',
    badge: 'badge-blue',
    readTime: '31 min read',
    summary: 'A comprehensive synthesis of climate data from 2024–2025 produced in collaboration with NOAA. Global mean temperature anomaly reached +1.48°C above pre-industrial levels in 2024. Extreme weather events increased 34% from the 2010–2020 baseline.',
    keyFindings: [
      '2024 global mean temperature anomaly: +1.48°C (new record)',
      'Extreme weather events: +34% vs. 2010–2020 baseline',
      'Arctic sea ice extent hit 3-decade low in September 2024',
      'Global CO₂ concentration: 424.7 ppm (highest ever recorded)',
      'Renewable energy now 35% of global electricity generation',
    ],
    authors: ['Dr. Elena Vasquez', 'Dr. James O\'Brien', 'NOAA Climate Lab'],
    downloadUrl: '/reports/climate-synthesis-2024-2025.pdf',
  },
  {
    id: 'report-004',
    title: 'Healthcare Data Interoperability Index 2025',
    subtitle: 'Industry Analysis · 76 Pages',
    date: '2025-02-10',
    displayDate: 'February 10, 2025',
    category: 'Healthcare',
    badge: 'badge-pink',
    readTime: '12 min read',
    summary: 'Assessment of electronic health record (EHR) interoperability across 42 healthcare systems in 28 countries. The US ranks 18th globally in EHR interoperability despite highest per-capita healthcare spending. FHIR R4 adoption reached 64% among surveyed providers.',
    keyFindings: [
      'FHIR R4 adoption: 64% among surveyed healthcare providers',
      'US ranks 18th globally in EHR interoperability',
      'Denmark, Estonia, and Finland lead interoperability rankings',
      'Patient data exchange reduced readmission rates by avg. 17%',
      'AI diagnostic tools deployed in 41% of tier-1 hospitals',
    ],
    authors: ['Dr. Kenji Tanaka', 'Dr. Anna Bergström'],
    downloadUrl: '/reports/healthcare-interoperability-2025.pdf',
  },
]

export default function Reports() {
  return (
    <section className="reports" id="reports" aria-labelledby="reports-heading">
      <div className="container">
        <header className="reports__header">
          <div className="section-label">
            <span className="dot" aria-hidden="true" />
            Research Reports
          </div>
          <h2 id="reports-heading" className="reports__title">
            Expert Analysis &amp; <span className="gradient-text">Industry Intelligence</span>
          </h2>
          <p className="reports__subtitle">
            Independent research produced by DataVault analysts and external research partners.
            All reports are freely downloadable in PDF format.
          </p>
        </header>

        <div className="reports__list" role="list">
          {REPORTS.map(report => (
            <article
              key={report.id}
              id={report.id}
              className="reports__card glass-card"
              role="listitem"
              data-category={report.category}
              data-published={report.date}
            >
              <div className="reports__card-left">
                <div className="reports__card-meta">
                  <span className={`badge ${report.badge}`}>{report.category}</span>
                  <time dateTime={report.date} className="reports__date">{report.displayDate}</time>
                  <span className="reports__read-time">{report.readTime}</span>
                </div>

                <h3 className="reports__card-title">{report.title}</h3>
                <p className="reports__card-subtitle">{report.subtitle}</p>
                <p className="reports__card-summary">{report.summary}</p>

                <div className="reports__authors">
                  <span className="reports__authors-label">Authors:</span>
                  {report.authors.map((a, i) => (
                    <span key={a} className="reports__author">
                      {a}{i < report.authors.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>

                <a
                  href={report.downloadUrl}
                  className="btn-primary reports__download-btn"
                  id={`${report.id}-download`}
                  download
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Download PDF
                </a>
              </div>

              <div className="reports__card-right">
                <h4 className="reports__findings-title">Key Findings</h4>
                <ol className="reports__findings" aria-label={`Key findings from ${report.title}`}>
                  {report.keyFindings.map((finding, i) => (
                    <li key={i} className="reports__finding">
                      <span className="reports__finding-num">{String(i + 1).padStart(2, '0')}</span>
                      <span>{finding}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
