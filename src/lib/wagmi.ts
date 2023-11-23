import { chain, configureChains, createClient } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider, webSocketProvider } = configureChains(
  // [process.env.ENV === 'prod' ? chain.mainnet : chain.goerli],
  [chain.mainnet],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY }), publicProvider()],
);

export const client = createClient({
  provider,
  webSocketProvider,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
        rpc: {
          1: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
        },
      },
    }),
  ],
});
