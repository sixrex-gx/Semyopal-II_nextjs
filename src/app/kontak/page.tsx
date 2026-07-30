'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import Hero from '@/components/ui/Hero'
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle, AlertCircle, MessageSquare, User, Building2 } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Alamat Seminari',
    details: [
      'Jl. Van Bekkum - Labuan Bajo',
      'Kel. Wae Kelambu, Kec. Komodo',
      'Kab. Manggarai Barat, NTT 86711'
    ],
    link: { label: 'Buka di Google Maps', href: 'https://maps.google.com', external: true },
  },
  {
    icon: Phone,
    title: 'Telepon & WhatsApp',
    details: [
      '(0385) 2443213 (Kantor)',
      'SMAKseminarilabuanbajo@gmail.com'
    ],
    link: { label: 'Hubungi via WhatsApp', href: 'https://wa.me/6281234567890', external: true },
  },
  {
    icon: Mail,
    title: 'Email',
    details: [
      'smakseminarilabuanbajo@gmail.com (Umum)',
      'smakseminarilabuanbajo@gmail.com (PPDB)'
    ],
    link: { label: 'Kirim Email', href: 'mailto:smakseminarilabuanbajo@gmail.com', external: false },
  },
  {
    icon: Clock,
    title: 'Jam Operasional',
    details: [
      'Senin - Jumat: 07.30 - 15.00 WITA',
      'Sabtu: 08.00 - 13.00 WITA (Kantor)',
      'Minggu: Libur'
    ],
    link: null,
  },
]

const faqs = [
  { q: 'Bagaimana cara mendaftar PPDB online?', a: 'Kunjungi halaman PPDB, klik tombol "Daftar Sekarang", isi formulir, dan unggah berkas yang diperlukan. Tim kami akan memverifikasi dan menghubungi Anda.' },
  { q: 'Apakah SEMYOPAL II menerima siswa putri?', a: 'Ya, sejak tahun 2016 SEMYOPAL II menerima peserta didik perempuan. Baik putra maupun putri dapat mendaftar di seminari ini.' },
  { q: 'Jam belajar dan kegiatan harian seperti apa?', a: 'Senin-Jumat: 07.30-15.00 WITA (sekolah). Sore hari diisi dengan kegiatan formasi seminari, bimbingan rohani, dan ekstrakurikuler.' },
  { q: 'Apakah siswa diwajibkan tinggal di asrama?', a: 'Siswa seminari (calon imam) tinggal di asrama dengan bimbingan formator. Siswa putri dan putra reguler dapat memilih program harian atau asrama sesuai ketentuan.' },
  { q: 'Bagaimana prosedur izin sakit?', a: 'Orang tua mengisi formulir izin atau menghubungi wali kelas maksimal H+1. Sakit >3 hari wajib lampirkan surat dokter.' },
  { q: 'Apakah ada program beasiswa?', a: 'Ya, tersedia beasiswa bagi siswa berprestasi dan kurang mampu melalui program KIP dan beasiswa dari Keuskupan Ruteng.' },
]

