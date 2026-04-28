'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import WeatherWidget from './WeatherWidget'
import { useLang } from '@/context/LangContext'
import { t } from '@/lib/translations'

const AZGreenIcon = ({ theme }) => (
  <img
    src="/logo-icon.png"
    alt="AZGREEN logo icon"
    className="navbar-logo-img"
    width={38}
    height={38}
  />
)

// Sun icon
const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
)

// Moon icon
const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
  </svg>
)

export default function Navbar({ theme = 'light', onThemeToggle }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { lang, setLang } = useLang()
  const tr = t[lang]?.nav || t.en.nav

  const navLinks = [
    { href: '/', label: tr.home },
    { href: '/about', label: tr.about },
    { href: '/services', label: tr.services },
    { href: '/news', label: tr.news },
    { href: '/contact', label: tr.contact },
  ]

  return (
    <>
      {/* Weather bar */}
      <div className="weather-bar">
        <div className="container">
          <div className="weather-bar-inner">
            <WeatherWidget />
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Nasimi District, 203B Nizami St, Baku - Headquarters
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-inner">
            {/* Logo */}
            <Link href="/" className="navbar-logo">
              <AZGreenIcon theme={theme} />
              <div>
                <div className="navbar-logo-text">AZGREEN</div>
                <div className="navbar-logo-sub">Engineering &amp; Environmental Services</div>
              </div>
            </Link>

            {/* Nav links */}
            <ul className={`navbar-nav${open ? ' open' : ''}`}>
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={pathname === link.href ? 'active' : ''}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="navbar-actions">
              <button
                className={`lang-btn${lang === 'en' ? ' active' : ''}`}
                onClick={() => setLang('en')}
              >EN</button>
              <button
                className={`lang-btn${lang === 'az' ? ' active' : ''}`}
                onClick={() => setLang('az')}
              >AZ</button>

              {/* Light / Dark toggle */}
              <button
                className="theme-btn"
                onClick={onThemeToggle}
                title={theme === 'light' ? 'Switch to dark mode (OLED)' : 'Switch to light mode'}
                aria-label="Toggle colour mode"
              >
                {theme === 'light' ? <MoonIcon /> : <SunIcon />}
              </button>

              <button
                className="hamburger"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
              >
                <span /><span /><span />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
