import { forwardRef, useEffect, useRef, useId } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../utils/cn';
import type { CheckboxProps } from './Checkbox.types';

/**
 * Checkbox Variants using CVA
 *
 * Defines the visual styles for different checkbox sizes
 */
const checkboxVariants = cva(
  /* Base styles for the checkbox input */
  [
    'peer',
    'shrink-0',
    'appearance-none',
    'border',
    'border-[var(--color-input)]',
    'bg-[var(--color-background)]',
    'transition-colors duration-150',
    // Focus ring
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-[var(--color-ring)]',
    'focus-visible:ring-offset-2',
    // Checked state
    'checked:bg-[var(--color-primary-default)]',
    'checked:border-[var(--color-primary-default)]',
    // Indeterminate state (same as checked visually)
    'indeterminate:bg-[var(--color-primary-default)]',
    'indeterminate:border-[var(--color-primary-default)]',
    // Disabled state
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
    // Cursor
    'cursor-pointer',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      size: {
        sm: ['h-4 w-4', 'rounded-[var(--radius-sm)]'],
        md: ['h-5 w-5', 'rounded-[var(--radius-sm)]'],
        lg: ['h-6 w-6', 'rounded-[var(--radius-default)]'],
      },
      error: {
        true: ['border-[var(--color-destructive-default)]'],
        false: [],
      },
    },
    defaultVariants: {
      size: 'md',
      error: false,
    },
  }
);

/**
 * Label text variants
 */
const labelVariants = cva(
  [
    'font-medium',
    'text-[var(--color-foreground)]',
    'cursor-pointer',
    'peer-disabled:cursor-not-allowed',
    'peer-disabled:opacity-50',
  ],
  {
    variants: {
      size: {
        sm: ['text-xs'],
        md: ['text-sm'],
        lg: ['text-base'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

/**
 * Description text variants
 */
const descriptionVariants = cva(
  ['text-[var(--color-muted-foreground)]', 'peer-disabled:opacity-50'],
  {
    variants: {
      size: {
        sm: ['text-xs'],
        md: ['text-sm'],
        lg: ['text-sm'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

/**
 * Checkmark Icon (shown when checked)
 */
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn('pointer-events-none absolute text-white', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/**
 * Minus Icon (shown when indeterminate)
 */
function MinusIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn('pointer-events-none absolute text-white', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

/**
 * Icon size mapping based on checkbox size
 */
const iconSizeMap = {
  sm: 'h-3 w-3',
  md: 'h-3.5 w-3.5',
  lg: 'h-4 w-4',
};

/**
 * Checkbox Component
 *
 * A customizable checkbox with support for labels, descriptions,
 * and indeterminate states.
 *
 * @example
 * // Basic usage
 * <Checkbox label="Accept terms" />
 *
 * @example
 * // With description
 * <Checkbox
 *   label="Newsletter"
 *   description="Receive weekly updates"
 * />
 *
 * @example
 * // Indeterminate (partially selected)
 * <Checkbox label="Select all" indeterminate />
 *
 * @example
 * // Different sizes
 * <Checkbox size="sm" label="Small" />
 * <Checkbox size="lg" label="Large" />
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      description,
      size = 'md',
      indeterminate = false,
      error = false,
      disabled = false,
      className,
      wrapperClassName,
      id,
      ...props
    },
    ref
  ) => {
    // Internal ref for handling indeterminate state
    const internalRef = useRef<HTMLInputElement>(null);

    // Combine refs
    const inputRef = (ref as React.RefObject<HTMLInputElement>) || internalRef;

    // Handle indeterminate state (can only be set via JS, not HTML attribute)
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate, inputRef]);

    // Generate unique ID using React's useId hook (stable across renders)
    const generatedId = useId();
    const inputId = id || `checkbox-${generatedId}`;
    const descriptionId = description ? `${inputId}-description` : undefined;

    return (
      <div className={cn('flex items-start gap-2', wrapperClassName)}>
        {/* Checkbox input wrapper (for positioning the icon) */}
        <div className="relative flex items-center justify-center">
          <input
            ref={inputRef}
            type="checkbox"
            id={inputId}
            disabled={disabled}
            aria-describedby={descriptionId}
            className={cn(checkboxVariants({ size, error }), className)}
            {...props}
          />
          {/* Checkmark icon (only visible when checked) */}
          <CheckIcon
            className={cn(
              iconSizeMap[size],
              'opacity-0 peer-checked:opacity-100',
              indeterminate && 'hidden'
            )}
          />
          {/* Minus icon (only visible when indeterminate) */}
          {indeterminate && <MinusIcon className={cn(iconSizeMap[size], 'opacity-100')} />}
        </div>

        {/* Label and description */}
        {(label || description) && (
          <div className="flex flex-col">
            {label && (
              <label htmlFor={inputId} className={labelVariants({ size })}>
                {label}
              </label>
            )}
            {description && (
              <span id={descriptionId} className={descriptionVariants({ size })}>
                {description}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { checkboxVariants };
export type { CheckboxProps } from './Checkbox.types';
