import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { BookOpen, Award, Users, Globe, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'

const footerLinks = {
  sekolah: [
    { href: '/tentang', label: 'Profil Seminari' },
    { href: '/visi-misi', label: 'Visi & Misi' },
    { href: '/sejarah', label: 'Sejarah' },
    { href: '/struktur-organisasi', label: 'Struktur Organisasi' },
    { href: '/guru-staf', label: 'Guru & Staf' },
  ],
  akademik: [
    { href: '/kurikulum', label: 'Kurikulum Merdeka' },
    { href: '/ekstrakurikuler', label: 'Ekstrakurikuler' },
    { href: '/prestasi', label: 'Prestasi Siswa' },
    { href: '/kalender-akademik', label: 'Kalender Akademik' },
    { href: '/perpustakaan', label: 'Perpustakaan' },
  ],
  ppdb: [
    { href: '/ppdb', label: 'Informasi PPDB' },
    { href: '/persyaratan', label: 'Persyaratan' },
    { href: '/jadwal-seleksi', label: 'Jadwal Seleksi' },
    { href: '/formulir-pendaftaran', label: 'Formulir Pendaftaran' },
    { href: '/pengumuman', label: 'Pengumuman Hasil' },
  ],
  layanan: [
    { href: '/berita', label: 'Berita & Pengumuman' },
    { href: '/galeri', label: 'Galeri Kegiatan' },
    { href: '/video', label: 'Video Kegiatan' },
    { href: '/kontak', label: 'Hubungi Kami' },
    { href: '/faq', label: 'FAQ' },
  ],
}

const socialLinks = [
  { href: 'https://facebook.com', icon: Facebook, label: 'Facebook', color: 'hover:text-blue-600' },
  { href: 'https://instagram.com', icon: Instagram, label: 'Instagram', color: 'hover:text-pink-600' },
  { href: 'https://youtube.com', icon: Youtube, label: 'YouTube', color: 'hover:text-red-600' },
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter', color: 'hover:text-sky-600' },
]

const contactInfo = {
  address: 'Jl. Van Bekkum - Labuan Bajo, Kel. Wae Kelambu, Kec. Komodo, Kab. Manggarai Barat, NTT 86711',
  phone: '(0385) 2443213',
  email: 'smakseminarilabuanbajo@gmail.com',
  website: 'www.semyopal.org',
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-carbonDark text-neutral-white" role="contentinfo">
      <div className="section-container py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3" aria-label="SEMYOPAL II - Beranda">
              <Image
                src="/logo_SMAK.png"
                alt="Logo SEMYOPAL II"
                width={48}
                height={48}
                className="object-contain"
              />
              <span className="font-display text-2xl font-semibold tracking-tight">
                SEMYOPAL II
              </span>
            </Link>

            <p className="text-neutral-silverFog text-body-text leading-relaxed max-w-xs">
              SMAK Seminari St. Yohanes Paulus II Labuan Bajo. Seminari menengah Katolik unggulan 
              dengan kurikulum merdeka dan pembinaan iman di Nusa Tenggara Timur.
            </p>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'w-10 h-10 rounded-lg bg-neutral-carbonDark/50 flex items-center justify-center',
                    'transition-all duration-tesla ease-tesla',
                    social.color,
                    'hover:bg-neutral-carbonDark hover:scale-110',
                    'focus:outline-none focus:ring-2 focus:ring-primary'
                  )}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 text-neutral-silverFog text-sm pt-4 border-t border-neutral-carbonDark/20">
              <span>© {currentYear} SEMYOPAL II</span>
              <span aria-hidden="true">·</span>
              <span>Hak Cipta Dilindungi</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-medium mb-5">Seminari</h3>
            <nav aria-label="Menu Seminari">
              <ul className="space-y-3" role="list">
                {footerLinks.sekolah.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-neutral-silverFog hover:text-primary-light transition-colors duration-tesla text-body-text"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-display text-lg font-medium mb-5">Akademik</h3>
            <nav aria-label="Menu Akademik">
              <ul className="space-y-3" role="list">
                {footerLinks.akademik.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-neutral-silverFog hover:text-primary-light transition-colors duration-tesla text-body-text"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-display text-lg font-medium mb-5">PPDB</h3>
            <nav aria-label="Menu PPDB">
              <ul className="space-y-3" role="list">
                {footerLinks.ppdb.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-neutral-silverFog hover:text-primary-light transition-colors duration-tesla text-body-text"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="font-display text-lg font-medium mb-5">Kontak Kami</h3>
            <address className="not-italic space-y-4 text-body-text">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-light flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-neutral-silverFog leading-relaxed">{contactInfo.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-light flex-shrink-0" aria-hidden="true" />
                <a href={`tel:${contactInfo.phone}`} className="text-neutral-silverFog hover:text-primary-light transition-colors duration-tesla">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-light flex-shrink-0" aria-hidden="true" />
                <a href={`mailto:${contactInfo.email}`} className="text-neutral-silverFog hover:text-primary-light transition-colors duration-tesla">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary-light flex-shrink-0" aria-hidden="true" />
                <span className="text-neutral-silverFog">{contactInfo.website}</span>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-carbonDark/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-neutral-silverFog text-sm">
            <Link href="/kebijakan-privasi" className="hover:text-primary-light transition-colors duration-tesla">
              Kebijakan Privasi
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/syarat-ketentuan" className="hover:text-primary-light transition-colors duration-tesla">
              Syarat & Ketentuan
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/peta-situs" className="hover:text-primary-light transition-colors duration-tesla">
              Peta Situs
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/aksesibilitas" className="hover:text-primary-light transition-colors duration-tesla">
              Aksesibilitas
            </Link>
          </div>

          <div className="flex items-center gap-2 text-neutral-silverFog text-sm">
            <span>Dibuat dengan</span>
            <span className="text-red-500" aria-hidden="true">♥</span>
            <span>untuk pendidikan Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
