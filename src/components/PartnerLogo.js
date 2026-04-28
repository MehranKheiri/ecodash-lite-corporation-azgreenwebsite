'use client'
import { useState } from 'react'

export default function PartnerLogo({ name, url }) {
  const [imgFailed, setImgFailed] = useState(false)

  let logoSrc = null
  try {
    const hostname = new URL(url).hostname
    logoSrc = `https://logo.clearbit.com/${hostname}`
  } catch {}

  const inner = logoSrc && !imgFailed ? (
    <img
      src={logoSrc}
      alt={name}
      title={name}
      width={80}
      height={40}
      style={{ objectFit: 'contain', maxHeight: 40 }}
      onError={() => setImgFailed(true)}
    />
  ) : (
    <span style={{ fontSize: '0.8125rem' }}>{name}</span>
  )

  return url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`partner-item${logoSrc && !imgFailed ? ' partner-logo-item' : ''}`}
      title={name}
    >
      {inner}
    </a>
  ) : (
    <div className="partner-item">{name}</div>
  )
}
