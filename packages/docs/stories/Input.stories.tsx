import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@vtnds/ui';

/**
 * Input Component
 *
 * A flexible text input for forms with support for labels,
 * helper text, error states, and file uploads.
 */
const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the input',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'file'],
      description: 'Visual variant of the input',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'file'],
      description: 'The HTML input type',
    },
    label: {
      control: 'text',
      description: 'Label text displayed above the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the input',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message (shown when error is true)',
    },
    error: {
      control: 'boolean',
      description: 'Whether the input has an error state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

// ========================================
// BASIC EXAMPLES
// ========================================

/**
 * Default input with placeholder
 */
export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
  },
};

/**
 * Input with label
 */
export const WithLabel: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
  },
};

/**
 * Input with label and helper text
 */
export const WithHelperText: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    helperText: "We'll never share your email with anyone.",
  },
};

// ========================================
// INPUT TYPES
// ========================================

/**
 * Password input
 */
export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
};

/**
 * Email input
 */
export const Email: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
  },
};

/**
 * Number input
 */
export const Number: Story = {
  args: {
    label: 'Quantity',
    type: 'number',
    placeholder: '0',
  },
};

/**
 * File input
 */
export const File: Story = {
  args: {
    label: 'Upload document',
    type: 'file',
  },
};

// ========================================
// STATES
// ========================================

/**
 * Filled state (with value)
 */
export const Filled: Story = {
  args: {
    label: 'Name',
    defaultValue: 'John Doe',
  },
};

/**
 * Disabled state
 */
export const Disabled: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    disabled: true,
  },
};

/**
 * Disabled with value
 */
export const DisabledWithValue: Story = {
  args: {
    label: 'Email',
    defaultValue: 'john@example.com',
    disabled: true,
  },
};

/**
 * Error state
 */
export const Error: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    error: true,
    errorMessage: 'Please enter a valid email address',
  },
};

/**
 * Error state with value
 */
export const ErrorWithValue: Story = {
  args: {
    label: 'Password',
    type: 'password',
    defaultValue: '123',
    error: true,
    errorMessage: 'Password must be at least 8 characters',
  },
};

// ========================================
// SIZES
// ========================================

/**
 * Small size input (24px height)
 */
export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small input',
    placeholder: 'Placeholder',
  },
};

/**
 * Medium size input (32px height) - default
 */
export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium input',
    placeholder: 'Placeholder',
  },
};

/**
 * Large size input (40px height)
 */
export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large input',
    placeholder: 'Placeholder',
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
      <Input size="sm" label="Small" placeholder="24px height" />
      <Input size="md" label="Medium (default)" placeholder="32px height" />
      <Input size="lg" label="Large" placeholder="40px height" />
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
      <Input label="Default" placeholder="Placeholder" />
      <Input label="Filled" defaultValue="John Doe" />
      <Input label="Disabled" placeholder="Placeholder" disabled />
      <Input label="Error" placeholder="Placeholder" error errorMessage="This field is required" />
    </div>
  ),
};

// ========================================
// FORM EXAMPLE
// ========================================

/**
 * Example of inputs in a form context
 */
export const FormExample: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4 border border-[var(--color-border)] rounded-[var(--radius-default)]">
      <h3 className="text-sm font-semibold text-[var(--color-foreground)]">Contact Information</h3>
      <Input label="Full Name" placeholder="John Doe" />
      <Input label="Email" type="email" placeholder="john@example.com" />
      <Input
        label="Phone"
        type="tel"
        placeholder="+1 (555) 000-0000"
        helperText="Include country code"
      />
      <Input
        label="Website"
        type="url"
        placeholder="https://example.com"
        error
        errorMessage="Please enter a valid URL"
      />
    </div>
  ),
};
