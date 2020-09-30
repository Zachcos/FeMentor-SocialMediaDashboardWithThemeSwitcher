import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
${reset}

html {
  --limeGreen: #1db489;
  --brightRed: #dc414c;
}
`

export default GlobalStyle;