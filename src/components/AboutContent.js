'use client'
import Link from 'next/link'
import { useLang } from '@/context/LangContext'
import { t } from '@/lib/translations'
import { getYearsActive, partners } from '@/lib/services-data'
import FieldPhoto from '@/components/FieldPhoto'
import PartnerLogo from '@/components/PartnerLogo'

const fieldPhotos = [
  { src: '/images/field-female-engineer.jpg', alt: 'AZGREEN female environmental engineer conducting noise level monitoring', caption: 'Noise level monitoring - field operations across Azerbaijan' },
  { src: '/images/field-soil-sample.jpg', alt: 'AZGREEN specialist collecting soil samples for laboratory analysis', caption: 'Soil sampling for environmental baseline assessment' },
  { src: '/images/field-noise-monitoring.jpg', alt: 'AZGREEN engineer conducting noise measurements at Bilasuvar District', caption: 'Noise monitoring - Bilasuvar District' },
  { src: '/images/field-water-sample.jpg', alt: 'AZGREEN specialist collecting water samples in Shamakhi District', caption: 'Water quality sampling - Shamakhi District' },
]

export default function AboutContent() {
  const { lang } = useLang()
  const tr = t[lang]?.about || t.en.about
  const years = getYearsActive()

  return (
    <>
      {/* Hero */}
      <section style={{ padding: '80px 0 64px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span className="label">{tr.pageLabel}</span>
          <h1 style={{ marginTop: 12 }}>{tr.pageH1}</h1>
          <p style={{ marginTop: 16, maxWidth: 640, fontSize: '1.0625rem' }}>{tr.pageP(years)}</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="label">{tr.introLabel}</span>
              <h2 style={{ marginTop: 12 }}>{tr.introH2}</h2>
              <p style={{ marginTop: 20, marginBottom: 16 }}>{tr.introP1}</p>
              <p style={{ marginBottom: 16 }}>{tr.introP2}</p>
              <p>{tr.introP3}</p>
            </div>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 32 }}>
              <h3 style={{ marginBottom: 24, fontWeight: 400 }}>{tr.factsH3}</h3>
              {[
                { label: tr.factFounded, value: tr.factFoundedVal },
                { label: tr.factHQ, value: tr.factHQVal },
                { label: tr.factCoverage, value: tr.factCoverageVal },
                { label: tr.factExp, value: tr.factExpVal(years) },
                { label: tr.factHours, value: tr.factHoursVal },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', flexShrink: 0 }}>{item.label}</span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textAlign: 'right' }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Field Photography */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="label">{tr.teamLabel}</span>
            <h2>{tr.teamH2}</h2>
            <p style={{ marginTop: 12 }}>{tr.teamP}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {fieldPhotos.map((photo, i) => (
              <FieldPhoto key={i} src={photo.src} alt={photo.alt} caption={photo.caption} height={300} />
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Goals */}
      <section className="section">
        <div className="container">
          <span className="label">{tr.goalsLabel}</span>
          <h2 style={{ marginTop: 12 }}>{tr.goalsH2}</h2>
          <div className="goals-grid">
            {tr.goals.map(g => (
              <div key={g.title} className="goal-item">
                <h4>{g.title}</h4>
                <p>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Partners */}
      <section className="section">
        <div className="container">
          <span className="label">{tr.partnersLabel}</span>
          <h2 style={{ marginTop: 12 }}>{tr.partnersH2}</h2>
          <p style={{ marginTop: 12, marginBottom: 40, maxWidth: 560 }}>{tr.partnersP}</p>
          <div className="partners-grid">
            {partners.map(p => (
              <PartnerLogo key={p.name} name={p.name} url={p.url} />
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section-sm" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2>{tr.ctaH2}</h2>
          <p style={{ marginTop: 12, marginBottom: 28 }}>{tr.ctaP}</p>
          <Link href="/contact" className="btn btn-primary">{tr.contactUs}</Link>
        </div>
      </section>
    </>
  )
}
