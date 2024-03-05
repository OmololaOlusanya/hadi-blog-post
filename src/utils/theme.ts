'use client';

import { createTheme, responsiveFontSizes } from '@mui/material';
import { deepmerge } from '@mui/utils';
import { Montserrat, Mulish } from 'next/font/google';

export const mulish = Mulish({ subsets: ['latin'] });
export const montserrat = Montserrat({ subsets: ['latin'] });

export const Colors = {
  primary: '#5C6BC0',
  primaryLight: ' #D2D7FF',
  secondary: '#FFA726',
  secondaryLight: '#f4f7fa',
  success: '#27AE60',
  warning: '#E2B93B',
  error: '#EB5757',
  text: '#344054',
  black: '#000000',
  lightgrey: '#00000014',
} as const;

let theme = createTheme({});

theme = createTheme(
  deepmerge(theme, {
    palette: {
      primary: {
        main: Colors.primary,
        light: Colors.primaryLight,
        contrastText: 'white',
      },
      secondary: {
        main: Colors.secondary,
        light: Colors.secondaryLight,
        contrastText: 'white',
      },
      error: {
        main: Colors.error,
        contrastText: 'white',
      },
      text: {
        primary: Colors.text,
        secondary: 'black',
      },
    },
    typography: {
      fontFamily: mulish.style.fontFamily,
      fontSize: 16,
      h4: {
        fontFamily: montserrat.style.fontFamily,
        fontWeight: 600,
        fontSize: theme.typography.pxToRem(32),
        lineHeight: 1.3,
      },
      h5: {
        fontFamily: montserrat.style.fontFamily,
        fontWeight: 600,
        fontSize: theme.typography.pxToRem(18),
        lineHeight: 1.65,
      },
      h6: {
        fontFamily: montserrat.style.fontFamily,
        fontWeight: 500,
        fontSize: theme.typography.pxToRem(18),
        lineHeight: 1.375,
      },
      body1: {
        fontFamily: mulish.style.fontFamily,
        fontSize: theme.typography.pxToRem(16),
        lineHeight: 1.4,
      },
      body2: {
        fontFamily: mulish.style.fontFamily,
        fontSize: theme.typography.pxToRem(14),
        lineHeight: 1.225,
      },
      button: {
        fontFamily: montserrat.style.fontFamily,
        fontSize: theme.typography.pxToRem(16),
        lineHeight: 1,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 480,
        md: 768,
        lg: 986,
        xl: 1200,
      },
    },
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            '& input': { padding: '6px 10px' },
          },
        },
      },
    },
  })
);

export default responsiveFontSizes(theme);
