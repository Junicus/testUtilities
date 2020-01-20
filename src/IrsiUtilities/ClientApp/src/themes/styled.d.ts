import 'styled-components';
import * as CSS from 'csstype';
import { Theme } from 'styled-system';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: string[];
    colors: {
      primary: CSS.ColorProperty;
      link: CSS.ColorProperty;
      success: CSS.ColorProperty;
      warning: CSS.ColorProperty;
      error: CSS.ColorProperty;
      heading: CSS.ColorProperty;
      text: CSS.ColorProperty;
      disabled: CSS.ColorProperty;
      border: CSS.ColorProperty;
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
  }
}
