import PRDForm from '@/components/Forms/PRDForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-4 pb-24 sm:pb-4 sm:pl-20">
      <div className="max-w-4xl mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-crimson to-crimson-light bg-clip-text text-transparent">
            PRD Generator
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-6">
            Transform app ideas into comprehensive, developer-ready PRDs in seconds
          </p>
          <div className="flex gap-4 justify-center text-sm text-text-tertiary">
            <span>⚡ Fast</span>
            <span>🎨 Dark Mode</span>
            <span>📱 Mobile-First</span>
            <span>🤖 AI-Powered</span>
          </div>
        </div>

        {/* PRD Form */}
        <PRDForm />
      </div>
    </main>
  );
}
