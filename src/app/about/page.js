import AboutContent from '@/components/AboutContent'

export const metadata = {
  title: 'About AZGREEN | Environmental Engineering Company in Azerbaijan',
  description: 'AZGREEN Engineering and Environmental Services was established on January 19, 2017. Operating across Azerbaijan with experience in energy, infrastructure, and industrial sectors.',
  keywords: 'about AZGREEN, environmental company Azerbaijan, engineering company Azerbaijan, environmental services Azerbaijan',
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'AZGREEN Engineering and Environmental Services',
        url: 'https://azgreen.az',
        foundingDate: '2017-01-19',
        foundingLocation: { '@type': 'Place', name: 'Baku, Azerbaijan' },
        address: {
          '@type': 'PostalAddress',
          streetAddress: '203B Nizami Street, AF Business House',
          addressLocality: 'Baku',
          addressRegion: 'Nasimi District',
          postalCode: 'AZ1010',
          addressCountry: 'AZ',
        },
        areaServed: { '@type': 'Country', name: 'Azerbaijan' },
      })}} />
      <AboutContent />
    </>
  )
}
