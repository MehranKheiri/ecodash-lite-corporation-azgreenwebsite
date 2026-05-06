'use client'
import { useState, useEffect } from 'react'
import { adminGetPosts, adminUpsertPost, adminDeletePost } from '@/lib/supabase'

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD

const emptyForm = {
  title: '',
  excerpt: '',
  display_date: '',
  external_url: '',
  image_url: '',
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false)
  const [pw, setPw] = useState('')
  const [pwError, setPwError] = useState(false)
  const [posts, setPosts] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [editing, setEditing] = useState(null)
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(null)
  const [msg, setMsg] = useState(null)

  function login() {
    if (pw === ADMIN_PASSWORD) {
      setAuthed(true)
      loadPosts()
    } else {
      setPwError(true)
    }
  }

  async function loadPosts() {
    try {
      const data = await adminGetPosts()
      setPosts(data || [])
    } catch {
      setPosts([])
    }
  }

  async function handleSave(e) {
    e.preventDefault()
    setSaving(true)
    setMsg(null)
    const slug = editing?.slug || slugify(form.title) || Date.now().toString()
    const payload = { ...form, slug }
    if (editing) payload.id = editing.id
    const result = await adminUpsertPost(payload)
    setSaving(false)
    if (result.success) {
      setMsg({ type: 'ok', text: editing ? 'Post updated.' : 'Post published.' })
      setForm(emptyForm)
      setEditing(null)
      loadPosts()
    } else {
      setMsg({ type: 'err', text: 'Save failed. Check your Supabase connection.' })
    }
  }

  async function handleDelete(post) {
    if (!confirm(`Delete "${post.title}"?`)) return
    setDeleting(post.id)
    await adminDeletePost(post.id)
    setDeleting(null)
    loadPosts()
  }

  function startEdit(post) {
    setEditing(post)
    setForm({
      title: post.title || '',
      excerpt: post.excerpt || '',
      display_date: post.display_date || '',
      external_url: post.external_url || '',
      image_url: post.image_url || '',
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function cancelEdit() {
    setEditing(null)
    setForm(emptyForm)
    setMsg(null)
  }

  if (!authed) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)' }}>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '48px', width: '100%', maxWidth: 400, textAlign: 'center' }}>
          <img src="/logo-icon.png" alt="AZGREEN" width={48} height={48} style={{ margin: '0 auto 16px', objectFit: 'contain' }} />
          <h2 style={{ marginBottom: 8, fontWeight: 500 }}>News Admin</h2>
          <p style={{ fontSize: '0.875rem', marginBottom: 28 }}>Enter the admin password to continue.</p>
          <input
            type="password"
            value={pw}
            onChange={e => { setPw(e.target.value); setPwError(false) }}
            onKeyDown={e => e.key === 'Enter' && login()}
            placeholder="Password"
            autoFocus
            style={{
              width: '100%', padding: '12px 16px', border: `1px solid ${pwError ? '#ef4444' : 'var(--border)'}`,
              borderRadius: 'var(--radius)', background: 'var(--bg)', color: 'var(--text)',
              fontFamily: 'var(--font)', fontSize: '0.9375rem', marginBottom: 8,
            }}
          />
          {pwError && <p style={{ color: '#ef4444', fontSize: '0.8125rem', marginBottom: 8 }}>Incorrect password.</p>}
          <button onClick={login} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
            Sign In
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-page">
      <div className="container" style={{ maxWidth: 900 }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
          <div>
            <span className="label">AZGREEN</span>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 400, marginTop: 6 }}>News Manager</h1>
          </div>
          <button onClick={() => setAuthed(false)} className="btn btn-outline" style={{ fontSize: '0.8125rem' }}>Sign Out</button>
        </div>

        {/* Form */}
        <div className="admin-form" style={{ marginBottom: 48 }}>
          <h3 style={{ fontWeight: 500, marginBottom: 24, color: 'var(--text)' }}>
            {editing ? `Editing: ${editing.title}` : 'Add New Post'}
          </h3>
          <form onSubmit={handleSave}>
            <div className="grid-2" style={{ gap: 16 }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label htmlFor="post-title">Title *</label>
                <input id="post-title" type="text" required value={form.title}
                  onChange={e => setForm({ ...form, title: e.target.value })}
                  placeholder="Post title" />
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label htmlFor="post-date">
                  Display Date
                  <span style={{ fontWeight: 400, color: 'var(--text-muted)', marginLeft: 6 }}>(e.g. "April 2024" or "24 April 2024")</span>
                </label>
                <input id="post-date" type="text" value={form.display_date}
                  onChange={e => setForm({ ...form, display_date: e.target.value })}
                  placeholder="April 2024" />
              </div>
            </div>

            <div className="form-group" style={{ marginTop: 16 }}>
              <label htmlFor="post-excerpt">Caption / Description</label>
              <textarea id="post-excerpt" value={form.excerpt}
                onChange={e => setForm({ ...form, excerpt: e.target.value })}
                placeholder="Write a short description or caption for this post..."
                style={{ minHeight: 100 }} />
            </div>

            <div className="grid-2" style={{ gap: 16 }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label htmlFor="post-social-link">
                  Original Post Link
                  <span style={{ fontWeight: 400, color: 'var(--text-muted)', marginLeft: 6 }}>(Instagram, Facebook, LinkedIn, etc.)</span>
                </label>
                <input id="post-social-link" type="url" value={form.external_url}
                  onChange={e => setForm({ ...form, external_url: e.target.value })}
                  placeholder="https://www.instagram.com/p/..." />
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label htmlFor="post-image">
                  Photo URL
                  <span style={{ fontWeight: 400, color: 'var(--text-muted)', marginLeft: 6 }}>(paste link to the image)</span>
                </label>
                <input id="post-image" type="url" value={form.image_url}
                  onChange={e => setForm({ ...form, image_url: e.target.value })}
                  placeholder="https://..." />
              </div>
            </div>

            {msg && (
              <p style={{ marginTop: 16, fontSize: '0.875rem', color: msg.type === 'ok' ? 'var(--green-dark)' : '#ef4444' }}>
                {msg.type === 'ok' ? '✓ ' : '✗ '}{msg.text}
              </p>
            )}

            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              <button type="submit" className="btn btn-primary" disabled={saving}>
                {saving ? 'Saving...' : editing ? 'Update Post' : 'Publish Post'}
              </button>
              {editing && (
                <button type="button" className="btn btn-outline" onClick={cancelEdit}>Cancel</button>
              )}
            </div>
          </form>
        </div>

        {/* Posts list */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <h2 style={{ fontWeight: 400, fontSize: '1.25rem' }}>Published Posts ({posts.length})</h2>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Keep 5 most recent - delete old ones as new ones are added</p>
          </div>

          {posts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '48px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', color: 'var(--text-muted)' }}>
              No posts yet. Use the form above to add your first post.
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {posts.map(post => (
                <div key={post.id} style={{
                  display: 'flex', alignItems: 'center', gap: 16,
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)', padding: '16px 20px',
                }}>
                  {post.image_url && (
                    <img src={post.image_url} alt="" width={56} height={56}
                      style={{ borderRadius: 6, objectFit: 'cover', flexShrink: 0 }} />
                  )}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontWeight: 500, color: 'var(--text)', fontSize: '0.9375rem', marginBottom: 2 }}>{post.title}</p>
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                      {post.display_date && (
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{post.display_date}</span>
                      )}
                      {post.external_url && (
                        <a href={post.external_url} target="_blank" rel="noopener noreferrer"
                          style={{ fontSize: '0.75rem', color: 'var(--green-dark)' }}>View original -&gt;</a>
                      )}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                    <button onClick={() => startEdit(post)} className="btn btn-outline"
                      style={{ fontSize: '0.8125rem', padding: '6px 14px' }}>Edit</button>
                    <button onClick={() => handleDelete(post)} disabled={deleting === post.id}
                      className="btn btn-outline"
                      style={{ fontSize: '0.8125rem', padding: '6px 14px', borderColor: '#ef4444', color: '#ef4444' }}>
                      {deleting === post.id ? '...' : 'Delete'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
