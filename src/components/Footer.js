import Link from 'next/link'
import { useLang } from '@/context/LangContext'
import { t } from '@/lib/translations'

const socials = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/994102330999',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/azgreenaz/',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/azgreen.az/',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/azgreen.az',
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>,
  },
]

const navPages = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
]

const serviceLinks = [
  { href: '/services/eia', label: 'EIA' },
  { href: '/services/esia', label: 'ESIA' },
  { href: '/services/environmental-documentation', label: 'Environmental Permits' },
  { href: '/services/water-resource-management', label: 'Water Management' },
  { href: '/services/environmental-monitoring', label: 'Monitoring' },
  { href: '/services/gis-remote-sensing', label: 'GIS & Remote Sensing' },
  { href: '/services/sustainability-strategy', label: 'ESG & Sustainability' },
]

export default function Footer() {
  const { lang } = useLang()
  const tr = t[lang]?.footer || t.en.footer
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand column */}
          <div className="footer-col">
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <img src="/logo-icon.png" alt="AZGREEN" width={32} height={32} className="footer-logo-img" style={{ objectFit: 'contain' }} />
              <span style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--green-dark)' }}>AZGREEN</span>
            </Link>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', maxWidth: 260, lineHeight: 1.65 }}>
              {tr.tagline}
            </p>
            <div className="footer-socials" style={{ marginTop: 16 }}>
              {socials.map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={s.name}
                  title={s.name}
                >
                  {s.icon}
                  <span>{s.name}</span>
                </a>
              ))}
              <Link href="/contact" className="footer-social-link">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Pages */}
          <div className="footer-col">
            <h5>{tr.pages}</h5>
            <ul>
              {navPages.map(l => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h5>{tr.services}</h5>
            <ul>
              {serviceLinks.map(s => (
                <li key={s.href}><Link href={s.href}>{s.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col footer-contact">
            <h5>{tr.contact}</h5>
            {/* Address links to Google Maps pin */}
            <p>
              <a
                href="https://maps.app.goo.gl/Lnn64oSXgB9e7iPh9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nasimi District, 203B Nizami Street,<br />
                AF Business House,<br />
                Baku, Azerbaijan AZ1010
              </a>
            </p>
            {/* Phone triggers dialer */}
            <p style={{ marginTop: 10 }}>
              <a href="tel:+994102330999">+994 10 233 09 99</a>
            </p>
            {/* Email triggers mail client */}
            <p>
              <a href="mailto:info@azgreen.az">info@azgreen.az</a>
            </p>
            <p style={{ marginTop: 10, fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              Mon–Fri: 9:00–18:00
            </p>
          </div>
        </div>

        <hr className="divider" />

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {tr.copyright}</p>
          <p>{tr.country}</p>
        </div>
      </div>
    </footer>
  )
}
