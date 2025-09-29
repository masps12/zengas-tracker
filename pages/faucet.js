import { useState } from 'react';

export default function Faucet() {
  const [address, setAddress] = useState("");

  const faucets = {
    zenchain: "https://faucet.zenchain.io",
    ethereum: "https://sepoliafaucet.com",
    bitcoin: "https://testnet-faucet.mempool.co"
  };

  function handleRequest(type) {
    let url = faucets[type];
    if (address) url += `?address=${address}`;
    window.open(url, "_blank");
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>💧 Faucet</h1>
      <input
        type="text"
        placeholder="Enter wallet address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{ padding: 5, width: "60%" }}
      />
      <div style={{ marginTop: 20 }}>
        <button onClick={() => handleRequest("zenchain")}>ZenChain Faucet</button>
        <button onClick={() => handleRequest("ethereum")}>Ethereum Faucet</button>
        <button onClick={() => handleRequest("bitcoin")}>Bitcoin Faucet</button>
      </div>
    </div>
  );
}