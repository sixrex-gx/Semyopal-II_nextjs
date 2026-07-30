import { Metadata } from 'next'
import Hero from '@/components/ui/Hero'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardTitle, CardDescription, CardLink } from '@/components/ui/Card'
import Link from 'next/link'
import { BookOpen, Award, Music, FlaskConical, Palette, Trophy, Globe, Users, GraduationCap, Zap, Target, Brain, Heart, Flag, Cross, Church } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Akademik',
  description: 'Program akademik SEMYOPAL II: Kurikulum Merdeka, pembinaan iman, ekstrakurikuler beragam, prestasi siswa, dan kalender akademik.',
}

const kurikulum = [
  { icon: Brain, title: 'Kurikulum Merdeka', desc: 'Penerapan Kurikulum Merdeka Belajar dengan pembelajaran berdiferensiasi dan proyek penguatan profil Pelajar Pancasila.', href: '/kurikulum', category: 'Inti' },
  { icon: Cross, title: 'Pendidikan Agama Katolik', desc: 'Pendalaman iman Katolik, Kitab Suci, Doktrin Gereja, dan Pendidikan Liturgi.', href: '/kurikulum/agama', category: 'Inti' },
  { icon: BookOpen, title: 'Mata Pelajaran Inti', desc: 'Pendidikan Agama, PPKn, Bahasa Indonesia, Matematika, IPA, IPS, SBdP, PJOK, dan Bahasa Inggris.', href: '/mata-pelajaran', category: 'Wajib' },
  { icon: Target, title: 'Pembelajaran Berdiferensiasi', desc: 'Pendekatan pembelajaran yang disesuaikan dengan kebutuhan, minat, dan kemampuan setiap siswa.', href: '/pembelajaran', category: 'Metode' },
  { icon: Zap, title: 'Pembinaan Calon Imam', desc: 'Program formasi khusus bagi siswa seminari: bimbingan rohani, retret, rekoleksi, dan bina iman.', href: '/pembinaan-imam', category: 'Formasi' },
  { icon: Globe, title: 'Pendidikan Karakter & Budi Pekerti', desc: 'Integrasi nilai-nilai iman Katolik, nasionalisme, gotong royong, dan integritas dalam kegiatan sehari-hari.', href: '/karakter', category: 'Karakter' },
]

const ekstrakurikuler = [
  { icon: Trophy, title: 'Paskibra', desc: 'Pasukan Pengibar Bendera Pusaka, latihan disiplin dan nasionalisme.', category: 'Wajib' },
  { icon: Church, title: 'Paduan Suara Liturgi', desc: 'Paduan suara untuk perayaan Ekaristi, misa akbar, dan lomba paduan suara.', category: 'Unggulan' },
  { icon: Music, title: 'Musik Liturgi', desc: 'Piano, gitar, keyboard, dan alat musik lain untuk mengiringi ibadah.', category: 'Unggulan' },
  { icon: Palette, title: 'Tari Tradisional & Kreasi', desc: 'Tari tradisional Flores dan tari kreasi modern untuk pentas seni.', category: 'Pilihan' },
  { icon: Globe, title: 'Debat Bahasa Indonesia & Inggris', desc: 'Latihan debat, lomba tingkat kabupaten dan provinsi.', category: 'Pilihan' },
  { icon: BookOpen, title: 'Jurnalistik & Kepenulisan', desc: 'Majalah dinding, buletin seminari, lomba menulis puisi dan artikel.', category: 'Pilihan' },
  { icon: Heart, title: 'PMR (Palang Merah Remaja)', desc: 'Pertolongan pertama, donor darah, kegiatan kemanusiaan.', category: 'Pilihan' },
  { icon: Flag, title: 'Pramuka', desc: 'Kegiatan kepramukaan, kemah, dan pengembangan karakter.', category: 'Pilihan' },
  { icon: Award, title: 'Olimpiade Sains & Matematika', desc: 'Persiapan OSN, KSM, dan lomba akademik lainnya.', category: 'Pilihan' },
]

const achievements = [
  { title: 'Juara 1 Debat Bahasa Indonesia MKKS 2023', category: 'Akademik', desc: 'Tingkat SMA/MA se-Kabupaten Manggarai Barat' },
  { title: 'Juara 2 Debat Bahasa Inggris MKKS 2023', category: 'Akademik', desc: 'Tingkat SMA/MA se-Kabupaten Manggarai Barat' },
  { title: 'Juara 1 Paduan Suara MKKS 2023', category: 'Seni', desc: 'Kategori Paduan Suara se-Kabupaten Manggarai Barat' },
  { title: 'Juara 1 Tarian Tradisional MKKS 2023', category: 'Seni', desc: 'Kategori Tari se-Kabupaten Manggarai Barat' },
  { title: 'Juara Umum MKKS 2023', category: 'Prestasi', desc: 'Juara umum lomba MKKS tingkat SMA/MA se-Kabupaten Manggarai Barat' },
  { title: 'Akreditasi A', category: 'Lembaga', desc: 'Penghargaan akreditasi A dari BAN-SM (SK 760/BAN-SM/SK/2019)' },
]

