import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['packages/*/src/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['packages/*/src/**/*.{ts,tsx}'],
      exclude: ['**/*.stories.tsx', '**/*.test.tsx', '**/index.ts'],
    },
  },
  resolve: {
    alias: {
      '@vtnds/ui': resolve(__dirname, 'packages/ui/src'),
      '@vtnds/tokens': resolve(__dirname, 'packages/tokens/src'),
      '@vtnds/specialized': resolve(__dirname, 'packages/specialized/src'),
    },
  },
});
