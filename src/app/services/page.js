import Link from 'next/link'
import { services, serviceCategories } from '@/lib/services-data'

export const metadata = {
  title: 'Services | AZGREEN Environmental & Engineering Services Azerbaijan',
  description: 'EIA, ESIA, environmental monitoring, water management, GIS, ESG consultancy, carbon footprint studies, and more. Environmental services in Baku, Azerbaijan.',
  keywords: 'EIA Azerbaijan, ESIA Azerbaijan, environmental services Baku, environmental monitoring Azerbaijan, water management Azerbaijan, ESG Azerbaijan',
}

const icons = {
  FileSearch: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  ClipboardList: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><path d="M12 11h4M12 16h4M8 11h.01M8 16h.01"/></svg>,
  FileText: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  Users: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
  Droplets: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>,
  Recycle: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15"/></svg>,
  BarChart3: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  Wind: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.7 7.7a2.5 2.5 0 111.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1111 8H2"/><path d="M12.6 19.4A2 2 0 1014 16H2"/></svg>,
  Activity: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  Map: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>,
  Zap: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  Sun: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>,
  GraduationCap: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  Handshake: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 7.65l.77.78L12 21l7.65-8.19.77-.78a5.4 5.4 0 000-7.45z"/></svg>,
}

export default function ServicesPage() {
  return (
    <>
      <section style={{ padding: '80px 0 48px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span className="label">What We Do</span>
          <h1 style={{ marginTop: 12 }}>Services</h1>
          <p style={{ marginTop: 16, maxWidth: 600, fontSize: '1.0625rem' }}>
            AZGREEN delivers environmental and engineering services across Azerbaijan. All work complies
            with Azerbaijani legislation and meets the standards of international financial institutions.
          </p>
        </div>
      </section>

      {serviceCategories.map(cat => {
        const catServices = services.filter(s => s.category === cat.id)
        return (
          <section key={cat.id} className="section-sm" style={{ borderBottom: '1px solid var(--border)' }}>
            <div className="container">
              <h2 style={{ marginBottom: 32, fontSize: '1.375rem', fontWeight: 400 }}>{cat.label}</h2>
              <div className="grid-3">
                {catServices.map(s => {
                  const Icon = icons[s.icon]
                  return (
                    <Link href={`/services/${s.slug}`} key={s.slug} className="service-card" style={{ textDecoration: 'none' }}>
                      {Icon && (
                        <div className="service-icon" style={{ width: 32, height: 32, color: 'var(--green-dark)', marginBottom: 16 }}>
                          <Icon />
                        </div>
                      )}
                      <h4>{s.title}{s.abbr ? ` (${s.abbr})` : ''}</h4>
                      <p style={{ fontSize: '0.875rem', marginTop: 8 }}>{s.shortDesc}</p>
                      <div className="service-card-link" style={{ marginTop: 16 }}>Learn more →</div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        )
      })}

      <section className="section-sm">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Work with us</h2>
          <p style={{ marginTop: 12, marginBottom: 28 }}>Contact our team in Baku to discuss your project requirements.</p>
          <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </section>
    </>
  )
}
