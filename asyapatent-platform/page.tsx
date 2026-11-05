export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-blue-400">
          Asya Patent & Marka Tescil
        </h1>
        <p className="text-lg md:text-xl text-slate-300">
          Yapay zekâ destekli marka, patent ve tasarım tescil platformuna hoş geldiniz.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <a
            href="/marka-tescili"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition"
          >
            Marka Tescil Soruştur
          </a>
          <a
            href="/bilgi-merkezi"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-semibold transition"
          >
            Bilgi Merkezi
          </a>
        </div>
      </div>
    </main>
  );
}
