'use client'
import Link from 'next/link'
import { useLang } from '@/context/LangContext'
import { t } from '@/lib/translations'
import { services, expertise, getYearsActive } from '@/lib/services-data'

const icons = {
  FileSearch: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  ClipboardList: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><path d="M12 11h4M12 16h4M8 11h.01M8 16h.01"/></svg>,
  FileText: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  Users: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
  Droplets: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>,
  Recycle: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15"/></svg>,
  BarChart3: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  Wind: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.7 7.7a2.5 2.5 0 111.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1111 8H2"/><path d="M12.6 19.4A2 2 0 1114 16H2"/></svg>,
  Activity: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  Map: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>,
  Zap: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  Sun: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/></svg>,
  GraduationCap: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  Handshake: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 7.65l.77.78L12 21l7.65-8.19.77-.78a5.4 5.4 0 000-7.45z"/></svg>,
}

const featuredServices = services.slice(0, 8)

export default function HomeContent() {
  const { lang } = useLang()
  const tr = t[lang]?.home || t.en.home
  const years = getYearsActive()

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-brand">AZGREEN</div>
            <span className="label">{tr.heroLabel}</span>
            <h1>{tr.heroH1}</h1>
            <p>{tr.heroP}</p>
            <div className="hero-ctas">
              <Link href="/services" className="btn btn-primary">{tr.heroBtn1}</Link>
              <Link href="/contact" className="btn btn-outline">{tr.heroBtn2}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <strong>Est. 2017</strong>
              <span>{tr.statFounded}</span>
            </div>
            <div className="stat-item">
              <strong>{years}+</strong>
              <span>{tr.statYears}</span>
            </div>
            <div className="stat-item">
              <strong>Azerbaijan</strong>
              <span>{tr.statCoverage}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="label">{tr.servicesLabel}</span>
            <h2>{tr.servicesH2}</h2>
            <p style={{ marginTop: 12, maxWidth: 560 }}>{tr.servicesP}</p>
          </div>
          <div className="grid-4">
            {featuredServices.map(s => {
              const Icon = icons[s.icon]
              return (
                <Link href={`/services/${s.slug}`} key={s.slug} className="service-card" style={{ textDecoration: 'none' }}>
                  {Icon && <div className="service-icon"><Icon /></div>}
                  <h4>{s.abbr ? `${s.title} (${s.abbr})` : s.title}</h4>
                  <p>{s.shortDesc}</p>
                  <div className="service-card-link">{tr.learnMore || 'Learn more'} -&gt;</div>
                </Link>
              )
            })}
          </div>
          <div style={{ marginTop: 32, textAlign: 'center' }}>
            <Link href="/services" className="btn btn-outline">{tr.viewAll}</Link>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Expertise */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="label">{tr.expertiseLabel}</span>
            <h2>{tr.expertiseH2}</h2>
            <p style={{ marginTop: 12 }}>{tr.expertiseP}</p>
          </div>
          <div className="expertise-grid">
            {expertise.map(e => (
              <div className="expertise-item" key={e.id}>
                <h4>{e.title}</h4>
                <ul>{e.items.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* About snippet */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="label">{tr.aboutLabel}</span>
              <h2 style={{ marginTop: 12 }}>{tr.aboutH2}</h2>
              <p style={{ marginTop: 20, marginBottom: 16 }}>{tr.aboutP1}</p>
              <p style={{ marginBottom: 32 }}>{tr.aboutP2}</p>
              <Link href="/about" className="btn btn-outline">{tr.learnMore}</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {tr.goals.map(item => (
                <div key={item.title} style={{ padding: '20px 24px', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
                  <h4 style={{ color: 'var(--text)', marginBottom: 4, fontSize: '0.9375rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.875rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* CTA */}
      <section className="section-sm">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>{tr.ctaH2}</h2>
          <p style={{ marginTop: 12, marginBottom: 32 }}>{tr.ctaP}</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">{tr.contactUs}</Link>
            <a href="https://wa.me/994102330999" target="_blank" rel="noopener noreferrer" className="btn btn-outline">{tr.whatsapp}</a>
          </div>
        </div>
      </section>
    </>
  )
}
