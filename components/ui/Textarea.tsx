import { TextareaHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const inputId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          className={cn(
            'w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 transition-colors placeholder:text-gray-400 focus:border-google-blue focus:outline-none focus:ring-2 focus:ring-google-blue/20 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500',
            error && 'border-google-red focus:border-google-red focus:ring-google-red/20',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1.5 text-sm text-google-red">{error}</p>}
        {helperText && !error && (
          <p className="mt-1.5 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
