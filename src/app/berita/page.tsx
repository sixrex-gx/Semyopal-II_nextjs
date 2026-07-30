'use client'

import { useState } from 'react'
import Link from 'next/link'
import { formatDate, cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardTitle, CardDescription, CardLink } from '@/components/ui/Card'
import Hero from '@/components/ui/Hero'
import { Calendar, Tag, ArrowRight, Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react'

const categories = ['Semua', 'Pengumuman', 'Kegiatan', 'Prestasi', 'PPDB', 'Akademik']

const newsData = [
  { id: 1, title: 'Pembukaan Tahun Pelajaran Baru 2024/2025', excerpt: 'Misa pembukaan tahun pelajaran baru dipersembahkan di Aula St. John Paul II. Kegiatan berlangsung meriah dengan berbagai pertunjukan siswa.', category: 'Pengumuman', date: '2024-07-15', image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=600&h=400&fit=crop', content: '...' },
  { id: 2, title: 'Retret Awal Tahun Siswa-Siswi SEMYOPAL II', excerpt: 'Kegiatan retret awal tahun untuk seluruh siswa kelas X, XI, dan XII sebagai bekal pembinaan iman dan pembentukan karakter.', category: 'Kegiatan', date: '2024-07-10', image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?w=600&h=400&fit=crop', content: '...' },
  { id: 3, title: 'PPDB SEMYOPAL II TA 2025/2026 Dibuka', excerpt: 'Pendaftaran Peserta Didik Baru dibuka mulai 1 Agustus 2024 secara online melalui website resmi seminari. Kuota terbatas.', category: 'PPDB', date: '2024-08-01', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop', content: '...' },
  { id: 4, title: 'Juara 1 Debat Bahasa Indonesia MKKS 2023', excerpt: 'Siswa SEMYOPAL II meraih juara 1 lomba debat Bahasa Indonesia tingkat SMA/MA se-Kabupaten Manggarai Barat.', category: 'Prestasi', date: '2024-06-20', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop', content: '...' },
  { id: 5, title: 'Juara Umum MKKS Se-Kabupaten Manggarai Barat', excerpt: 'SEMYOPAL II meraih Juara Umum MKKS 2023 dengan 4 piala: Debat Bahasa Indonesia, Debat Inggris, Paduan Suara, dan Tari.', category: 'Prestasi', date: '2024-06-15', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop', content: '...' },
  { id: 6, title: 'Kunjungan Studi ke Museum & Tempat Bersejarah', excerpt: 'Siswa kelas XI melakukan kunjungan studi ke museum dan tempat bersejarah di Labuan Bajo untuk mendukung pembelajaran IPS.', category: 'Kegiatan', date: '2024-05-25', image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=600&h=400&fit=crop', content: '...' },
  { id: 7, title: 'Pelatihan Guru: Implementasi Kurikulum Merdeka', excerpt: 'Seluruh guru mengikuti pelatihan implementasi Kurikulum Merdeka dan asesmen formatif dalam rangka peningkatan mutu pembelajaran.', category: 'Akademik', date: '2024-05-10', image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop', content: '...' },
  { id: 8, title: 'Perayaan Ekaristi Peringatan Hari Pendidikan Nasional', excerpt: 'Misa syukur peringatan Hari Pendidikan Nasional dipersembahkan oleh seluruh keluarga besar SEMYOPAL II di Aula St. John Paul II.', category: 'Kegiatan', date: '2024-05-02', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop', content: '...' },
  { id: 9, title: 'Lomba Paduan Suara Antar Kelas', excerpt: 'Lomba paduan suara antar kelas dalam rangka memperingati Bulan Kitab Suci Nasional. Diikuti 12 tim dari berbagai kelas.', category: 'Kegiatan', date: '2024-04-21', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop', content: '...' },
  { id: 10, title: 'Sosialisasi Program Adiwiyata', excerpt: 'Sosialisasi program Adiwiyata untuk mewujudkan seminari yang peduli lingkungan dan berkelanjutan.', category: 'Akademik', date: '2024-03-15', image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&h=400&fit=crop', content: '...' },
  { id: 11, title: 'Rekoleksi Siswa Kelas XII', excerpt: 'Rekoleksi persiapan ujian kelulusan dan pendampingan panggilan bagi siswa kelas XII.', category: 'Kegiatan', date: '2024-03-10', image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?w=600&h=400&fit=crop', content: '...' },
  { id: 12, title: 'Donor Darah Bermitra PMI Manggarai Barat', excerpt: 'Kegiatan donor darah rutin bermitra dengan PMI Kabupaten Manggarai Barat. Target 50 kantong darah dari siswa, guru, dan staf.', category: 'Kegiatan', date: '2024-02-28', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop', content: '...' },
]

export default function BeritaPage() {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const filteredNews = activeCategory === 'Semua' 
    ? newsData 
    : newsData.filter(item => item.category === activeCategory)

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage)
  const paginatedNews = filteredNews.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
      <><Hero
        title="Berita & Pengumuman"
        subtitle="Informasi Terkini"
        description="Ikuti perkembangan terbaru kegiatan, prestasi siswa, pengumuman penting, dan agenda seminari SEMYOPAL II."
        backgroundImage="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1920&h=1080&fit=crop"
        backgroundAlt="Siswa mengikuti kegiatan seminari"
      />

      <section className="section-container py-16 lg:py-24" aria-labelledby="news-list-title">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div>
            <h2 id="news-list-title" className="font-display text-display-md font-medium text-neutral-carbonDark">
              Berita Terbaru
            </h2>
            <p className="text-body-text text-neutral-pewter mt-1">
              Menampilkan {paginatedNews.length} dari {filteredNews.length} berita
            </p>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter kategori berita">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                className={cn(
                  'px-4 py-2 rounded-btn text-sm font-medium transition-all duration-tesla',
                  activeCategory === cat
                    ? 'bg-primary text-neutral-white shadow-[0_4px_20px_rgba(46,125,50,0.3)]'
                    : 'bg-neutral-white text-neutral-pewter border border-neutral-paleSilver hover:border-primary hover:text-primary'
                )}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" role="list">
          {paginatedNews.map((news, index) => (
            <article
              key={news.id}
              className="card group overflow-hidden h-full flex flex-col"
              style={{ animationDelay: `${100 + index * 100}ms` }}
              role="listitem"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={news.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium text-neutral-white bg-primary/90 backdrop-blur-sm rounded-btn">
                    {news.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <time className="inline-flex items-center gap-1 px-3 py-1.5 bg-neutral-white/95 backdrop-blur-sm rounded-btn text-xs font-medium text-neutral-carbonDark" dateTime={news.date}>
                    <Calendar className="w-3 h-3" aria-hidden="true" />
                    {formatDate(news.date)}
                  </time>
                </div>
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <CardTitle as="h3" className="mb-3 group-hover:text-primary transition-colors duration-tesla line-clamp-2">
                  {news.title}
                </CardTitle>
                <CardDescription className="flex-1 mb-4 line-clamp-3">
                  {news.excerpt}
                </CardDescription>
                <CardLink href={`/berita/${news.id}`}>
                  Baca Selengkapnya
                </CardLink>
              </CardContent>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <nav className="mt-12 flex items-center justify-center gap-2" aria-label="Pagination">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              aria-label="Halaman sebelumnya"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={cn(
                  'w-10 h-10 rounded-btn text-sm font-medium transition-all duration-tesla',
                  currentPage === page
                    ? 'bg-primary text-neutral-white'
                    : 'text-neutral-pewter hover:bg-neutral-lightAsh hover:text-neutral-carbonDark'
                )}
                aria-label={`Halaman ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              aria-label="Halaman selanjutnya"
            >
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </Button>
          </nav>
        )}

        {paginatedNews.length === 0 && (
          <div className="text-center py-16 lg:py-24">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-neutral-lightAsh flex items-center justify-center">
              <Search className="w-10 h-10 text-neutral-silverFog" aria-hidden="true" />
            </div>
            <h3 className="font-display text-lg font-medium text-neutral-carbonDark mb-2">Tidak ada berita ditemukan</h3>
            <p className="text-body-text text-neutral-pewter">Coba pilih kategori lain atau kembali nanti untuk berita terbaru.</p>
          </div>
        )}
      </section>

      <section className="bg-neutral-carbonDark py-16 lg:py-24" aria-labelledby="newsletter-title">
        <div className="section-container text-center max-w-xl mx-auto">
          <h2 id="newsletter-title" className="font-display text-display-md font-medium text-neutral-white mb-4">
            Jangan Lewatkan Info Terbaru
          </h2>
          <p className="text-body-text text-neutral-silverFog mb-8">
            Dapatkan pengumuman penting, jadwal kegiatan, dan berita prestasi siswa langsung ke email Anda.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" action="/newsletter" method="POST">
            <input
              type="email"
              name="email"
              placeholder="Masukkan email Anda"
              required
              className="flex-1 px-4 py-3 bg-neutral-white/10 border border-neutral-graphite/50 rounded-btn text-neutral-white placeholder-neutral-silverFog focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-tesla"
            />
            <Button type="submit" size="md" variant="primary" className="whitespace-nowrap">
              Berlangganan
            </Button>
          </form>
          <p className="text-xs text-neutral-silverFog mt-4">
            Dengan berlangganan, Anda menyetujui Kebijakan Privasi kami. Tidak ada spam, hanya info seminari.
          </p>
        </div>
      </section>
  </>)
}
