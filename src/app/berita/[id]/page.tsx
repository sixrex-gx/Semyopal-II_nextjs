import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowLeft, Share2, Clock } from 'lucide-react'

const newsData: Record<string, {
  title: string
  date: string
  category: string
  image: string
  content: string[]
}> = {
  '1': {
    title: 'Pembukaan Tahun Pelajaran Baru 2024/2025',
    date: '15 Juli 2024',
    category: 'Pengumuman',
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1200&h=600&fit=crop',
    content: [
      'Misa pembukaan tahun pelajaran baru 2024/2025 dipersembahkan di Aula St. John Paul II oleh Rm. Kristoforus Ramlino selaku Kepala Sekolah. Misa dihadiri oleh seluruh siswa, guru, staf, dan formator seminari.',
      'Dalam homilinya, Rm. Kristoforus mengajak seluruh warga sekolah untuk memulai tahun pelajaran baru dengan semangat Totus Tuus (total milik Allah), mengikuti jejak Santo Yohanes Paulus II sebagai inspirasi dalam pendidikan.',
      'Tahun pelajaran 2024/2025 menjadi tahun yang istimewa karena SEMYOPAL II terus berkomitmen menerapkan Kurikulum Merdeka dengan pembelajaran berdiferensiasi dan proyek P5 (Projek Penguatan Profil Pelajar Pancasila).',
      'Seluruh siswa kelas X, XI, dan XII mengikuti kegiatan orientasi dan pembinaan awal tahun selama 3 hari, termasuk retret, pengenalan kurikulum, dan pembentukan kelas.',
    ],
  },
  '2': {
    title: 'Retret Awal Tahun Siswa-Siswi SEMYOPAL II',
    date: '10 Juli 2024',
    category: 'Kegiatan',
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?w=1200&h=600&fit=crop',
    content: [
      'Kegiatan retret awal tahun untuk seluruh siswa kelas X, XI, dan XII dilaksanakan sebagai bekal pembinaan iman dan pembentukan karakter di awal tahun pelajaran baru.',
      'Retret tahun ini mengangkat tema "Menjadi Berkat bagi Sesama" dan dipimpin oleh para formator seminari. Kegiatan berlangsung selama 3 hari 2 malam di lokasi retret yang tenang dan kondusif.',
      'Selama retret, siswa mengikuti berbagai kegiatan rohani termasuk adorasi Ekaristi, doa pagi dan malam, sharing Kitab Suci, serta rekoleksi tentang pentingnya hidup beriman dalam kehidupan sehari-hari.',
      'Kegiatan retret menjadi tradisi tahunan SEMYOPAL II untuk membekali siswa dengan semangat dan motivasi dalam menjalani tahun pelajaran baru.',
    ],
  },
  '3': {
    title: 'PPDB SEMYOPAL II TA 2025/2026 Dibuka',
    date: '1 Agustus 2024',
    category: 'PPDB',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=600&fit=crop',
    content: [
      'Pendaftaran Peserta Didik Baru (PPDB) SEMYOPAL II Tahun Ajaran 2025/2026 resmi dibuka mulai 1 Agustus 2024 secara online melalui website resmi sekolah.',
      'SEMYOPAL II membuka 4 jalur pendaftaran: Jalur Zonasi (50%), Jalur Afirmasi (20%), Jalur Prestasi (15%), dan Jalur Seminari (15%). Kuota terbatas untuk setiap jalur.',
      'Calon siswa dapat mendaftar secara online melalui formulir di website atau datang langsung ke kantor PPDB SEMYOPAL II. Tim PPDB siap membantu proses pendaftaran.',
      'Jadwal seleksi meliputi verifikasi berkas, tes wawancara (khusus jalur seminari), dan pengumuman hasil seleksi. Pengumuman gelombang 1: 20 September 2024.',
    ],
  },
  '4': {
    title: 'Juara 1 Debat Bahasa Indonesia MKKS 2023',
    date: '20 Juni 2024',
    category: 'Prestasi',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=600&fit=crop',
    content: [
      'Siswa SEMYOPAL II meraih juara 1 lomba debat Bahasa Indonesia tingkat SMA/MA se-Kabupaten Manggarai Barat dalam kegiatan MKKS (Musyawarah Kerja Kepala Sekolah) tahun 2023.',
      'Tim debat yang terdiri dari 3 siswa ini berhasil mengalahkan 12 peserta dari berbagai sekolah di Kabupaten Manggarai Barat dengan argumentasi yang kuat dan penyampaian yang percaya diri.',
      'Prestasi ini merupakan hasil dari latihan rutin yang dilakukan setiap minggu di bawah bimbingan guru Bahasa Indonesia dan dukungan penuh dari pihak sekolah.',
      'Kepala sekolah menyampaikan apresiasi tinggi atas prestasi ini dan berharap dapat memotivasi seluruh siswa untuk terus berprestasi di bidang akademik maupun non-akademik.',
    ],
  },
  '5': {
    title: 'Juara Umum MKKS Se-Kabupaten Manggarai Barat',
    date: '15 Juni 2024',
    category: 'Prestasi',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&h=600&fit=crop',
    content: [
      'SEMYOPAL II meraih Juara Umum MKKS tingkat SMA/MA se-Kabupaten Manggarai Barat tahun 2023 dengan raihan 3 medali emas dan 2 medali perak.',
      'Prestasi membanggakan ini diraih dari 4 kategori lomba: Juara 1 Debat Bahasa Indonesia, Juara 2 Debat Bahasa Inggris, Juara 1 Paduan Suara, dan Juara 1 Tari Tradisional.',
      'Kepala sekolah Rm. Kristoforus Ramlino menyampaikan rasa syukur atas prestasi luar biasa ini. "Ini adalah buah dari kerja keras seluruh siswa, guru, dan tim formator," ujarnya.',
      'Prestasi ini menjadi motivasi bagi seluruh warga sekolah untuk terus berprestasi dan mengharumkan nama SEMYOPAL II di tingkat yang lebih tinggi.',
    ],
  },
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const news = newsData[params.id]
  if (!news) {
    return { title: 'Berita Tidak Ditemukan' }
  }
  return {
    title: news.title,
    description: news.content[0],
  }
}

