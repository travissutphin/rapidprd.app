export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-4 pb-24 sm:pb-4 sm:pl-20">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-crimson to-crimson-light bg-clip-text text-transparent">
          Settings
        </h1>
        <div className="bg-dark-100 border border-dark-300 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-white">Application Settings</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-text-secondary mb-2">Theme</h3>
              <p className="text-text-tertiary text-sm">Dark mode (default)</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-text-secondary mb-2">API Configuration</h3>
              <p className="text-text-tertiary text-sm">Settings will be available in Phase 2</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
