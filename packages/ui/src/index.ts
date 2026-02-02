/**
 * @vtnds/ui
 *
 * Core UI components for the VTNDS design system.
 *
 * @example
 * import { Button } from "@vtnds/ui";
 *
 * function MyComponent() {
 *   return <Button variant="primary">Click me</Button>;
 * }
 */

// ========================================
// COMPONENTS
// Export each component and its types
// ========================================

export { Button, buttonVariants } from './Button';
export type { ButtonProps, ButtonVariant, ButtonSize } from './Button';

export { Checkbox, checkboxVariants } from './Checkbox';
export type { CheckboxProps } from './Checkbox';

export { Input, inputVariants } from './Input';
export type { InputProps } from './Input';

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
  InputGroupText,
  inputGroupVariants,
  inputGroupAddonVariants,
  inputGroupButtonVariants,
  inputGroupInputVariants,
  inputGroupTextareaVariants,
  inputGroupTextVariants,
} from './InputGroup';
export type {
  InputGroupProps,
  InputGroupAddonProps,
  InputGroupButtonProps,
  InputGroupInputProps,
  InputGroupTextareaProps,
  InputGroupTextProps,
} from './InputGroup';

// Future components will be exported here:
// export { Switch } from "./Switch";
// export { Select } from "./Select";

// ========================================
// UTILITIES
// Helper functions used across components
// ========================================

export { cn } from './utils/cn';
