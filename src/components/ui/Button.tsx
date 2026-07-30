import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, loading = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    const baseStyles = 'inline-flex items-center justify-center text-button-label rounded-btn transition-all duration-tesla ease-tesla focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]'

    const variants = {
      primary: 'bg-primary text-neutral-white hover:bg-primary-light focus:ring-primary hover:shadow-[0_4px_20px_rgba(46,125,50,0.3)]',
      secondary: 'bg-neutral-white text-neutral-carbonDark border border-neutral-pewter hover:bg-neutral-lightAsh hover:border-neutral-graphite focus:ring-neutral-pewter',
      ghost: 'text-neutral-graphite hover:text-primary hover:underline',
      outline: 'border-2 border-primary text-primary bg-transparent hover:bg-primary-lighter focus:ring-primary',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm min-h-[36px]',
      md: 'px-6 py-3 text-button-label min-h-[44px]',
      lg: 'px-8 py-4 text-button-label min-h-[48px]',
      xl: 'px-10 py-5 text-lg min-h-[56px]',
    }

    return (
      <Comp
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {asChild ? children : (
          <>
            {loading && (
              <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            )}
            {children}
          </>
        )}
      </Comp>
    )
  }
)

Button.displayName = 'Button'

export { Button }