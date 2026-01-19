import type { ComponentPropsWithoutRef, ReactNode } from 'react';

/**
 * Button Variants
 *
 * Maps to Figma's "Variant" property on the Button component.
 * Each variant has different background, text, and border colors.
 */
export type ButtonVariant =
  | 'default' // Primary blue - main CTAs
  | 'secondary' // Gray - secondary actions
  | 'destructive' // Red - delete/danger actions
  | 'outline' // Transparent with border - tertiary actions
  | 'ghost' // Transparent, no border - subtle/toolbar actions
  | 'link'; // Text only with underline - navigation

/**
 * Button Sizes
 *
 * Maps to Figma's "Size" property.
 * Heights: sm=24px, md=32px, lg=40px
 * Icon sizes are square buttons for icon-only use.
 */
export type ButtonSize =
  | 'sm' // 24px height - Dense UI, toolbars
  | 'md' // 32px height - Default
  | 'lg' // 40px height - Touch targets, prominent CTAs
  | 'icon-sm' // 24×24px - Icon-only compact
  | 'icon-md' // 32×32px - Icon-only default
  | 'icon-lg'; // 40×40px - Icon-only large

/**
 * Button Props
 *
 * 📚 LEARNING MOMENT:
 * These props are like Figma's component properties panel.
 * Each prop controls a different aspect of the button:
 * - variant/size = visual style (like Figma variants)
 * - disabled = interactive state
 * - leftIcon/rightIcon = slots for icons (like nested instances)
 *
 * The `extends ComponentPropsWithoutRef<"button">` part means
 * this also accepts all native HTML button attributes (onClick, type, etc.)
 */
export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  /**
   * Visual style variant.
   * Controls background color, text color, and border.
   * @default "default"
   */
  variant?: ButtonVariant;

  /**
   * Size preset.
   * Controls height, padding, and font size.
   * @default "md"
   */
  size?: ButtonSize;

  /**
   * Disables the button.
   * Reduces opacity and prevents interaction.
   * Maps to Figma's "State: Disabled" variant.
   * @default false
   */
  disabled?: boolean;

  /**
   * Shows a loading spinner and disables interaction.
   * Use when an action is in progress (saving, submitting, etc.)
   * @default false
   */
  loading?: boolean;

  /**
   * Icon displayed before the button text.
   * Accepts any React node, typically a Tabler icon.
   * Maps to Figma's "LeftIcon" slot.
   *
   * @example
   * <Button leftIcon={<IconPlus size={16} />}>Add Item</Button>
   */
  leftIcon?: ReactNode;

  /**
   * Icon displayed after the button text.
   * Accepts any React node, typically a Tabler icon.
   * Maps to Figma's "RightIcon" slot.
   *
   * @example
   * <Button rightIcon={<IconChevronRight size={16} />}>Next</Button>
   */
  rightIcon?: ReactNode;

  /**
   * Makes the button expand to fill its container width.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Button content (text label).
   * For icon-only buttons, use size="icon-*" and add aria-label.
   */
  children?: ReactNode;

  /**
   * Additional CSS classes.
   * Use sparingly - prefer props for standard customizations.
   */
  className?: string;
}
