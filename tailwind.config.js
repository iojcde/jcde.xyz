const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  mode:'jit',
  purge: ['./components/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './pages/*.{js,ts,jsx,tsx,mdx}', './pages/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  prefix: '',
  separator: ':',
  theme: {
    fontFamily: {
      'mono': ['JetBrains Mono', 'monospace']
    },
    container: {
      center: true
    },
    colors:{
      gray: {
        '100': '#f5f5f5',
        '200': '#eeeeee',
        '300': '#e0e0e0',
        '400': '#bdbdbd',
        '500': '#9e9e9e',
        '600': '#757575',
        '700': '#616161',
        '800': '#424242',
        '900': '#212121'
      },
      white: colors.white,
      black: colors.black,
      red: colors.red,
      yellow: colors.yellow,
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.red.500'),
              'text-decoration': 'none',
              '&:hover, &.active': {
                color: 'white',
                'background-color': theme('colors.red.500'),
                strong: {
                  color: 'white'
                },
              },
            },
            strong: {
              color: theme('colors.red.500')
            },
            h1: {
              color: theme('colors.gray.800'),
              'font-size': '2.5rem',
              'margin-top': '1rem',
              'margin-bottom': '0.5rem'
            },
            h2: {
              color: theme('colors.gray.800'),
              'font-size':'1.8rem',
              'margin-top': '0.5rem',
              'font-weight':'500'

            },
            h3: {
              color: theme('colors.gray.800'),
              'margin-top': '1rem',
            },
            h4: {
              color: theme('colors.gray.800'),
              'margin-top': '1rem',
            },
            code: {
              color: 'white',
              'background-color': theme('colors.gray.800'),
              '&:before, &:after': {
                display: 'none'
              }
            },
            p: {
              color: theme('colors.gray.800'),
              'margin-top': '0',
              'margin-bottom': '1em'
            },
            img: {
              'margin-top': '0',
              'margin-bottom': '0',
              'cornder-radius':'5px',
              'box-shadow':'0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            },
            'ul > li': {
              '&::before': {
                'background-color': theme('colors.gray.800')+' !important',
                'font-weight': 'bold'
              }
            },
            'ol > li': {
              '&::before': {
                'color': theme('colors.gray.800'),
                'font-weight': 'bold'
              }
            }
          },
        },

        dark: {
          css: {
            color: 'white',
            a: {
              color: theme('colors.red.500'),
              'text-decoration': 'none',
              '&:hover, &.active': {
                color: 'white',
                'background-color': theme('colors.red.500'),
              },
            },
            strong: {
              color: theme('colors.red.500')
            },
            h1: {
              color: 'white',
              'margin-top': '0'
            },
            h2: {
              color: 'white',
              'margin-top': '0'
            },
            h3: {
              color: 'white',
              'margin-top': '0'
            },
            h4: {
              color: 'white',
              'margin-top': '0'
            },
            code: {
              color: theme('colors.gray.800'),
              'background-color': 'white',
              '&:before, &:after': {
                display: 'none'
              }
            },
            p: {
              color: 'white',
              'margin-top': '0',
              'margin-bottom': '1em'
            },
            img: {
              'margin-top': '0',
              'margin-bottom': '0',
              'box-shadow': '0px 2px 4px -2px rgba(255, 255, 255, 30%)'
            },
            'ul > li': {
              '&::before': {
                'background-color': 'white',
                'font-weight': 'bold'
              }
            },
            'ol > li': {
              '&::before': {
                color: 'white',
                'font-weight': 'bold'
              }
            }
          }
        },
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  variants: {
    extend: {
      borderWidth: ['last'],
      transitionDuration: ['hover'],
      transitionProperty: ['hover'],
      margin: ['last','group-hover'],
      padding: ['last', 'hover'],
      height: ['group-hover'],
      typography: ['dark']
    }
  } 
};
