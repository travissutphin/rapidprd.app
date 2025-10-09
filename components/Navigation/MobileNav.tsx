'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { DocumentIcon, ClockIcon, TemplateIcon, SettingsIcon } from '@/components/Icons/NavigationIcons';

/**
 * iOS-Style Mobile Bottom Navigation
 *
 * Features:
 * - Fixed bottom position (80px height with safe area)
 * - 4 navigation items with icons + labels
 * - Blur effect background (#1a1a1a)
 * - Crimson active state (#ac0234)
 * - Mobile only (hidden on desktop)
 * - Touch-optimized (48px minimum targets)
 */

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

export default function MobileNav() {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    {
      id: 'generate',
      label: 'Generate',
      href: '/',
      icon: <DocumentIcon className="w-6 h-6" />,
    },
    {
      id: 'history',
      label: 'History',
      href: '/history',
      icon: <ClockIcon className="w-6 h-6" />,
    },
    {
      id: 'templates',
      label: 'Templates',
      href: '/templates',
      icon: <TemplateIcon className="w-6 h-6" />,
    },
    {
      id: 'settings',
      label: 'Settings',
      href: '/settings',
      icon: <SettingsIcon className="w-6 h-6" />,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 sm:hidden">
      {/* Navigation Bar with Blur Effect */}
      <div className="bg-dark-100/95 backdrop-blur-md border-t border-dark-300">
        <div className="flex items-center justify-around h-20 pb-safe">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.id}
                href={item.href}
                className={`
                  flex flex-col items-center justify-center
                  min-h-[48px] min-w-[48px] px-2
                  transition-colors duration-200
                  ${isActive
                    ? 'text-crimson'
                    : 'text-text-tertiary hover:text-text-secondary'
                  }
                `}
              >
                {/* Icon */}
                <div className="mb-1">
                  {item.icon}
                </div>

                {/* Label */}
                <span className="text-xs font-medium">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
