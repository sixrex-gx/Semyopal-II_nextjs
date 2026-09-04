import { Metadata } from 'next'
import { Cross, Heart, Target, Users, Award, Globe, BookOpen, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Visi & Misi',
  description: 'Visi dan misi SEMYOPAL II - SMAK Seminari St. Yohanes Paulus II Labuan Bajo dalam membentuk calon pemimpin gereja dan bangsa.',
}

const visi = 'Mewujudkan Seminari Menengah Katolik yang unggul dalam pembinaan iman, karakter, prestasi, dan pengembangan potensi optimal serta berwawasan global.'

const misi = [
  { icon: Cross, text: 'Menyelenggarakan pendidikan yang mengintegrasikan kurikulum nasional dengan formasi rohani Katolik.' },
  { icon: Heart, text: 'Membentuk karakter seminaris yang beriman, berbudi luhur, dan berintegritas.' },
  { icon: BookOpen, text: 'Menerapkan Kurikulum Merdeka dengan pembelajaran berdiferensiasi dan asesmen autentik.' },
  { icon: Users, text: 'Mengembangkan potensi siswa melalui kegiatan ekstrakurikuler dan pengembangan bakat.' },
  { icon: Shield, text: 'Membina disiplin, kemandirian, dan tanggung jawab melalui sistem asrama.' },
  { icon: Globe, text: 'Mempersiapkan siswa menghadapi tantangan global dengan kemampuan berpikir kritis dan kreatif.' },
]

const tujuan = [
  { title: 'Unggul dalam Prestasi Akademik', desc: 'Mencapai standar kompetensi tinggi dan mampu bersaing di tingkat nasional.' },
  { title: 'Beriman & Beriman Katolik', desc: 'Membentuk pribadi yang taat beribadah dan hidup sesuai ajaran Gereja.' },
  { title: 'Berprestasi & Berkompeten', desc: 'Mengembangkan bakat dan minat siswa di berbagai bidang.' },
  { title: 'Bermartabat & Berwawasan Global', desc: 'Mempersiapkan siswa sebagai pemimpin gereja dan bangsa.' },
]

export default function VisiMisiPage() {
  return (
    <>
      <section className="relative bg-neutral-carbonDark py-20 lg:py-32">
        <div className="section-container text-center">
          <p className="text-primary font-medium text-sm mb-2">Identitas Sekolah</p>
          <h1 className="font-display text-display-lg md:text-hero-title font-medium text-neutral-white mb-4">
            Visi & Misi
          </h1>
          <p className="text-lg text-neutral-silverFog max-w-2xl mx-auto">
            Landasan filosofis dan arah strategis SEMYOPAL II dalam mendidik generasi muda.
          </p>
        </div>
      </section>

      <section className="section-container py-16 lg:py-24" aria-labelledby="visi-title">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 lg:p-12 text-center bg-primary text-neutral-white">
            <p className="text-primary-light font-medium text-sm mb-4">Visi Sekolah</p>
            <h2 id="visi-title" className="font-display text-display-md font-medium leading-relaxed">
              {visi}
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-neutral-lightAsh py-16 lg:py-24" aria-labelledby="misi-title">
        <div className="section-container">
          <header className="text-center mb-12 lg:mb-16">
            <p className="text-primary font-medium text-sm mb-2">Misi Sekolah</p>
            <h2 id="misi-title" className="font-display text-display-md font-medium text-neutral-carbonDark">
              Langkah Strategis Kami
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {misi.map((item, index) => (
              <article key={index} className="card p-6 lg:p-8 text-center group">
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-primary-lighter flex items-center justify-center group-hover:bg-primary group-hover:text-neutral-white transition-all duration-tesla">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-neutral-white transition-colors duration-tesla" aria-hidden="true" />
                </div>
                <h3 className="font-display text-product-name font-medium text-neutral-carbonDark mb-3">
                  Misi {index + 1}
                </h3>
                <p className="text-body-text text-neutral-pewter leading-relaxed">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container py-16 lg:py-24" aria-labelledby="tujuan-title">
        <header className="text-center mb-12 lg:mb-16">
          <p className="text-primary font-medium text-sm mb-2">Tujuan Pendidikan</p>
          <h2 id="tujuan-title" className="font-display text-display-md font-medium text-neutral-carbonDark">
            Tujuan Kami
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {tujuan.map((item, index) => (
            <article key={index} className="card p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary-lighter flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-product-name font-medium text-neutral-carbonDark mb-2">
                  {item.title}
                </h3>
                <p className="text-body-text text-neutral-pewter">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
