import './Team.css'

const TEAM = [
  {
    id: 'team-sarah-chen',
    name: 'Dr. Sarah Chen',
    role: 'Chief Data Officer & Co-Founder',
    bio: 'Former Director of Data Science at Google DeepMind. PhD in Statistical Learning from MIT. Published 34 peer-reviewed papers on machine learning and data governance. Architect of DataVault\'s open-data licensing framework.',
    expertise: ['Data Governance', 'Machine Learning', 'Statistical Analysis', 'Open Data Policy'],
    education: 'PhD, MIT · BS, Caltech',
    publications: 34,
    linkedin: 'https://linkedin.com/in/dr-sarah-chen',
    twitter: 'https://twitter.com/sarahchen_data',
    initials: 'SC',
    accentColor: '#3b82f6',
  },
  {
    id: 'team-marcus-webb',
    name: 'Marcus Webb',
    role: 'Head of Developer Relations',
    bio: 'Previously led Developer Experience at Stripe and Twilio. Passionate about making complex APIs simple. Built the DataVault Python, Node.js, and Go SDKs from scratch. Author of "API Design for AI Agents" (O\'Reilly, 2024).',
    expertise: ['API Design', 'Developer Experience', 'Python', 'Technical Writing'],
    education: 'BS Computer Science, UC Berkeley',
    publications: 2,
    linkedin: 'https://linkedin.com/in/marcuswebb-dev',
    twitter: 'https://twitter.com/mwebb_dev',
    initials: 'MW',
    accentColor: '#8b5cf6',
  },
  {
    id: 'team-priya-nair',
    name: 'Priya Nair',
    role: 'Senior Research Analyst',
    bio: 'MSc in Data Science from Imperial College London. Former quantitative researcher at McKinsey Global Institute. Specializes in AI adoption research, enterprise analytics, and cross-industry data benchmarking.',
    expertise: ['AI Research', 'Quantitative Analysis', 'Benchmarking', 'Data Visualization'],
    education: 'MSc Data Science, Imperial College · BEng, IIT Bombay',
    publications: 12,
    linkedin: 'https://linkedin.com/in/priyanair-research',
    twitter: 'https://twitter.com/priyanair_data',
    initials: 'PN',
    accentColor: '#06b6d4',
  },
  {
    id: 'team-tom-fairweather',
    name: 'Tom Fairweather',
    role: 'Principal Data Engineer',
    bio: 'Expert in large-scale data pipelines and distributed systems. Former staff engineer at Databricks. Designed DataVault\'s real-time ingestion architecture capable of processing 4M records/second. Apache Spark committer.',
    expertise: ['Apache Spark', 'Distributed Systems', 'Data Pipelines', 'Parquet', 'Delta Lake'],
    education: 'MEng Software Engineering, Oxford',
    publications: 7,
    linkedin: 'https://linkedin.com/in/tomfairweather-eng',
    twitter: 'https://twitter.com/tomf_eng',
    initials: 'TF',
    accentColor: '#10b981',
  },
  {
    id: 'team-leila-ahmadi',
    name: 'Leila Ahmadi',
    role: 'Product Manager, API Platform',
    bio: 'Former PM at Palantir and Snowflake. Specialized in data product strategy and developer tooling. Led the DataVault API v2 redesign that reduced integration time by 65% and increased developer NPS from 34 to 71.',
    expertise: ['Product Strategy', 'API Platforms', 'Data Products', 'Developer Tools'],
    education: 'MBA, INSEAD · BS Engineering, UT Austin',
    publications: 3,
    linkedin: 'https://linkedin.com/in/leilaahmadi-pm',
    twitter: 'https://twitter.com/leila_pm',
    initials: 'LA',
    accentColor: '#f59e0b',
  },
  {
    id: 'team-kenji-tanaka',
    name: 'Dr. Kenji Tanaka',
    role: 'Head of Healthcare Data',
    bio: 'MD and computational biologist specializing in healthcare data interoperability. Previously at the WHO Digital Health department and UCSF. Leads DataVault\'s FHIR R4 compliance initiative and clinical data partnerships.',
    expertise: ['FHIR R4', 'Healthcare Interoperability', 'Clinical Data', 'HL7', 'EHR Systems'],
    education: 'MD, University of Tokyo · MSc Bioinformatics, Stanford',
    publications: 21,
    linkedin: 'https://linkedin.com/in/drkenji-tanaka',
    twitter: 'https://twitter.com/kenji_healthdata',
    initials: 'KT',
    accentColor: '#ec4899',
  },
]

export default function Team() {
  return (
    <section className="team" id="team" aria-labelledby="team-heading">
      <div className="container">
        <header className="team__header">
          <div className="section-label">
            <span className="dot" aria-hidden="true" />
            Our Team
          </div>
          <h2 id="team-heading" className="team__title">
            Built by <span className="gradient-text">World-Class Experts</span>
          </h2>
          <p className="team__subtitle">
            DataVault's team combines deep expertise in data science, engineering, research,
            and product — united by a mission to make high-quality data universally accessible.
          </p>
        </header>

        <div className="team__grid" role="list">
          {TEAM.map(member => (
            <article
              key={member.id}
              id={member.id}
              className="team__card glass-card"
              role="listitem"
              itemScope
              itemType="https://schema.org/Person"
            >
              {/* Avatar */}
              <div
                className="team__avatar"
                style={{ '--accent': member.accentColor }}
                aria-hidden="true"
              >
                <span className="team__initials">{member.initials}</span>
              </div>

              {/* Info */}
              <div className="team__info">
                <h3 className="team__name" itemProp="name">{member.name}</h3>
                <p className="team__role" itemProp="jobTitle">{member.role}</p>
              </div>

              <p className="team__bio" itemProp="description">{member.bio}</p>

              {/* Education */}
              <div className="team__education">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span itemProp="alumniOf">{member.education}</span>
              </div>

              {/* Expertise */}
              <div className="team__expertise" aria-label={`${member.name}'s expertise`}>
                {member.expertise.map(skill => (
                  <span key={skill} className="tag" itemProp="knowsAbout">{skill}</span>
                ))}
              </div>

              {/* Stats */}
              <div className="team__stats">
                <div className="team__stat">
                  <div className="team__stat-value" style={{ color: member.accentColor }}>
                    {member.publications}
                  </div>
                  <div className="team__stat-label">Publications</div>
                </div>
              </div>

              {/* Social */}
              <div className="team__social">
                <a
                  href={member.linkedin}
                  className="team__social-link"
                  id={`${member.id}-linkedin`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  itemProp="sameAs"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href={member.twitter}
                  className="team__social-link"
                  id={`${member.id}-twitter`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on X (Twitter)`}
                  itemProp="sameAs"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Twitter
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Company info strip */}
        <div className="team__company glass-card">
          <div className="team__company-grid">
            <div>
              <h3 className="team__company-stat">Founded</h3>
              <p className="team__company-value">2021</p>
            </div>
            <div>
              <h3 className="team__company-stat">Headquarters</h3>
              <p className="team__company-value">San Francisco, CA, USA</p>
            </div>
            <div>
              <h3 className="team__company-stat">Employees</h3>
              <p className="team__company-value">142 full-time</p>
            </div>
            <div>
              <h3 className="team__company-stat">Funding</h3>
              <p className="team__company-value">$47M Series B (2024)</p>
            </div>
            <div>
              <h3 className="team__company-stat">Investors</h3>
              <p className="team__company-value">a16z, Sequoia, Coatue</p>
            </div>
            <div>
              <h3 className="team__company-stat">Mission</h3>
              <p className="team__company-value">Open Data for Everyone</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
