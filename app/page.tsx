export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-crimson to-crimson-light bg-clip-text text-transparent">
          PRD Generator
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Transform app ideas into comprehensive, developer-ready PRDs in seconds
        </p>
        <div className="flex gap-4 justify-center text-sm text-gray-400">
          <span>⚡ Fast</span>
          <span>🎨 Dark Mode</span>
          <span>📱 Mobile-First</span>
          <span>🤖 AI-Powered</span>
        </div>
      </div>
    </main>
  );
}
