import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/ui/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'SEMYOPAL II - SMAK Seminari St. Yohanes Paulus II Labuan Bajo',
    template: '%s | SEMYOPAL II',
  },
  description: 'SEMYOPAL II - SMAK Seminari St. Yohanes Paulus II Labuan Bajo. Seminari Menengah Katolik unggulan di Labuan Bajo, Nusa Tenggara Timur dengan kurikulum merdeka dan pembinaan iman.',
  keywords: ['SEMYOPAL II', 'SMAK Seminari Labuan Bajo', 'Seminari St. Yohanes Paulus II', 'SMA Katolik Labuan Bajo', 'sekolah seminari', 'pendidikan katolik'],
  authors: [{ name: 'SMAK Seminari St. Yohanes Paulus II' }],
  creator: 'SMAK Seminari St. Yohanes Paulus II',
  publisher: 'SMAK Seminari St. Yohanes Paulus II',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://www.semyopal.org',
    siteName: 'SEMYOPAL II',
    title: 'SEMYOPAL II - SMAK Seminari St. Yohanes Paulus II Labuan Bajo',
    description: 'Seminari Menengah Katolik unggulan di Labuan Bajo, NTT dengan kurikulum merdeka dan pembinaan iman.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEMYOPAL II - SMAK Seminari St. Yohanes Paulus II Labuan Bajo',
    description: 'Seminari Menengah Katolik unggulan di Labuan Bajo dengan kurikulum merdeka dan pembinaan iman.',
  },
  icons: {
    icon: '/logo_SMAK.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#2E7D32',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">

      <body className={`min-h-screen bg-neutral-white font-text text-neutral-graphite antialiased ${inter.className}`}>
        <Header />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
