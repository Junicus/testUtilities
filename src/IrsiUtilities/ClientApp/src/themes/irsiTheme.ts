import { IrsiTheme } from './types';

export const irsiTheme: IrsiTheme = {
  breakpoints: ['319px', '424px', '767px', '1023px'],
  colors: {
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
  },
  header: { height: 32 },
  space: {
    none: 0,
    xs: 2,
    s: 4,
    m: 8,
    l: 16,
    xl: 32,
    xxl: 64,
  },
  fonts: {
    heading: 'Montserrat, serif',
    body: 'Raleway, sans-serif',
  },
};
