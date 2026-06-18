import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'Datasets', href: '#datasets' },
  { label: 'Reports', href: '#reports' },
  { label: 'Blog', href: '#blog' },
  { label: 'Team', href: '#team' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <nav className="container navbar__inner" aria-label="Main navigation">
        {/* Logo */}
        <a href="#" className="navbar__logo" aria-label="DataVault Home">
          <div className="navbar__logo-icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5z" fill="url(#g1)" />
              <path d="M2 17l10 5 10-5" stroke="url(#g2)" strokeWidth="2" strokeLinecap="round" />
              <path d="M2 12l10 5 10-5" stroke="url(#g3)" strokeWidth="2" strokeLinecap="round" />
              <defs>
                <linearGradient id="g1" x1="2" y1="2" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3b82f6" /><stop offset="1" stopColor="#8b5cf6" />
                </linearGradient>
                <linearGradient id="g2" x1="2" y1="17" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3b82f6" /><stop offset="1" stopColor="#8b5cf6" />
                </linearGradient>
                <linearGradient id="g3" x1="2" y1="12" x2="22" y2="17" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3b82f6" /><stop offset="1" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="navbar__logo-text">DataVault</span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links" role="list">
          {links.map(link => (
            <li key={link.label}>
              <a href={link.href} className="navbar__link" id={`nav-${link.label.toLowerCase()}`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="navbar__cta">
          <a href="#pricing" className="btn-ghost navbar__btn-ghost" id="nav-signin">Sign In</a>
          <a href="#pricing" className="btn-primary navbar__btn-primary" id="nav-getstarted">Get Started</a>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          id="nav-hamburger"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="navbar__mobile" role="dialog" aria-label="Mobile navigation">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#pricing" className="btn-primary" style={{ marginTop: '12px', justifyContent: 'center' }}>
            Get Started
          </a>
        </div>
      )}
    </header>
  )
}
