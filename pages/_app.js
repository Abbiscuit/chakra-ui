import React from 'react';
import { Box, ChakraProvider, CSSReset } from '@chakra-ui/react';
import { Header } from '../components/header/header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CSSReset />

      <Header />
      <Box mt="20">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
