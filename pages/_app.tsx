import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { RainbowKitProvider, getDefaultWallets, darkTheme } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const { chains, provider, webSocketProvider } = configureChains(
  [
    // chain.goerli,
    chain.localhost
  ],
  [
    alchemyProvider({
      // This is Alchemy's default API key.
      // You can get your own at https://dashboard.alchemyapi.io
      apiKey: '_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC',
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

const config: ThemeConfig = {
  initialColorMode: 'dark',
}

const breakpoints ={
  sm: "360px",
  md: "768px",
  lg: "1024px",
  xl: "1440px",
  "2xl": "1680px"
};
const theme = extendTheme({ config,breakpoints })
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        <Flex justify={"center"}>
        <Box maxWidth={"1200px"}>
        <Navbar />
        <Component {...pageProps} />
        </Box>
        </Flex>
        <Footer/>
      </RainbowKitProvider>
    </WagmiConfig>
    </ChakraProvider>
  );
}

export default MyApp;
