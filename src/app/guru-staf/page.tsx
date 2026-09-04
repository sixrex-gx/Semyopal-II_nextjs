import { Metadata } from 'next'
import { Users, GraduationCap, BookOpen, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Guru & Staf',
  description: 'Daftar guru dan staf SEMYOPAL II - SMAK Seminari St. Yohanes Paulus II Labuan Bajo yang profesional dan berpengalaman.',
}

const guru = [
  { name: 'Rm. Kristoforus Ramlino', subject: 'Kepala Sekolah', qualification: 'S2 Pendidikan', experience: '10+ Tahun' },
  { name: 'RD. Robert Pelita', subject: 'Prefek Seminari', qualification: 'S2 Filsafat', experience: '15+ Tahun' },
  { name: 'Sr. Maria Goreti, S.Sos', subject: 'Bahasa Indonesia', qualification: 'S1 Bahasa Indonesia', experience: '8 Tahun' },
  { name: 'Fr. Petrus Sumba, S.Pd', subject: 'Matematika', qualification: 'S1 Matematika', experience: '10 Tahun' },
  { name: 'Sr. Theresia, S.Pd', subject: 'Bahasa Inggris', qualification: 'S1 Bahasa Inggris', experience: '7 Tahun' },
  { name: 'Fr. Yohanes Dopo, S.Si', subject: 'IPA (Biologi)', qualification: 'S1 Biologi', experience: '5 Tahun' },
  { name: 'Sr. Lukresia, S.Pd', subject: 'IPS (Sejarah)', qualification: 'S1 Sejarah', experience: '6 Tahun' },
  { name: 'Fr. Arnoldus Woda, S.Pd', subject: 'PPKn', qualification: 'S1 PPKn', experience: '8 Tahun' },
  { name: 'Sr. Monika, S.Pd', subject: 'Seni Budaya', qualification: 'S1 Seni Musik', experience: '5 Tahun' },
  { name: 'Fr. Stanislaus Ngesu, S.Pd', subject: 'PJOK', qualification: 'S1 Pendidikan Olahraga', experience: '7 Tahun' },
]

const staf = [
  { name: 'Bernadus Ngganggas', role: 'Kepala Tata Usaha', experience: '12 Tahun' },
  { name: 'Yuliana Darlina', role: 'Bendahara', experience: '8 Tahun' },
  { name: 'Fransiskus Xaverius', role: 'Pustakawan', experience: '5 Tahun' },
  { name: 'Maria Imaculata', role: 'Laboran', experience: '6 Tahun' },
  { name: 'Petronela Juwita', role: 'Sekretaris', experience: '4 Tahun' },
]

export default function GuruStafPage() {
  return (
    <>
      <section className="relative bg-neutral-carbonDark py-20 lg:py-32">
        <div className="section-container text-center">
          <p className="text-primary font-medium text-sm mb-2">Sumber Daya Manusia</p>
          <h1 className="font-display text-display-lg md:text-hero-title font-medium text-neutral-white mb-4">
            Guru & Staf
          </h1>
          <p className="text-lg text-neutral-silverFog max-w-2xl mx-auto">
            Tenaga pendidik dan kependidikan yang profesional, berpengalaman, dan berdedikasi.
          </p>
        </div>
      </section>

      <section className="section-container py-16 lg:py-24" aria-labelledby="guru-title">
        <header className="text-center mb-12 lg:mb-16">
          <p className="text-primary font-medium text-sm mb-2">Tenaga Pendidik</p>
          <h2 id="guru-title" className="font-display text-display-md font-medium text-neutral-carbonDark">
            Para Guru Profesional
          </h2>
          <p className="text-lg text-neutral-pewter max-w-2xl mx-auto mt-4">
            25+ guru berkualitas dengan sertifikasi pendidik dan pengalaman mengajar yang mumpuni.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {guru.map((item, index) => (
            <article key={index} className="card p-6 text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary-lighter flex items-center justify-center group-hover:bg-primary transition-colors duration-tesla">
                <Users className="w-8 h-8 text-primary group-hover:text-neutral-white transition-colors duration-tesla" aria-hidden="true" />
              </div>
              <h3 className="font-display text-product-name font-medium text-neutral-carbonDark mb-1">{item.name}</h3>
              <p className="text-sm text-primary mb-2">{item.subject}</p>
              <div className="flex items-center justify-center gap-2 text-xs text-neutral-silverFog">
                <span>{item.qualification}</span>
                <span aria-hidden="true">·</span>
                <span>{item.experience}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-neutral-lightAsh py-16 lg:py-24" aria-labelledby="staf-title">
        <div className="section-container">
          <header className="text-center mb-12 lg:mb-16">
            <p className="text-primary font-medium text-sm mb-2">Tenaga Kependidikan</p>
            <h2 id="staf-title" className="font-display text-display-md font-medium text-neutral-carbonDark">
              Staf Administrasi
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {staf.map((item, index) => (
              <article key={index} className="card p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-lighter flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-product-name font-medium text-neutral-carbonDark">{item.name}</h3>
                  <p className="text-sm text-primary">{item.role}</p>
                  <p className="text-xs text-neutral-silverFog mt-1">{item.experience}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
