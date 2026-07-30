import { Metadata } from 'next'
import Image from 'next/image'
import { Building2, Users, BookOpen, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Asrama Seminari',
  description: 'Pendidikan karakter melalui sistem asrama di SEMYOPAL II: pembinaan kedisiplinan, kemandirian, dan tanggung jawab.',
}

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
    alt: 'Suasana asrama seminari',
    label: 'Lingkungan Asrama',
    icon: Building2,
  },
  {
    src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop',
    alt: 'Siswa belajar bersama di asrama',
    label: 'Belajar Bersama',
    icon: BookOpen,
  },
  {
    src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=600&fit=crop',
    alt: 'Kegiatan kebersamaan',
    label: 'Kebersamaan & Solidaritas',
    icon: Users,
  },
  {
    src: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&h=600&fit=crop',
    alt: 'Bimbingan formator',
    label: 'Bimbingan Formator',
    icon: Heart,
  },
]

export default function AsramaSeminariPage() {
  return (
    <>
      <section className="relative bg-neutral-carbonDark py-20 lg:py-32">
        <div className="section-container text-center">
          <p className="text-primary font-medium text-sm mb-2">Fasilitas</p>
          <h1 className="font-display text-display-lg md:text-hero-title font-medium text-neutral-white mb-4">
            Asrama Seminari
          </h1>
          <p className="text-lg text-neutral-silverFog max-w-2xl mx-auto">
            Membentuk karakter disiplin, mandiri, dan bertanggung jawab melalui sistem boarding school.
          </p>
        </div>
      </section>

      <section className="section-container py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="card overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-carbonDark/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-neutral-white font-display text-product-name font-medium">
                    {photo.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-lightAsh py-16 lg:py-24">
        <div className="section-container max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-8 h-8 text-primary" aria-hidden="true" />
            <h2 className="font-display text-display-md font-medium text-neutral-carbonDark">
              Konstribusi 5S sebagai Penguatan Pendidikan Karakter di Seminari
            </h2>
          </div>
          <div className="space-y-4 text-body-text text-neutral-graphite leading-relaxed">
            <p>
              Sistem sekolah asrama (boarding school) yang diterapkan seminari sangat menunjang pendidikan karakter para siswa. Seruan konsili Vatikan II dalam Dekrit tentang Pembinaan Imam menegaskan bahwa pola pembinaan di seminari hendaknya terarah pada kedewasaan kepribadian para seminaris, terutama berkaitan dengan sifat kejiwaan yang stabil, kemampuan mengambil keputusan, dan cara menilai peristiwa serta orang-orang dengan seksama.
            </p>
            <p>
              Mereka perlu dibina untuk mencapai keteguhan jiwa dan menghargai keutamaan yang dijunjung tinggi. Kematangan kepribadian seorang seminaris dilihat dari kesanggupannya menghayati nilai-nilai iman dan moral dalam kehidupan bersama.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
