import Hero from '@/components/ui/Hero'
import { Button } from '@/components/ui/Button'
import { BookOpen, Award, Users, Globe, Building2, Trophy, GraduationCap, Music, FlaskConical, Palette, Shield, Sparkles, Phone, Mail, ArrowRight, Cross, Church, Heart } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    title: 'Pembinaan Iman',
    description: 'Pembinaan rohani Katolik yang mendalam melalui rekoleksi, retret, bimbingan rohani, dan perayaan Ekaristi harian.',
    icon: Cross,
    href: '/pembinaan-iman',
    category: 'Rohani',
  },
  {
    title: 'Kurikulum Merdeka',
    description: 'Menerapkan Kurikulum Merdeka Belajar yang fokus pada pengembangan karakter, kompetensi, dan profil Pelajar Pancasila.',
    icon: BookOpen,
    href: '/kurikulum',
    category: 'Akademik',
  },
  {
    title: 'Prestasi Gemilang',
    description: 'Juara umum MKKS tingkat SMA/MA se-Kabupaten Manggarai Barat 2023 di bidang debat, paduan suara, dan tari.',
    icon: Award,
    href: '/prestasi',
    category: 'Prestasi',
  },
  {
    title: 'Asrama Seminari',
    description: 'Fasilitas asrama yang nyaman dengan bimbingan formator untuk membentuk karakter disiplin, mandiri, dan bertanggung jawab.',
    icon: Building2,
    href: '/asrama-seminari',
    category: 'Fasilitas',
  },
  {
    title: 'Ekstrakurikuler Beragam',
    description: 'Paduan Suara, Debat Bahasa, Tarian, Musik Liturgi, Paskibra, PMR, dan kegiatan pengembangan bakat lainnya.',
    icon: Music,
    href: '/ekstrakurikuler',
    category: 'Kegiatan',
  },
  {
    title: 'Lingkungan Asri & Nyaman',
    description: 'Kampus di Labuan Bajo dengan udara segar, pemandangan alam Flores yang indah, dan lingkungan yang kondusif untuk belajar.',
    icon: Shield,
    href: '/lingkungan-asri',
    category: 'Lingkungan',
  },
]

const stats = [
  { value: '200+', label: 'Siswa Aktif' },
  { value: '25+', label: 'Guru & Staf' },
  { value: '10+', label: 'Ekstrakurikuler' },
  { value: '50+', label: 'Prestasi' },
]

const achievements = [
  {
    title: 'Juara 1 Debat Bahasa Indonesia',
    description: 'Lomba MKKS tingkat SMA/MA se-Kabupaten Manggarai Barat 2023',
    category: 'Akademik',
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?w=600&h=400&fit=crop',
    href: '/prestasi/mkks-2023',
  },
  {
    title: 'Juara 1 Paduan Suara',
    description: 'Lomba MKKS tingkat SMA/MA se-Kabupaten Manggarai Barat 2023',
    category: 'Seni',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop',
    href: '/prestasi/paduan-suara-2023',
  },
  {
    title: 'Juara 1 Tari Tradisional',
    description: 'Lomba MKKS tingkat SMA/MA se-Kabupaten Manggarai Barat 2023',
    category: 'Seni',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&h=400&fit=crop',
    href: '/prestasi/tari-2023',
  },
]

const news = [
  {
    title: 'Pembukaan Tahun Pelajaran Baru 2024/2025',
    description: 'Misa pembukaan tahun pelajaran baru dipersembahkan di Aula St. John Paul II.',
    category: 'Pengumuman',
    date: '15 Juli 2024',
    href: '/berita/pembukaan-tp-2024',
  },
  {
    title: 'Retret Awal Tahun Siswa-Siswi Seminari',
    description: 'Kegiatan retret awal tahun untuk seluruh siswa kelas X, XI, dan XII sebagai bekal pembinaan iman.',
    category: 'Kegiatan',
    date: '10 Juli 2024',
    href: '/berita/retret-awal-tahun',
  },
  {
    title: 'PPDB SEMYOPAL II Tahun Ajaran 2025/2026 Dibuka',
    description: 'Pendaftaran Peserta Didik Baru dibuka mulai 1 Agustus 2024 secara online melalui website resmi sekolah.',
    category: 'PPDB',
    date: '1 Agustus 2024',
    href: '/ppdb/info',
  },
]

