import { Metadata } from 'next'
import Hero from '@/components/ui/Hero'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { BookOpen, Award, Users, Building2, Trophy, Shield, Target, Heart, Lightbulb, GraduationCap, Flag, Sparkles, Globe, Cross, Church } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'SEMYOPAL II - SMAK Seminari St. Yohanes Paulus II Labuan Bajo. Seminari Menengah Katolik unggulan di Labuan Bajo, Nusa Tenggara Timur.',
}

const values = [
  { icon: Cross, title: 'Totus Tuus', desc: 'Semangat total milik Allah, terinspirasi dari moto St. Yohanes Paulus II' },
  { icon: Heart, title: 'Religius', desc: 'Menanamkan nilai-nilai iman Katolik sebagai landasan karakter' },
  { icon: Target, title: 'Integritas', desc: 'Menjunjung tinggi kejujuran, kesucian hati, dan disiplin' },
  { icon: Users, title: 'Persaudaraan', desc: 'Membangun semangat kebersamaan dan solidaritas sesama' },
  { icon: Award, title: 'Berprestasi', desc: 'Berusaha mencapai yang terbaik di setiap bidang' },
  { icon: Globe, title: 'Berwawasan Global', desc: 'Mempersiapkan siswa untuk tantangan dunia modern' },
]

const history = [
  { year: '1987', title: 'Pendirian Seminari', desc: 'Seminari St. Yohanes Paulus II Labuan Bajo didirikan pada 25 Agustus 1987 oleh Mgr. Eduard Sangsun SVD (Uskup Ruteng)' },
  { year: '2003', title: 'Kelas Persiapan Bawah (KPB)', desc: 'Mulai menerima KPB dengan jumlah terbatas 42 orang, memperpendek masa formasi calon imam' },
  { year: '2007', title: 'Pengelolaan oleh Keuskupan Ruteng', desc: 'Akibat kekurangan tenaga pembina dari Serikat Sabda Allah, seminari dikelola oleh Keuskupan Ruteng dengan RD. Robert Pelita sebagai Prefek' },
  { year: '2016', title: 'Pendirian SMAK Sendiri', desc: 'Mendirikan SMAK Seminari St. Yohanes Paulus II (SK Uskup Ruteng no. 086/XXV.2.1.1.3/III/2016) dan mulai menerima peserta didik perempuan' },
  { year: '2023', title: 'Juara Umum MKKS', desc: 'Meraih juara umum lomba MKKS tingkat SMA/MA se-Kabupaten Manggarai Barat 2023' },
  { year: '2024', title: 'Pengembangan Berkelanjutan', desc: 'Terus berkembang sebagai seminari menengah unggulan di Nusa Tenggara Timur' },
]

const leadership = [
  { name: 'Rm. Kristoforus Ramlino', role: 'Kepala Sekolah', period: '2016 - Sekarang', desc: 'Pendidikan: S2, Pengalaman: Pembinaan Seminari' },
  { name: 'RD. Robert Pelita', role: 'Prefek Seminari', period: '2007 - Sekarang', desc: 'Pendidikan: S2 Filsafat, Spesialisasi: Pembinaan Calon Imam' },
  { name: 'Tim Formator', role: 'Tim Pembina Asrama', period: '', desc: 'Para formator yang mendampingi pertumbuhan rohani dan karakter siswa' },
  { name: 'Para Guru Profesional', role: 'Tenaga Pendidik', period: '', desc: 'Guru berkualitas dengan sertifikasi pendidik dan pengalaman mengajar' },
]

