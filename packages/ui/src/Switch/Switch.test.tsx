import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Switch } from './Switch';

describe('Switch', () => {
  // ========================================
  // RENDERING
  // ========================================

  it('renders without crashing', () => {
    render(<Switch />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('renders with a label', () => {
    render(<Switch label="Enable notifications" />);
    expect(screen.getByLabelText('Enable notifications')).toBeInTheDocument();
  });

  it('renders with a description', () => {
    render(<Switch label="Dark mode" description="Use dark theme" />);
    expect(screen.getByText('Use dark theme')).toBeInTheDocument();
  });

  it('links description to input via aria-describedby', () => {
    render(<Switch label="Setting" description="Description text" />);
    const switchEl = screen.getByRole('switch');
    const description = screen.getByText('Description text');
    expect(switchEl).toHaveAttribute('aria-describedby', description.id);
  });

  // ========================================
  // STATES
  // ========================================

  it('can be checked by default', () => {
    render(<Switch label="Checked" defaultChecked />);
    expect(screen.getByRole('switch')).toBeChecked();
  });

  it('can be disabled', () => {
    render(<Switch label="Disabled" disabled />);
    expect(screen.getByRole('switch')).toBeDisabled();
  });

  it('has error state when error prop is true', () => {
    render(<Switch label="Error" error />);
    const switchEl = screen.getByRole('switch');
    expect(switchEl).toHaveAttribute('aria-invalid', 'true');
  });

  // ========================================
  // INTERACTIONS
  // ========================================

  it('calls onChange when clicked', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Switch label="Click me" onChange={handleChange} />);

    await user.click(screen.getByRole('switch'));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('toggles checked state when clicked', async () => {
    const user = userEvent.setup();
    render(<Switch label="Toggle me" />);
    const switchEl = screen.getByRole('switch');

    expect(switchEl).not.toBeChecked();
    await user.click(switchEl);
    expect(switchEl).toBeChecked();
    await user.click(switchEl);
    expect(switchEl).not.toBeChecked();
  });

  it('does not call onChange when disabled', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Switch label="Disabled" disabled onChange={handleChange} />);
    const switchEl = screen.getByRole('switch');

    expect(switchEl).toBeDisabled();
    await user.click(switchEl);
    // userEvent respects disabled state and won't fire change events
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('can be toggled by clicking the label', async () => {
    const user = userEvent.setup();
    render(<Switch label="Click label" />);
    const switchEl = screen.getByRole('switch');

    expect(switchEl).not.toBeChecked();
    await user.click(screen.getByText('Click label'));
    expect(switchEl).toBeChecked();
  });

  // ========================================
  // SIZES
  // ========================================

  it('renders small size correctly', () => {
    const { container } = render(<Switch size="sm" label="Small" />);
    const track = container.querySelector('label[for]');
    expect(track).toHaveClass('h-5', 'w-9');
  });

  it('renders medium size correctly (default)', () => {
    const { container } = render(<Switch label="Medium" />);
    const track = container.querySelector('label[for]');
    expect(track).toHaveClass('h-6', 'w-11');
  });

  it('renders large size correctly', () => {
    const { container } = render(<Switch size="lg" label="Large" />);
    const track = container.querySelector('label[for]');
    expect(track).toHaveClass('h-7');
  });

  // ========================================
  // ACCESSIBILITY
  // ========================================

  it('has correct role="switch"', () => {
    render(<Switch label="Accessible" />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('uses provided id', () => {
    render(<Switch id="custom-id" label="Custom ID" />);
    expect(screen.getByRole('switch')).toHaveAttribute('id', 'custom-id');
  });

  it('generates unique id when not provided', () => {
    render(<Switch label="Auto ID" />);
    const switchEl = screen.getByRole('switch');
    expect(switchEl.id).toMatch(/^switch-/);
  });

  // ========================================
  // CUSTOM PROPS
  // ========================================

  it('passes through additional props to input', () => {
    render(<Switch label="With name" name="notifications" value="enabled" />);
    const switchEl = screen.getByRole('switch');
    expect(switchEl).toHaveAttribute('name', 'notifications');
    expect(switchEl).toHaveAttribute('value', 'enabled');
  });

  it('applies wrapperClassName to wrapper element', () => {
    const { container } = render(<Switch wrapperClassName="wrapper-class" />);
    expect(container.firstChild).toHaveClass('wrapper-class');
  });

  // ========================================
  // ARIA-INVALID
  // ========================================

  it('sets aria-invalid when error is true', () => {
    render(<Switch error label="Error" />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-invalid', 'true');
  });

  it('omits aria-invalid when error is false', () => {
    render(<Switch label="No error" />);
    expect(screen.getByRole('switch')).not.toHaveAttribute('aria-invalid');
  });

  // ========================================
  // REF FORWARDING
  // ========================================

  it('forwards ref to the input element', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Switch ref={ref} label="With ref" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('works with callback refs', () => {
    const callbackRef = vi.fn();
    render(<Switch ref={callbackRef} label="Callback ref" />);
    expect(callbackRef).toHaveBeenCalledTimes(1);
    expect(callbackRef).toHaveBeenCalledWith(expect.any(HTMLInputElement));
  });

  // ========================================
  // CONTROLLED COMPONENT
  // ========================================

  it('works as a controlled component', () => {
    const handleChange = vi.fn();
    const { rerender } = render(
      <Switch label="Controlled" checked={false} onChange={handleChange} />
    );

    const switchEl = screen.getByRole('switch');
    expect(switchEl).not.toBeChecked();

    rerender(<Switch label="Controlled" checked={true} onChange={handleChange} />);
    expect(switchEl).toBeChecked();
  });
});
