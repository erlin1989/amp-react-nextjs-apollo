import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

/**
 * Global base styles
 */
const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  @font-face {
    font-family: 'Kollektif';
    src: url('/static/fonts/Kollektif/Kollektif-Italic.woff2') format('woff2'),
        url('/static/fonts/Kollektif/Kollektif-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Kollektif';
    src: url('/static/fonts/Kollektif/Kollektif-Bold.woff2') format('woff2'),
        url('/static/fonts/Kollektif/Kollektif-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Kollektif';
    src: url('/static/fonts/Kollektif/Kollektif-BoldItalic.woff2') format('woff2'),
        url('/static/fonts/Kollektif/Kollektif-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: 'Kollektif';
    src: url('/static/fonts/Kollektif/Kollektif.woff2') format('woff2'),
        url('/static/fonts/Kollektif/Kollektif.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html,
  body {
    font-family: 'Kollektif', 'Helvetica', 'Arial', 'sans-serif';
  }

  html {
    box-sizing: border-box;
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  img {
    max-width: 100%;
  }
`

export default GlobalStyle
