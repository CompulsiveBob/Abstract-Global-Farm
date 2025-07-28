export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
      <h1 className="text-4xl font-bold mb-4">🌱 Welcome to AGF</h1>
      <p className="text-lg mb-6">Stake $GUGO. Earn $DIRT. Grow and Mint Plant NFTs at Abstract Global Farms.</p>
      <a href="/stake" className="px-6 py-3 bg-green-600 text-white rounded-full shadow">Stake GUGO</a>
    </div>
  );
}
