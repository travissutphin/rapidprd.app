'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

/**
 * 4-Field Dark PRD Form with Validation
 *
 * Features:
 * - 4 input fields with validation (App Name, Description, Pain Point, Solution)
 * - Real-time character limits and validation
 * - Color-coded counters (green/yellow/red)
 * - Error states and messages
 * - Submit button disabled until valid
 * - Dark theme inputs (#2a2a2a background)
 * - Crimson focus states
 */

interface FormData {
  appName: string;
  description: string;
  painPoint: string;
  solution: string;
}

interface FieldValidation {
  isValid: boolean;
  error?: string;
}

interface FieldConfig {
  min: number;
  max: number;
  label: string;
}

const FIELD_LIMITS: Record<keyof FormData, FieldConfig> = {
  appName: { min: 3, max: 50, label: 'App Name' },
  description: { min: 50, max: 500, label: 'Description' },
  painPoint: { min: 50, max: 500, label: 'Pain Point' },
  solution: { min: 50, max: 500, label: 'Solution' },
};

export default function PRDForm() {
  const [formData, setFormData] = useState<FormData>({
    appName: '',
    description: '',
    painPoint: '',
    solution: '',
  });

  const [touched, setTouched] = useState<Record<keyof FormData, boolean>>({
    appName: false,
    description: false,
    painPoint: false,
    solution: false,
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPRD, setGeneratedPRD] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Validate individual field
  const validateField = (field: keyof FormData, value: string): FieldValidation => {
    const config = FIELD_LIMITS[field];
    const length = value.length;

    if (length === 0) {
      return { isValid: false, error: `${config.label} is required` };
    }
    if (length < config.min) {
      return { isValid: false, error: `${config.label} must be at least ${config.min} characters` };
    }
    if (length > config.max) {
      return { isValid: false, error: `${config.label} cannot exceed ${config.max} characters` };
    }
    return { isValid: true };
  };

  // Get character counter color based on length
  const getCounterColor = (field: keyof FormData, length: number): string => {
    const config = FIELD_LIMITS[field];
    if (length === 0) return 'text-text-tertiary';
    if (length < config.min) return 'text-warning';
    if (length > config.max) return 'text-error';
    return 'text-success';
  };

  // Check if form is valid
  const isFormValid = (): boolean => {
    return (Object.keys(formData) as Array<keyof FormData>).every((field) => {
      const validation = validateField(field, formData[field]);
      return validation.isValid;
    });
  };

  const handleChange = (field: keyof FormData, value: string) => {
    // Enforce max length
    const config = FIELD_LIMITS[field];
    const truncatedValue = value.slice(0, config.max);

    setFormData((prev) => ({
      ...prev,
      [field]: truncatedValue,
    }));
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      appName: true,
      description: true,
      painPoint: true,
      solution: true,
    });

    if (isFormValid()) {
      setIsGenerating(true);
      setError(null);

      try {
        const response = await fetch('/api/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Failed to generate PRD');
        }

        const data = await response.json();
        setGeneratedPRD(data.prd);
      } catch (err) {
        setError('Failed to generate PRD. Please try again.');
        console.error('PRD generation error:', err);
      } finally {
        setIsGenerating(false);
      }
    }
  };

  const appNameValidation = validateField('appName', formData.appName);
  const descriptionValidation = validateField('description', formData.description);
  const painPointValidation = validateField('painPoint', formData.painPoint);
  const solutionValidation = validateField('solution', formData.solution);

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto space-y-6">
      {/* App Name Field */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="appName" className="text-sm font-medium text-text-secondary">
            App Name
          </label>
          <span className={`text-xs font-medium ${getCounterColor('appName', formData.appName.length)}`}>
            {formData.appName.length} / {FIELD_LIMITS.appName.max}
          </span>
        </div>
        <input
          type="text"
          id="appName"
          value={formData.appName}
          onChange={(e) => handleChange('appName', e.target.value)}
          onBlur={() => handleBlur('appName')}
          placeholder="Enter your app name"
          className={`w-full px-4 py-3 bg-dark-200 border rounded-lg text-white placeholder-text-tertiary focus:outline-none focus:ring-2 transition-colors ${
            touched.appName && !appNameValidation.isValid
              ? 'border-error focus:border-error focus:ring-error/20'
              : 'border-dark-300 focus:border-crimson focus:ring-crimson/20'
          }`}
        />
        {touched.appName && !appNameValidation.isValid && (
          <p className="text-xs text-error">{appNameValidation.error}</p>
        )}
      </div>

      {/* Description Field */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="description" className="text-sm font-medium text-text-secondary">
            Description
          </label>
          <span className={`text-xs font-medium ${getCounterColor('description', formData.description.length)}`}>
            {formData.description.length} / {FIELD_LIMITS.description.max}
          </span>
        </div>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleChange('description', e.target.value)}
          onBlur={() => handleBlur('description')}
          placeholder="Describe your app in detail"
          rows={4}
          className={`w-full px-4 py-3 bg-dark-200 border rounded-lg text-white placeholder-text-tertiary focus:outline-none focus:ring-2 transition-colors resize-none ${
            touched.description && !descriptionValidation.isValid
              ? 'border-error focus:border-error focus:ring-error/20'
              : 'border-dark-300 focus:border-crimson focus:ring-crimson/20'
          }`}
        />
        {touched.description && !descriptionValidation.isValid && (
          <p className="text-xs text-error">{descriptionValidation.error}</p>
        )}
      </div>

      {/* Pain Point Field */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="painPoint" className="text-sm font-medium text-text-secondary">
            Pain Point
          </label>
          <span className={`text-xs font-medium ${getCounterColor('painPoint', formData.painPoint.length)}`}>
            {formData.painPoint.length} / {FIELD_LIMITS.painPoint.max}
          </span>
        </div>
        <textarea
          id="painPoint"
          value={formData.painPoint}
          onChange={(e) => handleChange('painPoint', e.target.value)}
          onBlur={() => handleBlur('painPoint')}
          placeholder="What problem does your app solve?"
          rows={4}
          className={`w-full px-4 py-3 bg-dark-200 border rounded-lg text-white placeholder-text-tertiary focus:outline-none focus:ring-2 transition-colors resize-none ${
            touched.painPoint && !painPointValidation.isValid
              ? 'border-error focus:border-error focus:ring-error/20'
              : 'border-dark-300 focus:border-crimson focus:ring-crimson/20'
          }`}
        />
        {touched.painPoint && !painPointValidation.isValid && (
          <p className="text-xs text-error">{painPointValidation.error}</p>
        )}
      </div>

      {/* Solution Field */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="solution" className="text-sm font-medium text-text-secondary">
            Solution
          </label>
          <span className={`text-xs font-medium ${getCounterColor('solution', formData.solution.length)}`}>
            {formData.solution.length} / {FIELD_LIMITS.solution.max}
          </span>
        </div>
        <textarea
          id="solution"
          value={formData.solution}
          onChange={(e) => handleChange('solution', e.target.value)}
          onBlur={() => handleBlur('solution')}
          placeholder="How will your app solve this problem?"
          rows={4}
          className={`w-full px-4 py-3 bg-dark-200 border rounded-lg text-white placeholder-text-tertiary focus:outline-none focus:ring-2 transition-colors resize-none ${
            touched.solution && !solutionValidation.isValid
              ? 'border-error focus:border-error focus:ring-error/20'
              : 'border-dark-300 focus:border-crimson focus:ring-crimson/20'
          }`}
        />
        {touched.solution && !solutionValidation.isValid && (
          <p className="text-xs text-error">{solutionValidation.error}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={!isFormValid() || isGenerating}
          className={`w-full px-6 py-4 font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-crimson/50 ${
            isFormValid() && !isGenerating
              ? 'bg-crimson hover:bg-crimson-light text-white cursor-pointer'
              : 'bg-dark-200 text-text-tertiary cursor-not-allowed border border-dark-300'
          }`}
        >
          {isGenerating ? 'Generating PRD...' : 'Generate PRD'}
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-4 bg-error/10 border border-error rounded-lg">
          <p className="text-error text-sm">{error}</p>
        </div>
      )}

      {/* Generated PRD Display */}
      {generatedPRD && (
        <div className="mt-8 relative">
          {/* Sticky Action Bar */}
          <div className="sticky top-0 z-10 bg-dark-100 border border-dark-300 rounded-t-lg p-4 backdrop-blur-sm bg-opacity-95">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Generated PRD</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => navigator.clipboard.writeText(generatedPRD)}
                  className="px-4 py-2 bg-dark-200 hover:bg-dark-300 text-text-secondary hover:text-white border border-dark-300 rounded-lg transition-colors text-sm font-medium"
                  title="Copy PRD to clipboard"
                >
                  Copy
                </button>
                <button
                  onClick={() => {
                    const blob = new Blob([generatedPRD], { type: 'text/markdown' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `${formData.appName.toLowerCase().replace(/\s+/g, '-')}-prd.md`;
                    a.click();
                    URL.revokeObjectURL(url);
                  }}
                  className="px-4 py-2 bg-crimson hover:bg-crimson-light text-white rounded-lg transition-colors text-sm font-medium"
                  title="Download PRD as markdown file"
                >
                  Download
                </button>
                <button
                  onClick={() => {
                    setGeneratedPRD(null);
                    setFormData({
                      appName: '',
                      description: '',
                      painPoint: '',
                      solution: '',
                    });
                    setTouched({
                      appName: false,
                      description: false,
                      painPoint: false,
                      solution: false,
                    });
                    setError(null);
                  }}
                  className="px-4 py-2 bg-dark-200 hover:bg-error text-text-secondary hover:text-white border border-dark-300 hover:border-error rounded-lg transition-colors text-sm font-medium"
                  title="Create a new PRD"
                >
                  New PRD
                </button>
              </div>
            </div>
          </div>

          {/* PRD Content */}
          <div className="bg-dark-100 border border-dark-300 border-t-0 rounded-b-lg p-6">
            <div className="markdown-content prose prose-invert max-w-none bg-dark-200 p-6 rounded-lg overflow-x-auto">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {generatedPRD}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
