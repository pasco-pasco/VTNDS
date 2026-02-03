import type { Meta, StoryObj } from '@storybook/react';

/**
 * Welcome to VTNDS
 *
 * An industrial UI library for CAD and automation applications.
 * Built for precision, efficiency, and information density.
 */
const meta: Meta = {
  title: 'Introduction',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

/**
 * The Introduction story serves as the landing page for Storybook.
 * It provides an overview of the design system.
 */
export const Welcome: Story = {
  render: () => (
    <div className="min-h-screen bg-[--color-background] p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-4xl font-bold text-[--color-foreground]">VTNDS</h1>
          <p className="text-lg text-[--color-muted-foreground]">
            Vention Design System for CAD and industrial automation software.
          </p>
        </header>

        {/* Quick Start */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[--color-foreground]">Quick Start</h2>
          <div className="bg-[--color-muted] rounded-[--radius-md] p-4 font-mono text-sm">
            <code className="text-[--color-foreground]">
              import {'{'} Button {'}'} from &quot;@vtnds/ui&quot;;
            </code>
          </div>
        </section>

        {/* Design Principles */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[--color-foreground]">Design Principles</h2>
          <ul className="space-y-2 text-[--color-foreground]">
            <li className="flex items-start gap-2">
              <span className="text-[--color-primary-default]">•</span>
              <span>
                <strong>Density over whitespace</strong> — CAD users need to see more information
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[--color-primary-default]">•</span>
              <span>
                <strong>Precision over approximation</strong> — Exact values matter (3.000 ≠ 3)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[--color-primary-default]">•</span>
              <span>
                <strong>Keyboard over mouse</strong> — Power users live in shortcuts
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[--color-primary-default]">•</span>
              <span>
                <strong>Function over form</strong> — Useful {'>'} pretty
              </span>
            </li>
          </ul>
        </section>

        {/* Component Heights */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[--color-foreground]">Component Heights</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[--color-muted] rounded-[--radius-md] p-4 text-center">
              <div className="text-3xl font-bold text-[--color-primary-default]">24px</div>
              <div className="text-sm text-[--color-muted-foreground]">Small (sm)</div>
              <div className="text-xs text-[--color-muted-foreground]">Dense UI, toolbars</div>
            </div>
            <div className="bg-[--color-muted] rounded-[--radius-md] p-4 text-center">
              <div className="text-3xl font-bold text-[--color-primary-default]">32px</div>
              <div className="text-sm text-[--color-muted-foreground]">Medium (md)</div>
              <div className="text-xs text-[--color-muted-foreground]">Default size</div>
            </div>
            <div className="bg-[--color-muted] rounded-[--radius-md] p-4 text-center">
              <div className="text-3xl font-bold text-[--color-primary-default]">40px</div>
              <div className="text-sm text-[--color-muted-foreground]">Large (lg)</div>
              <div className="text-xs text-[--color-muted-foreground]">Touch targets</div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="space-y-4">

        </section>
      </div>
    </div>
  ),
};
