import { Metadata } from 'next'
import Image from 'next/image'
import { Shield, Sun, TreePine, Mountain, Trophy } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Lingkungan Asri',
  description: 'Kampus SEMYOPAL II di Labuan Bajo dengan udara segar, pemandangan alam Flores, dan lingkungan kondusif untuk belajar.',
}

const lingkungan = [
  {
    src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop',
    alt: 'Kampus dengan pemandangan alam',
    icon: Mountain,
    title: 'Pemandangan Alam Flores',
    description: 'Kampus berada di Labuan Bajo dengan panorama perbukitan dan laut Flores yang indah, menciptakan suasana belajar yang tenang dan nyaman.',
  },
  {
    src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
    alt: 'Lingkungan asri dan hijau',
    icon: TreePine,
    title: 'Lingkungan Hijau & Asri',
    description: 'Area kampus yang dikelilingi pepohonan rindang dan taman hijau, memberikan udara segar dan suasana kondusif untuk kegiatan belajar.',
  },
  {
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop',
    alt: 'Suasana matahari terbenam',
    icon: Sun,
    title: 'Udara Segar & Sejuk',
    description: 'Berada di dataran tinggi Labuan Bajo, kampus menawarkan udara sejuk dan suhu yang nyaman sepanjang tahun untuk kegiatan sehari-hari.',
  },
  {
    src: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&h=600&fit=crop',
    alt: 'Fasilitas kampus',
    icon: Shield,
    title: 'Fasilitas Penunjang',
    description: 'Ruang kelas yang nyaman, laboratorium, perpustakaan, kapel, dan area olahraga dalam satu lingkungan kampus yang terintegrasi.',
  },
]

export default function LingkunganAsriPage() {
  return (
    <>
      <section className="relative bg-neutral-carbonDark py-20 lg:py-32">
        <div className="section-container text-center">
          <p className="text-primary font-medium text-sm mb-2">Lingkungan</p>
          <h1 className="font-display text-display-lg md:text-hero-title font-medium text-neutral-white mb-4">
            Lingkungan Asri & Nyaman
          </h1>
          <p className="text-lg text-neutral-silverFog max-w-2xl mx-auto">
            Kampus yang mendukung proses belajar dengan suasana alam yang asri dan nyaman.
          </p>
        </div>
      </section>

      <section className="section-container py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {lingkungan.map((item, index) => (
            <div key={index} className="card overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium text-neutral-white bg-primary/90 backdrop-blur-sm rounded-btn inline-flex items-center gap-1">
                    <Trophy className="w-3 h-3" aria-hidden="true" />
                    Lingkungan
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-lighter flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-product-name font-medium text-neutral-carbonDark pt-1">
                    {item.title}
                  </h3>
                </div>
                <p className="text-body-text text-neutral-graphite leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
