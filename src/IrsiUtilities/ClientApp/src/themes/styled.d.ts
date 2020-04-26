import 'styled-components';
import * as CSS from 'csstype';
import { Theme } from 'styled-system';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: string[];
    colors: {
      primary: CSS.ColorProperty;
      secondary: CSS.ColorProperty;
      background: CSS.ColorProperty;
      surface: CSS.ColorProperty;
      error: CSS.ColorProperty;
      onprimary: CSS.ColorProperty;
      onsecondary: CSS.ColorProperty;
      onbackground: CSS.ColorProperty;
      onsurface: CSS.ColorProperty;
      onerror: CSS.ColorProperty;
    };
    header: {
      height: number;
    };
    sidebar: {
      width: number;
    };
    space: {
      none: number;
      xs: number;
      s: number;
      m: number;
      l: number;
      xl: number;
      xxl: number;
    };
    fonts: {
      heading: string;
      body: string;
    };
  }
}
