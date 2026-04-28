import Link from 'next/link'
import { services } from '@/lib/services-data'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = services.find(s => s.slug === slug)
  if (!service) return {}
  return {
    title: `${service.title}${service.abbr ? ` (${service.abbr})` : ''} in Azerbaijan | AZGREEN`,
    description: service.shortDesc,
    keywords: service.keywords.join(', '),
  }
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params
  const service = services.find(s => s.slug === slug)
  if (!service) notFound()

  const related = services.filter(s => s.category === service.category && s.slug !== service.slug).slice(0, 5)

  const lines = service.fullDesc.trim().split('\n')
  const rendered = []
  let listItems = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    if (line.startsWith('- ')) {
      listItems.push(line.slice(2))
    } else {
      if (listItems.length > 0) {
        rendered.push(<ul key={`ul-${i}`}>{listItems.map((li, j) => <li key={j}>{li}</li>)}</ul>)
        listItems = []
      }
      if (line) rendered.push(<p key={`p-${i}`}>{line}</p>)
    }
  }
  if (listItems.length > 0) {
    rendered.push(<ul key="ul-end">{listItems.map((li, j) => <li key={j}>{li}</li>)}</ul>)
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.shortDesc,
        provider: {
          '@type': 'LocalBusiness',
          name: 'AZGREEN Engineering and Environmental Services',
          address: { '@type': 'PostalAddress', addressLocality: 'Baku', addressCountry: 'AZ' },
        },
        areaServed: { '@type': 'Country', name: 'Azerbaijan' },
        keywords: service.keywords.join(', '),
      })}} />

      <section className="service-detail-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/services">Services</Link>
            <span>›</span>
            <span style={{ color: 'var(--text-secondary)' }}>{service.title}</span>
          </div>
          {service.abbr && <span className="tag">{service.abbr}</span>}
          <h1 style={{ marginTop: 12, fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>{service.title}</h1>
          <p style={{ marginTop: 16, maxWidth: 640, fontSize: '1.0625rem' }}>{service.shortDesc}</p>
        </div>
      </section>

      <section className="service-detail-content">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-body">{rendered}</div>
            <aside className="service-sidebar">
              <div className="service-sidebar-card">
                <h4>Discuss Your Project</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: 16 }}>
                  Contact our team in Baku for a consultation.
                </p>
                <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Get in Touch
                </Link>
                <a href="https://wa.me/994102330999" target="_blank" rel="noopener noreferrer"
                  className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', marginTop: 10 }}>
                  WhatsApp
                </a>
              </div>
              {related.length > 0 && (
                <div className="service-sidebar-card">
                  <h4>Related Services</h4>
                  <ul className="related-services">
                    {related.map(r => (
                      <li key={r.slug}>
                        <Link href={`/services/${r.slug}`}>{r.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="service-sidebar-card">
                <h4 style={{ marginBottom: 16 }}>AZGREEN</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <a
                    href="https://maps.app.goo.gl/XRhiHLsaeyRj2fTa8"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.6, display: 'block' }}
                  >
                    Nasimi District, 203B Nizami Street,<br />AF Business House, Baku AZ1010
                  </a>
                  <a href="tel:+994102330999" style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    +994 10 233 09 99
                  </a>
                  <a href="mailto:info@azgreen.az" style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    info@azgreen.az
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