export default function BeritaDetailPage({ params }: { params: { id: string } }) {
  const news = newsData[params.id]

  if (!news) {
    return (
      <section className="section-container py-16 lg:py-24 text-center">
        <h1 className="font-display text-display-md font-medium text-neutral-carbonDark mb-4">
          Berita Tidak Ditemukan
        </h1>
        <p className="text-body-text text-neutral-pewter mb-8">
          Berita yang Anda cari tidak tersedia.
        </p>
        <Link href="/berita" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Kembali ke Berita
        </Link>
      </section>
    )
  }

  return (
    <>
      <section className="relative bg-neutral-carbonDark py-20 lg:py-32">
        <div className="section-container text-center">
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 text-neutral-white/80 hover:text-neutral-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Kembali ke Berita
          </Link>
          <span className="inline-block px-3 py-1 text-xs font-medium text-neutral-white bg-primary/90 backdrop-blur-sm rounded-btn mb-4">
            {news.category}
          </span>
          <h1 className="font-display text-display-md md:text-hero-title font-medium text-neutral-white mb-4">
            {news.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-neutral-white/70 text-sm">
            <time className="inline-flex items-center gap-1" dateTime={news.date}>
              <Calendar className="w-4 h-4" aria-hidden="true" />
              {news.date}
            </time>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-4 h-4" aria-hidden="true" />
              3 menit baca
            </span>
          </div>
        </div>
      </section>

      <article className="section-container py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-10">
            <Image
              src={news.image}
              alt={news.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {news.content.map((paragraph, index) => (
              <p key={index} className="text-body-text text-neutral-graphite leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-cloudGray flex items-center justify-between">
            <Link
              href="/berita"
              className="btn-ghost text-sub-link inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Kembali ke Berita
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
