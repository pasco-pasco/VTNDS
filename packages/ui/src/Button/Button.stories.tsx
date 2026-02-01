import type { Meta, StoryObj } from '@storybook/react';
import {
  IconPlus,
  IconChevronRight,
  IconDownload,
  IconTrash,
  IconSettings,
  IconSearch,
  IconMail,
  IconHeart,
} from '@tabler/icons-react';
import { Button } from './Button';

/**
 * Button Stories for Storybook
 *
 * 📚 LEARNING MOMENT:
 * Storybook stories are like your Figma component examples.
 * Each "story" shows the component in a specific state.
 * This file creates the interactive preview you see in Storybook.
 */

/**
 * Meta configuration for the Button stories
 * This sets up how the Button appears in Storybook's sidebar
 */
const meta: Meta<typeof Button> = {
  // Title in sidebar: Components → Button
  title: 'Components/Button',

  // The component we're documenting
  component: Button,

  // Default props applied to all stories
  args: {
    children: 'Button',
  },

  // Controls panel configuration
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon-sm', 'icon-md', 'icon-lg'],
      description: 'Size preset',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables interaction',
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading spinner',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Expands to fill container',
    },
  },

  // Tags for filtering in Storybook
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/* ========================================
   BASIC STORIES - One story per variant
   ======================================== */

/**
 * Default (Primary) Button
 * Use for main actions and CTAs
 */
export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Primary Action',
  },
};

/**
 * Secondary Button
 * Use for secondary/supporting actions
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Action',
  },
};

/**
 * Destructive Button
 * Use for delete, remove, or dangerous actions
 */
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete Item',
  },
};

/**
 * Outline Button
 * Use for tertiary actions, less emphasis
 */
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Action',
  },
};

/**
 * Ghost Button
 * Use for subtle actions, toolbars, inline actions
 */
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Action',
  },
};

/**
 * Link Button
 * Use for navigation or inline text links
 */
export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Action',
  },
};

/* ========================================
   SIZE STORIES
   ======================================== */

/**
 * Small Size (24px)
 * Use for dense UI, toolbars, compact layouts
 */
export const SizeSmall: Story = {
  args: {
    size: 'sm',
    children: 'Small (24px)',
  },
};

/**
 * Medium Size (28px) - Default
 * Standard size for most use cases
 */
export const SizeMedium: Story = {
  args: {
    size: 'md',
    children: 'Medium (28px)',
  },
};

/**
 * Large Size (32px)
 * Use for touch targets, prominent CTAs
 */
export const SizeLarge: Story = {
  args: {
    size: 'lg',
    children: 'Large (32px)',
  },
};

/* ========================================
   WITH ICONS
   ======================================== */

/**
 * With Left Icon
 * Icon appears before the label
 */
export const WithLeftIcon: Story = {
  args: {
    leftIcon: <IconPlus size={16} stroke={1.5} />,
    children: 'Add Item',
  },
};

/**
 * With Right Icon
 * Icon appears after the label
 */
export const WithRightIcon: Story = {
  args: {
    rightIcon: <IconChevronRight size={16} stroke={1.5} />,
    children: 'Continue',
  },
};

/**
 * With Both Icons
 * Icons on both sides of the label
 */
export const WithBothIcons: Story = {
  args: {
    leftIcon: <IconDownload size={16} stroke={1.5} />,
    rightIcon: <IconChevronRight size={16} stroke={1.5} />,
    children: 'Download',
  },
};

/* ========================================
   ICON-ONLY BUTTONS
   ======================================== */

/**
 * Icon Only (Small)
 * Compact icon button for toolbars
 * Always provide aria-label for accessibility!
 */
export const IconOnlySmall: Story = {
  args: {
    size: 'icon-sm',
    'aria-label': 'Settings',
    children: <IconSettings size={16} stroke={1.5} />,
  },
};

/**
 * Icon Only (Medium)
 * Standard icon button
 */
export const IconOnlyMedium: Story = {
  args: {
    size: 'icon-md',
    'aria-label': 'Search',
    children: <IconSearch size={16} stroke={1.5} />,
  },
};

/**
 * Icon Only (Large)
 * Large icon button for touch targets
 */
export const IconOnlyLarge: Story = {
  args: {
    size: 'icon-lg',
    'aria-label': 'Send email',
    children: <IconMail size={20} stroke={1.5} />,
  },
};

/* ========================================
   STATE STORIES
   ======================================== */

/**
 * Disabled State
 * Button cannot be interacted with
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};

/**
 * Loading State
 * Shows spinner, button is disabled during action
 */
export const Loading: Story = {
  args: {
    loading: true,
    children: 'Saving...',
  },
};

/**
 * Full Width
 * Button expands to fill container
 */
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Full Width Button',
  },
};

/* ========================================
   SHOWCASE STORIES - Multiple variants together
   ======================================== */

/**
 * All Variants
 * Shows all 6 variants side by side
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

/**
 * All Sizes
 * Shows all 3 text button sizes
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

/**
 * All Icon Sizes
 * Shows all 3 icon-only sizes
 */
export const AllIconSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="icon-sm" aria-label="Small icon">
        <IconHeart size={16} stroke={1.5} />
      </Button>
      <Button size="icon-md" aria-label="Medium icon">
        <IconHeart size={16} stroke={1.5} />
      </Button>
      <Button size="icon-lg" aria-label="Large icon">
        <IconHeart size={20} stroke={1.5} />
      </Button>
    </div>
  ),
};

/**
 * Destructive Actions
 * Common destructive button patterns
 */
export const DestructiveActions: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="destructive" leftIcon={<IconTrash size={16} stroke={1.5} />}>
        Delete
      </Button>
      <Button variant="destructive" size="icon-md" aria-label="Delete">
        <IconTrash size={16} stroke={1.5} />
      </Button>
      <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
        Cancel Subscription
      </Button>
    </div>
  ),
};

/**
 * Button States Matrix
 * Shows default, hover (simulated), disabled, and loading
 */
export const StatesMatrix: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm text-gray-500">Default</span>
        <Button>Normal</Button>
        <Button variant="secondary">Normal</Button>
        <Button variant="outline">Normal</Button>
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm text-gray-500">Disabled</span>
        <Button disabled>Disabled</Button>
        <Button variant="secondary" disabled>
          Disabled
        </Button>
        <Button variant="outline" disabled>
          Disabled
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <span className="w-20 text-sm text-gray-500">Loading</span>
        <Button loading>Loading</Button>
        <Button variant="secondary" loading>
          Loading
        </Button>
        <Button variant="outline" loading>
          Loading
        </Button>
      </div>
    </div>
  ),
};
