import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Договоры Интеллектуальной Собственности | Профессиональные шаблоны',
  description: 'Готовые договоры для защиты вашего контента, кода и идей. Авторский заказ, лицензионный договор, NDA. Составлено практикующими юристами.',
  keywords: 'договор, интеллектуальная собственность, авторский заказ, лицензионный договор, NDA, защита прав',
  openGraph: {
    title: 'Договоры Интеллектуальной Собственности',
    description: 'Профессиональные договоры для защиты контента, кода и идей',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pt-16"> {/* Добавляем отступ для fixed header */}
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}