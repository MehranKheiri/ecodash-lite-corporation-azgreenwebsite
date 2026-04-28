// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Return null if placeholders not yet set (build will still succeed)
export const supabase =
  supabaseUrl && supabaseUrl !== 'placeholder'
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null

export async function getNewsPosts(limit = 50) {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('news_posts')
    .select('*')
    .eq('is_published', true)
    .order('published_at', { ascending: false })
    .limit(limit)
  if (error) return []
  return data || []
}

export async function getNewsPost(slug) {
  if (!supabase) return null
  const { data, error } = await supabase
    .from('news_posts')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single()
  if (error) return null
  return data
}

export async function submitContact(form) {
  if (!supabase) return { error: 'Service not configured yet.' }
  const { error } = await supabase.from('contact_submissions').insert([form])
  if (error) return { error: error.message }
  return { success: true }
}

export async function adminGetPosts() {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('news_posts')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) return []
  return data || []
}

export async function adminUpsertPost(post) {
  if (!supabase) return { error: 'Service not configured.' }
  const { error } = await supabase.from('news_posts').upsert([post])
  if (error) return { error: error.message }
  return { success: true }
}

export async function adminDeletePost(id) {
  if (!supabase) return { error: 'Service not configured.' }
  const { error } = await supabase.from('news_posts').delete().eq('id', id)
  if (error) return { error: error.message }
  return { success: true }
}
