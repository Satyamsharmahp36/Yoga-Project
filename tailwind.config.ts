import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        cormorant: ['var(--font-cormorant)'],
      },
      colors: {
        primary: {
          DEFAULT: 'rgb(139, 115, 85)', // #8B7355 earth brown
          50: 'rgb(248, 246, 243)',
          100: 'rgb(241, 237, 231)',
          200: 'rgb(227, 218, 206)',
          300: 'rgb(213, 199, 181)',
          400: 'rgb(185, 161, 131)',
          500: 'rgb(139, 115, 85)', // main
          600: 'rgb(125, 104, 77)',
          700: 'rgb(104, 87, 64)',
          800: 'rgb(83, 69, 51)',
          900: 'rgb(68, 57, 42)',
        },
        secondary: {
          DEFAULT: 'rgb(74, 93, 35)', // #4A5D23 sage green
          50: 'rgb(247, 249, 244)',
          100: 'rgb(238, 243, 233)',
          200: 'rgb(221, 231, 211)',
          300: 'rgb(204, 219, 189)',
          400: 'rgb(170, 195, 145)',
          500: 'rgb(74, 93, 35)', // main
          600: 'rgb(67, 84, 32)',
          700: 'rgb(56, 70, 27)',
          800: 'rgb(44, 56, 21)',
          900: 'rgb(37, 46, 18)',
        },
        accent: {
          DEFAULT: 'rgb(212, 197, 185)', // #D4C5B9 light sand
          50: 'rgb(251, 249, 247)',
          100: 'rgb(247, 243, 239)',
          200: 'rgb(239, 231, 223)',
          300: 'rgb(231, 219, 207)',
          400: 'rgb(221, 208, 196)',
          500: 'rgb(212, 197, 185)', // main
          600: 'rgb(191, 177, 166)',
          700: 'rgb(159, 148, 139)',
          800: 'rgb(127, 118, 111)',
          900: 'rgb(104, 97, 91)',
        },
        'deep-brown': 'rgb(44, 24, 16)', // #2C1810
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3': ['1.75rem', { lineHeight: '1.4' }],
        'h4': ['1.5rem', { lineHeight: '1.4' }],
        'h5': ['1.25rem', { lineHeight: '1.5' }],
        'h6': ['1.125rem', { lineHeight: '1.5' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
        'xs': ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-up': 'scaleUp 0.3s ease-out forwards',
        'bounce-soft': 'bounceSoft 2s infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSoft: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'earth-gradient': 'linear-gradient(135deg, rgb(139, 115, 85) 0%, rgb(74, 93, 35) 100%)',
        'sand-gradient': 'linear-gradient(135deg, rgb(212, 197, 185) 0%, rgb(255, 255, 255) 100%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;