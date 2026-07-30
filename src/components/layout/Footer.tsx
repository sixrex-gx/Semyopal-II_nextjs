'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone, ArrowRight } from 'lucide-react'

const footerLinks = {
  profil: [
    { label: 'Sejarah Seminari', href: '/profil/sejarah' },
    { label: 'Visi & Misi', href: '/profil/visi-misi' },
    { label: 'Struktur Organisasi', href: '/profil/struktur' },
    { label: 'Prestasi', href: '/profil/prestasi' },
    { label: 'Fasilitas', href: '/profil/fasilitas' },
  ],
  akademik: [
    { label: 'Kurikulum', href: '/akademik/kurikulum' },
    { label: 'Program Unggulan', href: '/akademik/unggulan' },
    { label: 'Ekstrakurikuler', href: '/akademik/ekstrakurikuler' },
    { label: 'Kalender Akademik', href: '/akademik/kalender' },
    { label: 'Guru & Staf', href: '/akademik/guru' },
  ],
  ppdb: [
    { label: 'Informasi PPDB', href: '/ppdb/info' },
    { label: 'Persyaratan', href: '/ppdb/persyaratan' },
    { label: 'Jalur Pendaftaran', href: '/ppdb/jalur' },
    { label: 'Jadwal PPDB', href: '/ppdb/jadwal' },
    { label: 'Formulir Pendaftaran', href: '/ppdb/daftar' },
  ],
  berita: [
    { label: 'Berita Terkini', href: '/berita' },
    { label: 'Pengumuman', href: '/berita/pengumuman' },
    { label: 'Agenda Kegiatan', href: '/berita/agenda' },
    { label: 'Galeri Foto', href: '/berita/galeri' },
    { label: 'Galeri Video', href: '/berita/video' },
  ],
}

const schoolInfo = {
  name: 'SEMYOPAL II',
  address: 'Jl. Van Bekkum - Labuan Bajo, Kel. Wae Kelambu, Kec. Komodo, Kab. Manggarai Barat, NTT 86711',
  phone: '(0385) 2443213',
  email: 'smakseminarilabuanbajo@gmail.com',
  npsn: '69953544',
}

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/semyopal2', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/semyopal2', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/@semyopal2', label: 'YouTube' },
  { icon: Mail, href: 'mailto:smakseminarilabuanbajo@gmail.com', label: 'Email' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-carbonDark text-neutral-white" role="contentinfo">
      <div className="max-w-[1383px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6" aria-label="SEMYOPAL II - Beranda">
              <Image
                src="/logo_SMAK.png"
                alt="Logo SEMYOPAL II"
                width={48}
                height={48}
                className="object-contain"
              />
              <h2 className="font-display text-display-sm font-medium text-neutral-white">
                {schoolInfo.name}
              </h2>
            </Link>
            <p className="text-neutral-pewter text-base mb-6 max-w-xs leading-relaxed">
              SMAK Seminari St. Yohanes Paulus II Labuan Bajo. Seminari menengah Katolik yang 
              berkomitmen membentuk calon pemimpin gereja dan bangsa yang beriman, berkarakter, 
              dan berwawasan global dalam semangat Totus Tuus.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-neutral-graphite flex items-center justify-center
                             text-neutral-silverFog hover:text-neutral-white hover:bg-neutral-pewter
                             transition-all duration-tesla ease-tesla"
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Profil Seminari" className="lg:col-span-1">
            <h3 className="font-display text-lg font-medium mb-4 text-neutral-white">
              Profil Seminari
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.profil.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-pewter hover:text-neutral-white text-sm
                               transition-colors duration-tesla flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4 text-neutral-silverFog group-hover:text-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Akademik" className="lg:col-span-1">
            <h3 className="font-display text-lg font-medium mb-4 text-neutral-white">
              Akademik
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.akademik.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-pewter hover:text-neutral-white text-sm
                               transition-colors duration-tesla flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4 text-neutral-silverFog group-hover:text-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="PPDB" className="lg:col-span-1">
            <h3 className="font-display text-lg font-medium mb-4 text-neutral-white">
              PPDB Online
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.ppdb.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-pewter hover:text-neutral-white text-sm
                               transition-colors duration-tesla flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4 text-neutral-silverFog group-hover:text-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-1" aria-labelledby="contact-heading">
            <h3 id="contact-heading" className="font-display text-lg font-medium mb-4 text-neutral-white">
              Kontak Kami
            </h3>
            <address className="not-italic text-sm text-neutral-pewter space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="leading-relaxed">{schoolInfo.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                <a href={`tel:${schoolInfo.phone}`} className="hover:text-neutral-white transition-colors duration-tesla">
                  {schoolInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                <a href={`mailto:${schoolInfo.email}`} className="hover:text-neutral-white transition-colors duration-tesla">
                  {schoolInfo.email}
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-neutral-graphite pt-8 pb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-silverFog text-sm">
              &copy; {currentYear} {schoolInfo.name}. Hak Cipta Dilindungi.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-silverFog">
              <span>NPSN: {schoolInfo.npsn}</span>
              <span>Dibangun dengan Next.js & Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/kebijakan-privasi"
                className="text-neutral-silverFog hover:text-neutral-white text-xs transition-colors duration-tesla"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/syarat-ketentuan"
                className="text-neutral-silverFog hover:text-neutral-white text-xs transition-colors duration-tesla"
              >
                Syarat & Ketentuan
              </Link>
              <Link
                href="/peta-situs"
                className="text-neutral-silverFog hover:text-neutral-white text-xs transition-colors duration-tesla"
              >
                Peta Situs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
