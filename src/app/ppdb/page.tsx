'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import Hero from '@/components/ui/Hero'
import { Mail, Phone, MapPin, Clock, FileText, CheckCircle, AlertCircle, Loader2, ArrowRight, BookOpen, Shield, Building2, FlaskConical, Globe, Trophy, Palette, Users, Music, Sparkles, GraduationCap, Cross } from 'lucide-react'

const jalurPPDB = [
  {
    id: 'zonasi',
    title: 'Jalur Zonasi',
    icon: MapPin,
    quota: '50%',
    description: 'Bagi calon siswa yang berdomisili di zona sekolah sesuai ketentuan Dinas Pendidikan.',
    requirements: [
      'Kartu Keluarga (KK) asli & fotokopi',
      'Akta Kelahiran asli & fotokopi',
      'KTP Orang Tua/Wali asli & fotokopi',
      'Bukti domisili (Surat Keterangan Domisili dari RT/RW)',
      'Kartu Indonesia Pintar (KIP) jika memiliki',
      'Pas foto 3x4 (3 lembar)',
      'Surat baptis (bagi calon siswa Katolik)',
    ],
    priority: ['Saudara kandung siswa aktif', 'Anak guru/staf seminari', 'Domisili Labuan Bajo'],
  },
  {
    id: 'afirmasi',
    title: 'Jalur Afirmasi',
    icon: AlertCircle,
    quota: '20%',
    description: 'Bagi calon siswa dari keluarga kurang mampu, yatim piatu, atau disabilitas.',
    requirements: [
      'Kartu Keluarga (KK) asli & fotokopi',
      'Akta Kelahiran asli & fotokopi',
      'KTP Orang Tua/Wali asli & fotokopi',
      'Surat Keterangan Tidak Mampu (SKTM) dari Kelurahan',
      'Kartu Indonesia Pintar (KIP) / KKS / BPNT',
      'Pas foto 3x4 (3 lembar)',
      'Surat keterangan yatim piatu/disabilitas (jika berlaku)',
    ],
    priority: ['Penerima KIP/KKS/BPNT', 'Yatim piatu', 'Disabilitas', 'Anak TKW/TKI'],
  },
  {
    id: 'prestasi',
    title: 'Jalur Prestasi',
    icon: CheckCircle,
    quota: '15%',
    description: 'Bagi calon siswa yang memiliki prestasi di tingkat kota/kabupaten ke atas.',
    requirements: [
      'Kartu Keluarga (KK) asli & fotokopi',
      'Akta Kelahiran asli & fotokopi',
      'KTP Orang Tua/Wali asli & fotokopi',
      'Sertifikat/piagam prestasi asli & fotokopi',
      'Surat keterangan prestasi dari sekolah asal',
      'Pas foto 3x4 (3 lembar)',
      'Rapor semester 1-5',
    ],
    priority: ['Prestasi tingkat Provinsi/Nasional', 'Prestasi tingkat Kota/Kabupaten', 'Prestasi tingkat Kecamatan'],
  },
  {
    id: 'panggilan',
    title: 'Jalur Seminari',
    icon: Cross,
    quota: '15%',
    description: 'Bagi calon siswa yang berminat mengikuti formasi calon imam (khusus putra) tinggal di asrama seminari.',
    requirements: [
      'Kartu Keluarga (KK) asli & fotokopi',
      'Akta Kelahiran asli & fotokopi',
      'KTP Orang Tua/Wali asli & fotokopi',
      'Surat rekomendasi pastor paroki',
      'Surat keterangan sehat jasmani & rohani',
      'Tes wawancara formator',
      'Pas foto 3x4 (3 lembar)',
    ],
    priority: ['Rekomendasi pastor paroki', 'Niat menjadi imam', 'Kesehatan jasmani & rohani'],
  },
]

const jadwalPPDB = [
  { phase: 'Pendaftaran Online Gelombang 1', date: '1 - 31 Agustus 2024', status: 'open' },
  { phase: 'Verifikasi Berkas', date: '1 - 15 September 2024', status: 'upcoming' },
  { phase: 'Tes Wawancara (Jalur Seminari)', date: '10 - 15 September 2024', status: 'upcoming' },
  { phase: 'Pengumuman Hasil Seleksi Gelombang 1', date: '20 September 2024', status: 'upcoming' },
  { phase: 'Pendaftaran Ulang Gelombang 1', date: '21 - 30 September 2024', status: 'upcoming' },
  { phase: 'Pendaftaran Online Gelombang 2', date: '1 - 31 Oktober 2024', status: 'upcoming' },
  { phase: 'Verifikasi Berkas Gelombang 2', date: '1 - 15 November 2024', status: 'upcoming' },
  { phase: 'Pengumuman Hasil Seleksi Gelombang 2', date: '20 November 2024', status: 'upcoming' },
]

