'use client'
import { useState } from 'react'
import { submitContact } from '@/lib/supabase'
import { useLang } from '@/context/LangContext'
import { t } from '@/lib/translations'

export default function ContactPage() {
  const { lang } = useLang()
  const tr = t[lang]?.contact || t.en.contact
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    const result = await submitContact(form)
    setLoading(false)
    if (result.success) {
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } else {
      setStatus('error')
    }
  }

  const hours = [
    { day: 'Monday', time: '9:00 AM – 6:00 PM' },
    { day: 'Tuesday', time: '9:00 AM – 6:00 PM' },
    { day: 'Wednesday', time: '9:00 AM – 6:00 PM' },
    { day: 'Thursday', time: '9:00 AM – 6:00 PM' },
    { day: 'Friday', time: '9:00 AM – 6:00 PM' },
    { day: 'Saturday', time: 'Closed' },
    { day: 'Sunday', time: 'Closed' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'AZGREEN Engineering and Environmental Services',
        url: 'https://azgreen.az',
        telephone: '+994102330999',
        email: 'info@azgreen.az',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '203B Nizami Street, AF Business House',
          addressLocality: 'Baku',
          addressRegion: 'Nasimi District',
          postalCode: 'AZ1010',
          addressCountry: 'AZ',
        },
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '18:00' },
        ],
      })}} />

      <section style={{ padding: '80px 0 48px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span className="label">{tr.pageLabel}</span>
          <h1 style={{ marginTop: 12 }}>{tr.pageH1}</h1>
          <p style={{ marginTop: 16, maxWidth: 560, fontSize: '1.0625rem' }}>{tr.pageP}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">

            {/* Left - form */}
            <div>
              <h2 style={{ marginBottom: 32, fontSize: '1.5rem', fontWeight: 400 }}>{tr.formH2}</h2>
              <form onSubmit={handleSubmit} id="contact-form">
                <div className="form-group">
                  <label htmlFor="contact-name">{tr.labelName}</label>
                  <input id="contact-name" type="text" required value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })} placeholder={tr.phName} />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">{tr.labelEmail}</label>
                  <input id="contact-email" type="email" required value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })} placeholder={tr.phEmail} />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-phone">{tr.labelPhone}</label>
                  <input id="contact-phone" type="tel" value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })} placeholder={tr.phPhone} />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-company">{tr.labelCompany}</label>
                  <input id="contact-company" type="text" value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })} placeholder={tr.phCompany} />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">{tr.labelMessage}</label>
                  <textarea id="contact-message" required value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder={tr.phMessage} style={{ minHeight: 140 }} />
                </div>
                <button type="submit" className="btn btn-primary" disabled={loading}
                  style={{ width: '100%', justifyContent: 'center' }}>
                  {loading ? tr.sending : tr.sendBtn}
                </button>
                {status === 'success' && (
                  <p style={{ marginTop: 16, color: 'var(--green-dark)', fontSize: '0.9rem' }}>
                    ✓ Message received. We will respond within one business day.
                  </p>
                )}
                {status === 'error' && (
                  <p style={{ marginTop: 16, color: '#ef4444', fontSize: '0.9rem' }}>
                    Something went wrong. Please email us directly at{' '}
                    <a href="mailto:info@azgreen.az" style={{ color: '#ef4444', textDecoration: 'underline' }}>info@azgreen.az</a>
                  </p>
                )}
              </form>
            </div>

            {/* Right - contact info */}
            <div>
              <h2 style={{ marginBottom: 32, fontSize: '1.5rem', fontWeight: 400 }}>{tr.infoH2}</h2>

              {/* Address - links to Google Maps pin */}
              <div className="contact-info-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4>{tr.labelAddress}</h4>
                  <a href="https://maps.app.goo.gl/Lnn64oSXgB9e7iPh9" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', display: 'block', lineHeight: 1.6 }}>
                    Nasimi District, 203B Nizami Street,<br />AF Business House,<br />Baku, Republic of Azerbaijan, AZ1010
                  </a>
                  <a href="https://maps.app.goo.gl/Lnn64oSXgB9e7iPh9" target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: '0.8125rem', color: 'var(--green-dark)', display: 'inline-block', marginTop: 6 }}>
                    Open in Maps →
                  </a>
                </div>
              </div>

              {/* Phone - triggers dialer */}
              <div className="contact-info-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.08 6.08l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg>
                </div>
                <div>
                  <h4>{tr.labelPhoneInfo}</h4>
                  <a href="tel:+994102330999">+994 10 233 09 99</a>
                </div>
              </div>

              {/* Email - triggers mail client */}
              <div className="contact-info-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <h4>{tr.labelEmailInfo}</h4>
                  <a href="mailto:info@azgreen.az">info@azgreen.az</a>
                </div>
              </div>

              {/* Hours */}
              <div className="contact-info-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div style={{ width: '100%' }}>
                  <h4>{tr.labelHours}</h4>
                  <table className="hours-table">
                    <tbody>
                      {hours.map(h => (
                        <tr key={h.day}>
                          <td>{h.day}</td>
                          <td style={{ color: h.time === 'Closed' ? 'var(--text-muted)' : 'var(--text-secondary)' }}>{h.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Social links */}
              <div style={{ paddingTop: 20 }}>
                <h4 style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14, fontWeight: 600 }}>{tr.followLabel}</h4>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {[
                    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/azgreenaz/' },
                    { name: 'Facebook', href: 'https://www.facebook.com/azgreen.az' },
                    { name: 'Instagram', href: 'https://www.instagram.com/azgreen.az/' },
                  ].map(s => (
                    <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.8125rem' }}>
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp section with QR */}
              <div className="whatsapp-section">
                <img
                  src="/images/whatsapp-qr.jpg"
                  alt="AZGREEN WhatsApp Business QR code"
                  style={{ width: 110, height: 110, borderRadius: 8, flexShrink: 0, objectFit: 'contain', background: '#fff', padding: 4 }}
                />
                <div>
                  <h4 style={{ color: 'var(--text)', marginBottom: 6 }}>{tr.whatsappH4}</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: 12, lineHeight: 1.5 }}>{tr.whatsappP}</p>
                  <a href="https://wa.me/994102330999" target="_blank" rel="noopener noreferrer"
                    className="btn btn-primary" style={{ fontSize: '0.875rem', padding: '10px 20px' }}>
                    {tr.whatsappBtn}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps - pinned to exact location */}
          <div className="map-embed" style={{ marginTop: 64 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.5!2d49.8393!3d40.3795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6cb0e4d3b1%3A0xe8f9a7c3f2b1a5d0!2s203B%20Nizami%20St%2C%20Baku!5e0!3m2!1sen!2saz!4v1714000000000!5m2!1sen!2saz"
              width="100%"
              height="420"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AZGREEN office - 203B Nizami Street, Nasimi District, Baku"
            />
            <div style={{ padding: '12px 16px', background: 'var(--surface)', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>203B Nizami Street, AF Business House, Baku, AZ1010</span>
              <a
                href="https://maps.app.goo.gl/XRhiHLsaeyRj2fTa8"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.8125rem', color: 'var(--green-dark)', fontWeight: 500 }}
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
