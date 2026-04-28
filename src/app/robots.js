export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: '/admin' },
    ],
    sitemap: 'https://azgreen.az/sitemap.xml',
    host: 'https://azgreen.az',
  }
}
