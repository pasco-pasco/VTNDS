import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  // ========================================
  // RENDERING
  // ========================================

  it('renders without crashing', () => {
    render(<Checkbox />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders with a label', () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByLabelText('Accept terms')).toBeInTheDocument();
  });

  it('renders with a description', () => {
    render(<Checkbox label="Newsletter" description="Receive weekly updates" />);
    expect(screen.getByText('Receive weekly updates')).toBeInTheDocument();
  });

  it('links description to input via aria-describedby', () => {
    render(<Checkbox label="Newsletter" description="Receive updates" />);
    const checkbox = screen.getByRole('checkbox');
    const description = screen.getByText('Receive updates');
    expect(checkbox).toHaveAttribute('aria-describedby', description.id);
  });

  // ========================================
  // STATES
  // ========================================

  it('can be checked by default', () => {
    render(<Checkbox label="Checked" defaultChecked />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('can be disabled', () => {
    render(<Checkbox label="Disabled" disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('applies error styling when error prop is true', () => {
    render(<Checkbox label="Error" error />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('border-[var(--color-destructive-default)]');
  });

  // ========================================
  // INTERACTIONS
  // ========================================

  it('calls onChange when clicked', () => {
    const handleChange = vi.fn();
    render(<Checkbox label="Click me" onChange={handleChange} />);

    fireEvent.click(screen.getByRole('checkbox'));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('toggles checked state when clicked', () => {
    render(<Checkbox label="Toggle me" />);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Checkbox label="Disabled" disabled />);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeDisabled();
    expect(checkbox).toHaveAttribute('disabled');
  });

  it('can be toggled by clicking the label', () => {
    render(<Checkbox label="Click label" />);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();
    fireEvent.click(screen.getByText('Click label'));
    expect(checkbox).toBeChecked();
  });

  // ========================================
  // SIZES
  // ========================================

  it('renders small size correctly', () => {
    render(<Checkbox size="sm" label="Small" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('h-4', 'w-4');
  });

  it('renders medium size correctly (default)', () => {
    render(<Checkbox label="Medium" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('h-5', 'w-5');
  });

  it('renders large size correctly', () => {
    render(<Checkbox size="lg" label="Large" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('h-6', 'w-6');
  });

  // ========================================
  // ACCESSIBILITY
  // ========================================

  it('has correct role', () => {
    render(<Checkbox label="Accessible" />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('uses provided id', () => {
    render(<Checkbox id="custom-id" label="Custom ID" />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('id', 'custom-id');
  });

  it('generates unique id when not provided', () => {
    render(<Checkbox label="Auto ID" />);
    const checkbox = screen.getByRole('checkbox');
    // useId generates IDs with special characters that get escaped
    expect(checkbox.id).toMatch(/^checkbox-/);
  });

  // ========================================
  // INDETERMINATE STATE
  // ========================================

  it('supports indeterminate state', () => {
    render(<Checkbox label="Indeterminate" indeterminate />);
    const checkbox: HTMLInputElement = screen.getByRole('checkbox');
    expect(checkbox.indeterminate).toBe(true);
  });

  // ========================================
  // CUSTOM PROPS
  // ========================================

  it('passes through additional props to input', () => {
    render(<Checkbox label="With name" name="terms" value="accepted" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('name', 'terms');
    expect(checkbox).toHaveAttribute('value', 'accepted');
  });

  it('applies custom className to checkbox', () => {
    render(<Checkbox className="custom-class" />);
    expect(screen.getByRole('checkbox')).toHaveClass('custom-class');
  });

  it('applies wrapperClassName to wrapper element', () => {
    const { container } = render(<Checkbox wrapperClassName="wrapper-class" />);
    expect(container.firstChild).toHaveClass('wrapper-class');
  });

  // ========================================
  // ARIA-INVALID
  // ========================================

  it('sets aria-invalid when error is true', () => {
    render(<Checkbox error label="Error" />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('omits aria-invalid when error is false', () => {
    render(<Checkbox label="No error" />);
    expect(screen.getByRole('checkbox')).not.toHaveAttribute('aria-invalid');
  });

  // ========================================
  // REF FORWARDING
  // ========================================

  it('forwards ref to the checkbox element', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Checkbox ref={ref} label="With ref" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('works with callback refs', () => {
    const callbackRef = vi.fn();
    render(<Checkbox ref={callbackRef} label="Callback ref" />);
    expect(callbackRef).toHaveBeenCalledTimes(1);
    expect(callbackRef).toHaveBeenCalledWith(expect.any(HTMLInputElement));
  });

  it('supports indeterminate state with forwarded ref', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Checkbox ref={ref} label="Both" indeterminate />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current!.indeterminate).toBe(true);
  });
});
