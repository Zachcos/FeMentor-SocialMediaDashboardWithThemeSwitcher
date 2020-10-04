import reset from 'styled-reset';
import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
${reset}

${({ theme }) => css`
  body {
    background-color: ${theme.bg};
    color: ${theme.textColor};
    font-family: 'Inter', sans-serif;

    &:before {
      background-color: ${theme.topBg};
      content: '';
      height: 14.7rem;
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

export const mediaQuery = {
  tablet: `(min-width: 768px)`,
};
