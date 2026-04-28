import { getNewsPosts } from '@/lib/supabase'
import NewsContent from '@/components/NewsContent'

export const metadata = {
  title: 'News | AZGREEN Azerbaijan',
  description: 'Latest news, project updates, and announcements from AZGREEN Engineering and Environmental Services.',
}

export const revalidate = 3600

const placeholderPosts = [
  { id: 'p1', title: 'AZGREEN at Environmental Forum 2024', excerpt: 'Our team participated in the national environmental forum, presenting our latest work on environmental monitoring.', display_date: 'April 2024', external_url: 'https://www.instagram.com/azgreen.az/', image_url: null },
  { id: 'p2', title: 'New Partnership Signed', excerpt: 'AZGREEN has signed a new cooperation agreement expanding our environmental services network.', display_date: 'March 2024', external_url: 'https://www.linkedin.com/company/azgreenaz/', image_url: null },
  { id: 'p3', title: 'Field Monitoring Season Underway', excerpt: 'Our field teams are conducting environmental baseline surveys at multiple project sites across the country.', display_date: 'February 2024', external_url: 'https://www.facebook.com/azgreen.az', image_url: null },
]

export default async function NewsPage() {
  let posts = []
  try {
    const result = await getNewsPosts(5)
    posts = result && result.length > 0 ? result : placeholderPosts
  } catch {
    posts = placeholderPosts
  }

  return <NewsContent posts={posts} />
}
