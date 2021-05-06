module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ds: {
          accent: '#277F82',
          background: '#141414',
          black: '#1E1E1E',
          'black-light': '#2A2A2A',
          blog: '#0A0A0C',
          carnation: '#FD555D',
          charcoal: '#050520',
          fog: '#C5C6D4',
          gray: '#999999',
          'gray-3': '#333333',
          'gray-6': '#666666',
          indigo: '#585be0',
          pewter: '#81839F',
          'pewter-text': '#6f708a',
          pollen: '#FFC76B',
          saphire: '#3A0CA3',
          seaform: '#17C3B2'
        }
      },
      maxWidth: {
        container: '78rem'
      },
      spacing: {
        14.5: '3.75rem',
        16.5: '4.5rem'
      },
      boxShadow: {
        input: '0px 0px 0px 9px rgba(129, 131, 159, 0.1)',
        card:
          '0px 10px 10px rgba(74,74,139,0.04), 0px 20px 25px rgba(74,74,139,0.1)',
        author: '0px 0px 0px 8px rgba(129, 131, 159, 0.08)'
      },
      letterSpacing: {
        h4: '0.2em'
      },
      fontFamily: {
        book: 'var(--font-book)'
      },
      fontSize: {
        '1.5xl': '1.375rem',
        '2.5xl': '1.75rem',
        '4.5xl': '2.5rem',
        '7.5xl': '5rem'
      }
    }
  },
  variants: {
    extend: {
      opacity: ['group-hover']
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
