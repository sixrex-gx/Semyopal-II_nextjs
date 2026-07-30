/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E7D32',     // School Green - Primary CTA
          light: '#43A047',       // Hover state
          dark: '#1B5E20',        // Active state
          lighter: '#E8F5E9',     // Light background
        },
        accent: {
          gold: '#FFB300',        // Gold accent for achievements
          goldLight: '#FFD54F',
          goldDark: '#FFA000',
        },
        neutral: {
          white: '#FFFFFF',
          lightAsh: '#F4F4F4',    // Light section backgrounds
          carbonDark: '#171A20',  // Primary headings
          graphite: '#393C41',    // Body text
          pewter: '#5C5E62',      // Secondary text
          silverFog: '#8E8E8E',   // Placeholders
          cloudGray: '#EEEEEE',   // Light borders
          paleSilver: '#D0D1D2',  // Subtle borders
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        text: ['var(--font-text)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero-title': ['2.5rem', { lineHeight: '1.2', letterSpacing: 'normal', fontWeight: '500' }],  // 40px
        'product-name': ['1.0625rem', { lineHeight: '1.18', letterSpacing: 'normal', fontWeight: '500' }],  // 17px
        'nav-item': ['0.875rem', { lineHeight: '1.2', letterSpacing: 'normal', fontWeight: '500' }],  // 14px
        'body-text': ['0.875rem', { lineHeight: '1.43', letterSpacing: 'normal', fontWeight: '400' }],  // 14px
        'button-label': ['0.875rem', { lineHeight: '1.2', letterSpacing: 'normal', fontWeight: '500' }],  // 14px
        'sub-link': ['0.875rem', { lineHeight: '1.43', letterSpacing: 'normal', fontWeight: '400' }],  // 14px
        'promo-text': ['1.375rem', { lineHeight: '0.91', letterSpacing: 'normal', fontWeight: '400' }],  // 22px
        'category-label': ['1rem', { lineHeight: '1.5', letterSpacing: 'normal', fontWeight: '500' }],  // 16px
        'display-md': ['2rem', { lineHeight: '1.3', letterSpacing: 'normal', fontWeight: '500' }],    // 32px
        'display-sm': ['1.5rem', { lineHeight: '1.3', letterSpacing: 'normal', fontWeight: '500' }],   // 24px
      },
      spacing: {
        'base': '0.5rem',      // 8px
        'button': '0.25rem',   // 4px
        'nav-item': '0.25rem 1rem',  // 4px 16px
        'section': '1.34rem',  // 21.44px
        'card-gap': '1rem',    // 16px
      },
      borderRadius: {
        'none': '0',
        'btn': '4px',
        'card': '12px',
        'full': '50%',
      },
      transitionDuration: {
        'tesla': '330ms',
      },
      transitionTimingFunction: {
        'tesla': 'cubic-bezier(0.5, 0, 0, 0.75)',
      },
      boxShadow: {
        'none': 'none',
        'frost': 'inset 0 0 0 1px rgba(255,255,255,0.75)',
        'overlay': '0 0 0 100vh rgba(128,128,128,0.65)',
        'subtle': '0 0 0 2px rgba(0,0,0,0.05)',
        'card-hover': '0 2px 20px rgba(0,0,0,0.08)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(23,26,32,0.6) 0%, rgba(23,26,32,0.3) 100%)',
      },
      screens: {
        'mobile': '640px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
        'wide': '1440px',
      },
      maxWidth: {
        'container': '86.4375rem', // 1383px
        'content': '72rem',       // 1152px
      },
      zIndex: {
        'nav': '100',
        'dropdown': '99',
        'modal': '200',
        'toast': '300',
      },
    },
  },
  plugins: [],
}