/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Safelist critical classes that might be dynamically generated
  safelist: [
    'bg-primary',
    'bg-primary-dark',
    'bg-primary-light',
    'text-primary',
    'text-primary-dark',
    'text-primary-light',
    'border-primary',
    'border-primary-dark',
    'border-primary-light',
    'hover:bg-primary',
    'hover:bg-primary-dark',
    'hover:bg-primary-light',
    'hover:text-primary',
    'hover:text-primary-dark',
    'hover:text-primary-light',
  ],
  // Ensure important styles are not purged
  important: false,
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e40af',
          dark: '#1e3a8a',
          light: '#3b82f6',
        },
      },
    },
  },
  plugins: [],
  // Prevent aggressive purging in production
  corePlugins: {
    preflight: true,
  },
}

