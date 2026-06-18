import { useEffect, useRef, useState } from 'react'
import './Stats.css'

const STATS = [
  {
    id: 'stat-datasets',
    value: 8547,
    suffix: '+',
    label: 'Public Datasets',
    sub: 'Updated daily',
    icon: '🗄️',
    color: 'blue',
  },
  {
    id: 'stat-users',
    value: 2.4,
    suffix: 'M',
    decimals: 1,
    label: 'Active Users',
    sub: '↑ 34% YoY',
    icon: '👥',
    color: 'purple',
  },
  {
    id: 'stat-records',
    value: 148,
    suffix: 'B+',
    label: 'Data Records',
    sub: 'Across all datasets',
    icon: '📊',
    color: 'cyan',
  },
  {
    id: 'stat-api-calls',
    value: 920,
    suffix: 'M',
    label: 'API Calls / Month',
    sub: 'Peak: 4.2M/day',
    icon: '⚡',
    color: 'green',
  },
  {
    id: 'stat-countries',
    value: 195,
    suffix: '',
    label: 'Countries Covered',
    sub: 'Full UN member list',
    icon: '🌍',
    color: 'orange',
  },
  {
    id: 'stat-uptime',
    value: 99.97,
    suffix: '%',
    decimals: 2,
    label: 'API Uptime SLA',
    sub: 'Last 12 months',
    icon: '🔒',
    color: 'pink',
  },
]

function CountUp({ target, suffix, decimals = 0, active }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const duration = 1800
    const step = 16
    const increment = target / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(parseFloat(start.toFixed(decimals)))
      }
    }, step)
    return () => clearInterval(timer)
  }, [active, target, decimals])

  return (
    <span>
      {count.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats" id="stats" aria-labelledby="stats-heading" ref={ref}>
      <div className="container">
        <div className="stats__header">
          <div className="section-label">
            <span className="dot" aria-hidden="true" />
            Platform Metrics
          </div>
          <h2 id="stats-heading" className="stats__title">
            Powering Data-Driven Decisions
            <br />
            <span className="gradient-text">at Global Scale</span>
          </h2>
          <p className="stats__subtitle">
            Real-time statistics from the DataVault platform, updated every 24 hours.
            All figures independently audited by Deloitte Digital.
          </p>
        </div>

        <div className="stats__grid">
          {STATS.map((stat) => (
            <article
              key={stat.id}
              id={stat.id}
              className={`stats__card glass-card stats__card--${stat.color}`}
              data-category="platform-metric"
              data-label={stat.label}
            >
              <div className="stats__card-icon" aria-hidden="true">{stat.icon}</div>
              <div className="stats__card-value" aria-label={`${stat.label}: ${stat.value}${stat.suffix}`}>
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  active={active}
                />
              </div>
              <div className="stats__card-label">{stat.label}</div>
              <div className="stats__card-sub">{stat.sub}</div>
            </article>
          ))}
        </div>

        {/* Industry breakdown — scrapable table */}
        <div className="stats__breakdown glass-card">
          <h3 className="stats__breakdown-title">Dataset Distribution by Industry</h3>
          <div className="stats__breakdown-table-wrapper">
            <table className="stats__table" aria-label="Dataset distribution by industry">
              <thead>
                <tr>
                  <th scope="col">Industry</th>
                  <th scope="col">Datasets</th>
                  <th scope="col">Records</th>
                  <th scope="col">Avg Update Freq.</th>
                  <th scope="col">License</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Finance & Markets</td><td>1,842</td><td>28.4B</td><td>Real-time</td><td>CC BY 4.0</td></tr>
                <tr><td>Healthcare & Life Sciences</td><td>1,204</td><td>19.2B</td><td>Weekly</td><td>CC BY-NC 4.0</td></tr>
                <tr><td>Climate & Environment</td><td>987</td><td>14.8B</td><td>Daily</td><td>ODC-ODbL</td></tr>
                <tr><td>E-Commerce & Retail</td><td>876</td><td>22.1B</td><td>Hourly</td><td>CC BY 4.0</td></tr>
                <tr><td>Technology & AI</td><td>743</td><td>11.3B</td><td>Daily</td><td>MIT</td></tr>
                <tr><td>Government & Public Sector</td><td>698</td><td>18.9B</td><td>Monthly</td><td>Public Domain</td></tr>
                <tr><td>Transportation & Logistics</td><td>521</td><td>9.7B</td><td>Real-time</td><td>CC BY 4.0</td></tr>
                <tr><td>Agriculture & Food</td><td>412</td><td>7.2B</td><td>Weekly</td><td>CC BY 4.0</td></tr>
                <tr><td>Education & Research</td><td>384</td><td>5.4B</td><td>Quarterly</td><td>CC0 1.0</td></tr>
                <tr><td>Sports & Entertainment</td><td>303</td><td>4.1B</td><td>Daily</td><td>CC BY 4.0</td></tr>
                <tr><td>Real Estate & Property</td><td>287</td><td>3.8B</td><td>Weekly</td><td>CC BY-SA 4.0</td></tr>
                <tr><td>Other / Miscellaneous</td><td>290</td><td>3.1B</td><td>Varies</td><td>Various</td></tr>
              </tbody>
            </table>
          </div>
          <p className="stats__breakdown-note">
            * Data as of <time dateTime="2025-06-01">June 2025</time>.
            Record counts are approximate. All licenses comply with open-data standards.
          </p>
        </div>
      </div>
    </section>
  )
}
