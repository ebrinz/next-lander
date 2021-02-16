const vars = require( './config/params.json')
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        "title": ["Title"],
        "body": ["Elegant"]
       },
      colors: {
        toptitle: vars.colors.topbarTitleColor,
        iconcolor: vars.colors.topbarIconColor,
        toplink: vars.colors.topbarLinkIconColor,
        toplinkRO: vars.colors.topbarLinkIconRolloverColor,
        toptitlebg: vars.colors.topbarBackgroundColor,
        titlebrd: vars.colors.topbarRingColor,
        bodybg: vars.colors.topbarRingColorbodyBackgroundColor,
        topmenutxt: vars.colors.topBarMenuTagColor,

        menutxt: vars.colors.menuTagColor,
        menuUnderSt: vars.colors.menuTagUnderbarColorStart,
        menuUnderEn: vars.colors.menuTagUnderbarColorEnd,
        
        cardTopbg: vars.colors.cardTopBackgroundColor,
        cardBodybg: vars.colors.cardBodyBackgroundColor,
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
        'fit': '100vw',
        'titleLg': vars.titleSize + 'px',
        'titleMb': vars.mobileTitleSize + 'px'

      },
      boxShadow: {
        toptitle: '0 20px ' + vars.colors.topbarShadowSize + 'px 0px ' + vars.colors.topbarShadowColor,
        card: '0 20px ' + vars.colors.cardShadowSize + 'px -5px ' + vars.colors.cardShadowColor,
        cardhvr: '0 20px ' + vars.colors.cardShadowHoverSize + 'px -5px ' + vars.colors.cardShadowHoverColor,
        menuhvr: '0px 10px 10px -10px' + vars.colors.cardShadowHoverColor
      },
      transitionProperty: {
        none: 'none',
        all: 'all',
        default: 'background-color, border-color, color, opacity, transform',
        colors: 'background-color, border-color, color',
        height: 'height',
        width: 'width',
        opacity: 'opacity',
        transform: 'transform',
       },
       transitionDuration: {
        '1000': '1000ms',
        '2000': '2000ms',
       }
    },
  },
  variants: {
    extend: {
      width: ['hover', 'after', 'hover_after'],
      height: ['hover', 'after', 'hover_after'],
      display: ['hover', 'after', 'hover_after'],
      position: ['hover', 'after', 'hover_after'],
      backgroundColor: ['hover', 'after', 'hover_after'],
      borderRadius: ['hover', 'after', 'hover_after'],
      transitionProperty: ['hover', 'after', 'hover_after'],
      transitionDuration: ['hover', 'after', 'hover_after'],
      boxShadow: ['group-hover', 'hover']
    }
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
    require('@tailwindcss/typography'),
    plugin(function({ addComponents }) {
      addComponents({
            '@font-face': {
              'font-family': 'Title',
              'font-weight': '200',
              'src': `url(${vars.titleFont})`
            }
      })
    })
  ],
  corePlugins: {
    preflight: false,
  },
}
