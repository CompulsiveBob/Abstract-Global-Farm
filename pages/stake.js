import { useState } from 'react';

export default function Stake() {
  const [walletConnected, setWalletConnected] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWalletConnected(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-3xl font-bold mb-4">🪙 Stake Your $GUGO at AGF</h1>
      {!walletConnected ? (
        <button onClick={connectWallet} className="px-6 py-3 bg-blue-600 text-white rounded-full">
          Connect Wallet
        </button>
      ) : (
        <p className="text-green-600">✅ Wallet Connected</p>
      )}
    </div>
  );
}
