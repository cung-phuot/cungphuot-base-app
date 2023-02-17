import styled, { css, ThemeProps } from "styled-components";

import { AppTheme } from "src/styles/themes";
import { varElement } from "src/styles/variables";

export const NavBarWrapper = styled.div`
  ${({ theme }: ThemeProps<AppTheme>) => css`
    width: 100%;
    min-height: ${varElement.navBarHeight};
    display: flex;
    background-color: ${theme.navbar.background};
    border-bottom: 1px solid ${theme.navbar.bottomLine};
  `}
`;
