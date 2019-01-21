const palette = {
  primary: {
    main: '#F37861', // orange
    light: '#F9A791',
  },
  secondary: {
    main: '#3DC0B8', // green
  },
  tertiary: {
    main: '#FFFFFF', // white
  },
  quaternary: {
    dark: '#50aae1',
    main: '#74C6EC', // Blue
  },
  quinary: {
    main: '#777777', // grey
    light: '#EFEFEF',
    xlight: '#F7F7F7',
  },
  text: {
    primary: '#000000',
    secondary: '#FFFFFF',
  },
  disabled: {
    main: '#EFEFEF',
  },
}

const primaryFont = 'Kollektif, Helvetica, Arial, sans-serif'
const secondaryFont = 'Lato, Helvetica, Arial, sans-serif'

export default {
  palette,
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 64,
  },
  typography: {
    font: {
      default: primaryFont,
      h1: primaryFont,
      h2: secondaryFont,
      h3: secondaryFont,
      h4: secondaryFont,
      h5: secondaryFont,
      h6: secondaryFont,
    },
    sizes: {
      xs: 12,
      sm: 14,
      default: 16,
      lg: 18,
      xl: 26,
      xxl: 30,
      // tags
      h1: 24,
      h2: 22,
      h3: 20,
      h4: 18,
      h5: 16,
      h6: 14,
    },
    weights: {
      light: 300,
      regular: 400,
      bold: 700,
      // tags
      h1: 700,
      h2: 300,
      h3: 300,
      h4: 300,
      h5: 300,
      h6: 400,
      p: 400,
      default: 400,
    },
    color: {
      default: 'inherit',
      primary: palette.text.primary,
      secondary: palette.text.secondary,
      // tags
      h1: palette.primary.main,
    },
  },
}
