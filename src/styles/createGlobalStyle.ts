import { createGlobalStyle, css, ThemeProps } from "styled-components";

import { AppTheme } from "./themes";

const GlobalStyle = createGlobalStyle`
  ${({ theme }: ThemeProps<AppTheme>) => css`
    :root {
      /*  */
    }

    *,
    *::before,
    &::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      overflow-x: hidden;
      background-color: ${theme.background};
    }
  `}
`;

export default GlobalStyle;
