import type { StorybookConfig } from '@storybook/react-vite';

/**
 * Storybook Configuration
 *
 * 📚 LEARNING MOMENT:
 * This file tells Storybook:
 * - Where to find your stories (components to display)
 * - What addons to use (extra features)
 * - How to build the preview
 *
 * Think of it like Figma's Dev Mode settings - configuring
 * how components are displayed and documented.
 */
const config: StorybookConfig = {
  // ========================================
  // STORIES - Where to find component stories
  // Globs pattern: **/*.stories.tsx finds all story files
  // ========================================
  stories: [
    // UI components (Button, Input, etc.)
    '../../ui/src/**/*.stories.@(js|jsx|ts|tsx)',
    // Specialized components (TreeView, etc.)
    '../../specialized/src/**/*.stories.@(js|jsx|ts|tsx)',
    // Local stories in docs package
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  // ========================================
  // ADDONS - Extra Storybook features
  // ========================================
  addons: [
    // Links between stories
    '@storybook/addon-links',
    // Essential addons (controls, actions, viewport, etc.)
    '@storybook/addon-essentials',
    // Interaction testing
    '@storybook/addon-interactions',
    // Dark/light theme switching
    '@storybook/addon-themes',
  ],

  // ========================================
  // FRAMEWORK - Using React with Vite
  // ========================================
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  // ========================================
  // TYPESCRIPT - React docgen for better docs
  // ========================================
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },

  // ========================================
  // STATIC FILES - Assets directory
  // ========================================
  staticDirs: ['../public'],
};

export default config;
