import { Metadata } from 'next'
import Image from 'next/image'
import { BookOpen, Brain, MessageSquare, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kurikulum Merdeka',
  description: 'Kurikulum Merdeka di SEMYOPAL II: pembelajaran berdiferensiasi, debat, literasi, dan pengembangan potensi seminaris.',
}

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?w=800&h=600&fit=crop',
    alt: 'Siswa belajar di kelas',
    label: 'Pembelajaran di Kelas',
    icon: BookOpen,
  },
  {
    src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?w=800&h=600&fit=crop',
    alt: 'Siswa berdebat dan berdiskusi',
    label: 'Debat & Diskusi',
    icon: MessageSquare,
  },
  {
    src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop',
    alt: 'Siswa membaca di perpustakaan',
    label: 'Literasi & Membaca',
    icon: Brain,
  },
  {
    src: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop',
    alt: 'Siswa menulis karya tulis',
    label: 'Karya Tulis Ilmiah',
    icon: FileText,
  },
]

export default function KurikulumPage() {
  return (
    <>
      <section className="relative bg-neutral-carbonDark py-20 lg:py-32">
        <div className="section-container text-center">
          <p className="text-primary font-medium text-sm mb-2">Akademik</p>
          <h1 className="font-display text-display-lg md:text-hero-title font-medium text-neutral-white mb-4">
            Kurikulum Merdeka
          </h1>
          <p className="text-lg text-neutral-silverFog max-w-2xl mx-auto">
            Membentuk seminaris yang berintelektual melalui budaya literasi dan disiplin berpikir.
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
            <BookOpen className="w-8 h-8 text-primary" aria-hidden="true" />
            <h2 className="font-display text-display-md font-medium text-neutral-carbonDark">
              Aspek Scientia (Pengetahuan)
            </h2>
          </div>
          <div className="space-y-4 text-body-text text-neutral-graphite leading-relaxed">
            <p>
              Scientia menekankan pentingnya hidup belajar. Seminaris dilatih memiliki kedisiplinan dalam berpikir, tradisi membaca, dan mengembangkan potensi. Seminari St. Yohanes Paulus II menerapkan aspek ini untuk mengajarkan bahwa hidup belajar merupakan hal paling penting dalam menjalani proses menjadi manusia yang berintelektual.
            </p>
            <p>
              Kegiatan yang dilakukan antara lain pelajaran di sekolah, debat bahasa Indonesia/Inggris, english day, news state, penerbitan majalah dinding, centro john paul II, story telling, dan pembuatan karya tulis oleh siswa kelas XII.
            </p>
            <p>
              Aspek scientia berkontribusi dalam penguatan karakter para seminaris menjadi pribadi yang berintelek, mampu membedakan tindakan yang baik dan buruk dalam kehidupan sehari-hari.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
