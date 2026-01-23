import type { InputHTMLAttributes } from 'react';

/**
 * Checkbox Component Props
 *
 * Extends native input[type="checkbox"] attributes
 */
export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'size'
> {
  /**
   * Label text displayed next to the checkbox
   */
  label?: string;

  /**
   * Description text displayed below the label
   */
  description?: string;

  /**
   * Size of the checkbox
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Whether the checkbox is in an indeterminate state
   * (partially selected, like "select all" with some items checked)
   */
  indeterminate?: boolean;

  /**
   * Error state - shows red border
   */
  error?: boolean;

  /**
   * Additional className for the wrapper element
   */
  wrapperClassName?: string;
}
