import { Metadata } from 'next'
import Image from 'next/image'
import { Trophy, Mic, Music, Globe, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Prestasi Gemilang',
  description: 'Prestasi siswa SEMYOPAL II di bidang akademik, seni, dan olahraga tingkat kabupaten hingga nasional.',
}

const achievements = [
  {
    src: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?w=800&h=600&fit=crop',
    alt: 'Siswa berdebat',
    icon: Mic,
    title: 'Juara 1 Debat Bahasa Indonesia',
    description: 'Lomba MKKS tingkat SMA/MA se-Kabupaten Manggarai Barat 2023. Tim debat SEMYOPAL II berhasil mengalahkan 12 peserta dari berbagai sekolah.',
  },
  {
    src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop',
    alt: 'Paduan suara',
    icon: Music,
    title: 'Juara 1 Paduan Suara',
    description: 'Lomba MKKS tingkat SMA/MA se-Kabupaten Manggarai Barat 2023. Paduan suara liturgi SEMYOPAL II tampil memukau dengan lagu-lagu rohani.',
  },
  {
    src: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&h=600&fit=crop',
    alt: 'Tari tradisional',
    icon: Globe,
    title: 'Juara 1 Tari Tradisional',
    description: 'Lomba MKKS tingkat SMA/MA se-Kabupaten Manggarai Barat 2023. Tari tradisional Flores dibawakan dengan kostum dan gerakan yang memukau juri.',
  },
  {
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c7f5?w=800&h=600&fit=crop',
    alt: 'Juara umum',
    icon: Award,
    title: 'Juara Umum MKKS 2023',
    description: 'SEMYOPAL II meraih juara umum lomba MKKS tingkat SMA/MA se-Kabupaten Manggarai Barat 2023 dengan raihan 3 medali emas dan 2 medali perak.',
  },
]

export default function PrestasiPage() {
  return (
    <>
      <section className="relative bg-neutral-carbonDark py-20 lg:py-32">
        <div className="section-container text-center">
          <p className="text-primary font-medium text-sm mb-2">Prestasi</p>
          <h1 className="font-display text-display-lg md:text-hero-title font-medium text-neutral-white mb-4">
            Prestasi Gemilang
          </h1>
          <p className="text-lg text-neutral-silverFog max-w-2xl mx-auto">
            Raihan prestasi membanggakan dari siswa-siswi SEMYOPAL II di berbagai bidang.
          </p>
        </div>
      </section>

      <section className="section-container py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
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
                    Prestasi
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
