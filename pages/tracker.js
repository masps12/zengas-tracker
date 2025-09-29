import { useEffect, useState } from "react";
import axios from "axios";

export default function Tracker() {
  const [gasData, setGasData] = useState(null);

  useEffect(() => {
    async function fetchGas() {
      const res = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin&vs_currencies=usd");
      setGasData(res.data);
    }
    fetchGas();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>⛽ ZenGas Tracker</h1>
      {gasData ? (
        <div>
          <p>Ethereum (ETH): ${gasData.ethereum.usd}</p>
          <p>Bitcoin (BTC): ${gasData.bitcoin.usd}</p>
        </div>
      ) : <p>Loading...</p>}
    </div>
  );
}