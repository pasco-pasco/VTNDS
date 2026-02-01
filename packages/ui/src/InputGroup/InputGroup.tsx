import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../utils/cn';
import type {
  InputGroupProps,
  InputGroupAddonProps,
  InputGroupButtonProps,
  InputGroupInputProps,
  InputGroupTextareaProps,
  InputGroupTextProps,
} from './InputGroup.types';

/**
 * InputGroup Variants
 *
 * 📚 LEARNING MOMENT:
 * This creates a flexible container for inputs with addons.
 * Uses CSS Grid to position elements based on the addon alignment.
 */
const inputGroupVariants = cva([
  // Base container styles
  'relative',
  'flex',
  'min-w-0', // Prevents overflow issues
  'w-full',
  // Focus-within creates a "group focus" effect
  'focus-within:ring-2',
  'focus-within:ring-[var(--color-ring)]',
  'rounded-[var(--radius-default)]',
  'transition-shadow',
  'duration-150',
]);

/**
 * InputGroupAddon Variants
 *
 * Controls positioning of icons, text, and buttons relative to the input
 */
const inputGroupAddonVariants = cva(
  [
    // Base addon styles
    'flex',
    'items-center',
    'gap-1',
    'pointer-events-auto',
  ],
  {
    variants: {
      align: {
        // Inline alignments (left/right of input)
        'inline-start': [
          'absolute',
          'left-0',
          'top-0',
          'bottom-0',
          'pl-3',
          'z-10',
        ],
        'inline-end': [
          'absolute',
          'right-0',
          'top-0',
          'bottom-0',
          'pr-3',
          'z-10',
        ],
        // Block alignments (above/below input)
        'block-start': [
          'w-full',
          'pb-2',
        ],
        'block-end': [
          'w-full',
          'pt-2',
        ],
      },
    },
    defaultVariants: {
      align: 'inline-start',
    },
  }
);

/**
 * InputGroupButton Variants
 *
 * Small button designed to fit inside input groups
 */
const inputGroupButtonVariants = cva(
  [
    // Base button styles
    'inline-flex',
    'items-center',
    'justify-center',
    'font-medium',
    'transition-colors',
    'duration-150',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-[var(--color-ring)]',
    'focus-visible:ring-offset-1',
    'disabled:pointer-events-none',
    'disabled:opacity-50',
    'border-0',
    'cursor-pointer',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-[var(--color-primary-default)]',
          'text-[var(--color-primary-foreground)]',
          'hover:bg-[var(--color-primary-hover)]',
          'active:bg-[var(--color-primary-active)]',
        ],
        secondary: [
          'bg-[var(--color-secondary-default)]',
          'text-[var(--color-secondary-foreground)]',
          'hover:bg-[var(--color-secondary-hover)]',
          'active:bg-[var(--color-secondary-active)]',
        ],
        destructive: [
          'bg-[var(--color-destructive-default)]',
          'text-[var(--color-destructive-foreground)]',
          'hover:bg-[var(--color-destructive-hover)]',
          'active:bg-[var(--color-destructive-active)]',
        ],
        outline: [
          'bg-[var(--color-outline-default)]',
          'text-[var(--color-foreground)]',
          'border',
          'border-[var(--color-outline-border)]',
          'hover:bg-[var(--color-outline-hover)]',
          'active:bg-[var(--color-outline-active)]',
        ],
        ghost: [
          'bg-transparent',
          'text-[var(--color-foreground)]',
          'hover:bg-[var(--color-ghost-hover)]',
          'active:bg-[var(--color-ghost-active)]',
        ],
        link: [
          'bg-transparent',
          'text-[var(--color-primary-default)]',
          'underline-offset-4',
          'hover:underline',
          'hover:text-[var(--color-primary-hover)]',
        ],
      },
      size: {
        // Extra small - fits in small inputs
        xs: [
          'h-5', // 20px
          'px-2',
          'text-xs',
          'rounded-[var(--radius-sm)]',
          'gap-1',
        ],
        // Small - fits in medium inputs
        sm: [
          'h-6', // 24px
          'px-2',
          'text-xs',
          'rounded-[var(--radius-default)]',
          'gap-1',
        ],
        // Icon-only extra small
        'icon-xs': [
          'h-5',
          'w-5',
          'p-0',
          'rounded-[var(--radius-sm)]',
        ],
        // Icon-only small
        'icon-sm': [
          'h-6',
          'w-6',
          'p-0',
          'rounded-[var(--radius-default)]',
        ],
      },
    },
    defaultVariants: {
      variant: 'ghost',
      size: 'xs',
    },
  }
);