export default function HomePage() {
  return (
      <><Hero
        title="SEMYOPAL II"
        subtitle="SMAK Seminari St. Yohanes Paulus II Labuan Bajo"
        description="Membentuk calon pemimpin gereja dan bangsa yang beriman, berkarakter, berprestasi, dan berwawasan global dalam semangat Totus Tuus."
        primaryAction={{ label: 'Daftar PPDB Online', href: '/ppdb' }}
        secondaryAction={{ label: 'Kenali Kami Lebih Jauh', href: '/tentang' }}
        backgroundImage="/foto1.jpg"
        backgroundAlt="Kampus SEMYOPAL II Labuan Bajo dengan pemandangan alam Flores"
        stats={stats}
        isHome
      />

      <section className="section-container py-16 lg:py-24" aria-labelledby="features-title">
        <header className="text-center mb-12 lg:mb-16">
          <p className="text-primary font-medium text-sm mb-2">Keunggulan Kami</p>
          <h2 id="features-title" className="font-display text-display-md font-medium text-neutral-carbonDark">
            Mengapa Memilih SEMYOPAL II?
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <article
              key={feature.href}
              className="card group p-6 lg:p-8 text-center"
             
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-primary-lighter flex items-center justify-center group-hover:bg-primary group-hover:text-neutral-white transition-all duration-tesla">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-neutral-white transition-colors duration-tesla" aria-hidden="true" />
              </div>
              <h3 className="font-display text-product-name font-medium text-neutral-carbonDark mb-3">
                {feature.title}
              </h3>
              <p className="text-body-text text-neutral-pewter leading-relaxed mb-4">
                {feature.description}
              </p>
              <Link
                href={feature.href}
                className="btn-ghost text-sub-link inline-flex items-center gap-1"
              >
                Selengkapnya
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-neutral-lightAsh py-16 lg:py-24" aria-labelledby="achievements-title">
        <div className="section-container">
          <header className="text-center mb-12 lg:mb-16">
            <p className="text-primary font-medium text-sm mb-2">Prestasi Terbaru</p>
            <h2 id="achievements-title" className="font-display text-display-md font-medium text-neutral-carbonDark">
              Prestasi Gemilang Siswa Kami
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {achievements.map((achievement, index) => (
              <article
                key={achievement.href}
                className="card group overflow-hidden"
               
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={achievement.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium text-neutral-white bg-primary/90 backdrop-blur-sm rounded-btn">
                      {achievement.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-product-name font-medium text-neutral-carbonDark mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-body-text text-neutral-pewter mb-4">
                    {achievement.description}
                  </p>
                  <a
                    href={achievement.href}
                    className="btn-ghost text-sub-link inline-flex items-center gap-1"
                  >
                    Baca Selengkapnya
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10 lg:mt-16">
            <Button asChild>
              <a href="/prestasi" className="inline-flex items-center justify-center px-6 py-3 text-button-label rounded-btn border-2 border-primary text-primary bg-transparent hover:bg-primary-lighter focus:ring-primary transition-all duration-tesla focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]">
                Lihat Semua Prestasi
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-container py-16 lg:py-24" aria-labelledby="news-title">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <header className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 lg:mb-12">
              <div>
                <p className="text-primary font-medium text-sm mb-2">Berita & Pengumuman</p>
                <h2 id="news-title" className="font-display text-display-md font-medium text-neutral-carbonDark">
                  Informasi Terkini dari Seminari
                </h2>
              </div>
              <div className="mt-4 md:mt-0">
                <Button asChild>
                  <a href="/berita" className="inline-flex items-center justify-center px-4 py-2 text-sm text-button-label rounded-btn text-neutral-graphite hover:text-primary hover:underline transition-all duration-tesla">
                    Lihat Semua Berita
                  </a>
                </Button>
              </div>
            </header>

            <div className="space-y-6" role="list">
              {news.map((item, index) => (
                <article
                  key={item.href}
                  className="card group flex flex-col md:flex-row gap-6 p-4 md:p-6"
                 
                  role="listitem"
                >
                  <div className="flex-shrink-0 w-full md:w-64 h-40 md:h-auto relative">
                    <div className="w-full h-full bg-neutral-lightAsh rounded-lg flex items-center justify-center">
                      <span className="text-neutral-silverFog text-sm">Gambar Berita</span>
                    </div>
                    <div className="absolute -top-3 -right-3 md:top-4 md:right-4">
                      <span className="px-3 py-1 text-xs font-medium text-neutral-white bg-primary rounded-btn">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <time className="text-xs text-neutral-silverFog mb-2" dateTime={item.date}>
                      {item.date}
                    </time>
                    <h3 className="font-display text-product-name font-medium text-neutral-carbonDark mb-2 group-hover:text-primary transition-colors duration-tesla">
                      {item.title}
                    </h3>
                    <p className="text-body-text text-neutral-pewter mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <a
                      href={item.href}
                      className="btn-ghost text-sub-link inline-flex items-center gap-1 self-start"
                    >
                      Baca Selengkapnya
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-6" aria-label="Informasi Cepat">
            <div className="card p-6 bg-primary text-neutral-white">
              <h3 className="font-display text-lg font-medium mb-4">PPDB 2025/2026</h3>
              <p className="text-neutral-white/80 text-body-text mb-4">
                Pendaftaran Peserta Didik Baru dibuka mulai 1 Agustus 2024. Kuota terbatas!
              </p>
              <Button asChild>
                <a href="/ppdb" className="inline-flex items-center justify-center w-full px-6 py-3 text-button-label rounded-btn bg-neutral-white text-primary hover:bg-neutral-lightAsh focus:ring-neutral-pewter focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-tesla min-h-[44px]">
                  Daftar Sekarang
                </a>
              </Button>
            </div>

            <div className="card p-6">
              <h3 className="font-display text-lg font-medium text-neutral-carbonDark mb-4">Kalender Akademik</h3>
              <div className="space-y-4">
                {[
                  { event: 'Ujian Akhir Semester Genap', date: '20-24 Mei 2024' },
                  { event: 'Libur Semester', date: '27 Mei - 14 Juli 2024' },
                  { event: 'Retret Awal Tahun', date: '15-19 Juli 2024' },
                  { event: 'Awal Tahun Pelajaran 2024/2025', date: '22 Juli 2024' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-neutral-lightAsh rounded-btn">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-lighter flex items-center justify-center">
                      <span className="font-display text-xl font-medium text-primary">
                        {item.date.split(' ')[0].split('-')[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-neutral-carbonDark text-sm">{item.event}</p>
                      <p className="text-neutral-silverFog text-xs">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-4 w-full">
                <a href="/kalender-akademik" className="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-button-label rounded-btn text-neutral-graphite hover:text-primary hover:underline transition-all duration-tesla">
                  Lihat Kalender Lengkap
                </a>
              </Button>
            </div>

            <div className="card p-6">
              <h3 className="font-display text-lg font-medium text-neutral-carbonDark mb-4">Kontak</h3>
              <div className="space-y-3">
                {[
                  { icon: Users, label: 'Kepala Sekolah', value: 'Rm. Kristoforus Ramlino' },
                  { icon: Phone, label: 'Telepon', value: '(0385) 2443213' },
                  { icon: Mail, label: 'Email', value: 'smakseminarilabuanbajo@gmail.com' },
                  { icon: Globe, label: 'Website', value: 'www.semyopal.org' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <item.icon className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-neutral-silverFog">{item.label}</p>
                      <p className="font-medium text-neutral-carbonDark">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-neutral-carbonDark py-16 lg:py-24" aria-labelledby="cta-title">
        <div className="section-container text-center">
          <h2 id="cta-title" className="font-display text-display-md font-medium text-neutral-white mb-6">
            Bergabunglah dengan Keluarga Besar SEMYOPAL II
          </h2>
          <p className="text-lg text-neutral-silverFog max-w-2xl mx-auto mb-10">
            Berikan pendidikan terbaik putra-putri Anda di Seminari yang mengutamakan pembinaan iman, karakter, prestasi, dan pengembangan potensi optimal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="primary" className="w-full sm:w-auto min-w-[200px]">
              <a href="/ppdb" className="inline-flex items-center justify-center w-full">
                Daftar PPDB Online
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto min-w-[200px]">
              <a href="/kontak" className="inline-flex items-center justify-center w-full">
                Hubungi Kami
              </a>
            </Button>
          </div>
        </div>
      </section>
  </>)
}
