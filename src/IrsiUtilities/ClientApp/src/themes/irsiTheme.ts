import { IrsiTheme } from './types';

const breakpoints = ['480px', '720px', '960px', '1200px', '1360px', '1600px'];
const colors = {
  primary: '#3E3540',
  secondary: '#BFA893',
  background: 'white',
  surface: '#D9D7CC',
  error: '#B00020',
  onprimary: 'white',
  onsecondary: 'white',
  onbackground: 'black',
  onsurface: '#586173',
  onerror: 'white',
};
const header = { height: 54 };
const sidebar = { width: 240 };
const space = [0, 2, 4, 8, 16, 32, 64];
const fonts = {
  heading: 'Montserrat, serif',
  body: 'Raleway, sans-serif',
};
const mediaQueries = {
  small: `@media screen and (min-width: ${breakpoints[0]})`,
  medium: `@media screen and (min-width: ${breakpoints[2]})`,
  large: `@media screen and (min-width: ${breakpoints[3]})`,
};

export const irsiTheme: IrsiTheme = {
  breakpoints,
  colors,
  header,
  sidebar,
  space: {
    none: space[0],
    xs: space[1],
    s: space[2],
    m: space[3],
    l: space[4],
    xl: space[5],
    xxl: space[6],
  },
  fonts,
  mediaQueries,
};
//breakpoints: { mobile: 480, tablet: 720, medium: 960, large: 1200, xl: 1360, xxl: 1600 },