export default function TentangPage() {
  return (
      <><Hero
        title="Tentang SEMYOPAL II"
        subtitle="SMAK Seminari St. Yohanes Paulus II Labuan Bajo"
        description="Lebih dari 37 tahun melayani pendidikan calon pemimpin gereja dan bangsa di Nusa Tenggara Timur."
        backgroundImage="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&h=1080&fit=crop"
        backgroundAlt="Kampus SEMYOPAL II Labuan Bajo"
        primaryAction={{ label: 'Visi & Misi', href: '/visi-misi' }}
        secondaryAction={{ label: 'Sejarah Seminari', href: '/sejarah' }}
      />

      <section className="section-container py-16 lg:py-24" aria-labelledby="profil-title">
        <header className="text-center mb-12 lg:mb-16">
          <p className="text-primary font-medium text-sm mb-2">Profil Seminari</p>
          <h2 id="profil-title" className="font-display text-display-md font-medium text-neutral-carbonDark">
            SMA Katolik Seminari Unggulan
          </h2>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-lg text-neutral-graphite leading-relaxed mb-6">
              SEMYOPAL II berlokasi di Jl. Van Bekkum - Labuan Bajo, Kel. Wae Kelambu, Kec. Komodo, Kab. Manggarai Barat, Nusa Tenggara Timur.
              Seminari ini berdiri pada 25 Agustus 1987 di bawah naungan Yayasan Sukma Manggarai Barat.
            </p>
            <p className="text-lg text-neutral-graphite leading-relaxed mb-6">
              Sebagai Seminari Menengah Katolik, kami menggabungkan pendidikan formal SMA dengan pembinaan calon imam. 
              Siswa mengikuti kurikulum pemerintah dan pendidikan khusus seminari. Sejak 2016, kami juga menerima siswa putri.
            </p>
            <p className="text-lg text-neutral-graphite leading-relaxed">
              Dengan motto Totus Tuus (total milik Allah), kami berkomitmen membentuk generasi muda yang beriman, berkarakter, 
              berprestasi, dan berwawasan global. Didukung oleh 25+ tenaga pendidik dan formator yang berpengalaman.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Siswa Aktif', value: '200+', icon: Users },
              { label: 'Guru & Staf', value: '25+', icon: GraduationCap },
              { label: 'Tahun Berdiri', value: '1987', icon: Church },
              { label: 'Akreditasi', value: 'A', icon: Award },
            ].map((stat, i) => (
              <div key={i} className="card p-6 text-center group">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:text-primary-light transition-colors" aria-hidden="true" />
                <div className="font-display text-3xl font-medium text-neutral-carbonDark">{stat.value}</div>
                <div className="text-sm text-neutral-pewter">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-lightAsh py-16 lg:py-24" aria-labelledby="values-title">
        <div className="section-container">
          <header className="text-center mb-12 lg:mb-16">
            <p className="text-primary font-medium text-sm mb-2">Nilai-Nilai Kami</p>
            <h2 id="values-title" className="font-display text-display-md font-medium text-neutral-carbonDark">
              Landasan Karakter Pendidikan
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <article key={value.title} className="card p-6 lg:p-8 text-center group">
                <div className="w-16 h-16 mx-auto mb-5 rounded-xl bg-primary-lighter flex items-center justify-center group-hover:bg-primary group-hover:text-neutral-white transition-all duration-tesla">
                  <value.icon className="w-7 h-7 text-primary group-hover:text-neutral-white transition-colors duration-tesla" aria-hidden="true" />
                </div>
                <h3 className="font-display text-product-name font-medium text-neutral-carbonDark mb-3">{value.title}</h3>
                <p className="text-body-text text-neutral-pewter">{value.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container py-16 lg:py-24" aria-labelledby="history-title">
        <header className="text-center mb-12 lg:mb-16">
          <p className="text-primary font-medium text-sm mb-2">Perjalanan Kami</p>
          <h2 id="history-title" className="font-display text-display-md font-medium text-neutral-carbonDark">
            Sejarah Singkat SEMYOPAL II
          </h2>
        </header>

        <div className="max-w-3xl mx-auto">
          <ol className="relative" role="list">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-cloudGray" aria-hidden="true" />
            {history.map((item, index) => (
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

      <section className="bg-neutral-carbonDark py-16 lg:py-24" aria-labelledby="leadership-title">
        <div className="section-container">
          <header className="text-center mb-12 lg:mb-16">
            <p className="text-primary-light font-medium text-sm mb-2">Pengelola Seminari</p>
            <h2 id="leadership-title" className="font-display text-display-md font-medium text-neutral-white">
              Kepemimpinan Sekolah
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {leadership.map((leader, index) => (
              <article key={leader.name} className="card p-6 text-center bg-neutral-carbonDark/50 border border-neutral-graphite/50 group">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary-lighter flex items-center justify-center group-hover:bg-primary transition-colors duration-tesla">
                  <Users className="w-10 h-10 text-primary group-hover:text-neutral-white transition-colors duration-tesla" aria-hidden="true" />
                </div>
                <h3 className="font-display text-product-name font-medium text-neutral-white mb-1">{leader.name}</h3>
                <p className="text-primary-light text-sm mb-2">{leader.role}</p>
                <p className="text-neutral-silverFog text-xs mb-3">{leader.period}</p>
                <p className="text-neutral-pewter text-xs">{leader.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container py-16 lg:py-24 text-center" aria-labelledby="cta-title">
        <h2 id="cta-title" className="font-display text-display-md font-medium text-neutral-carbonDark mb-6">
          Ingin Mengenal Kami Lebih Dekat?
        </h2>
        <p className="text-lg text-neutral-pewter max-w-2xl mx-auto mb-10">
          Kunjungi seminari kami langsung di Labuan Bajo atau hubungi kami untuk informasi lebih lanjut tentang program pembelajaran dan pembinaan.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" variant="primary" className="w-full sm:w-auto min-w-[200px]">
            <Link href="/ppdb" className="inline-flex items-center justify-center w-full">
              Daftar PPDB Online
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto min-w-[200px]">
            <Link href="/kontak" className="inline-flex items-center justify-center w-full">
              Hubungi Kami
            </Link>
          </Button>
        </div>
      </section>
  </>)
}
