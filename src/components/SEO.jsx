import React from 'react'
import { Helmet } from 'react-helmet-async'
import { company } from '../data/data'

const SITE_URL = 'https://www.electromechengineers.com'
const DEFAULT_IMAGE = `${SITE_URL}/assets/hero.jpg`

const primaryKeywords = [
  'industrial electrical testing Mumbai',
  'electrical testing and commissioning',
  'numerical relay testing',
  'numerical relay coordination',
  'relay setting calculations',
  'substation commissioning up to 132kV',
  '132kV substation testing',
  'power system studies',
  'protection relay testing',
  'electrical engineering consultancy Mumbai',
]

function toAbsoluteUrl(value = '/') {
  if (value.startsWith('http')) return value
  return `${SITE_URL}${value.startsWith('/') ? value : `/${value}`}`
}

function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  keywords = [],
  type = 'website',
  service,
}) {
  const canonical = toAbsoluteUrl(path)
  const imageUrl = toAbsoluteUrl(image)
  const mergedKeywords = [...new Set([...keywords, ...primaryKeywords])]

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: company.name,
    url: SITE_URL,
    logo: `${SITE_URL}/assets/logo-mark.png`,
    email: company.email,
    telephone: company.phones[0],
    description: company.tagline,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Office No. 101, 1st Floor, Plot No. 45, Sector 6, Nerul (East)',
      addressLocality: 'Navi Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400706',
      addressCountry: 'IN',
    },
  }

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: company.name,
    url: SITE_URL,
    image: imageUrl,
    logo: `${SITE_URL}/assets/logo-mark.png`,
    telephone: company.phones[0],
    email: company.email,
    address: organization.address,
    areaServed: [
      { '@type': 'City', name: 'Mumbai' },
      { '@type': 'City', name: 'Navi Mumbai' },
      { '@type': 'Country', name: 'India' },
    ],
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '18:00',
    }],
  }

  const serviceSchema = service
    ? {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.short,
        serviceType: service.schemaType || service.title,
        provider: {
          '@id': `${SITE_URL}/#organization`,
        },
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
      }
    : null

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      ...(path !== '/'
        ? [{
            '@type': 'ListItem',
            position: 2,
            name: service?.title || title.split('|')[0].trim(),
            item: canonical,
          }]
        : []),
    ],
  }

  const schemas = [organization, localBusiness, breadcrumb]
  if (serviceSchema) schemas.push(serviceSchema)

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={mergedKeywords.join(', ')} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={`${company.name} — electrical engineering and testing services`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={`${company.name} — electrical engineering and testing services`} />

      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Navi Mumbai, Maharashtra, India" />

      <script type="application/ld+json">
        {JSON.stringify(schemas)}
      </script>
    </Helmet>
  )
}

export default SEO
