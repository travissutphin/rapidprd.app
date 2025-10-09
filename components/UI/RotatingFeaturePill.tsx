'use client';

import { useState, useEffect } from 'react';
import { CodeIcon } from '@/components/Icons/FeatureIcons';

/**
 * Rotating Feature Pill Component
 *
 * Cycles through different feature labels with smooth fade transitions:
 * - Developer-Ready
 * - Marketing-Ready
 * - Figma-Ready
 *
 * Interval: 3 seconds
 */

const features = ['Developer-Ready', 'Marketing-Ready', 'Figma-Ready'];

export default function RotatingFeaturePill() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setIsVisible(false);

      // Wait for fade out, then change text
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
        setIsVisible(true);
      }, 300); // Match transition duration
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="group px-4 py-2 bg-dark-100 border border-dark-300 rounded-full hover:border-crimson/50 transition-all duration-300 hover:shadow-crimson">
      <span className="text-sm font-medium flex items-center gap-2">
        <CodeIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
        <span
          className={`text-white group-hover:text-crimson transition-all duration-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {features[currentIndex]}
        </span>
      </span>
    </div>
  );
}