export default function AkademikPage() {
  return (
      <><Hero
        title="Program Akademik"
        subtitle="Kurikulum Merdeka & Pembinaan Iman"
        description="Menerapkan Kurikulum Merdeka Belajar dengan pendekatan pembelajaran berdiferensiasi dan pembinaan iman Katolik yang mendalam."
        backgroundImage="https://images.unsplash.com/photo-1503676382389-4809596d5290?w=1920&h=1080&fit=crop"
        backgroundAlt="Siswa belajar di kelas"
        primaryAction={{ label: 'Lihat Kurikulum', href: '/kurikulum' }}
        secondaryAction={{ label: 'Ekstrakurikuler', href: '/ekstrakurikuler' }}
      />

      <section className="section-container py-16 lg:py-24" aria-labelledby="kurikulum-title">
        <header className="text-center mb-12 lg:mb-16">
          <p className="text-primary font-medium text-sm mb-2">Program Utama</p>
          <h2 id="kurikulum-title" className="font-display text-display-md font-medium text-neutral-carbonDark">
            Kurikulum & Pembelajaran
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {kurikulum.map((item, index) => (
            <Card key={item.href} hover className="group h-full">
              <CardContent className="p-6 lg:p-8">
                <div className="w-14 h-14 rounded-xl bg-primary-lighter flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-neutral-white transition-all duration-tesla">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-neutral-white transition-colors duration-tesla" aria-hidden="true" />
                </div>
                <span className="text-xs font-medium text-primary mb-2 block">{item.category}</span>
                <CardTitle as="h3" className="mb-3">{item.title}</CardTitle>
                <CardDescription>{item.desc}</CardDescription>
                <CardLink href={item.href}>Selengkapnya</CardLink>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-neutral-lightAsh py-16 lg:py-24" aria-labelledby="ekstra-title">
        <div className="section-container">
          <header className="text-center mb-12 lg:mb-16">
            <p className="text-primary font-medium text-sm mb-2">Pengembangan Bakat</p>
            <h2 id="ekstra-title" className="font-display text-display-md font-medium text-neutral-carbonDark">
              Ekstrakurikuler Beragam
            </h2>
            <p className="text-lg text-neutral-pewter max-w-2xl mx-auto mt-4">
              10+ pilihan ekstrakurikuler untuk mengeksplorasi bakat dan minat siswa di bidang akademik, seni, olahraga, dan kepemimpinan.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {ekstrakurikuler.map((item, index) => (
              <Card key={item.title} hover className="group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-primary-lighter flex items-center justify-center group-hover:bg-primary group-hover:text-neutral-white transition-all duration-tesla">
                      <item.icon className="w-6 h-6 text-primary group-hover:text-neutral-white transition-colors duration-tesla" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium px-2 py-1 bg-neutral-white rounded-btn text-neutral-pewter">{item.category}</span>
                      </div>
                      <CardTitle as="h3" className="text-lg mb-2">{item.title}</CardTitle>
                      <CardDescription className="mb-0">{item.desc}</CardDescription>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10 lg:mt-16">
            <Button asChild>
              <a href="/ekstrakurikuler" className="inline-flex items-center justify-center px-6 py-3 text-button-label rounded-btn border-2 border-primary text-primary bg-transparent hover:bg-primary-lighter focus:ring-primary transition-all duration-tesla focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]">
                Lihat Semua Ekstrakurikuler
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-container py-16 lg:py-24" aria-labelledby="prestasi-title">
        <header className="text-center mb-12 lg:mb-16">
          <p className="text-primary font-medium text-sm mb-2">Prestasi Terbaru</p>
          <h2 id="prestasi-title" className="font-display text-display-md font-medium text-neutral-carbonDark">
            Prestasi Gemilang Siswa
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {achievements.map((item, index) => (
            <Card key={item.title} hover className="group h-full">
              <CardContent className="p-6 lg:p-8">
                <span className="text-xs font-medium text-primary mb-2 block">{item.category}</span>
                <CardTitle as="h3" className="mb-3">{item.title}</CardTitle>
                <CardDescription>{item.desc}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10 lg:mt-16">
          <Button asChild>
            <a href="/prestasi" className="inline-flex items-center justify-center px-6 py-3 text-button-label rounded-btn border-2 border-primary text-primary bg-transparent hover:bg-primary-lighter focus:ring-primary transition-all duration-tesla focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]">
              Lihat Semua Prestasi
            </a>
          </Button>
        </div>
      </section>

      <section className="bg-neutral-carbonDark py-16 lg:py-24" aria-labelledby="cta-title">
        <div className="section-container text-center">
          <h2 id="cta-title" className="font-display text-display-md font-medium text-neutral-white mb-6">
            Siap Mengembangkan Potensi Ananda?
          </h2>
          <p className="text-lg text-neutral-silverFog max-w-2xl mx-auto mb-10">
            Daftarkan putra-putri Anda di SEMYOPAL II untuk pendidikan berkualitas dengan Kurikulum Merdeka dan pembinaan iman Katolik.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="primary" className="w-full sm:w-auto min-w-[200px]">
              <a href="/ppdb" className="inline-flex items-center justify-center w-full">
                Daftar PPDB Online
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto min-w-[200px]">
              <a href="/kontak" className="inline-flex items-center justify-center w-full">
                Konsultasi Gratis
              </a>
            </Button>
          </div>
        </div>
      </section>
  </>)
}
