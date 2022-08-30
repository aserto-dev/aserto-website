module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        aserto: {
          black: '#121212',
          grey: {
            5: '#1E1E1E',
            10: '#2A2A2A',
            20: '#414141',
            30: '#595959',
            40: '#717171',
            50: '#888888',
            60: '#A0A0A0',
            70: '#B8B8B8',
            80: '#D0D0D0',
            90: '#E7E7E7'
          },
          lochivar: {
            10: '#141D1D',
            20: '#162828',
            30: '#183334',
            40: '#1A3E3F',
            50: '#1C484A',
            60: '#1F5355',
            70: '#215E60',
            80: '#23696C',
            90: '#257477',
            100: '#277F82',
            'accent-10': '#2F989C',
            'accent-20': '#36B1B5',
            'accent-30': '#3ECACF',
            'accent-40': '#67CBCF',
            'accent-50': '#79eef2;'
          },
          indigo: {
            10: '#161B23',
            20: '#192435',
            30: '#1D2D46',
            40: '#213757',
            50: '#254069',
            60: '#28497A',
            70: '#2C528B',
            80: '#305B9D',
            90: '#3364AE',
            100: '#376EBF',
            'accent-10': '#3D79D4',
            'accent-20': '#4385E8',
            'accent-30': '#4A92FF',
            'accent-40': '#7DB1FF'
          },
          apple: {
            10: '#162316',
            20: '#19351B',
            30: '#1D461F',
            40: '#215723',
            50: '#256927',
            60: '#287A2C',
            70: '#2C8B30',
            80: '#309D34',
            90: '#33AE38',
            100: '#37BF3D',
            'accent-10': '#3DD444',
            'accent-20': '#43E84A',
            'accent-30': '#49FF51',
            'accent-40': '#7DFF83'
          },
          mojo: {
            10: '#231616',
            20: '#351919',
            30: '#461D1D',
            40: '#572121',
            50: '#692525',
            60: '#7A2828',
            70: '#8B2C2C',
            80: '#9D3030',
            90: '#AE3333',
            100: '#BF3737',
            'accent-10': '#D43D3D',
            'accent-20': '#E84343',
            'accent-30': '#FF4A4A',
            'accent-40': '#FF7D7D'
          },
          copper: {
            10: '#231C16',
            20: '#352619',
            30: '#46311D',
            40: '#573B21',
            50: '#694525',
            60: '#7A5028',
            70: '#8B5A2C',
            80: '#9D6430',
            90: '#AE6E33',
            100: '#BF7937',
            'accent-10': '#D4853D',
            'accent-20': '#E89243',
            'accent-30': '#FFA14A',
            'accent-40': '#FFBB7D'
          },
          plum: {
            10: '#1B1625',
            20: '#231A37',
            30: '#2C1E4A',
            40: '#35225C',
            50: '#3E266F',
            60: '#462B82',
            70: '#4F2F94',
            80: '#5833A7',
            90: '#6137B9',
            100: '#693BCC',
            'accent-10': '#7441E0',
            'accent-20': '#7E47F5',
            'accent-30': '#844AFF',
            'accent-40': '#A77DFF'
          }
        }
      },
      maxWidth: {
        container: '78rem'
      },
      spacing: {
        14.25: '3.625rem',
        14.5: '3.75rem',
        16.5: '4.5rem'
      },
      screens: {
        sxl: '1300px'
      },
      boxShadow: {
        header: '0px 1px 0px rgba(65, 65, 65, 1)',
        dropdown: '0px 1px 0px #414141',
        input: '0px 0px 0px 2px rgba(39, 127, 130, 0.6)',
        modal: '0px 2px 22px 8px rgba(70, 210, 215, 0.6)',
        contact: '0px 0px 8px 2px rgba(0, 0, 0, 0.2)',
        quickstart: '0px 0px 18px 6px rgba(62, 202, 207, 0.8)'
      },
      backgroundImage: {
        modal:
          'radial-gradient(circle at center, #3ecacf -100%, rgba(18, 18, 18, 0) 100% )',
        hero: 'linear-gradient(180deg, #2F9195 0%, #183334 30%)',
        benefitsCta: 'linear-gradient(0, #23696C 0%, #121212 80%)',
        homepageGlow:
          'radial-gradient(50% 50% at 50% 50%, rgba(62, 202, 207, 0.8) 0%, rgba(62, 202, 207, 0) 100%)',
        featureHero:
          'linear-gradient(180deg, #2F9195 0%, #183334 20%, #121212 80%)',
        featureCta: 'linear-gradient(0, #23696C 0%, #121212 25%)',
        goodbye: 'linear-gradient(0deg, #121212 0%, #414141 100%)',
        resourceHero:
          'linear-gradient(180deg, #2F9195 0%, #183334 40%, #121212 60%)',
        resourceIntro:
          'linear-gradient(0, #2F9195 0%, #183334 40%, #121212 60%)'
      },
      fontFamily: {
        roboto: 'var(--font-roboto)'
      },
      fontSize: {
        '1.5xl': '1.375rem',
        '2.5xl': '1.75rem',
        '4.5xl': '2.5rem',
        '6.5xl': '4rem',
        '7.5xl': '5rem'
      }
    }
  },
  variants: {
    extend: {
      opacity: ['group-hover']
    }
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar-hide')]
}
