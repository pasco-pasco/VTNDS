import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

/**
 * Meta configuration for the Switch stories
 */
const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  args: {
    label: 'Toggle option',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the switch',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables interaction',
    },
    error: {
      control: 'boolean',
      description: 'Shows error state',
    },
    checked: {
      control: 'boolean',
      description: 'Controlled checked state',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/* ========================================
   BASIC STORIES
   ======================================== */

/**
 * Default Switch
 * Basic toggle switch
 */
export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
};

/**
 * Checked State
 * Switch in the on position
 */
export const Checked: Story = {
  args: {
    label: 'Notifications enabled',
    defaultChecked: true,
  },
};

/**
 * With Description
 * Switch with additional context
 */
export const WithDescription: Story = {
  args: {
    label: 'Dark mode',
    description: 'Use dark theme across the application',
  },
};

/**
 * Without Label
 * Standalone switch (ensure aria-label is provided)
 */
export const WithoutLabel: Story = {
  args: {
    label: undefined,
    'aria-label': 'Toggle setting',
  },
};

/* ========================================
   SIZE STORIES
   ======================================== */

/**
 * Small Size
 * Compact switch for dense UI
 */
export const SizeSmall: Story = {
  args: {
    size: 'sm',
    label: 'Small switch',
  },
};

/**
 * Medium Size (Default)
 * Standard size for most use cases
 */
export const SizeMedium: Story = {
  args: {
    size: 'md',
    label: 'Medium switch',
  },
};

/**
 * Large Size
 * Larger touch target
 */
export const SizeLarge: Story = {
  args: {
    size: 'lg',
    label: 'Large switch',
  },
};

/* ========================================
   STATE STORIES
   ======================================== */

/**
 * Disabled State
 * Switch cannot be interacted with
 */
export const Disabled: Story = {
  args: {
    label: 'Disabled switch',
    disabled: true,
  },
};

/**
 * Disabled Checked
 * Disabled switch in the on position
 */
export const DisabledChecked: Story = {
  args: {
    label: 'Disabled (on)',
    disabled: true,
    defaultChecked: true,
  },
};

/**
 * Error State
 * Switch with error indication
 */
export const Error: Story = {
  args: {
    label: 'Required setting',
    error: true,
  },
};

/* ========================================
   SHOWCASE STORIES
   ======================================== */

/**
 * All Sizes
 * Shows all 3 switch sizes
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch size="sm" label="Small" />
      <Switch size="md" label="Medium (default)" />
      <Switch size="lg" label="Large" />
    </div>
  ),
};

/**
 * States Matrix
 * Shows various switch states
 */
export const StatesMatrix: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-8">
        <span className="w-24 text-sm text-gray-500">Default</span>
        <Switch label="Off" />
        <Switch label="On" defaultChecked />
      </div>
      <div className="flex items-center gap-8">
        <span className="w-24 text-sm text-gray-500">Disabled</span>
        <Switch label="Off" disabled />
        <Switch label="On" disabled defaultChecked />
      </div>
      <div className="flex items-center gap-8">
        <span className="w-24 text-sm text-gray-500">Error</span>
        <Switch label="Off" error />
        <Switch label="On" error defaultChecked />
      </div>
    </div>
  ),
};

/**
 * Settings Example
 * Realistic settings panel use case
 */
export const SettingsExample: Story = {
  render: () => (
    <div className="max-w-md space-y-6 rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold">Notification Settings</h3>
      <div className="space-y-4">
        <Switch
          label="Email notifications"
          description="Receive email updates about your account"
          defaultChecked
        />
        <Switch
          label="Push notifications"
          description="Receive push notifications on your device"
          defaultChecked
        />
        <Switch
          label="Marketing emails"
          description="Receive emails about new features and offers"
        />
        <Switch
          label="Weekly digest"
          description="Get a weekly summary of your activity"
          disabled
        />
      </div>
    </div>
  ),
};
