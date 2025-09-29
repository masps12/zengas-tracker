import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>🚀 ZenGas Tracker</h1>
      <p>Pilih menu:</p>
      <ul>
        <li><Link href="/tracker">Gas Tracker</Link></li>
        <li><Link href="/faucet">Faucet</Link></li>
      </ul>
    </div>
  );
}