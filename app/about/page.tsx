export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white p-4 pb-24 sm:pb-4 sm:pl-20">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-crimson to-crimson-light bg-clip-text text-transparent">
          About PRD Generator
        </h1>
        <div className="bg-dark-100 border border-dark-300 rounded-lg p-6 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-3 text-white">Version</h2>
            <p className="text-text-secondary">1.0.0</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-white">Overview</h2>
            <p className="text-text-secondary mb-4">
              AI-powered Product Requirements Document generator with a premium dark interface.
              Transform app ideas into comprehensive, developer-ready PRDs in seconds.
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-center gap-2">
                <span className="text-crimson">⚡</span>
                <span>Fast and efficient</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-crimson">🎨</span>
                <span>Dark mode optimized</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-crimson">📱</span>
                <span>Mobile-first responsive design</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-crimson">🤖</span>
                <span>AI-powered with Claude</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-white">Tech Stack</h2>
            <ul className="space-y-1 text-text-secondary">
              <li>• Next.js 14 with App Router</li>
              <li>• TypeScript</li>
              <li>• TailwindCSS</li>
              <li>• Anthropic Claude API</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
