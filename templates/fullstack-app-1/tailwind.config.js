/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Purple - Matches dumpsters
        brand: {
          purple: '#4e37a8',
          'purple-dark': '#3d2d8a',
          'purple-light': '#6b5ce6',
        },
        // Trust Blue - Phone numbers, trust elements
        trust: {
          blue: '#2563eb',
          'blue-dark': '#1d4ed8',
        },
        // Action Orange - Call buttons
        action: {
          orange: '#f97316',
          'orange-dark': '#ea580c',
        },
        // Success Green - Order/Confirm buttons
        success: {
          green: '#10b981',
          'green-dark': '#059669',
        },
      },
    },
  },
  plugins: [],
}

