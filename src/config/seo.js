export const defaultSEO = {
  titleTemplate: '%s | Mariano Oliveira - Desenvolvimento Web',
  defaultTitle: 'Desenvolvimento Web Profissional | Sites e Landing Pages',
  description: 'Criação de sites profissionais e landing pages sob medida para psicólogos, nutricionistas, dentistas, advogados e profissionais que buscam uma presença online de impacto.',
  canonical: 'https://marianooliveira.dev.br',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://marianooliveira.dev.br',
    siteName: 'Mariano Oliveira - Desenvolvimento Web',
    title: 'Desenvolvimento Web Profissional | Sites e Landing Pages',
    description: 'Criação de sites profissionais e landing pages sob medida para psicólogos, nutricionistas, dentistas, advogados e profissionais que buscam uma presença online de impacto.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mariano Oliveira - Desenvolvimento Web',
      },
    ],
  },
  twitter: {
    handle: '@mariano_eu',
    site: '@mariano_eu',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'desenvolvimento web, sites profissionais, landing pages, web design, sites responsivos, desenvolvimento de sites rio de janeiro, criação de sites, web developer, front-end, sites para psicólogos, sites para nutricionistas, sites para dentistas, sites para advogados'
    },
    {
      name: 'author',
      content: 'Mariano Oliveira'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico'
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180'
    }
  ]
};