export default function KontakPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    subjek: '',
    pesan: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')
    await new Promise(resolve => setTimeout(resolve, 1500))
    setFormStatus('success')
    setFormData({ nama: '', email: '', telepon: '', subjek: '', pesan: '' })
    setTimeout(() => setFormStatus('idle'), 5000)
  }

  return (
      <><Hero
        title="Hubungi Kami"
        subtitle="Kami Siap Membantu"
        description="Punya pertanyaan tentang PPDB, akademik, atau kegiatan seminari? Tim kami siap menjawab. Hubungi kami melalui formulir di bawah atau saluran kontak resmi."
        backgroundImage="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&h=1080&fit=crop"
        backgroundAlt="Kampus SEMYOPAL II Labuan Bajo"
      />

      <section className="section-container py-16 lg:py-24" aria-labelledby="contact-info-title">
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1 space-y-8">
            {contactInfo.map((item, index) => (
              <article key={item.title} className="card p-6 hover:shadow-card-hover transition-shadow duration-tesla">
                <div className="w-12 h-12 rounded-xl bg-primary-lighter flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-medium text-neutral-carbonDark mb-3">{item.title}</h3>
                <address className="not-italic space-y-1 text-body-text text-neutral-pewter">
                  {item.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </address>
                {item.link && (
                  <a
                    href={item.link.href}
                    target={item.link.external ? '_blank' : undefined}
                    rel={item.link.external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1 mt-4 btn-ghost text-sub-link"
                  >
                    {item.link.label}
                    <Building2 className="w-4 h-4" aria-hidden="true" />
                  </a>
                )}
              </article>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="card p-6 lg:p-8">
              <header className="mb-8">
                <h2 id="contact-form-title" className="font-display text-display-sm font-medium text-neutral-carbonDark mb-2">
                  Kirim Pesan ke Kami
                </h2>
                <p className="text-body-text text-neutral-pewter">
                  Isi formulir di bawah ini, tim kami akan merespons dalam 1x24 jam pada hari kerja.
                </p>
              </header>

              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-btn flex items-start gap-3" role="alert">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-green-800">Pesan Terkirim!</p>
                    <p className="text-green-700 text-sm">Terima kasih telah menghubungi kami. Tim kami akan merespons segera.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nama" className="block text-sm font-medium text-neutral-carbonDark mb-2">
                      Nama Lengkap <span className="text-primary" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="nama"
                      name="nama"
                      required
                      value={formData.nama}
                      onChange={handleChange}
                      className={cn(
                        'w-full px-4 py-3 bg-neutral-white border rounded-btn text-neutral-carbonDark placeholder-neutral-silverFog focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-tesla',
                        formStatus === 'error' && 'border-red-300'
                      )}
                      placeholder="Contoh: Yohanes Budi"
                      disabled={formStatus === 'submitting'}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-carbonDark mb-2">
                      Email <span className="text-primary" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={cn(
                        'w-full px-4 py-3 bg-neutral-white border rounded-btn text-neutral-carbonDark placeholder-neutral-silverFog focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-tesla',
                        formStatus === 'error' && 'border-red-300'
                      )}
                      placeholder="Contoh: budi@email.com"
                      disabled={formStatus === 'submitting'}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telepon" className="block text-sm font-medium text-neutral-carbonDark mb-2">
                      No. Telepon/WA
                    </label>
                    <input
                      type="tel"
                      id="telepon"
                      name="telepon"
                      value={formData.telepon}
                      onChange={handleChange}
                      className={cn(
                        'w-full px-4 py-3 bg-neutral-white border rounded-btn text-neutral-carbonDark placeholder-neutral-silverFog focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-tesla',
                        formStatus === 'error' && 'border-red-300'
                      )}
                      placeholder="Contoh: 0812-3456-7890"
                      disabled={formStatus === 'submitting'}
                    />
                  </div>
                  <div>
                    <label htmlFor="subjek" className="block text-sm font-medium text-neutral-carbonDark mb-2">
                      Subjek <span className="text-primary" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="subjek"
                      name="subjek"
                      required
                      value={formData.subjek}
                      onChange={handleChange}
                      className={cn(
                        'w-full px-4 py-3 bg-neutral-white border rounded-btn text-neutral-carbonDark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-tesla',
                        formStatus === 'error' && 'border-red-300'
                      )}
                      disabled={formStatus === 'submitting'}
                    >
                      <option value="">Pilih Subjek</option>
                      <option value="ppdb">PPDB / Pendaftaran Siswa Baru</option>
                      <option value="akademik">Akademik / Kurikulum</option>
                      <option value="kegiatan">Kegiatan / Ekstrakurikuler</option>
                      <option value="fasilitas">Fasilitas / Asrama</option>
                      <option value="keluhan">Keluhan / Saran</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="pesan" className="block text-sm font-medium text-neutral-carbonDark mb-2">
                    Pesan <span className="text-primary" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="pesan"
                    name="pesan"
                    required
                    rows={5}
                    value={formData.pesan}
                    onChange={handleChange}
                    className={cn(
                      'w-full px-4 py-3 bg-neutral-white border rounded-btn text-neutral-carbonDark placeholder-neutral-silverFog focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-tesla resize-y min-h-[120px]',
                      formStatus === 'error' && 'border-red-300'
                    )}
                    placeholder="Tulis pesan Anda di sini... (minimal 20 karakter)"
                    disabled={formStatus === 'submitting'}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="mt-1 w-4 h-4 text-primary border-neutral-paleSilver rounded focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  />
                  <label htmlFor="privacy" className="text-sm text-neutral-pewter cursor-pointer">
                    Saya menyetujui <a href="/kebijakan-privasi" className="text-primary hover:underline">Kebijakan Privasi</a> dan <a href="/syarat-ketentuan" className="text-primary hover:underline">Syarat & Ketentuan</a> pengumpulan data pribadi.
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto" loading={formStatus === 'submitting'}>
                  {formStatus === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5" aria-hidden="true" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" aria-hidden="true" />
                      Kirim Pesan
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-lightAsh py-16 lg:py-24" aria-labelledby="faq-title">
        <div className="section-container">
          <header className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
            <p className="text-primary font-medium text-sm mb-2">Pertanyaan Umum</p>
            <h2 id="faq-title" className="font-display text-display-md font-medium text-neutral-carbonDark">
              Tanya Jawab Umum
            </h2>
            <p className="text-body-text text-neutral-pewter mt-4">
              Temukan jawaban cepat untuk pertanyaan yang sering diajukan orang tua dan masyarakat.
            </p>
          </header>

          <div className="max-w-3xl mx-auto space-y-4" role="list">
            {faqs.map((faq, index) => (
              <details key={index} className="card group bg-neutral-white" role="listitem">
                <summary className="p-6 flex items-center justify-between cursor-pointer list-none group-open:pb-0">
                  <h3 className="font-display text-lg font-medium text-neutral-carbonDark pr-10">{faq.q}</h3>
                  <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-primary group-open:rotate-180 transition-transform duration-tesla" aria-hidden="true">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-neutral-pewter text-body-text">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container py-16 lg:py-24" aria-labelledby="maps-title">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-8">
            <h2 id="maps-title" className="font-display text-display-sm font-medium text-neutral-carbonDark mb-2">
              Lokasi Kami
            </h2>
            <p className="text-body-text text-neutral-pewter">
              SEMYOPAL II terletak di Labuan Bajo, kawasan yang strategis dan mudah dijangkau.
            </p>
          </header>
          <div className="aspect-video rounded-xl overflow-hidden border border-neutral-cloudGray">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.123456789!2d119.89!3d-8.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMjknNTQuOTYiUyAxMTnCsDUzJzI0LjM2IkU!5e0!3m2!1sid!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi SEMYOPAL II di Google Maps"
            ></iframe>
          </div>
          <div className="mt-6 text-center">
            <Button asChild variant="outline" size="md" className="w-full sm:w-auto">
              <a href="https://maps.google.com" className="inline-flex items-center justify-center w-full">
                Buka di Google Maps
              </a>
            </Button>
          </div>
        </div>
      </section>
  </>)
}