/**
 * InputGroupInput Variants
 *
 * Special input styling for use within InputGroup
 */
const inputGroupInputVariants = cva([
  // Base input styles
  'flex',
  'w-full',
  'border',
  'border-[var(--color-input)]',
  'bg-[var(--color-background)]',
  'text-[var(--color-foreground)]',
  'placeholder:text-[var(--color-muted-foreground)]',
  'transition-colors',
  'duration-150',
  'h-8', // 32px default
  'px-3',
  'py-1.5',
  'text-sm',
  'rounded-[var(--radius-default)]',
  'shadow-sm',
  // Focus styles - work with parent focus-within
  'focus-visible:outline-none',
  'focus-visible:ring-0', // Parent handles ring
  'focus-visible:border-[var(--color-ring)]',
  // Disabled
  'disabled:cursor-not-allowed',
  'disabled:opacity-50',
  // Data slot for custom components
  'data-[slot=input-group-control]:w-full',
]);

/**
 * InputGroupTextarea Variants
 *
 * Special textarea styling for use within InputGroup
 */
const inputGroupTextareaVariants = cva([
  // Base textarea styles
  'flex',
  'w-full',
  'min-h-[80px]',
  'border',
  'border-[var(--color-input)]',
  'bg-[var(--color-background)]',
  'text-[var(--color-foreground)]',
  'placeholder:text-[var(--color-muted-foreground)]',
  'transition-colors',
  'duration-150',
  'px-3',
  'py-2',
  'text-sm',
  'rounded-[var(--radius-default)]',
  'shadow-sm',
  'resize-y',
  // Focus styles
  'focus-visible:outline-none',
  'focus-visible:ring-0',
  'focus-visible:border-[var(--color-ring)]',
  // Disabled
  'disabled:cursor-not-allowed',
  'disabled:opacity-50',
  // Data slot
  'data-[slot=input-group-control]:w-full',
]);

/**
 * InputGroupText Variants
 *
 * Text content for addons (like "$", "USD", etc.)
 */
const inputGroupTextVariants = cva([
  'text-sm',
  'text-[var(--color-muted-foreground)]',
  'whitespace-nowrap',
  'select-none',
]);

/**
 * InputGroup Component
 *
 * Container for inputs with addons (icons, text, buttons)
 *
 * 📚 LEARNING MOMENT:
 * This component creates a "compound component" pattern.
 * Like Figma variants, you compose it from smaller pieces:
 * - InputGroup (container)
 * - InputGroupInput (the input field)
 * - InputGroupAddon (icon/text/button container)
 *
 * @example
 * // Basic usage with icon
 * <InputGroup>
 *   <InputGroupInput placeholder="Search..." />
 *   <InputGroupAddon>
 *     <SearchIcon />
 *   </InputGroupAddon>
 * </InputGroup>
 *
 * @example
 * // With text prefix
 * <InputGroup>
 *   <InputGroupInput placeholder="0.00" />
 *   <InputGroupAddon align="inline-start">
 *     <InputGroupText>$</InputGroupText>
 *   </InputGroupAddon>
 * </InputGroup>
 *
 * @example
 * // With button
 * <InputGroup>
 *   <InputGroupInput placeholder="Enter URL..." />
 *   <InputGroupAddon align="inline-end">
 *     <InputGroupButton>Search</InputGroupButton>
 *   </InputGroupAddon>
 * </InputGroup>
 */
export const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(inputGroupVariants(), className)} {...props}>
        {children}
      </div>
    );
  }
);

InputGroup.displayName = 'InputGroup';

