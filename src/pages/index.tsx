import { ConnectButton } from '@web3modal/react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

import Layout from '../components/layouts/Layout';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { connector: activeConnector, isConnected, address } = useAccount();
  const { connect, connectors, isLoading, pendingConnector } = useConnect();

  const { disconnect } = useDisconnect();

  return (
    <Layout>
      <div className="grid h-screen place-items-center">
        <div className="grid place-items-center">
          {isConnected ? (
            <div className="text-center">
              <p>{address}</p>
              <p>Connected to {activeConnector?.name}</p>
              <button onClick={() => disconnect()}>Disconnect</button>
            </div>
          ) : (
            <div className="flex flex-col">
              {connectors.map(connector => (
                <button
                  key={connector.id}
                  onClick={() => connect({ connector })}
                >
                  {connector.name}
                  {isLoading &&
                    pendingConnector?.id === connector.id &&
                    ' (connecting)'}
                </button>
              ))}
            </div>
          )}

          <ConnectButton />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
