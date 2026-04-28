import HomeContent from '@/components/HomeContent'

export const metadata = {
  title: 'AZGREEN | Environmental & Engineering Services in Azerbaijan',
  description: 'AZGREEN provides EIA, ESIA, environmental monitoring, water management, ESG consultancy and engineering services across Azerbaijan. Certified ESIA specialists. Established 2017.',
  keywords: 'EIA Azerbaijan, ESIA Azerbaijan, environmental consulting Azerbaijan, environmental impact assessment Azerbaijan, engineering services Azerbaijan',
  openGraph: {
    title: 'AZGREEN Engineering & Environmental Services | Azerbaijan',
    description: 'EIA, ESIA, environmental monitoring, ESG consulting and engineering services across Azerbaijan.',
    url: 'https://azgreen.az',
    siteName: 'AZGREEN',
    locale: 'en_AZ',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'AZGREEN Engineering and Environmental Services',
        alternateName: 'AZGREEN',
        url: 'https://azgreen.az',
        description: 'Environmental impact assessment, ESIA, environmental monitoring, water management, ESG consulting and engineering services across Azerbaijan.',
        foundingDate: '2017-01-19',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '203B Nizami Street, AF Business House',
          addressLocality: 'Baku',
          addressRegion: 'Nasimi District',
          postalCode: 'AZ1010',
          addressCountry: 'AZ',
        },
        telephone: '+994102330999',
        email: 'info@azgreen.az',
        openingHours: ['Mo-Fr 09:00-18:00'],
        sameAs: [
          'https://www.linkedin.com/company/azgreenaz/',
          'https://www.facebook.com/azgreen.az',
          'https://www.instagram.com/azgreen.az/',
        ],
        areaServed: { '@type': 'Country', name: 'Azerbaijan' },
      })}} />
      <HomeContent />
    </>
  )
}
