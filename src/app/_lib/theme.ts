'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 428,
      md: 960,
      lg: 1280,
      xl: 1536,
    },
  },
  colorSchemes: {
    light: true,
    dark: true,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontSize: 'default',
      },
    },
  },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
    fontSize: 14,
  },
});

export default theme;
