import { Metadata } from 'next'
import Image from 'next/image'
import { Music, Mic, Globe, Heart, Trophy } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ekstrakurikuler',
  description: 'Beragam ekstrakurikuler di SEMYOPAL II: paduan suara, debat, tari, musik liturgi, paskibra, PMR, dan lainnya.',
}

const ekstrakurikuler = [
  {
    src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop',
    alt: 'Paduan suara liturgi',
    icon: Music,
    title: 'Paduan Suara Liturgi',
    description: 'Paduan suara untuk perayaan Ekaristi, misa akbar, dan lomba. Menjadi unggulan dengan raihan juara 1 MKKS 2023.',
  },
  {
    src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop',
    alt: 'Debat bahasa',
    icon: Mic,
    title: 'Debat Bahasa Indonesia & Inggris',
    description: 'Latihan debat rutin untuk mengasah kemampuan berpikir kritis, argumentasi, dan public speaking. Juara 1 MKKS 2023.',
  },
  {
    src: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&h=600&fit=crop',
    alt: 'Tari tradisional',
    icon: Globe,
    title: 'Tari Tradisional & Kreasi',
    description: 'Tari tradisional Flores dan tari kreasi modern untuk pentas seni dan lomba. Meraih juara 1 MKKS 2023.',
  },
  {
    src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
    alt: 'Kegiatan sosial PMR',
    icon: Heart,
    title: 'PMR & Paskibra',
    description: 'Palang Merah Remaja dan Pasukan Pengibar Bendera. Kegiatan kemanusiaan dan pembinaan disiplin nasionalisme.',
  },
]

export default function EkstrakurikulerPage() {
  return (
    <>
      <section className="relative bg-neutral-carbonDark py-20 lg:py-32">
        <div className="section-container text-center">
          <p className="text-primary font-medium text-sm mb-2">Pengembangan Bakat</p>
          <h1 className="font-display text-display-lg md:text-hero-title font-medium text-neutral-white mb-4">
            Ekstrakurikuler Beragam
          </h1>
          <p className="text-lg text-neutral-silverFog max-w-2xl mx-auto">
            10+ pilihan ekstrakurikuler untuk mengembangkan bakat dan minat siswa.
          </p>
        </div>
      </section>

      <section className="section-container py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ekstrakurikuler.map((item, index) => (
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
                    Ekstrakurikuler
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