const faqs = [
  { q: 'Berapa usia minimal pendaftaran kelas 10 SMA?', a: 'Calon siswa minimal berusia 15 tahun pada tanggal 1 Juli tahun pelajaran berjalan.' },
  { q: 'Apakah non-Katolik bisa mendaftar di SEMYOPAL II?', a: 'Ya, SEMYOPAL II menerima siswa dari berbagai latar belakang agama. Namun untuk jalur seminari (formasi calon imam) khusus Katolik.' },
  { q: 'Bagaimana jika tidak memiliki KIP/KKS?', a: 'Tidak memiliki KIP/KKS tidak menghalangi pendaftaran jalur zonasi. Jalur afirmasi memerlukan KIP/KKS/SKTM sebagai syarat wajib.' },
  { q: 'Apakah ada tes akademik untuk masuk?', a: 'Tidak ada tes akademik/tertulis. Seleksi berbasis administrasi dan wawancara (khusus jalur seminari).' },
  { q: 'Kapan pengumuman hasil seleksi?', a: 'Pengumuman hasil seleksi gelombang 1: 20 September 2024. Gelombang 2: 20 November 2024.' },
  { q: 'Bagaimana proses verifikasi berkas?', a: 'Tim PPDB memverifikasi kelengkapan & keaslian berkas secara online & offline. Orang tua mungkin diminta datang ke seminari untuk verifikasi fisik berkas asli.' },
]

const kurikulum = [
  { title: 'Kurikulum Merdeka', desc: 'Pembelajaran berdiferensiasi, proyek P5 (Projek Penguatan Profil Pelajar Pancasila), dan asesmen formatif.', category: 'Inti', icon: BookOpen, href: '/kurikulum' },
  { title: 'Pendidikan Agama Katolik', desc: 'Pendalaman iman, Kitab Suci, Doktrin Gereja, dan Pendidikan Liturgi.', category: 'Inti', icon: Cross, href: '/kurikulum/agama' },
  { title: 'Pendidikan Pancasila & Kewarganegaraan', desc: 'Memahami nilai-nilai Pancasila, UUD 1945, dan NKRI.', category: 'Wajib', icon: Building2, href: '/kurikulum/pkn' },
  { title: 'Bahasa Indonesia', desc: 'Keterampilan berbahasa: mendengar, berbicara, membaca, menulis, serta apresiasi sastra.', category: 'Wajib', icon: FileText, href: '/kurikulum/bindo' },
  { title: 'Matematika', desc: 'Pemecahan masalah, penalaran, dan komunikasi matematis dalam konteks kehidupan nyata.', category: 'Wajib', icon: FlaskConical, href: '/kurikulum/matematika' },
  { title: 'IPA & IPS Terpadu', desc: 'Pendekatan tematik terpadu untuk memahami fenomena alam & sosial secara holistik.', category: 'Wajib', icon: Globe, href: '/kurikulum/ipa-ips' },
  { title: 'PJOK', desc: 'Kebugaran jasmani, kesehatan, keselamatan, dan pembentukan karakter melalui gerak.', category: 'Wajib', icon: Trophy, href: '/kurikulum/pjok' },
  { title: 'Seni Budaya & Prakarya', desc: 'Ekspresi kreatif, apresiasi seni, keterampilan prakarya, dan pelestarian budaya.', category: 'Wajib', icon: Palette, href: '/kurikulum/seni' },
  { title: 'Bahasa Inggris', desc: 'Penguasaan dasar komunikasi Bahasa Inggris: listening, speaking, reading, writing.', category: 'Wajib', icon: Users, href: '/kurikulum/binggris' },
]

