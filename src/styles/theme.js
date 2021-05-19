import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  sm: '375px',
  md: '768px',
  lg: '960px',
  xl: '1440px',
});
// 3. Extend the theme
const theme = extendTheme({
  breakpoints,
  fonts: {
    heading: 'Commissioner',
    body: 'Commissioner',
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'gray.50',
      },
    },
  },

  components: {
    Divider: {
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: '1px',
          fontSize: 'sm',
          px: '1px',
          w: '1px',
        },
      },
    },
  },

  colors: {
    brand: {
      100: '#3cb4ac',
      300: '#147b74',
    },
  },
});

export default theme;
