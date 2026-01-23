import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@vtnds/ui';

/**
 * Checkbox Component
 *
 * A form control that allows users to select one or more options.
 * Supports labels, descriptions, and indeterminate states.
 */
const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the checkbox',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    label: {
      control: 'text',
      description: 'Label text displayed next to the checkbox',
    },
    description: {
      control: 'text',
      description: 'Description text displayed below the label',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Whether the checkbox is in an indeterminate state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    error: {
      control: 'boolean',
      description: 'Whether the checkbox has an error state',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked (controlled)',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// ========================================
// BASIC EXAMPLES
// ========================================

/**
 * Default checkbox with a label
 */
export const Default: Story = {
  args: {
    label: 'Checkbox Text',
  },
};

/**
 * Checkbox with label and description
 */
export const WithDescription: Story = {
  args: {
    label: 'Checkbox Text',
    description: 'This is a checkbox description.',
  },
};

/**
 * Checkbox without any label (icon only)
 */
export const NoLabel: Story = {
  args: {},
};

// ========================================
// STATES
// ========================================

/**
 * Checked state
 */
export const Checked: Story = {
  args: {
    label: 'Checked',
    defaultChecked: true,
  },
};

/**
 * Indeterminate state - used for "select all" scenarios
 * where some but not all children are selected
 */
export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate',
    indeterminate: true,
  },
};

/**
 * Disabled unchecked state
 */
export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};

/**
 * Disabled checked state
 */
export const DisabledChecked: Story = {
  args: {
    label: 'Disabled Checked',
    disabled: true,
    defaultChecked: true,
  },
};

/**
 * Error state - shows red border
 */
export const Error: Story = {
  args: {
    label: 'Error State',
    error: true,
  },
};

// ========================================
// SIZES
// ========================================

/**
 * Small size checkbox (16px)
 */
export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small checkbox',
  },
};

/**
 * Medium size checkbox (20px) - default
 */
export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium checkbox',
  },
};

/**
 * Large size checkbox (24px)
 */
export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large checkbox',
  },
};

// ========================================
// ALL SIZES COMPARISON
// ========================================

/**
 * All sizes displayed together for comparison
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox size="sm" label="Small checkbox" description="16px checkbox" />
      <Checkbox size="md" label="Medium checkbox" description="20px checkbox (default)" />
      <Checkbox size="lg" label="Large checkbox" description="24px checkbox" />
    </div>
  ),
};

// ========================================
// ALL STATES COMPARISON
// ========================================

/**
 * All states displayed together for comparison
 */
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled Checked" disabled defaultChecked />
      <Checkbox label="Error" error />
    </div>
  ),
};

// ========================================
// FORM EXAMPLE
// ========================================

/**
 * Example of checkboxes in a form context
 */
export const FormExample: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4 border border-[var(--color-border)] rounded-[var(--radius-default)]">
      <h3 className="text-sm font-semibold text-[var(--color-foreground)]">
        Notification Preferences
      </h3>
      <Checkbox
        label="Email notifications"
        description="Receive updates via email"
        defaultChecked
      />
      <Checkbox
        label="Push notifications"
        description="Receive push notifications on your device"
      />
      <Checkbox label="SMS notifications" description="Receive text message alerts" disabled />
    </div>
  ),
};
