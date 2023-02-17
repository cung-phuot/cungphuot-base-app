import { varColor } from "./variables";

interface NavBar {
  background: string;
  bottomLine: string;
}

export interface AppTheme {
  background: string;
  navbar: NavBar;
}

export enum ThemeEnum {
  light = "light",
  dark = "dark",
}

/**
 * Types of Themes
 */

const light: AppTheme = {
  background: varColor.slate00,
  navbar: {
    background: varColor.white,
    bottomLine: varColor.divider,
  },
};

export const dark: AppTheme = {
  background: varColor.slate12,
  navbar: {
    background: varColor.slate11,
    bottomLine: varColor.divider,
  },
};

export const themeType = {
  light,
  dark,
};
