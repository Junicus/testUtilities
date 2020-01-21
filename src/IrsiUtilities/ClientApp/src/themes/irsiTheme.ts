import { IrsiTheme } from './types';

export const irsiTheme: IrsiTheme = {
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
  fonts: {
    heading: 'Montserrat, serif',
    body: 'Raleway, sans-serif',
  },
};
