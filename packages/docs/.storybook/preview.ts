import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";

// Import design tokens (CSS variables)
import "@vtnds/tokens/theme.css";

// Import Tailwind CSS
import "../styles/globals.css";

/**
 * Storybook Preview Configuration
 * 
 * 📚 LEARNING MOMENT:
 * This file sets up how stories are rendered:
 * - Global CSS (tokens, Tailwind)
 * - Theme switching (light/dark)
 * - Default parameters for all stories
 * 
 * Think of it like setting up a Figma page template
 * that all your component examples inherit from.
 */
const preview: Preview = {
  // ========================================
  // PARAMETERS - Global settings for all stories
  // ========================================
  parameters: {
    // Background colors for the preview canvas
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#020617" },
        { name: "gray", value: "#f1f5f9" },
      ],
    },

    // Control the actions (event handlers) display
    actions: { argTypesRegex: "^on[A-Z].*" },

    // Control how props are displayed
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    // Layout: centered, fullscreen, or padded
    layout: "centered",
  },

  // ========================================
  // DECORATORS - Wrappers around every story
  // ========================================
  decorators: [
    // Theme switcher decorator
    // Adds dark/light class to the preview container
    withThemeByClassName({
      themes: {
        light: "",        // Light mode = no class
        dark: "dark",     // Dark mode = "dark" class on root
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
