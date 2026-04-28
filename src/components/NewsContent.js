'use client'
import { useLang } from '@/context/LangContext'
import { t } from '@/lib/translations'

export default function NewsContent({ posts }) {
  const { lang } = useLang()
  const tr = t[lang]?.news || t.en.news

  return (
    <>
      <section style={{ padding: '80px 0 48px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span className="label">{tr.pageLabel}</span>
          <h1 style={{ marginTop: 12 }}>{tr.pageH1}</h1>
          <p style={{ marginTop: 16, maxWidth: 560, fontSize: '1.0625rem' }}>{tr.pageP}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {posts.length === 0 ? (
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '64px 0' }}>No posts yet. Check back soon.</p>
          ) : (
            <div className="news-grid">
              {posts.map(post => (
                <article key={post.id} className="news-card">
                  {post.image_url ? (
                    <img src={post.image_url} alt={post.title} className="news-card-img" />
                  ) : (
                    <div className="news-card-img-placeholder">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.3 }}>
                        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                      </svg>
                    </div>
                  )}
                  <div className="news-card-body">
                    <div className="news-card-meta">
                      {post.display_date && <span className="news-card-date">{post.display_date}</span>}
                    </div>
                    <h3>{post.title}</h3>
                    {post.excerpt && <p>{post.excerpt}</p>}
                  </div>
                  {post.external_url && (
                    <div className="news-card-footer">
                      <a href={post.external_url} target="_blank" rel="noopener noreferrer"
                        style={{ fontSize: '0.875rem', color: 'var(--green-dark)', fontWeight: 500 }}>
                        {tr.viewPost} -&gt;
                      </a>
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}

          {/* Follow section */}
          <div style={{ marginTop: 80, padding: '48px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', textAlign: 'center' }}>
            <span className="label">{tr.followLabel}</span>
            <h2 style={{ marginTop: 12, marginBottom: 12 }}>{tr.followH2}</h2>
            <p style={{ marginBottom: 32 }}>{tr.followP}</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://www.instagram.com/azgreen.az/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Instagram</a>
              <a href="https://www.facebook.com/azgreen.az" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Facebook</a>
              <a href="https://www.linkedin.com/company/azgreenaz/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
