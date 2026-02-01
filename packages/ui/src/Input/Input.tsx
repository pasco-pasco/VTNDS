import { forwardRef, useId } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../utils/cn';
import type { InputProps } from './Input.types';

/**
 * Input Variants using CVA
 *
 * Defines the visual styles for different input states and sizes
 */
const inputVariants = cva(
  /* Base styles for the input */
  [
    'w-full',
    'border',
    'bg-[var(--color-background)]',
    'text-[var(--color-foreground)]',
    'placeholder:text-[var(--color-muted-foreground)]',
    'transition-colors duration-150',
    // Focus ring
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-[var(--color-ring)]',
    'focus-visible:border-[var(--color-ring)]',
    // Disabled state
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
    // Shadow
    'shadow-sm',
  ],
  {
    variants: {
      size: {
        sm: [
          'h-6', // 24px
          'px-2', // 8px
          'py-1',
          'text-xs', // 12px
          'rounded-[var(--radius-default)]',
        ],
        md: [
          'h-7', // 28px
          'px-2.5', // 10px
          'py-1.5',
          'text-xs', // 12px
          'rounded-[var(--radius-default)]',
        ],
        lg: [
          'h-8', // 32px
          'px-3', // 12px
          'py-2',
          'text-sm', // 14px
          'rounded-[var(--radius-default)]',
        ],
      },
      variant: {
        default: ['border-[var(--color-input)]'],
        file: [
          'border-[var(--color-input)]',
          'file:border-0',
          'file:bg-transparent',
          'file:text-sm',
          'file:font-medium',
          'file:text-[var(--color-foreground)]',
          'file:mr-3',
          'cursor-pointer',
        ],
      },
      error: {
        true: [
          'border-[var(--color-destructive-default)]',
          'focus-visible:border-[var(--color-destructive-default)]',
          'focus-visible:ring-[var(--color-destructive-default)]/20',
        ],
        false: [],
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
      error: false,
    },
  }
);

/**
 * Label variants
 */
const labelVariants = cva(['block', 'font-medium', 'text-[var(--color-foreground)]', 'mb-1.5'], {
  variants: {
    size: {
      sm: ['text-xs'],
      md: ['text-sm'],
      lg: ['text-sm'],
    },
    disabled: {
      true: ['opacity-50', 'cursor-not-allowed'],
      false: [],
    },
  },
  defaultVariants: {
    size: 'md',
    disabled: false,
  },
});

/**
 * Helper/Error text variants
 */
const helperTextVariants = cva(['mt-1.5'], {
  variants: {
    size: {
      sm: ['text-xs'],
      md: ['text-xs'],
      lg: ['text-sm'],
    },
    error: {
      true: ['text-[var(--color-destructive-default)]'],
      false: ['text-[var(--color-muted-foreground)]'],
    },
    disabled: {
      true: ['opacity-50'],
      false: [],
    },
  },
  defaultVariants: {
    size: 'md',
    error: false,
    disabled: false,
  },
});

/**
 * Input Component
 *
 * A flexible text input component with support for labels,
 * helper text, error states, and file uploads.
 *
 * @example
 * // Basic usage
 * <Input placeholder="Enter your name" />
 *
 * @example
 * // With label and helper text
 * <Input
 *   label="Email"
 *   placeholder="you@example.com"
 *   helperText="We'll never share your email"
 * />
 *
 * @example
 * // Error state
 * <Input
 *   label="Password"
 *   type="password"
 *   error
 *   errorMessage="Password must be at least 8 characters"
 * />
 *
 * @example
 * // File input
 * <Input variant="file" type="file" label="Upload document" />
 *
 * @example
 * // Different sizes
 * <Input size="sm" placeholder="Small" />
 * <Input size="lg" placeholder="Large" />
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'default',
      size = 'md',
      error = false,
      label,
      helperText,
      errorMessage,
      disabled = false,
      className,
      wrapperClassName,
      id,
      type,
      ...props
    },
    ref
  ) => {
    // Generate unique ID using React's useId hook
    const generatedId = useId();
    const inputId = id || `input-${generatedId}`;
    // Determine the text to show below the input
    const bottomText = error && errorMessage ? errorMessage : helperText;
    const helperTextId = bottomText ? `${inputId}-helper` : undefined;

    // Auto-detect file variant from type
    const effectiveVariant = type === 'file' ? 'file' : variant;

    return (
      <div className={cn('flex flex-col', wrapperClassName)}>
        {/* Label */}
        {label && (
          <label htmlFor={inputId} className={labelVariants({ size, disabled })}>
            {label}
          </label>
        )}

        {/* Input */}
        <input
          ref={ref}
          id={inputId}
          type={type}
          disabled={disabled}
          aria-describedby={helperTextId}
          aria-invalid={error || undefined}
          className={cn(inputVariants({ size, variant: effectiveVariant, error }), className)}
          {...props}
        />

        {/* Helper/Error text */}
        {bottomText && (
          <span id={helperTextId} className={helperTextVariants({ size, error, disabled })}>
            {bottomText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { inputVariants };
export type { InputProps } from './Input.types';
