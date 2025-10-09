import PRDForm from '@/components/Forms/PRDForm';
import Image from 'next/image';
import { LightningIcon, SparklesIcon, DeviceIcon, CheckIcon, InfinityIcon, DownloadIcon } from '@/components/Icons/FeatureIcons';
import RotatingFeaturePill from '@/components/UI/RotatingFeaturePill';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-crimson/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-crimson/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-crimson/20 blur-xl rounded-full" />
              <Image
                src="/images/logos/icon-rapidPRD.png"
                alt="rapidPRD"
                width={100}
                height={100}
                priority
                className="relative z-10"
              />
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-12 space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block text-white mb-2">Lightning-Fast</span>
              <span className="block bg-gradient-to-r from-crimson via-crimson-light to-crimson bg-clip-text text-transparent animate-gradient">
                Product Requirements
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Transform your ideas into comprehensive PRDs in seconds.
              <span className="block mt-2 text-lg text-text-tertiary">
                Powered by AI. Built for speed.
              </span>
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 justify-center pt-4">
              <div className="group px-4 py-2 bg-dark-100 border border-dark-300 rounded-full hover:border-crimson/50 transition-all duration-300 hover:shadow-crimson">
                <span className="text-sm font-medium flex items-center gap-2">
                  <LightningIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-white group-hover:text-crimson transition-colors">Instant Generation</span>
                </span>
              </div>
              <div className="group px-4 py-2 bg-dark-100 border border-dark-300 rounded-full hover:border-crimson/50 transition-all duration-300 hover:shadow-crimson">
                <span className="text-sm font-medium flex items-center gap-2">
                  <SparklesIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-white group-hover:text-crimson transition-colors">AI-Powered</span>
                </span>
              </div>
              <div className="group px-4 py-2 bg-dark-100 border border-dark-300 rounded-full hover:border-crimson/50 transition-all duration-300 hover:shadow-crimson">
                <span className="text-sm font-medium flex items-center gap-2">
                  <DeviceIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-white group-hover:text-crimson transition-colors">Mobile-First</span>
                </span>
              </div>
              <RotatingFeaturePill />
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative pb-24 sm:pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-100 border border-dark-300 rounded-full mb-6">
              <div className="w-2 h-2 bg-crimson rounded-full animate-pulse" />
              <span className="text-sm font-medium text-text-secondary">Start Creating</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Build Your </span>
              <span className="bg-gradient-to-r from-crimson to-crimson-light bg-clip-text text-transparent">PRD</span>
            </h2>
            <p className="text-text-tertiary">
              Fill in the details below and watch your PRD come to life
            </p>
          </div>

          {/* Form Container with Glass Effect */}
          <div className="relative">
            {/* Glow Effect Behind Form */}
            <div className="absolute -inset-4 bg-gradient-to-r from-crimson/10 to-transparent rounded-2xl blur-2xl" />

            {/* Form */}
            <div className="relative bg-dark-100/50 backdrop-blur-sm border border-dark-300 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <PRDForm />
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <p className="text-sm text-text-tertiary mb-4">Trusted by developers worldwide</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-dark-200 rounded-lg flex items-center justify-center group-hover:bg-dark-300 transition-colors">
                  <CheckIcon className="w-5 h-5" />
                </div>
                <span className="text-sm text-text-secondary group-hover:text-white transition-colors">Secure & Private</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-dark-200 rounded-lg flex items-center justify-center group-hover:bg-dark-300 transition-colors">
                  <InfinityIcon className="w-5 h-5" />
                </div>
                <span className="text-sm text-text-secondary group-hover:text-white transition-colors">Unlimited PRDs</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-dark-200 rounded-lg flex items-center justify-center group-hover:bg-dark-300 transition-colors">
                  <DownloadIcon className="w-5 h-5" />
                </div>
                <span className="text-sm text-text-secondary group-hover:text-white transition-colors">Instant Download</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Padding for Mobile Nav */}
        <div className="h-20 sm:hidden" />
      </section>

      {/* Decorative Elements */}
      <div className="fixed bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-crimson/20 to-transparent sm:hidden" />
    </main>
  );
}
