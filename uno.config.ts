import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      'theme-color': '#2196f3'
    }
  },
  shortcuts: [
    {
      'flex-center': 'flex items-center justify-center'
    },
    {
      'flex-col-center': 'flex flex-col items-center justify-center'
    }
  ],
  rules: [
    [
      'p-safe',
      {
        padding:
          'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)'
      }
    ],
    ['pt-safe', { 'padding-top': 'env(safe-area-inset-top)' }],
    ['pb-safe', { 'padding-bottom': 'env(safe-area-inset-bottom)' }],
    [
      'ptb-safe',
      {
        'padding-top': 'env(safe-area-inset-top)',
        'padding-bottom': 'env(safe-area-inset-bottom)'
      }
    ],
    [
      'theme-color',
      {
        color: '#3AB4EC'
      }
    ],
    [
      'page-bg-color',
      {
        'background-color': '#F0F3F5'
      }
    ],
    [
      'theme-bg-color',
      {
        'background-color': '#3AB4EC'
      }
    ],
    [
      'main-text-color',
      {
        color: '#6D7479'
      }
    ],
    [/^font-(\d+)$/, ([, d]) => ({ 'font-size': `${Number(d)}px` })],
    [/^m-(\d+)$/, ([, d]) => ({ margin: `${Number(d)}px` })],
    [/^gap-(\d+)$/, ([, d]) => ({ gap: `${Number(d)}px` })],
    [/^p-(\d+)$/, ([, d]) => ({ padding: `${Number(d)}px` })],
    [/^pt-(\d+)$/, ([, d]) => ({ 'padding-top': `${Number(d)}px` })],
    [
      /^pb-(\d+)$/,
      ([, d]) => {
        return { 'padding-bottom': `${Number(d)}px` }
      }
    ],
    [/^pl-(\d+)$/, ([, d]) => ({ 'padding-left': `${Number(d)}px` })],
    [/^pr-(\d+)$/, ([, d]) => ({ 'padding-right': `${Number(d)}px` })],
    [/^mt-(\d+)$/, ([, d]) => ({ 'margin-top': `${Number(d)}px` })],
    [/^mb-(\d+)$/, ([, d]) => ({ 'margin-bottom': `${Number(d)}px` })],
    [/^ml-(\d+)$/, ([, d]) => ({ 'margin-left': `${Number(d)}px` })],
    [/^mr-(\d+)$/, ([, d]) => ({ 'margin-right': `${Number(d)}px` })],
    [/^w-(\d+)$/, ([, d]) => ({ width: `${Number(d)}px` })],
    [/^h-(\d+)$/, ([, d]) => ({ height: `${Number(d)}px` })],
    [/^leading-(\d+)$/, ([, d]) => ({ 'line-height': `${Number(d)}px` })],
    [
      /^mx-(\d+)$/,
      ([, d]) => ({
        'margin-left': `${Number(d)}px`,
        'margin-right': `${Number(d)}px`
      })
    ],
    [
      /^my-(\d+)$/,
      ([, d]) => ({
        'margin-top': `${Number(d)}px`,
        'margin-bottom': `${Number(d)}px`
      })
    ],
    [
      /^px-(\d+)$/,
      ([, d]) => ({
        'padding-left': `${Number(d)}px`,
        'padding-right': `${Number(d)}px`
      })
    ],
    [
      /^py-(\d+)$/,
      ([, d]) => ({
        'padding-top': `${Number(d)}px`,
        'padding-bottom': `${Number(d)}px`
      })
    ],
    [/^rounded-(\d+)$/, ([, d]) => ({ 'border-radius': `${Number(d)}px` })],
    [
      /^rounded-t-(\d+)$/,
      ([, d]) => ({
        'border-top-left-radius': `${Number(d)}px`,
        'border-top-right-radius': `${Number(d)}px`
      })
    ],
    [
      /^rounded-b-(\d+)$/,
      ([, d]) => ({
        'border-bottom-left-radius': `${Number(d)}px`,
        'border-bottom-right-radius': `${Number(d)}px`
      })
    ],
    [
      /^rounded-l-(\d+)$/,
      ([, d]) => ({
        'border-top-left-radius': `${Number(d)}px`,
        'border-bottom-left-radius': `${Number(d)}px`
      })
    ],
    [
      /^rounded-r-(\d+)$/,
      ([, d]) => ({
        'border-top-right-radius': `${Number(d)}px`,
        'border-bottom-right-radius': `${Number(d)}px`
      })
    ],
    [/^max-w-(\d+)$/, ([, d]) => ({ 'max-width': `${Number(d)}px` })],
    [/^min-w-(\d+)$/, ([, d]) => ({ 'min-width': `${Number(d)}px` })],
    [/^max-h-(\d+)$/, ([, d]) => ({ 'max-height': `${Number(d)}px` })],
    [/^min-h-(\d+)$/, ([, d]) => ({ 'min-height': `${Number(d)}px` })],
    [/^top-(\d+)$/, ([, d]) => ({ top: `${Number(d)}px` })],
    [/^bottom-(\d+)$/, ([, d]) => ({ bottom: `${Number(d)}px` })],
    [/^left-(\d+)$/, ([, d]) => ({ left: `${Number(d)}px` })],
    [/^right-(\d+)$/, ([, d]) => ({ right: `${Number(d)}px` })],
    [
      /limit-(\d+)$/,
      ([, d]) => ({
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        '-webkit-line-clamp': `${Number(d)}`,
        display: '-webkit-box',
        '-webkit-box-orient': 'vertical'
      })
    ]
  ]
})
