import '../styles/global.css';
import { chains, providers } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { ThemeProvider } from 'next-themes';
import { WagmiConfig } from 'wagmi';

import { client } from '../lib/wagmi';

import type { ConfigOptions } from '@web3modal/react';
import type { AppProps } from 'next/app';

const modalConfig: ConfigOptions = {
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  theme: 'dark',
  accentColor: 'default',
  ethereum: {
    appName: 'web3Modal',
    autoConnect: true,
    chains: [
      chains.mainnet,
      chains.rinkeby,
      chains.avalanche,
      chains.avalancheFuji,
      chains.polygon,
      chains.polygonMumbai,
    ],
    providers: [
      providers.walletConnectProvider({
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      }),
    ],
  },
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <WagmiConfig client={client}>
        <Component {...pageProps} />
      </WagmiConfig>
      <Web3Modal config={modalConfig} />
    </ThemeProvider>
  );
}
