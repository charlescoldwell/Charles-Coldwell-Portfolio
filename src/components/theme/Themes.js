import { createTheme, responsiveFontSizes } from '@mui/material';
import Settings from '../../settings/settings.json';

export const primary = `${Settings.colors.primary}`;
export const secondary = `${Settings.colors.secondary}`;
export const black = `${Settings.colors.black}`;
export const white = `${Settings.colors.white}`;

export const LightTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'light', // Changed from type to mode to align with MUI v5
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
      background: {
        default: white,
      },
      foreground: {
        default: black,
      },
    },
    typography: {
      fontSize: 16,
      htmlFontSize: 16,
      h1: {
        fontWeight: 500,
      },
      h2: {
        fontWeight: 500,
      },
      h3: {
        fontWeight: 500,
      },
      h5: {
        fontWeight: 500,
        fontFamily: 'Roboto Mono, monospace',
      },
      body: {
        fontWeight: 500,
        fontFamily: 'Roboto Mono, monospace',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            color: black, // Text color for light theme
            backgroundColor: white,
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: black, // Ensure Typography text color is also correct
          },
        },
      },
      MuiIconButton: {
        root: {
          boxShadow:
            '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
          '&:hover': {
            backgroundColor: primary,
          },
          transition: 'all 0.5s ease',
        },
      },
      MuiFab: {
        root: {
          width: '2.5rem',
          height: '2.5rem',
          fontSize: '1.25rem',
        },
        primary: {
          color: black,
          backgroundColor: 'transparent',
          '&:hover': {
            color: black,
            backgroundColor: primary,
          },
          transition: 'all 0.5s ease !important',
        },
      },
    },
  })
);

export const DarkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'dark', // Changed from type to mode to align with MUI v5
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
      background: {
        default: black,
      },
      foreground: {
        default: white,
      },
    },
    typography: {
      fontSize: 16,
      htmlFontSize: 16,
      h1: {
        fontWeight: 500,
      },
      h2: {
        fontWeight: 500,
      },
      h3: {
        fontWeight: 500,
      },
      h5: {
        fontWeight: 500,
        fontFamily: 'Roboto Mono, monospace',
      },
      body: {
        fontWeight: 500,
        fontFamily: 'Roboto Mono, monospace',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            color: white, // Text color for dark theme
            backgroundColor: black,
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: white, // Ensure Typography text color is also correct
          },
        },
      },
      MuiIconButton: {
        root: {
          boxShadow:
            '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
          '&:hover': {
            backgroundColor: primary,
          },
          transition: 'all 0.5s ease',
        },
      },
      MuiFab: {
        root: {
          width: '2.5rem',
          height: '2.5rem',
          fontSize: '1.25rem',
        },
        primary: {
          color: white,
          backgroundColor: 'transparent',
          '&:hover': {
            color: white,
            backgroundColor: primary,
          },
          transition: 'all 0.5s ease !important',
        },
      },
    },
  })
);
