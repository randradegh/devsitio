import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  path?: string
}

export default function SEO({ title, description, path }: SEOProps) {
  const siteTitle = 'Exponential Grow'
  const siteDescription =
    'Desarrollo web, agentes de IA, bases de datos y Gen AI para educación y marketing. Soluciones personalizadas que impulsan tu negocio.'
  const siteUrl = 'https://tudominio.com'
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const fullDescription = description || siteDescription
  const fullUrl = path ? `${siteUrl}${path}` : siteUrl

  useEffect(() => {
    document.title = fullTitle

    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', fullDescription)

    // Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (!ogTitle) {
      const ogTitleEl = document.createElement('meta')
      ogTitleEl.setAttribute('property', 'og:title')
      document.head.appendChild(ogTitleEl)
    }
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', fullTitle)

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (!ogDescription) {
      const ogDescriptionEl = document.createElement('meta')
      ogDescriptionEl.setAttribute('property', 'og:description')
      document.head.appendChild(ogDescriptionEl)
    }
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', fullDescription)

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (!ogUrl) {
      const ogUrlEl = document.createElement('meta')
      ogUrlEl.setAttribute('property', 'og:url')
      document.head.appendChild(ogUrlEl)
    }
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', fullUrl)

    const ogType = document.querySelector('meta[property="og:type"]')
    if (!ogType) {
      const ogTypeEl = document.createElement('meta')
      ogTypeEl.setAttribute('property', 'og:type')
      document.head.appendChild(ogTypeEl)
    }
    document.querySelector('meta[property="og:type"]')?.setAttribute('content', 'website')
  }, [fullTitle, fullDescription, fullUrl])

  return null
}

