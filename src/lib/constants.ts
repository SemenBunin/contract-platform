export const CONTRACT_TYPES = {
  AUTHOR_ORDER: 'author-order',
  LICENSE: 'license',
  TRANSFER: 'transfer',
  NDA: 'nda'
} as const

export const SITE_METADATA = {
  title: 'Договоры Интеллектуальной Собственности',
  description: 'Готовые договоры для защиты вашего контента, кода и идей. Составлено практикующими юристами.',
  url: process.env.SITE_URL || 'http://localhost:3000',
  ogImage: '/og-image.jpg'
}