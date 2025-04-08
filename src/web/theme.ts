import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'black',
      },
    },
  },
});

export default theme; 