/**
 * InputGroupAddon Component
 *
 * Container for icons, text, or buttons alongside the input
 *
 * ⚠️ IMPORTANT: For proper focus navigation, always place InputGroupAddon
 * AFTER the input in the DOM, then use the `align` prop to position it visually.
 *
 * @example
 * // Icon at start (visually on left)
 * <InputGroup>
 *   <InputGroupInput />
 *   <InputGroupAddon align="inline-start">
 *     <SearchIcon />
 *   </InputGroupAddon>
 * </InputGroup>
 *
 * @example
 * // Button at end (visually on right)
 * <InputGroup>
 *   <InputGroupInput />
 *   <InputGroupAddon align="inline-end">
 *     <InputGroupButton>Go</InputGroupButton>
 *   </InputGroupAddon>
 * </InputGroup>
 */
export const InputGroupAddon = forwardRef<HTMLDivElement, InputGroupAddonProps>(
  ({ align = 'inline-start', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(inputGroupAddonVariants({ align }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

InputGroupAddon.displayName = 'InputGroupAddon';

/**
 * InputGroupButton Component
 *
 * Small button designed to fit inside InputGroupAddon
 *
 * @example
 * <InputGroupAddon>
 *   <InputGroupButton>Search</InputGroupButton>
 * </InputGroupAddon>
 *
 * @example
 * // Icon-only button
 * <InputGroupAddon>
 *   <InputGroupButton size="icon-xs" aria-label="Copy">
 *     <CopyIcon />
 *   </InputGroupButton>
 * </InputGroupAddon>
 */
export const InputGroupButton = forwardRef<HTMLButtonElement, InputGroupButtonProps>(
  ({ variant = 'ghost', size = 'xs', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(inputGroupButtonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

InputGroupButton.displayName = 'InputGroupButton';

/**
 * InputGroupInput Component
 *
 * Replacement for regular Input when used inside InputGroup.
 * Has special focus handling for the group context.
 *
 * 💡 TIP: Use this instead of the regular Input component
 * when building input groups for proper styling and focus states.
 *
 * @example
 * <InputGroup>
 *   <InputGroupInput placeholder="Enter text..." />
 *   <InputGroupAddon>
 *     <SearchIcon />
 *   </InputGroupAddon>
 * </InputGroup>
 */
export const InputGroupInput = forwardRef<HTMLInputElement, InputGroupInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        data-slot="input-group-control"
        className={cn(inputGroupInputVariants(), className)}
        {...props}
      />
    );
  }
);

InputGroupInput.displayName = 'InputGroupInput';

/**
 * InputGroupTextarea Component
 *
 * Replacement for regular Textarea when used inside InputGroup.
 * Has special focus handling for the group context.
 *
 * @example
 * <InputGroup>
 *   <InputGroupTextarea placeholder="Enter message..." />
 *   <InputGroupAddon align="block-end">
 *     <InputGroupButton>Send</InputGroupButton>
 *   </InputGroupAddon>
 * </InputGroup>
 */
export const InputGroupTextarea = forwardRef<HTMLTextAreaElement, InputGroupTextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        data-slot="input-group-control"
        className={cn(inputGroupTextareaVariants(), className)}
        {...props}
      />
    );
  }
);

InputGroupTextarea.displayName = 'InputGroupTextarea';

/**
 * InputGroupText Component
 *
 * Simple text content for addons (like "$", "USD", "@", etc.)
 *
 * @example
 * <InputGroupAddon>
 *   <InputGroupText>$</InputGroupText>
 * </InputGroupAddon>
 */
export const InputGroupText = forwardRef<HTMLSpanElement, InputGroupTextProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span ref={ref} className={cn(inputGroupTextVariants(), className)} {...props}>
        {children}
      </span>
    );
  }
);

InputGroupText.displayName = 'InputGroupText';

// Export variants for advanced use cases
export {
  inputGroupVariants,
  inputGroupAddonVariants,
  inputGroupButtonVariants,
  inputGroupInputVariants,
  inputGroupTextareaVariants,
  inputGroupTextVariants,
};

// Export types
export type {
  InputGroupProps,
  InputGroupAddonProps,
  InputGroupButtonProps,
  InputGroupInputProps,
  InputGroupTextareaProps,
  InputGroupTextProps,
} from './InputGroup.types';
