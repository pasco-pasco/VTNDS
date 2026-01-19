/**
 * Button Component Exports
 *
 * 📚 LEARNING MOMENT:
 * This file is like clicking "Publish" in Figma.
 * It declares what's available to other code that imports from this component.
 *
 * Named exports (not default) are used for better refactoring support.
 * When you rename something, TypeScript can update all usages.
 */

// Main component
export { Button, buttonVariants } from './Button';

// TypeScript types (for consumers who need type info)
export type { ButtonProps, ButtonVariant, ButtonSize } from './Button.types';
