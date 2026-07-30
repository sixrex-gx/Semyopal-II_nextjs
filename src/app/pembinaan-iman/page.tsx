import { Metadata } from 'next'
import Image from 'next/image'
import { Cross, Heart, Church, Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pembinaan Iman',
  description: 'Pembinaan rohani Katolik di SEMYOPAL II melalui adorasi, doa, misa pagi, dan kegiatan rohani lainnya.',
}

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1548625149-b1c10e10e5f6?w=800&h=600&fit=crop',
    alt: 'Misa kudus di gereja',
    label: 'Perayaan Ekaristi',
  },
  {
    src: 'https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=800&h=600&fit=crop',
    alt: 'Doa dan adorasi',
    label: 'Adorasi & Doa',
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    alt: 'Pujian dan penyembahan',
    label: 'Pujian Senja & Malam',
  },
  {
    src: 'https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?w=800&h=600&fit=crop',
    alt: 'Pendalaman Kitab Suci',
    label: 'Sharing Kitab Suci',
  },
]

export default function PembinaanImanPage() {
  return (
    <>
      <section className="relative bg-neutral-carbonDark py-20 lg:py-32">
        <div className="section-container text-center">
          <p className="text-primary font-medium text-sm mb-2">Pembinaan Rohani</p>
          <h1 className="font-display text-display-lg md:text-hero-title font-medium text-neutral-white mb-4">
            Pembinaan Iman
          </h1>
          <p className="text-lg text-neutral-silverFog max-w-2xl mx-auto">
            Membentuk karakter rohani para seminaris melalui hidup doa dan sakramen.
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
            <Cross className="w-8 h-8 text-primary" aria-hidden="true" />
            <h2 className="font-display text-display-md font-medium text-neutral-carbonDark">
              Aspek Sanctitas (Kekudusan)
            </h2>
          </div>
          <div className="space-y-4 text-body-text text-neutral-graphite leading-relaxed">
            <p>
              Hidup manusia tidak terlepas dari hubungannya dengan Tuhan. Seminari St. Yohanes Paulus II menyebut proses pemaknaan ini dengan kata <em>sanctitas</em> (hidup rohani). Pembinaan hidup panggilan diarahkan agar seminaris semakin mengenal panggilan Tuhan dengan menelusuri sejarah hidupnya.
            </p>
            <p>
              Pentingnya mengenal diri bersama Tuhan ditekankan agar setiap seminaris punya kesadaran akan kekuatan di luar dirinya yang turut membantunya dalam proses panggilan hidup.
            </p>
            <p>
              Kegiatan yang dilakukan untuk menunjang misi ini adalah adorasi, doa dan misa pagi, salve, pujian senja, pujian malam, sharing Kitab Suci, dan novena.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
