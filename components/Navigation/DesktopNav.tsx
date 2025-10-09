'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { DocumentIcon, ClockIcon, TemplateIcon, SettingsIcon, HelpIcon, InfoIcon, MenuIcon, CloseIcon } from '@/components/Icons/NavigationIcons';

/**
 * Desktop Slide-Out Navigation Menu
 *
 * Features:
 * - 320px slide-out menu from left
 * - Opaque overlay (80% black with backdrop blur)
 * - 300ms slide animation
 * - Desktop only (hidden on mobile)
 * - Keyboard accessible (Escape to close)
 */

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

export default function DesktopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems: NavItem[] = [
    {
      id: 'generate',
      label: 'Generate PRD',
      href: '/',
      icon: <DocumentIcon className="w-5 h-5" />,
    },
    {
      id: 'history',
      label: 'History',
      href: '/history',
      icon: <ClockIcon className="w-5 h-5" />,
    },
    {
      id: 'templates',
      label: 'Templates',
      href: '/templates',
      icon: <TemplateIcon className="w-5 h-5" />,
    },
    {
      id: 'settings',
      label: 'Settings',
      href: '/settings',
      icon: <SettingsIcon className="w-5 h-5" />,
    },
    {
      id: 'help',
      label: 'Help & Documentation',
      href: '/help',
      icon: <HelpIcon className="w-5 h-5" />,
    },
    {
      id: 'about',
      label: 'About',
      href: '/about',
      icon: <InfoIcon className="w-5 h-5" />,
    },
  ];

  // Close menu on Escape key
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  // Add/remove event listener
  useState(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  });

  return (
    <>
      {/* Menu Trigger Button - Desktop Only */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden sm:flex fixed top-4 left-4 z-40 items-center justify-center w-12 h-12 bg-dark-100 border border-dark-300 rounded-lg hover:bg-dark-200 hover:border-crimson transition-colors duration-200"
        aria-label="Open navigation menu"
      >
        <MenuIcon className="w-6 h-6 text-white" />
      </button>

      {/* Opaque Overlay */}
      {isOpen && (
        <div
          className="hidden sm:block fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-Out Menu */}
      <nav
        className={`
          hidden sm:block fixed top-0 left-0 bottom-0 w-80 bg-dark-100 border-r border-dark-300 z-50
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-dark-300">
          <div className="relative">
            <div className="absolute -inset-2 bg-crimson/10 blur-xl rounded-lg" />
            <Image
              src="/images/logos/logo-rapidPRD--600x.png"
              alt="rapidPRD - Lightning-fast product requirements"
              width={180}
              height={52}
              className="relative z-10"
              priority
            />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-dark-200 rounded-lg transition-colors"
            aria-label="Close navigation menu"
          >
            <CloseIcon className="w-5 h-5 text-text-tertiary hover:text-white transition-colors" />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="py-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center gap-3 px-6 py-4 transition-colors duration-200
                  ${isActive
                    ? 'bg-crimson/20 text-white border-l-3 border-crimson'
                    : 'text-text-secondary hover:bg-dark-200 hover:text-white'
                  }
                `}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-dark-300">
          <p className="text-xs text-text-tertiary">Version 1.0.0</p>
          <div className="flex gap-4 mt-2 text-xs text-text-tertiary">
            <a href="/privacy" className="hover:text-crimson transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-crimson transition-colors">Terms</a>
          </div>
        </div>
      </nav>
    </>
  );
}
