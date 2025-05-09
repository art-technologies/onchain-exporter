import '@chakra-ui/react';

declare module '@chakra-ui/react' {
  interface ChakraProviderProps {
    children: React.ReactNode;
    theme?: any;
    value?: any;
  }
} 