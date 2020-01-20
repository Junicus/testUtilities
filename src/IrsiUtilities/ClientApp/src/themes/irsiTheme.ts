import { DefaultTheme } from 'styled-components';
import { Theme } from 'styled-system';

export const irsiTheme: DefaultTheme & Theme = {
  breakpoints: ['319px', '424px', '767px', '1023px'],
  colors: {
    primary: '#423EA2',
    link: '#1890ff',
    success: '#52c41a',
    warning: '#faad14',
    error: '#e84118',
    heading: '#423EA2',
    text: '#000',
    disabled: '#f5222d',
    border: '#423EA2',
  },
  space: {
    none: 0,
    xs: 2,
    s: 4,
    m: 8,
    l: 16,
    xl: 32,
    xxl: 64,
  },
};

// import { Colors, Spaces, TextStyles } from './types';
// import { Theme, variant } from 'styled-system';

// const defaultFontFamilies = {
//   heading: '',
//   body: '',
// };

// const defaultBreakpoints: string[] = ['319px', '424px', '767px', '1023px'];

// const defaultColors: Colors = {
//   primary: '#423EA2',
//   link: '#1890ff',
//   success: '#52c41a',
//   warning: '#faad14',
//   error: '#e84118',
//   heading: '#423EA2',
//   text: '#000',
//   disabled: '#f5222d',
//   border: '#423EA2',
// };

// const defaultSpaces: Spaces = {
//   NONE: 0,
//   XS: 2,
//   S: 4,
//   M: 8,
//   L: 16,
//   XL: 32,
//   XXL: 64,
// };

// export const defaultTheme: Theme = {
//   space: { ...defaultSpaces },
//   breakpoints: defaultBreakpoints,
//   colors: { ...defaultColors },
// };
