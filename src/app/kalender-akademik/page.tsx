import { Metadata } from 'next'
import { Calendar, Clock, BookOpen, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kalender Akademik',
  description: 'Jadwal kegiatan akademik SEMYOPAL II: ujian, libur, retret, dan agenda penting tahun pelajaran 2024/2025.',
}

const semesterGenap = [
  { date: '22 Januari 2024', event: 'Awalmas', type: 'Kegiatan' },
  { date: '12 Februari 2024', event: 'Ujian Tengah Semester Genap', type: 'Ujian' },
  { date: '18 Maret 2024', event: 'Penilaian Akhir Tengah Semester', type: 'Ujian' },
  { date: '29 Maret - 7 April 2024', event: 'Pekan Suci & Paskah', type: 'Libur' },
  { date: '20-24 Mei 2024', event: 'Ujian Akhir Semester Genap', type: 'Ujian' },
  { date: '27 Mei - 14 Juli 2024', event: 'Libur Semester', type: 'Libur' },
]

const semesterGanjil = [
  { date: '15-19 Juli 2024', event: 'Retret Awal Tahun', type: 'Kegiatan' },
  { date: '22 Juli 2024', event: 'Awal Tahun Pelajaran 2024/2025', type: 'Kegiatan' },
  { date: '17 Agustus 2024', event: 'Hari Kemerdekaan RI', type: 'Libur' },
  { date: '14-18 Oktober 2024', event: 'Ujian Tengah Semester Ganjil', type: 'Ujian' },
  { date: '25 Desember 2024 - 1 Januari 2025', event: 'Natal & Tahun Baru', type: 'Libur' },
  { date: '16-20 Desember 2024', event: 'Ujian Akhir Semester Ganjil', type: 'Ujian' },
]

const kegiatanBulanan = [
  { month: 'Agustus', activities: ['Misa pembukaan tahun pelajaran', 'Retret awal tahun siswa', 'OSPEK siswa baru'] },
  { month: 'September', activities: ['Pengumuman PPDB', 'Misa bulanan', 'Latihan ekstrakurikuler'] },
  { month: 'Oktober', activities: ['Ujian tengah semester', 'Hari Sumpah Pemuda', 'Lomba antar kelas'] },
  { month: 'November', activities: ['Misa bulanan', 'Pengembangan karakter', 'Persiapan ujian akhir'] },
  { month: 'Desember', activities: ['Ujian akhir semester', 'Perayaan Natal', 'Penutupan semester'] },
]

export default function KalenderAkademikPage() {
  return (
    <>
      <section className="relative bg-neutral-carbonDark py-20 lg:py-32">
        <div className="section-container text-center">
          <p className="text-primary font-medium text-sm mb-2">Akademik</p>
          <h1 className="font-display text-display-lg md:text-hero-title font-medium text-neutral-white mb-4">
            Kalender Akademik
          </h1>
          <p className="text-lg text-neutral-silverFog max-w-2xl mx-auto">
            Jadwal kegiatan akademik dan agenda penting tahun pelajaran 2024/2025.
          </p>
        </div>
      </section>

      <section className="section-container py-16 lg:py-24" aria-labelledby="semester-genap-title">
        <header className="mb-10">
          <h2 id="semester-genap-title" className="font-display text-display-sm font-medium text-neutral-carbonDark mb-2">
            Semester Genap 2023/2024
          </h2>
          <p className="text-body-text text-neutral-pewter">
            Januari - Juli 2024
          </p>
        </header>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-cloudGray" aria-hidden="true" />
          <ol className="space-y-6" role="list">
            {semesterGenap.map((item, index) => (
              <li key={index} className="relative pl-16">
                <div className="absolute left-0 top-0 w-16 h-16 flex items-center justify-center">
                  <div className="relative z-10 w-4 h-4 rounded-full bg-primary border-4 border-neutral-white shadow-lg" aria-hidden="true" />
                </div>
                <div className="card p-5 group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                      <time className="text-xs text-primary font-medium mb-1 block">{item.date}</time>
                      <h3 className="font-display text-lg font-medium text-neutral-carbonDark">{item.event}</h3>
                    </div>
                    <span className={`px-3 py-1 text-xs font-medium rounded-btn self-start ${
                      item.type === 'Ujian' ? 'bg-red-100 text-red-700' :
                      item.type === 'Libur' ? 'bg-blue-100 text-blue-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {item.type}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-neutral-lightAsh py-16 lg:py-24" aria-labelledby="semester-ganjil-title">
        <div className="section-container">
          <header className="mb-10">
            <h2 id="semester-ganjil-title" className="font-display text-display-sm font-medium text-neutral-carbonDark mb-2">
              Semester Ganjil 2024/2025
            </h2>
            <p className="text-body-text text-neutral-pewter">
              Juli - Desember 2024
            </p>
          </header>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-cloudGray" aria-hidden="true" />
            <ol className="space-y-6" role="list">
              {semesterGanjil.map((item, index) => (
                <li key={index} className="relative pl-16">
                  <div className="absolute left-0 top-0 w-16 h-16 flex items-center justify-center">
                    <div className="relative z-10 w-4 h-4 rounded-full bg-primary border-4 border-neutral-white shadow-lg" aria-hidden="true" />
                  </div>
                  <div className="card p-5 group">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      <div>
                        <time className="text-xs text-primary font-medium mb-1 block">{item.date}</time>
                        <h3 className="font-display text-lg font-medium text-neutral-carbonDark">{item.event}</h3>
                      </div>
                      <span className={`px-3 py-1 text-xs font-medium rounded-btn self-start ${
                        item.type === 'Ujian' ? 'bg-red-100 text-red-700' :
                        item.type === 'Libur' ? 'bg-blue-100 text-blue-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {item.type}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-container py-16 lg:py-24" aria-labelledby="kegiatan-title">
        <header className="text-center mb-12 lg:mb-16">
          <p className="text-primary font-medium text-sm mb-2">Kegiatan Rutin</p>
          <h2 id="kegiatan-title" className="font-display text-display-md font-medium text-neutral-carbonDark">
            Kegiatan Bulanan
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kegiatanBulanan.map((item, index) => (
            <article key={item.month} className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-lighter flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-medium text-neutral-carbonDark">{item.month}</h3>
              </div>
              <ul className="space-y-2" role="list">
                {item.activities.map((activity, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-pewter">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
