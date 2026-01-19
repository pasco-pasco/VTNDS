import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility for merging Tailwind CSS classes safely.
 * 
 * 📚 LEARNING MOMENT:
 * When you have conflicting Tailwind classes like "bg-red-500 bg-blue-500",
 * this function keeps only the last one (bg-blue-500).
 * It also handles conditional classes elegantly.
 * 
 * @example
 * // Basic usage
 * cn("px-4 py-2", "bg-blue-500")
 * // → "px-4 py-2 bg-blue-500"
 * 
 * @example
 * // With conditionals (like Figma boolean properties)
 * cn("base-styles", isActive && "bg-blue-500", isDisabled && "opacity-50")
 * 
 * @example
 * // Merging conflicting classes (last one wins)
 * cn("bg-red-500", "bg-blue-500")
 * // → "bg-blue-500"
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
