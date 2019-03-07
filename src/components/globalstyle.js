import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Share+Tech+Mono');
  *, *::after, *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
      font-family: 'Share Tech Mono', monospace;
  }
  body {
    box-sizing: border-box;
    > div {
      overflow-x: hidden;
    }
  }
  html {
    font-size: 62.5%;
  }
`

export default GlobalStyle
