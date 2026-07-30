import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
  style?: Record<string, string>
}

export function Card({ children, className, hover = true, padding = 'md', style }: CardProps) {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return (
    <article
      className={cn(
        'card bg-neutral-white',
        hover && 'group',
        paddings[padding],
        className
      )}
      style={style}
    >
      {children}
    </article>
  )
}

interface CardImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  height?: number
}

export function CardImage({ src, alt, className, priority = false, height = 200 }: CardImageProps) {
  return (
    <div className={cn('relative overflow-hidden rounded-t-lg', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className={cn('card-image object-cover', priority && 'eager-load')}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-carbonDark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
    </div>
  )
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn('card-content', className)}>
      {children}
    </div>
  )
}

interface CardTitleProps {
  children: ReactNode
  className?: string
  as?: 'h2' | 'h3' | 'h4'
  level?: 2 | 3 | 4
}

export function CardTitle({ children, className, as = 'h3', level = 3 }: CardTitleProps) {
  const Tag = as
  return (
    <Tag className={cn('font-display text-product-name font-medium text-neutral-carbonDark mb-2', className)}>
      {children}
    </Tag>
  )
}

interface CardDescriptionProps {
  children: ReactNode
  className?: string
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn('text-body-text text-neutral-graphite mb-4', className)}>
      {children}
    </p>
  )
}

interface CardFooterProps {
  children: ReactNode
  className?: string
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn('flex items-center gap-2 pt-4 border-t border-neutral-cloudGray', className)}>
      {children}
    </div>
  )
}

interface CardLinkProps {
  children: ReactNode
  href: string
  className?: string
  external?: boolean
}

export function CardLink({ children, href, className, external = false }: CardLinkProps) {
  return (
    <a
      href={href}
      className={cn('btn-ghost text-sub-link', className)}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  )
}

export { Card as default }