import type { Config } from 'tailwindcss';

/**
 * Tailwind CSS v4 Configuration
 *
 * 📚 LEARNING MOMENT:
 * Tailwind v4 is different from v3 — it uses CSS-first configuration.
 * Most of our design tokens are defined in theme.css using @theme directive.
 * This file is mainly for content paths and plugins.
 */
const config: Config = {
  // ========================================
  // CONTENT - Where Tailwind looks for classes to include
  // Like telling Figma which pages to include when publishing
  // ========================================
  content: [
    './packages/ui/src/**/*.{ts,tsx}',
    './packages/specialized/src/**/*.{ts,tsx}',
    './packages/docs/.storybook/**/*.{ts,tsx}',
    './packages/docs/stories/**/*.{ts,tsx}',
  ],

  // ========================================
  // DARK MODE - Using class strategy
  // Allows toggling dark mode with a .dark class on <html>
  // ========================================
  darkMode: 'class',

  // ========================================
  // THEME - Extending Tailwind's defaults
  // Most tokens come from CSS variables in theme.css
  // This just ensures font families are available
  // ========================================
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },

  plugins: [],
};

export default config;
