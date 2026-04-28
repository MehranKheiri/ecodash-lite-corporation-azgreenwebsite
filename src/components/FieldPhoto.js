'use client'

export default function FieldPhoto({ src, alt, caption, height = 300 }) {
  return (
    <div style={{
      position: 'relative',
      borderRadius: 'var(--radius)',
      overflow: 'hidden',
      border: '1px solid var(--border)',
      background: 'var(--surface2)',
    }}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ width: '100%', height, objectFit: 'cover', display: 'block' }}
        onError={e => { e.currentTarget.style.display = 'none' }}
      />
      {caption && (
        <div style={{ padding: '12px 16px', background: 'var(--surface)' }}>
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', margin: 0 }}>{caption}</p>
        </div>
      )}
    </div>
  )
}
