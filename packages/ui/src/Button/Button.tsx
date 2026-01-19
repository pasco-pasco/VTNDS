import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../utils/cn';
import type { ButtonProps } from './Button.types';

/**
 * Button Variants using CVA (Class Variance Authority)
 *
 * 📚 LEARNING MOMENT:
 * CVA is like Figma's variant system in code.
 * - First argument: base styles (applied to ALL buttons)
 * - variants object: conditional styles (like Figma variant properties)
 * - defaultVariants: what's selected by default
 *
 * The styles use CSS variables from our design tokens.
 * Example: bg-[--color-primary-default] uses the token defined in theme.css
 */
const buttonVariants = cva(
  /* ========================================
     BASE STYLES - Applied to every button
     These are the "always on" styles
     ======================================== */
  [
    // Layout
    'inline-flex items-center justify-center',
    // Typography
    'font-medium',
    // Transitions (smooth hover/focus effects)
    'transition-colors duration-150',
    // Focus ring for accessibility (keyboard users)
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2',
    // Disabled state (50% opacity, not clickable)
    'disabled:pointer-events-none disabled:opacity-50',
    // Remove default button styles
    'border-0 cursor-pointer',
  ],
  {
    /* ========================================
       VARIANTS - Conditional styles
       Like Figma's variant property options
       ======================================== */
    variants: {
      /**
       * Visual style variant
       * Each maps to a Figma variant with specific colors
       */
      variant: {
        /* DEFAULT (Primary) - Blue background, white text */
        default: [
          'bg-[var(--color-primary-default)]',
          'text-[var(--color-primary-foreground)]',
          // Hover: slightly darker
          'hover:bg-[var(--color-primary-hover)]',
          // Active/Pressed: even darker
          'active:bg-[var(--color-primary-active)]',
        ],

        /* SECONDARY - Gray background, dark text */
        secondary: [
          'bg-[var(--color-secondary-default)]',
          'text-[var(--color-secondary-foreground)]',
          'hover:bg-[var(--color-secondary-hover)]',
          'active:bg-[var(--color-secondary-active)]',
        ],

        /* DESTRUCTIVE - Red background, white text */
        destructive: [
          'bg-[var(--color-destructive-default)]',
          'text-[var(--color-destructive-foreground)]',
          'hover:bg-[var(--color-destructive-hover)]',
          'active:bg-[var(--color-destructive-active)]',
          // Destructive buttons use red focus ring
          'focus-visible:ring-red-500/20',
        ],

        /* OUTLINE - Transparent with border */
        outline: [
          'bg-[var(--color-outline-default)]',
          'text-[var(--color-foreground)]',
          'border border-[var(--color-outline-border)]',
          'hover:bg-[var(--color-outline-hover)]',
          'active:bg-[var(--color-outline-active)]',
        ],

        /* GHOST - Transparent, no border */
        ghost: [
          'bg-[var(--color-ghost-default)]',
          'text-[var(--color-foreground)]',
          'hover:bg-[var(--color-ghost-hover)]',
          'active:bg-[var(--color-ghost-active)]',
        ],

        /* LINK - Text only with underline on hover */
        link: [
          'bg-transparent',
          'text-[var(--color-primary-default)]',
          'underline-offset-4',
          'hover:underline',
          'hover:text-[var(--color-primary-hover)]',
          // Links don't need as much padding
          'p-0 h-auto',
        ],
      },

      /**
       * Size variant
       * Controls height, padding, font size, and border radius
       * Heights: sm=24px, md=32px, lg=40px (matching Figma specs)
       */
      size: {
        /* SMALL - 24px height, compact UI */
        sm: [
          'h-6', // 24px height
          'px-2', // 8px horizontal padding
          'text-xs', // 12px font
          'rounded-[var(--radius-default)]',
          'gap-1', // 4px gap between icon and text
        ],

        /* MEDIUM - 32px height, default */
        md: [
          'h-8', // 32px height
          'px-2.5', // 10px horizontal padding
          'text-sm', // 14px font
          'rounded-[var(--radius-default)]',
          'gap-1.5', // 6px gap
        ],

        /* LARGE - 40px height, touch targets */
        lg: [
          'h-10', // 40px height
          'px-3', // 12px horizontal padding
          'text-sm', // 14px font (same as md)
          'rounded-[var(--radius-default)]',
          'gap-2', // 8px gap
        ],

        /* ICON-ONLY SIZES - Square buttons for icons */
        'icon-sm': [
          'h-6 w-6', // 24×24px
          'p-0',
          'rounded-[var(--radius-default)]',
        ],
        'icon-md': [
          'h-8 w-8', // 32×32px
          'p-0',
          'rounded-[var(--radius-default)]',
        ],
        'icon-lg': [
          'h-10 w-10', // 40×40px
          'p-0',
          'rounded-[var(--radius-default)]',
        ],
      },

      /**
       * Full width variant
       * Makes button expand to fill container
       */
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },

    /* ========================================
       DEFAULT VALUES
       What's selected when no prop is passed
       ======================================== */
    defaultVariants: {
      variant: 'default',
      size: 'md',
      fullWidth: false,
    },
  }
);

/**
 * Loading Spinner Component
 *
 * Shows while button action is in progress.
 * Spins continuously to indicate activity.
 */
function LoadingSpinner({ className }: { className?: string }) {
  return (
    <svg
      className={cn('animate-spin', className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={16}
      height={16}
      aria-hidden="true"
    >
      {/* Background circle (faded) */}
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      {/* Spinning arc */}
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

/**
 * Button Component
 *
 * Primary interactive element for user actions.
 *
 * 📚 LEARNING MOMENT:
 * forwardRef allows parent components to access this button's DOM element.
 * This is important for focus management and accessibility tools.
 * Think of it like Figma's "Expose nested instances" but for the DOM.
 *
 * @example
 * // Basic usage
 * <Button>Click me</Button>
 *
 * @example
 * // With variant and size (like changing Figma properties)
 * <Button variant="secondary" size="lg">Large Secondary</Button>
 *
 * @example
 * // With icons (like Figma icon slots)
 * <Button leftIcon={<IconPlus size={16} />}>Add Item</Button>
 *
 * @example
 * // Icon-only (requires aria-label for accessibility)
 * <Button size="icon-md" aria-label="Settings">
 *   <IconSettings size={16} />
 * </Button>
 *
 * @example
 * // Loading state
 * <Button loading>Saving...</Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      // Destructure props with defaults
      variant = 'default',
      size = 'md',
      disabled = false,
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      children,
      ...props // All other native button props (onClick, type, etc.)
    },
    ref
  ) => {
    // Button is disabled when explicitly disabled OR when loading
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading}
        className={cn(
          // Apply all CVA-generated classes
          buttonVariants({ variant, size, fullWidth }),
          // Allow custom className to override
          className
        )}
        {...props}
      >
        {/* Left Icon OR Loading Spinner */}
        {loading ? (
          <LoadingSpinner className="shrink-0" />
        ) : leftIcon ? (
          <span className="shrink-0" aria-hidden="true">
            {leftIcon}
          </span>
        ) : null}

        {/* Button Label (children) */}
        {children && <span>{children}</span>}

        {/* Right Icon (hidden when loading) */}
        {rightIcon && !loading && (
          <span className="shrink-0" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

// Display name for React DevTools (shows "Button" instead of "ForwardRef")
Button.displayName = 'Button';

// Export the variants function for advanced use cases
export { buttonVariants };

// Export types for TypeScript consumers
export type { ButtonProps, ButtonVariant, ButtonSize } from './Button.types';
