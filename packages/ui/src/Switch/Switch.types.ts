import type { InputHTMLAttributes } from 'react';

/**
 * Switch Component Props
 *
 * Extends native input[type="checkbox"] attributes since switches
 * are semantically checkboxes with role="switch"
 */
export interface SwitchProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'size' | 'role'
> {
  /**
   * Label text displayed next to the switch
   */
  label?: string;

  /**
   * Description text displayed below the label
   */
  description?: string;

  /**
   * Size of the switch
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Error state - shows red border/track
   */
  error?: boolean;

  /**
   * Additional className for the wrapper element
   */
  wrapperClassName?: string;
}