const ekstrakurikuler = [
  { title: 'Paskibra', desc: 'Pasukan Pengibar Bendera Pusaka - disiplin, nasionalisme, dan kebugaran jasmani.', category: 'Wajib', icon: Shield },
  { title: 'Paduan Suara Liturgi', desc: 'Vokal, harmoni, dan penampilan di perayaan Ekaristi & lomba tingkat.', category: 'Unggulan', icon: Music },
  { title: 'Musik Liturgi', desc: 'Piano, gitar, keyboard, alat musik untuk mengiringi ibadah.', category: 'Unggulan', icon: Sparkles },
  { title: 'Tari Tradisional Flores', desc: 'Menguasai tari daerah Flores dan tari kreasi modern.', category: 'Seni', icon: Palette },
  { title: 'Debat Bahasa Indonesia & Inggris', desc: 'Latihan debat, lomba tingkat kabupaten dan provinsi.', category: 'Akademik', icon: Globe },
  { title: 'Jurnalistik & Kepenulisan', desc: 'Majalah dinding, buletin seminari, lomba menulis puisi.', category: 'Akademik', icon: FileText },
  { title: 'PMR', desc: 'Palang Merah Remaja - pertolongan pertama dan kegiatan kemanusiaan.', category: 'Kemanusiaan', icon: Cross },
  { title: 'Pramuka', desc: 'Kepramukaan, kemah, pengembangan karakter dan kepemimpinan.', category: 'Wajib', icon: Trophy },
  { title: 'Olahraga: Futsal, Basket, Voli', desc: 'Latihan rutin, pertandingan antar kelas dan antar sekolah.', category: 'Olahraga', icon: Trophy },
  { title: 'Olimpiade Sains', desc: 'Persiapan OSN, KSM, dan lomba akademik lainnya.', category: 'Akademik', icon: FlaskConical },
]

