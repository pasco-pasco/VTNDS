import type { Meta, StoryObj } from '@storybook/react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
  InputGroupText,
} from '@vtnds/ui';

/**
 * InputGroup Documentation
 *
 * 📚 LEARNING MOMENT:
 * InputGroup is a composite component that lets you add icons, text, or buttons
 * alongside inputs. It's like a Figma Auto Layout frame that wraps an input
 * with decorative or functional elements.
 *
 * ## When to Use
 * - Search inputs with icons
 * - Currency/unit inputs ($ or USD)
 * - URL inputs with protocol prefix (https://)
 * - Email inputs with domain suffix (@company.com)
 * - Inputs with action buttons
 *
 * ## Figma Mapping
 * - InputGroup → Container frame
 * - InputGroupInput → Input instance
 * - InputGroupAddon → Slot for icons/text/buttons
 * - align prop → Controls addon position (start/end/above/below)
 */

const meta: Meta<typeof InputGroup> = {
  title: 'Components/InputGroup',
  component: InputGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Add addons, buttons, and helper content to inputs. Compose flexible input layouts by combining InputGroup with its sub-components.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

// Icon components for examples
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 12.5C10.0376 12.5 12.5 10.0376 12.5 7C12.5 3.96243 10.0376 1.5 7 1.5C3.96243 1.5 1.5 3.96243 1.5 7C1.5 10.0376 3.96243 12.5 7 12.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.5 14.5L11 11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M2 14.5C2 11.5 4.5 9 8 9C11.5 9 14 11.5 14 14.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 3H14C14.55 3 15 3.45 15 4V12C15 12.55 14.55 13 14 13H2C1.45 13 1 12.55 1 12V4C1 3.45 1.45 3 2 3Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 4L8 8.5L1 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Basic Examples - Icon Addons
 */

export const Default: Story = {
  name: 'Search with Icon (End)',
  render: () => (
    <div className="w-[320px]">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon align="inline-end">
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const IconStart: Story = {
  name: 'Search with Icon (Start)',
  render: () => (
    <div className="w-[320px]">
      <InputGroup>
        <InputGroupInput placeholder="Search..." className="pl-8" />
        <InputGroupAddon align="inline-start">
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const UserInput: Story = {
  name: 'Username Input',
  render: () => (
    <div className="w-[320px]">
      <InputGroup>
        <InputGroupInput placeholder="Enter username" className="pl-8" />
        <InputGroupAddon align="inline-start">
          <UserIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const EmailInput: Story = {
  name: 'Email Input',
  render: () => (
    <div className="w-[320px]">
      <InputGroup>
        <InputGroupInput type="email" placeholder="your.email" className="pl-8" />
        <InputGroupAddon align="inline-start">
          <MailIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

/**
 * Text Addon Examples
 */

export const CurrencyPrefix: Story = {
  name: 'Currency Prefix ($)',
  render: () => (
    <div className="w-[320px]">
      <InputGroup>
        <InputGroupInput placeholder="0.00" type="number" className="pl-7" />
        <InputGroupAddon align="inline-start">
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const CurrencySuffix: Story = {
  name: 'Currency Suffix (USD)',
  render: () => (
    <div className="w-[320px]">
      <InputGroup>
        <InputGroupInput placeholder="0.00" type="number" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const CurrencyBoth: Story = {
  name: 'Currency Both Sides',
  render: () => (
    <div className="w-[320px]">
      <InputGroup>
        <InputGroupInput placeholder="0.00" type="number" className="pl-7 pr-12" />
        <InputGroupAddon align="inline-start">
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const URLInput: Story = {
  name: 'URL Input',
  render: () => (
    <div className="w-[400px]">
      <InputGroup>
        <InputGroupInput placeholder="yoursite" className="pl-16 pr-12" />
        <InputGroupAddon align="inline-start">
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupText>.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const EmailDomain: Story = {
  name: 'Email with Domain',
  render: () => (
    <div className="w-[400px]">
      <InputGroup>
        <InputGroupInput placeholder="username" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>@company.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

/**
 * Button Examples
 */

export const SearchButton: Story = {
  name: 'Search Button',
  render: () => (
    <div className="w-[400px]">
      <InputGroup>
        <InputGroupInput placeholder="Enter search term..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="default">Search</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const URLWithButton: Story = {
  name: 'URL with Go Button',
  render: () => (
    <div className="w-[400px]">
      <InputGroup>
        <InputGroupInput placeholder="Enter URL..." className="pl-16" />
        <InputGroupAddon align="inline-start">
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="default">Go</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const IconButtons: Story = {
  name: 'Multiple Icon Buttons',
  render: () => (
    <div className="w-[400px]">
      <InputGroup>
        <InputGroupInput placeholder="Enter text..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="ghost" size="icon-xs" aria-label="Bold">
            <strong>B</strong>
          </InputGroupButton>
          <InputGroupButton variant="ghost" size="icon-xs" aria-label="Italic">
            <em>I</em>
          </InputGroupButton>
          <InputGroupButton variant="ghost" size="icon-xs" aria-label="Underline">
            <u>U</u>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

/**
 * Block Alignment Examples
 */

export const HeaderAbove: Story = {
  name: 'Header Above Input',
  render: () => (
    <div className="w-[320px]">
      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>Full Name</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="John Doe" />
      </InputGroup>
    </div>
  ),
};

export const FooterBelow: Story = {
  name: 'Footer Below Input',
  render: () => (
    <div className="w-[320px]">
      <InputGroup>
        <InputGroupInput placeholder="0.00" type="number" />
        <InputGroupAddon align="block-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

/**
 * Textarea Examples
 */

export const TextareaBasic: Story = {
  name: 'Textarea with Character Count',
  render: () => (
    <div className="w-[400px]">
      <InputGroup>
        <InputGroupTextarea placeholder="Enter your message..." rows={4} />
        <InputGroupAddon align="block-end">
          <InputGroupText>0/280</InputGroupText>
          <InputGroupButton variant="default" size="sm">
            Post
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const TextareaCode: Story = {
  name: 'Code Editor Style',
  render: () => (
    <div className="w-[500px]">
      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>script.js</InputGroupText>
        </InputGroupAddon>
        <InputGroupTextarea placeholder="// Enter code..." rows={8} className="font-mono" />
        <InputGroupAddon align="block-end">
          <InputGroupText>Line 1, Column 1</InputGroupText>
          <InputGroupButton variant="default" size="sm">
            Run
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

/**
 * Complex Real-World Examples
 */

export const CompleteExample: Story = {
  name: 'Complete Examples',
  render: () => (
    <div className="w-[500px] space-y-6">
      {/* Search with icon and button */}
      <div>
        <label className="block text-sm font-medium mb-2">Product Search</label>
        <InputGroup>
          <InputGroupInput placeholder="Search products..." className="pl-8" />
          <InputGroupAddon align="inline-start">
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <InputGroupButton variant="default">Search</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>

      {/* Price input */}
      <div>
        <label className="block text-sm font-medium mb-2">Price</label>
        <InputGroup>
          <InputGroupInput placeholder="0.00" type="number" className="pl-7" />
          <InputGroupAddon align="inline-start">
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>

      {/* Email input */}
      <div>
        <label className="block text-sm font-medium mb-2">Company Email</label>
        <InputGroup>
          <InputGroupInput placeholder="username" className="pl-8" />
          <InputGroupAddon align="inline-start">
            <UserIcon />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <InputGroupText>@company.com</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>

      {/* Message textarea */}
      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <InputGroup>
          <InputGroupTextarea placeholder="Write your message..." rows={4} />
          <InputGroupAddon align="block-end">
            <InputGroupText>0/500</InputGroupText>
            <InputGroupButton variant="default" size="sm">
              Send
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  ),
};

/**
 * State Examples
 */

export const DisabledState: Story = {
  name: 'Disabled State',
  render: () => (
    <div className="w-[320px] space-y-4">
      <InputGroup>
        <InputGroupInput placeholder="Disabled input" disabled />
        <InputGroupAddon align="inline-end">
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="With disabled button" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton disabled>Search</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const WithValues: Story = {
  name: 'With Values',
  render: () => (
    <div className="w-[400px] space-y-4">
      <InputGroup>
        <InputGroupInput value="search query" readOnly className="pl-8" />
        <InputGroupAddon align="inline-start">
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput value="99.99" readOnly className="pl-7 pr-12" />
        <InputGroupAddon align="inline-start">
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput value="john.doe" readOnly />
        <InputGroupAddon align="inline-end">
          <InputGroupText>@company.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};
