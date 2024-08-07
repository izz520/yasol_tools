import type { Config } from 'tailwindcss'

const { fontFamily } = require('tailwindcss/defaultTheme')
const config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // custom
        cardBg: 'var(--card-bg)',
        fontPrimary: 'var(--font-primary)',
        fontSecondary: 'var(--font-secondary)',
        fontHover: 'var(--font-hover)',
        green2: 'var(--green-2)',
        green6: 'var(--green-6)',
        orange2: 'var(--orange-2)',
        orange6: 'var(--orange-6)',
        orange8: 'var(--orange-8)',
        // shadcn
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primaryHover: 'hsl(var(--primary-hover))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      backgroundColor: {
        bgPrimary: 'var(--bg-primary)',
        fontSecondary: 'var(--font-secondary)',
        bgSecondary: 'var(--bg-secondary)',
        green2: 'var(--green-2)',
        green6: 'var(--green-6)',
        orange2: 'var(--orange-2)',
        orange6: 'var(--orange-6)',
        orange8: 'var(--orange-8)',
      },
      borderColor: {
        borderPrimary: 'var(--border-primary)',
        borderSecondary: 'var(--font-secondary)',
        borderDashed: 'var(--border-secondary)',
        green2: 'var(--green-2)',
        green6: 'var(--green-6)',
        orange2: 'var(--orange-2)',
        orange6: 'var(--orange-6)',
        orange8: 'var(--orange-8)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