export default function PPDBPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    alert('Terima kasih! Data pendaftaran Anda telah kami terima. Tim kami akan menghubungi Anda segera.')
  }

  return (
      <><Hero
        title="PPDB SEMYOPAL II"
        subtitle="Tahun Ajaran 2025/2026"
        description="Pendaftaran Peserta Didik Baru secara online, transparan, dan adil. Tersedia jalur zonasi, afirmasi, prestasi, dan jalur seminari."
        backgroundImage="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&h=1080&fit=crop"
        backgroundAlt="Kampus SEMYOPAL II Labuan Bajo"
        primaryAction={{ label: 'Daftar Sekarang', href: '#daftar' }}
        secondaryAction={{ label: 'Download Brosur', href: '/brosur-ppdb.pdf' }}
      />

      <section className="section-container py-16 lg:py-24" aria-labelledby="jalur-title">
        <header className="text-center mb-12 lg:mb-16">
          <p className="text-primary font-medium text-sm mb-2">Jalur Pendaftaran</p>
          <h2 id="jalur-title" className="font-display text-display-md font-medium text-neutral-carbonDark">
            Pilih Jalur yang Sesuai
          </h2>
          <p className="text-lg text-neutral-pewter max-w-2xl mx-auto mt-4">
            SEMYOPAL II membuka 4 jalur pendaftaran sesuai regulasi Dinas Pendidikan. Pilih jalur yang paling sesuai dengan kondisi Ananda.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {jalurPPDB.map((jalur, index) => (
            <article
              key={jalur.id}
              className="card group p-6 lg:p-8 h-full flex flex-col"
             
            >
              <div className="w-14 h-14 rounded-xl bg-primary-lighter flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-neutral-white transition-all duration-tesla">
                <jalur.icon className="w-7 h-7 text-primary group-hover:text-neutral-white transition-colors duration-tesla" aria-hidden="true" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-display text-product-name font-medium text-neutral-carbonDark">{jalur.title}</h3>
                <span className="text-xs font-medium px-2 py-1 bg-primary-lighter text-primary rounded-btn">{jalur.quota}</span>
              </div>
              <p className="text-body-text text-neutral-pewter mb-5 flex-1">{jalur.description}</p>
              
              <details className="group-open:mt-auto">
                <summary className="btn-ghost text-sub-link inline-flex items-center gap-1 cursor-pointer list-none">
                  Lihat Persyaratan
                  <ArrowRight className="w-4 h-4 transition-transform duration-tesla group-open:rotate-90" />
                </summary>
                <div className="mt-4 space-y-3 border-t border-neutral-cloudGray pt-4">
                  <h4 className="font-medium text-neutral-carbonDark text-sm">Dokumen Wajib:</h4>
                  <ul className="space-y-1" role="list">
                    {jalur.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-neutral-pewter">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 text-primary mt-0.5" aria-hidden="true" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                  <h4 className="font-medium text-neutral-carbonDark text-sm mt-4">Prioritas:</h4>
                  <ul className="space-y-1" role="list">
                    {jalur.priority.map((pri, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-neutral-pewter">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 text-primary mt-0.5" aria-hidden="true" />
                        <span>{pri}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-neutral-lightAsh py-16 lg:py-24" aria-labelledby="jadwal-title">
        <div className="section-container">
          <header className="text-center mb-12 lg:mb-16">
            <p className="text-primary font-medium text-sm mb-2">Jadwal PPDB</p>
            <h2 id="jadwal-title" className="font-display text-display-md font-medium text-neutral-carbonDark">
              Jadwal Pendaftaran TA 2025/2026
            </h2>
          </header>

          <div className="max-w-3xl mx-auto">
            <ol className="relative" role="list">
              <li className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-primary/20" aria-hidden="true" />
              {jadwalPPDB.map((item, index) => (
                <li key={item.phase} className="relative pl-16 md:pl-20 pb-8 lg:pb-12">
                  <div className="absolute left-6 md:left-8 top-1 w-3 h-3 rounded-full bg-primary border-4 border-neutral-white z-10" aria-hidden="true" />
                  <div className="card p-5 lg:p-6 group">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      <div>
                        <time className="text-xs text-primary font-medium mb-1 block">{item.date}</time>
                        <h3 className="font-display text-lg font-medium text-neutral-carbonDark">{item.phase}</h3>
                      </div>
                      <span className={cn(
                        'px-3 py-1 text-xs font-medium rounded-btn',
                        item.status === 'open' ? 'bg-green-100 text-green-700' : 'bg-neutral-cloudGray text-neutral-silverFog'
                      )}>
                        {item.status === 'open' ? 'Dibuka' : 'Belum Dibuka'}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="daftar" className="section-container py-16 lg:py-24" aria-labelledby="form-title">
        <header className="text-center mb-12 lg:mb-16 max-w-2xl mx-auto">
          <p className="text-primary font-medium text-sm mb-2">Formulir Pendaftaran</p>
          <h2 id="form-title" className="font-display text-display-md font-medium text-neutral-carbonDark">
            Daftar Secara Online
          </h2>
          <p className="text-lg text-neutral-pewter mt-4">
            Isi formulir di bawah ini untuk mendaftar. Tim PPDB kami akan memverifikasi data dan menghubungi Anda untuk langkah selanjutnya.
          </p>
        </header>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="card p-6 lg:p-8 space-y-6" noValidate>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="namaLengkap" className="block text-sm font-medium text-neutral-carbonDark mb-2">
                  Nama Lengkap Calon Siswa <span className="text-primary" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="namaLengkap"
                  name="namaLengkap"
                  required
                  className="w-full px-4 py-3 bg-neutral-white border border-neutral-paleSilver rounded-btn text-neutral-carbonDark placeholder-neutral-silverFog focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-tesla"
                  placeholder="Contoh: Yohanes Rizki Pratama"
                />
              </div>
              <div>
                <label htmlFor="tempatLahir" className="block text-sm font-medium text-neutral-carbonDark mb-2">
                  Tempat Lahir <span className="text-primary" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="tempatLahir"
                  name="tempatLahir"
                  required
                  className="w-full px-4 py-3 bg-neutral-white border border-neutral-paleSilver rounded-btn text-neutral-carbonDark placeholder-neutral-silverFog focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-tesla"
                  placeholder="Contoh: Labuan Bajo"
                />
              </div>
              <div>
                <label htmlFor="tanggalLahir" className="block text-sm font-medium text-neutral-carbonDark mb-2">
                  Tanggal Lahir <span className="text-primary" aria-hidden="true">*</span>
                </label>
                <input
                  type="date"
                  id="tanggalLahir"
                  name="tanggalLahir"
                  required
                  className="w-full px-4 py-3 bg-neutral-white border border-neutral-paleSilver rounded-btn text-neutral-carbonDark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-tesla"
                />
              </div>
              <div>
                <label htmlFor="jenisKelamin" className="block text-sm font-medium text-neutral-carbonDark mb-2">
                  Jenis Kelamin <span className="text-primary" aria-hidden="true">*</span>
                </label>
                <select
                  id="jenisKelamin"
                  name="jenisKelamin"
                  required
                  className="w-full px-4 py-3 bg-neutral-white border border-neutral-paleSilver rounded-btn text-neutral-carbonDark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-tesla"
                >
                  <option value="">Pilih Jenis Kelamin</option>
                  <option value="L">Laki-laki</option>
                  <option value="P">Perempuan</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="jalur" className="block text-sm font-medium text-neutral-carbonDark mb-2">
                Jalur Pendaftaran <span className="text-primary" aria-hidden="true">*</span>
              </label>
              <select
                id="jalur"
                name="jalur"
                required
                className="w-full px-4 py-3 bg-neutral-white border border-neutral-paleSilver rounded-btn text-neutral-carbonDark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-tesla"
              >
                <option value="">Pilih Jalur Pendaftaran</option>
                <option value="zonasi">Zonasi</option>
                <option value="afirmasi">Afirmasi</option>
                <option value="prestasi">Prestasi</option>
                <option value="seminari">Seminari (Calon Imam)</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="namaAyah" className="block text-sm font-medium text-neutral-carbonDark mb-2">
                  Nama Ayah <span className="text-primary" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="namaAyah"
                  name="namaAyah"
                  required
                  className="w-full px-4 py-3 bg-neutral-white border border-neutral-paleSilver rounded-btn text-neutral-carbonDark placeholder-neutral-silverFog focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-tesla"
                  placeholder="Contoh: Yohanes Budi"
                />
              </div>
              <div>
                <label htmlFor="namaIbu" className="block text-sm font-medium text-neutral-carbonDark mb-2">
                  Nama Ibu <span className="text-primary" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="namaIbu"
                  name="namaIbu"
                  required
                  className="w-full px-4 py-3 bg-neutral-white border border-neutral-paleSilver rounded-btn text-neutral-carbonDark placeholder-neutral-silverFog focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-tesla"
                  placeholder="Contoh: Maria Rahayu"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="noTelepon" className="block text-sm font-medium text-neutral-carbonDark mb-2">
                  No. Telepon/WA Orang Tua <span className="text-primary" aria-hidden="true">*</span>
                </label>
                <input
                  type="tel"
                  id="noTelepon"
                  name="noTelepon"
                  required
                  className="w-full px-4 py-3 bg-neutral-white border border-neutral-paleSilver rounded-btn text-neutral-carbonDark placeholder-neutral-silverFog focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-tesla"
                  placeholder="Contoh: 0812-3456-7890"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-carbonDark mb-2">
                  Email Orang Tua <span className="text-primary" aria-hidden="true">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-neutral-white border border-neutral-paleSilver rounded-btn text-neutral-carbonDark placeholder-neutral-silverFog focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-tesla"
                  placeholder="Contoh: ortu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="alamat" className="block text-sm font-medium text-neutral-carbonDark mb-2">
                Alamat Lengkap <span className="text-primary" aria-hidden="true">*</span>
              </label>
              <textarea
                id="alamat"
                name="alamat"
                required
                rows={3}
                className="w-full px-4 py-3 bg-neutral-white border border-neutral-paleSilver rounded-btn text-neutral-carbonDark placeholder-neutral-silverFog focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-tesla resize-none"
                placeholder="Contoh: Jl. Van Bekkum, Labuan Bajo, Kec. Komodo, Kab. Manggarai Barat"
              />
            </div>

            <div>
              <label htmlFor="asalSMP" className="block text-sm font-medium text-neutral-carbonDark mb-2">
                Asal SMP/MTs <span className="text-primary" aria-hidden="true">*</span>
              </label>
              <input
                type="text"
                id="asalSMP"
                name="asalSMP"
                required
                className="w-full px-4 py-3 bg-neutral-white border border-neutral-paleSilver rounded-btn text-neutral-carbonDark placeholder-neutral-silverFog focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-tesla"
                placeholder="Contoh: SMP Negeri 1 Labuan Bajo"
              />
            </div>

            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="setuju"
                  required
                  className="mt-1 w-4 h-4 text-primary border-neutral-paleSilver rounded focus:ring-2 focus:ring-primary focus:ring-offset-2"
                />
                <span className="text-sm text-neutral-pewter">
                  Saya menyetujui <a href="/syarat-ketentuan" className="text-primary hover:underline">Syarat & Ketentuan</a> 
                  dan <a href="/kebijakan-privasi" className="text-primary hover:underline">Kebijakan Privasi</a>, 
                  serta menyatakan data yang diisi benar dan valid.
                </span>
              </label>
            </div>

            <Button type="submit" size="lg" className="w-full" loading={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5" aria-hidden="true" />
                  Mengirim...
                </>
              ) : (
                <>
                  Kirim Pendaftaran
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </>
              )}
            </Button>

            <p className="text-center text-xs text-neutral-silverFog">
              Dengan mengirim formulir ini, Anda menyetujui pengumpulan dan pemrosesan data pribadi sesuai kebijakan kami.
            </p>
          </form>
        </div>
      </section>

      <section className="bg-neutral-carbonDark py-16 lg:py-24" aria-labelledby="faq-title">
        <div className="section-container">
          <header className="text-center mb-12 lg:mb-16">
            <p className="text-primary-light font-medium text-sm mb-2">Pertanyaan Umum</p>
            <h2 id="faq-title" className="font-display text-display-md font-medium text-neutral-white">
              FAQ PPDB
            </h2>
          </header>

          <div className="max-w-3xl mx-auto space-y-4" role="list">
            {faqs.map((faq, index) => (
              <details key={index} className="card group bg-neutral-carbonDark/50 border-neutral-carbonDark/20">
                <summary className="p-6 flex items-center justify-between cursor-pointer list-none group-open:pb-0">
                  <h3 className="font-display text-lg font-medium text-neutral-white pr-10">{faq.q}</h3>
                  <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-primary-light group-open:rotate-180 transition-transform duration-tesla" aria-hidden="true">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-neutral-silverFog text-body-text">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container py-16 lg:py-24" aria-labelledby="contact-title">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto text-center">
          <div className="card p-6 lg:p-8">
            <MapPin className="w-10 h-10 text-primary mx-auto mb-4" aria-hidden="true" />
            <h3 className="font-display text-lg font-medium text-neutral-carbonDark mb-2">Kantor PPDB</h3>
            <p className="text-body-text text-neutral-pewter">Jl. Van Bekkum - Labuan Bajo, Kel. Wae Kelambu, Kec. Komodo, Kab. Manggarai Barat</p>
            <p className="text-body-text text-neutral-pewter mt-1">Senin - Jumat: 08.00 - 14.00 WITA</p>
          </div>
          <div className="card p-6 lg:p-8">
            <Phone className="w-10 h-10 text-primary mx-auto mb-4" aria-hidden="true" />
            <h3 className="font-display text-lg font-medium text-neutral-carbonDark mb-2">Telepon & WA</h3>
            <p className="text-body-text text-neutral-pewter">(0385) 2443213</p>
          </div>
          <div className="card p-6 lg:p-8">
            <Mail className="w-10 h-10 text-primary mx-auto mb-4" aria-hidden="true" />
            <h3 className="font-display text-lg font-medium text-neutral-carbonDark mb-2">Email</h3>
            <p className="text-body-text text-neutral-pewter">smakseminarilabuanbajo@gmail.com</p>
          </div>
        </div>
      </section>

      <section className="section-container py-16 lg:py-24" aria-labelledby="kurikulum-title">
        <header className="text-center mb-12 lg:mb-16">
          <p className="text-primary font-medium text-sm mb-2">Program Akademik</p>
          <h2 id="kurikulum-title" className="font-display text-display-md font-medium text-neutral-carbonDark">
            Kurikulum & Pembelajaran
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {kurikulum.map((item, index) => (
            <article
              key={item.title}
              className="card group p-6"
             
            >
              <div className="w-12 h-12 rounded-xl bg-primary-lighter flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-neutral-white transition-all duration-tesla">
                <item.icon className="w-6 h-6 text-primary group-hover:text-neutral-white transition-colors duration-tesla" aria-hidden="true" />
              </div>
              <span className="text-xs font-medium text-primary mb-2 block">{item.category}</span>
              <h3 className="font-display text-product-name font-medium text-neutral-carbonDark mb-2">{item.title}</h3>
              <p className="text-body-text text-neutral-pewter mb-4">{item.desc}</p>
              <a
                href={item.href}
                className="btn-ghost text-sub-link inline-flex items-center gap-1"
              >
                Selengkapnya
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </article>
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
              10+ pilihan ekstrakurikuler untuk mengeksplorasi bakat dan minat siswa.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {ekstrakurikuler.map((item, index) => (
              <article
                key={item.title}
                className="card group p-6"
               
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-primary-lighter flex items-center justify-center group-hover:bg-primary group-hover:text-neutral-white transition-all duration-tesla">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-neutral-white transition-colors duration-tesla" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium px-2 py-1 bg-neutral-white rounded-btn text-neutral-pewter">{item.category}</span>
                    </div>
                    <h3 className="font-display text-lg font-medium text-neutral-carbonDark mb-2">{item.title}</h3>
                    <p className="text-body-text text-neutral-pewter mb-0">{item.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10 lg:mt-16">
            <Button asChild variant="outline" size="md">
              <a href="/ekstrakurikuler">Lihat Semua Ekstrakurikuler</a>
            </Button>
          </div>
        </div>
      </section>
  </>)
}
