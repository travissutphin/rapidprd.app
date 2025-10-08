export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-black text-white p-4 pb-24 sm:pb-4 sm:pl-20">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-crimson to-crimson-light bg-clip-text text-transparent">
          History
        </h1>
        <div className="bg-dark-100 border border-dark-300 rounded-lg p-6">
          <p className="text-text-secondary">
            Your PRD generation history will appear here. This feature is coming in Phase 2.
          </p>
        </div>
      </div>
    </main>
  );
}
