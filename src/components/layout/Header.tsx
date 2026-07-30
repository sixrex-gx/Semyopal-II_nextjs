'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, BookOpen, Award, Users, Globe } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Beranda' },
  { href: '/tentang', label: 'Tentang' },
  { href: '/akademik', label: 'Akademik' },
  { href: '/ppdb', label: 'PPDB' },
  { href: '/berita', label: 'Berita' },
  { href: '/kontak', label: 'Kontak' },
]

const quickLinks = [
  { href: '/ppdb', label: 'Pendaftaran', icon: BookOpen },
  { href: '/prestasi', label: 'Prestasi', icon: Award },
  { href: '/guru', label: 'Guru & Staf', icon: Users },
  { href: '/galeri', label: 'Galeri', icon: Globe },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-nav transition-all duration-tesla ease-tesla ${
        isScrolled
          ? 'bg-neutral-white/95 backdrop-blur-md shadow-subtle'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="section-container" aria-label="Navigasi utama">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 text-neutral-carbonDark hover:opacity-80 transition-opacity duration-tesla"
            aria-label="SEMYOPAL II - Beranda"
          >
            <Image
              src="/logo_SMAK.png"
              alt="Logo SEMYOPAL II"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
            <span className="font-display text-xl font-semibold tracking-tight hidden sm:block">
              SEMYOPAL II
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link py-2"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Quick Actions Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/ppdb" className="btn-primary text-sm">
              Daftar Sekarang
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-btn text-neutral-carbonDark hover:bg-neutral-lightAsh transition-colors duration-tesla"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-tesla ease-tesla ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
          role="navigation"
          aria-label="Menu mobile"
        >
          <div className="pt-4 space-y-2 border-t border-neutral-cloudGray">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-nav text-neutral-carbonDark font-medium rounded-btn
                           hover:bg-neutral-lightAsh hover:text-primary transition-all duration-tesla"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/ppdb"
              className="block mx-4 mt-4 btn-primary text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
