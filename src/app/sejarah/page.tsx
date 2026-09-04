import { Metadata } from 'next'
import { Church, Users, Award, Globe, BookOpen, Cross, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sejarah',
  description: 'Sejarah berdirinya SEMYOPAL II - SMAK Seminari St. Yohanes Paulus II Labuan Bajo sejak tahun 1987.',
}

const timeline = [
  {
    year: '1987',
    title: 'Pendirian Seminari',
    desc: 'Seminari St. Yohanes Paulus II Labuan Bajo didirikan pada 25 Agustus 1987 oleh Mgr. Eduard Sangsun SVD (Uskup Ruteng). Seminari ini berdiri di bawah naungan Yayasan Sukma Manggarai Barat.',
    icon: Church,
  },
  {
    year: '1990',
    title: 'Perkembangan Awal',
    desc: 'Seminari mulai berkembang dengan jumlah siswa yang terus meningkat. Fasilitas asrama dan kapel dibangun untuk mendukung kegiatan formasi calon imam.',
    icon: Building2,
  },
  {
    year: '2003',
    title: 'Kelas Persiapan Bawah (KPB)',
    desc: 'Mulai menerima KPB dengan jumlah terbatas 42 orang, memperpendek masa formasi calon imam. Program ini memberikan fondasi kuat sebelum masuk kelas X.',
    icon: Users,
  },
  {
    year: '2007',
    title: 'Pengelolaan oleh Keuskupan Ruteng',
    desc: 'Akibat kekurangan tenaga pembina dari Serikat Sabda Allah, seminari dikelola oleh Keuskupan Ruteng dengan RD. Robert Pelita sebagai Prefek Seminari.',
    icon: Cross,
  },
  {
    year: '2016',
    title: 'Pendirian SMAK Sendiri',
    desc: 'Mendirikan SMAK Seminari St. Yohanes Paulus II (SK Uskup Ruteng no. 086/XXV.2.1.1.3/III/2016) dan mulai menerima peserta didik perempuan.',
    icon: BookOpen,
  },
  {
    year: '2019',
    title: 'Akreditasi A',
    desc: 'Mendapatkan akreditasi A dari BAN-SM (SK 760/BAN-SM/SK/2019) sebagai pengakuan terhadap mutu pendidikan yang excellent.',
    icon: Award,
  },
  {
    year: '2023',
    title: 'Juara Umum MKKS',
    desc: 'Meraih juara umum lomba MKKS tingkat SMA/MA se-Kabupaten Manggarai Barat 2023 dengan raihan 3 medali emas dan 2 medali perak.',
    icon: Globe,
  },
  {
    year: '2024',
    title: 'Pengembangan Berkelanjutan',
    desc: 'Terus berkembang sebagai seminari menengah unggulan di Nusa Tenggara Timur dengan kurikulum merdeka dan pembinaan iman yang mendalam.',
    icon: Globe,
  },
]

export default function SejarahPage() {
  return (
    <>
      <section className="relative bg-neutral-carbonDark py-20 lg:py-32">
        <div className="section-container text-center">
          <p className="text-primary font-medium text-sm mb-2">Profil Seminari</p>
          <h1 className="font-display text-display-lg md:text-hero-title font-medium text-neutral-white mb-4">
            Sejarah SEMYOPAL II
          </h1>
          <p className="text-lg text-neutral-silverFog max-w-2xl mx-auto">
            Perjalanan panjang Seminari St. Yohanes Paulus II Labuan Bajo sejak tahun 1987.
          </p>
        </div>
      </section>

      <section className="section-container py-16 lg:py-24" aria-labelledby="timeline-title">
        <header className="text-center mb-12 lg:mb-16">
          <h2 id="timeline-title" className="font-display text-display-md font-medium text-neutral-carbonDark">
            Perjalanan Kami
          </h2>
        </header>

        <div className="max-w-4xl mx-auto">
          <ol className="relative" role="list">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-cloudGray" aria-hidden="true" />
            {timeline.map((item, index) => (
              <li key={item.year} className="relative pb-12 lg:pb-16">
                <div className="absolute left-0 top-0 w-16 h-16 flex items-center justify-center">
                  <div className="relative z-10 w-4 h-4 rounded-full bg-primary border-4 border-neutral-white shadow-lg" aria-hidden="true" />
                </div>
                <div className="ml-16 pl-6">
                  <div className="font-display text-xl font-medium text-primary mb-1">{item.year}</div>
                  <h3 className="font-display text-product-name font-medium text-neutral-carbonDark mb-2">{item.title}</h3>
                  <p className="text-body-text text-neutral-pewter">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
