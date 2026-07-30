'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Card, CardImage, CardContent, CardTitle, CardDescription, CardFooter, CardLink } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

interface CardGridProps {
  items: Array<{
    title: string
    description: string
    image?: string
    imageAlt?: string
    href: string
    linkText?: string
    category?: string
  }>
  columns?: 1 | 2 | 3 | 4
  gap?: 'sm' | 'md' | 'lg'
  className?: string
  title?: string
  subtitle?: string
  viewAllHref?: string
  viewAllText?: string
}

export default function CardGrid({
  items,
  columns = 3,
  gap = 'md',
  className,
  title,
  subtitle,
  viewAllHref,
  viewAllText = 'Lihat Semua',
}: CardGridProps) {
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  }

  return (
    <section className={cn('section-container', className)} aria-labelledby={title ? 'card-grid-title' : undefined}>
      {(title || subtitle) && (
        <header className="text-center mb-12 lg:mb-16">
          {subtitle && (
            <p className="text-primary font-medium text-sm mb-2">
              {subtitle}
            </p>
          )}
          {title && (
            <h2 id="card-grid-title" className="font-display text-display-md font-medium text-neutral-carbonDark">
              {title}
            </h2>
          )}
        </header>
      )}

      <div
        className={cn(
          'grid',
          columnClasses[columns],
          gapClasses[gap],
        )}
        role="list"
      >
        {items.map((item, index) => (
          <Card
            key={item.href}
            hover>
            {item.image && (
              <CardImage
                src={item.image}
                alt={item.imageAlt || item.title}
                priority={index < 3}
                height={200}
              />
            )}
            <CardContent>
              {item.category && (
                <span className="inline-block px-2 py-1 text-xs font-medium text-primary bg-primary-lighter rounded-btn mb-3">
                  {item.category}
                </span>
              )}
              <CardTitle as="h3" level={3}>
                {item.title}
              </CardTitle>
              <CardDescription>
                {item.description}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <CardLink href={item.href}>
                {item.linkText || 'Selengkapnya'}
              </CardLink>
            </CardFooter>
          </Card>
        ))}
      </div>

      {viewAllHref && (
        <div className="text-center mt-10 lg:mt-16">
          <Button asChild variant="outline" size="md">
            <a href={viewAllHref}>{viewAllText}</a>
          </Button>
        </div>
      )}
    </section>
  )
}