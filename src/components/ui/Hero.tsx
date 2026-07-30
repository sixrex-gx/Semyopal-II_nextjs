'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  primaryAction?: {
    label: string
    href: string
  }
  secondaryAction?: {
    label: string
    href: string
  }
  backgroundImage?: string
  backgroundAlt?: string
  children?: ReactNode
  className?: string
  stats?: Array<{ value: string; label: string }>
  isHome?: boolean
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
  backgroundAlt,
  children,
  className,
  stats,
  isHome = false,
}: HeroProps) {
  return (
    <section className={cn('hero-section relative', className)} aria-labelledby="hero-title">
      {backgroundImage && (
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src={backgroundImage}
            alt={backgroundAlt || ''}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-carbonDark/60 via-neutral-carbonDark/40 to-neutral-carbonDark/20" />
        </div>
      )}

      <div className="relative z-10 section-container px-4 md:px-8 lg:px-16 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {subtitle && (
            <p className="text-promo-text text-neutral-white/90 font-text font-normal mb-4">
              {subtitle}
            </p>
          )}

          <h1
            id="hero-title"
            className="font-display text-hero-title font-medium text-neutral-white mb-6 text-balance"
          >
            {title}
          </h1>

          {description && (
            <p className="text-lg text-neutral-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              {description}
            </p>
          )}

          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {primaryAction && (
                <Button
                  asChild
                  size="lg"
                  variant="primary"
                  className="w-full sm:w-auto min-w-[200px]"
                >
                  <a href={primaryAction.href}>{primaryAction.label}</a>
                </Button>
              )}
              {secondaryAction && (
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto min-w-[200px]"
                >
                  <a href={secondaryAction.href}>{secondaryAction.label}</a>
                </Button>
              )}
            </div>
          )}

          {children && (
            <div className="mt-12">
              {children}
            </div>
          )}

          {stats && stats.length > 0 && (
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8" role="list" aria-label="Statistik sekolah">
              {stats.map((stat, index) => (
                <div key={index} className="text-center" role="listitem">
                  <div className="font-display text-4xl md:text-5xl font-medium text-neutral-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-white/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {isHome && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <svg className="w-6 h-6 text-neutral-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      )}
    </section>
  )
}