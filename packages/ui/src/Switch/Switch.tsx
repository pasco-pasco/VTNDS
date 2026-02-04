import { forwardRef, useId } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../utils/cn';
import type { SwitchProps } from './Switch.types';

/**
 * Switch Track Variants using CVA
 *
 * Defines the visual styles for the switch track (background)
 */
const switchTrackVariants = cva(
  /* Base styles for the switch track */
  [
    'relative',
    'inline-flex',
    'items-center',
    'shrink-0',
    'cursor-pointer',
    'rounded-full',
    'border-2',
    'border-transparent',
    'bg-[var(--color-input)]',
    'transition-colors duration-150',
    // Focus ring (using :has() to detect child input focus)
    'has-[:focus-visible]:outline-none',
    'has-[:focus-visible]:ring-2',
    'has-[:focus-visible]:ring-[var(--color-ring)]',
    'has-[:focus-visible]:ring-offset-2',
    // Checked state (using :has() to detect child input checked)
    'has-[:checked]:bg-[var(--color-primary-default)]',
    // Disabled state
    'has-[:disabled]:cursor-not-allowed',
    'has-[:disabled]:opacity-50',
  ],
  {
    variants: {
      size: {
        sm: ['h-5 w-9'],
        md: ['h-6 w-11'],
        lg: ['h-7 w-[52px]'],
      },
      error: {
        true: [
          'bg-[var(--color-destructive-default)]',
          'has-[:checked]:bg-[var(--color-destructive-default)]',
        ],
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
 * Switch Thumb Variants using CVA
 *
 * Defines the visual styles for the switch thumb (knob)
 */
const switchThumbVariants = cva(
  /* Base styles for the switch thumb */
  [
    'pointer-events-none',
    'inline-block',
    'rounded-full',
    'bg-[var(--color-background)]',
    'shadow-sm',
    'ring-0',
    'transition-transform duration-150',
  ],
  {
    variants: {
      size: {
        sm: ['h-4 w-4', 'translate-x-0', 'peer-checked:translate-x-4'],
        md: ['h-5 w-5', 'translate-x-0', 'peer-checked:translate-x-5'],
        lg: ['h-6 w-6', 'translate-x-0', 'peer-checked:translate-x-6'],
      },
    },
    defaultVariants: {
      size: 'md',
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
 * Switch Component
 *
 * A toggle switch that allows users to turn an option on or off.
 * Semantically a checkbox with role="switch" for accessibility.
 *
 * @example
 * // Basic usage
 * <Switch label="Enable notifications" />
 *
 * @example
 * // With description
 * <Switch
 *   label="Dark mode"
 *   description="Use dark theme across the app"
 * />
 *
 * @example
 * // Controlled
 * <Switch
 *   checked={isEnabled}
 *   onChange={(e) => setIsEnabled(e.target.checked)}
 * />
 *
 * @example
 * // Different sizes
 * <Switch size="sm" label="Small" />
 * <Switch size="lg" label="Large" />
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      label,
      description,
      size = 'md',
      error = false,
      disabled = false,
      className,
      wrapperClassName,
      id,
      ...props
    },
    ref
  ) => {
    // Generate unique ID using React's useId hook (stable across renders)
    const generatedId = useId();
    const inputId = id || `switch-${generatedId}`;
    const descriptionId = description ? `${inputId}-description` : undefined;

    return (
      <div className={cn('flex items-start gap-2', wrapperClassName)}>
        {/* Switch track container - wraps input and visual elements */}
        <label htmlFor={inputId} className={cn(switchTrackVariants({ size, error }), className)}>
          {/* Hidden checkbox input for accessibility */}
          <input
            ref={ref}
            type="checkbox"
            role="switch"
            id={inputId}
            disabled={disabled}
            aria-describedby={descriptionId}
            aria-invalid={error || undefined}
            className="peer sr-only"
            {...props}
          />
          {/* Visual thumb - now sibling of input so peer-checked works */}
          <span className={switchThumbVariants({ size })} />
        </label>

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

Switch.displayName = 'Switch';

export { switchTrackVariants, switchThumbVariants };
export type { SwitchProps } from './Switch.types';
