import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/ui/Footer'

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
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SEMYOPAL II - Kampus Seminari',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEMYOPAL II - SMAK Seminari St. Yohanes Paulus II Labuan Bajo',
    description: 'Seminari Menengah Katolik unggulan di Labuan Bajo dengan kurikulum merdeka dan pembinaan iman.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
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

      <body className="min-h-screen bg-neutral-white font-text text-neutral-graphite antialiased">
        <Header />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
