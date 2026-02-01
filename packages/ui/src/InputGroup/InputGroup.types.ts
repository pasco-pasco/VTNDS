import type { InputHTMLAttributes, TextareaHTMLAttributes, ButtonHTMLAttributes } from 'react';

/**
 * InputGroup Component Props
 *
 * 📚 LEARNING MOMENT:
 * This is the container that wraps your input and addons.
 * Think of it like a Figma Auto Layout frame with "Packed" spacing.
 */
export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Additional className for the wrapper
   */
  className?: string;
}

/**
 * InputGroupAddon Props
 *
 * 📚 LEARNING MOMENT:
 * Addons are like Figma "slots" where you can place icons, text, or buttons.
 * The `align` prop controls positioning — similar to Figma's alignment tools.
 *
 * Alignment Guide:
 * - inline-start: Left side of input (→ [Icon] Input)
 * - inline-end: Right side of input (→ Input [Icon])
 * - block-start: Above input (↓ [Header] \n Input)
 * - block-end: Below input (↓ Input \n [Footer])
 */
export interface InputGroupAddonProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Position of the addon relative to the input
   * @default 'inline-start'
   */
  align?: 'inline-start' | 'inline-end' | 'block-start' | 'block-end';

  /**
   * Additional className for the addon
   */
  className?: string;
}

/**
 * InputGroupButton Props
 *
 * 📚 LEARNING MOMENT:
 * Special button variant designed to sit inside InputGroupAddon.
 * Automatically sized smaller to fit within input height.
 */
export interface InputGroupButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Size of the button
   * Uses smaller sizes to fit within input groups
   * @default 'xs'
   */
  size?: 'xs' | 'icon-xs' | 'sm' | 'icon-sm';

  /**
   * Visual variant
   * @default 'ghost'
   */
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';

  /**
   * Additional className
   */
  className?: string;
}

/**
 * InputGroupInput Props
 *
 * Replacement for regular Input when used inside InputGroup.
 * Has special focus handling for the group context.
 */
export interface InputGroupInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Additional className
   */
  className?: string;
}

/**
 * InputGroupTextarea Props
 *
 * Replacement for regular Textarea when used inside InputGroup.
 * Has special focus handling for the group context.
 */
export interface InputGroupTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Additional className
   */
  className?: string;
}

/**
 * InputGroupText Props
 *
 * Simple text content for addons (like "$", "USD", "@", etc.)
 */
export interface InputGroupTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Additional className
   */
  className?: string;
}
