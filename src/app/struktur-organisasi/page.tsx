import { Metadata } from 'next'
import { Users, GraduationCap, BookOpen, Shield, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Struktur Organisasi',
  description: 'Struktur organisasi dan kepemimpinan SEMYOPAL II - SMAK Seminari St. Yohanes Paulus II Labuan Bajo.',
}

const struktur = [
  {
    title: 'Kepemimpinan Sekolah',
    icon: Users,
    roles: [
      { name: 'Rm. Kristoforus Ramlino', role: 'Kepala Sekolah', desc: 'Memimpin seluruh kegiatan akademik dan administrasi sekolah' },
      { name: 'RD. Robert Pelita', role: 'Prefek Seminari', desc: 'Mengkoordinasikan kegiatan formasi rohani dan asrama' },
    ],
  },
  {
    title: 'Tim Akademik',
    icon: GraduationCap,
    roles: [
      { name: 'Wakil Kepala Sekolah Bidang Kurikulum', role: 'Koordinator Kurikulum', desc: 'Mengelola program Kurikulum Merdeka dan asesmen' },
      { name: 'Wakil Kepala Sekolah Bidang Kesiswaan', role: 'Koordinator Kesiswaan', desc: 'Mengelola kegiatan siswa dan pembinaan karakter' },
    ],
  },
  {
    title: 'Tim Formasi',
    icon: BookOpen,
    roles: [
      { name: 'Formator Kelas X', role: 'Pembina Kelas X', desc: 'Mendampingi pertumbuhan rohani siswa kelas X' },
      { name: 'Formator Kelas XI', role: 'Pembina Kelas XI', desc: 'Mendampingi pertumbuhan rohani siswa kelas XI' },
      { name: 'Formator Kelas XII', role: 'Pembina Kelas XII', desc: 'Mendampingi pertumbuhan rohani siswa kelas XII' },
    ],
  },
  {
    title: 'Tenaga Pendidik',
    icon: Shield,
    roles: [
      { name: 'Guru Mata Pelajaran', role: '25+ Guru', desc: 'Guru berkualitas dengan sertifikasi pendidik' },
      { name: 'Staf Administrasi', role: 'Staf Tata Usaha', desc: 'Mendukung operasional sekolah' },
    ],
  },
  {
    title: 'Tim Pendukung',
    icon: Heart,
    roles: [
      { name: 'Pustakawan', role: 'Perpustakaan', desc: 'Mengelola layanan perpustakaan' },
      { name: 'Laboran', role: 'Laboratorium', desc: 'Mengelola fasilitas laboratorium' },
      { name: 'Tenaga Kebersihan & Keamanan', role: 'Dukungan', desc: 'Menjaga kebersihan dan keamanan kampus' },
    ],
  },
]

export default function StrukturOrganisasiPage() {
  return (
    <>
      <section className="relative bg-neutral-carbonDark py-20 lg:py-32">
        <div className="section-container text-center">
          <p className="text-primary font-medium text-sm mb-2">Profil Seminari</p>
          <h1 className="font-display text-display-lg md:text-hero-title font-medium text-neutral-white mb-4">
            Struktur Organisasi
          </h1>
          <p className="text-lg text-neutral-silverFog max-w-2xl mx-auto">
            Susunan organisasi dan kepemimpinan SEMYOPAL II dalam mewujudkan visi pendidikan.
          </p>
        </div>
      </section>

      <section className="section-container py-16 lg:py-24" aria-labelledby="struktur-title">
        <header className="text-center mb-12 lg:mb-16">
          <h2 id="struktur-title" className="font-display text-display-md font-medium text-neutral-carbonDark">
            Susunan Organisasi
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {struktur.map((section, index) => (
            <article key={index} className="card p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary-lighter flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-medium text-neutral-carbonDark">{section.title}</h3>
              </div>
              <div className="space-y-4">
                {section.roles.map((role, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-neutral-lightAsh rounded-btn">
                    <div className="w-8 h-8 rounded-full bg-primary-lighter flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-carbonDark text-sm">{role.name}</p>
                      <p className="text-xs text-primary">{role.role}</p>
                      <p className="text-xs text-neutral-pewter mt-1">{role.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
