import { useEffect, useState } from 'react';
import { connect, isConnected } from '@abstract-xyz/agw-sdk';

export default function Stake() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    const checkConnection = async () => {
      const connected = await isConnected();
      if (connected) {
        setWalletConnected(true);
        const address = await window.agw.getAddress();
        setWalletAddress(address);
      }
    };
    checkConnection();
  }, []);

  const handleConnect = async () => {
    try {
      await connect();
      const address = await window.agw.getAddress();
      setWalletAddress(address);
      setWalletConnected(true);
    } catch (err) {
      console.error('Abstract Wallet connection failed', err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-3xl font-bold mb-4">🪙 Stake Your $GUGO at AGF</h1>
      {!walletConnected ? (
        <button onClick={handleConnect} className="px-6 py-3 bg-purple-600 text-white rounded-full">
          Connect Abstract Wallet
        </button>
      ) : (
        <p className="text-green-600">✅ Wallet Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</p>
      )}
    </div>
  );
}
