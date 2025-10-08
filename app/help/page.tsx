export default function HelpPage() {
  return (
    <main className="min-h-screen bg-black text-white p-4 pb-24 sm:pb-4 sm:pl-20">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-crimson to-crimson-light bg-clip-text text-transparent">
          Help & Documentation
        </h1>
        <div className="bg-dark-100 border border-dark-300 rounded-lg p-6 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-3 text-white">Getting Started</h2>
            <p className="text-text-secondary">
              Welcome to the PRD Generator! This tool helps you create comprehensive Product Requirements Documents using AI.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-white">Navigation</h2>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-crimson">•</span>
                <span><strong>Mobile:</strong> Use the bottom navigation bar to switch between sections</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-crimson">•</span>
                <span><strong>Desktop:</strong> Click the menu icon in the top-left to access all features</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-white">Keyboard Shortcuts</h2>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-crimson">•</span>
                <span><strong>Esc:</strong> Close desktop menu (desktop only)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
