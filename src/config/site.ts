// Site configuration
export const SITE = {
  title: 'Kitabuatin',
  description: 'Leading provider of optimized logistics and manufacturing solutions with state-of-the-art facilities and industry expertise.',
  url: 'https://yourdomain.com',
  author: 'AstroFlow',
} as const;

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'Layanan Kami', href: '/layanan' },
  { name: 'Studi Kasus', href: '/use-cases' },
  { name: 'Portofolio', href: '/portofolio' },
  // { name: 'Request Quote', href: '/rfq' },
  // { name: 'Documentation', href: '/documentation' },
] as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/yourcompany',
  twitter: 'https://twitter.com/yourcompany',
  facebook: 'https://facebook.com/yourcompany',
} as const;

