export const defaultTheme = {
  colors: {
    blue: '#3294F8',
    'base-title': '#E7EDF4',
    'base-subtitle': '#C4D4E3',
    'base-text': '#AFC2D4',
    'base-span': '#7B96B2',
    'base-label': '#3A536B',
    'base-border': '#1C2F41',
    'base-post': '#112131',
    'base-profile': '#0B1B2B',
    'base-background': '#071422',
    'base-input': '#040F1A',
  },
  font: {
    family: '"Nunito", sans-serif',
    weight: {
      normal: 400,
      bold: 700,
    },
    size: {
      xs: '0.75rem', // 12px,
      sm: '0.875rem', // 14px
      md: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px

    },
  },
  'line-height': '160%',
} as const
