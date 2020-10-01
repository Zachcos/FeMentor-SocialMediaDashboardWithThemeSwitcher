import reset from 'styled-reset';
import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
${reset}

${({ theme }) => css`
  body {
    background-color: ${theme.bg};
    color: ${theme.text_light};
    font-family: 'Inter', sans-serif;

    &:before {
      background-color: ${theme.topBgPattern};
      content: '';
      height: 245px;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;
    }
  }
`}

html {
  --limeGreen: #1db489;
  --brightRed: #dc414c;
}

.cr_u-srOnly {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border-width: 0;
}
`;

export default GlobalStyle;
