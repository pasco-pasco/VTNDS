import type { InputHTMLAttributes } from 'react';

/**
 * Input Component Props
 *
 * Extends native input attributes with additional styling options
 */
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Visual variant of the input.
   * Note: When `type="file"`, the variant is automatically set to `'file'`
   * regardless of the value passed here.
   * @default 'default'
   */
  variant?: 'default' | 'file';

  /**
   * Size of the input
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Error state - shows red border
   */
  error?: boolean;

  /**
   * Label text displayed above the input
   */
  label?: string;

  /**
   * Helper text displayed below the input
   */
  helperText?: string;

  /**
   * Error message displayed below the input (replaces helperText when error is true)
   */
  errorMessage?: string;

  /**
   * Additional className for the wrapper element
   */
  wrapperClassName?: string;
}
