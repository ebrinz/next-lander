const vars = require( './config/params.json')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    // fontFamily: {
    //   sans: [ ...defaultTheme.fontFamily.sans],
    //  },
    extend: {
      fontFamily: {
        "title": ["Northumbria"],
        "body": ["Elegant"]
       },
      colors: {
        toptitle: vars.colors.topbarTitleColor,
        toptitlebg: vars.colors.topbarBackgroundColor,
        titlebrd: vars.colors.topbarRingColor,
        bodybg: vars.colors.topbarRingColorbodyBackgroundColor,
        menutxt: vars.colors.menuTitleColor,
        cardbg: vars.colors.cardBackgroundColor,
        cardtxt: vars.colors.cardTitleColor,
        cardbrd: vars.colors.cardRingColor
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
        'fit': '100vw'
      },
      boxShadow: {
        toptitle: '0 20px ' + vars.colors.topbarShadowSize + 'px 0px ' + vars.colors.topbarShadowColor,
        card: '0 20px ' + vars.colors.cardShadowSize + 'px -5px ' + vars.colors.cardShadowColor,
        cardhvr: '0 20px ' + vars.colors.cardShadowHoverSize + 'px -5px ' + vars.colors.cardShadowHoverColor
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  corePlugins: {
    preflight: false,
  },
}