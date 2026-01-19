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

// Future components will be exported here:
// export { Input } from "./Input";
// export { Checkbox } from "./Checkbox";
// export { Switch } from "./Switch";
// export { Select } from "./Select";

// ========================================
// UTILITIES
// Helper functions used across components
// ========================================

export { cn } from './utils/cn';
