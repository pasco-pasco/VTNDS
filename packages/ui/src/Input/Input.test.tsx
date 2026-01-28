import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  // ========================================
  // RENDERING
  // ========================================

  it('renders without crashing', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders with a label', () => {
    render(<Input label="Email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('renders with placeholder', () => {
    render(<Input placeholder="Enter your email" />);
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
  });

  it('renders with helper text', () => {
    render(<Input helperText="We will never share your email" />);
    expect(screen.getByText('We will never share your email')).toBeInTheDocument();
  });

  it('links helper text to input via aria-describedby', () => {
    render(<Input label="Email" helperText="Required field" />);
    const input = screen.getByRole('textbox');
    const helperText = screen.getByText('Required field');
    expect(input).toHaveAttribute('aria-describedby', helperText.id);
  });

  // ========================================
  // TYPES
  // ========================================

  it('renders password type', () => {
    render(<Input type="password" label="Password" />);
    const input = screen.getByLabelText('Password');
    expect(input).toHaveAttribute('type', 'password');
  });

  it('renders email type', () => {
    render(<Input type="email" label="Email" />);
    const input = screen.getByLabelText('Email');
    expect(input).toHaveAttribute('type', 'email');
  });

  it('renders number type', () => {
    render(<Input type="number" label="Quantity" />);
    const input = screen.getByLabelText('Quantity');
    expect(input).toHaveAttribute('type', 'number');
  });

  // ========================================
  // STATES
  // ========================================

  it('can have a default value', () => {
    render(<Input defaultValue="John Doe" />);
    expect(screen.getByRole('textbox')).toHaveValue('John Doe');
  });

  it('can be disabled', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('applies error styling when error prop is true', () => {
    render(<Input error />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('border-[var(--color-destructive-default)]');
  });

  it('sets aria-invalid when error is true', () => {
    render(<Input error />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('shows error message when error is true', () => {
    render(<Input error errorMessage="This field is required" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('shows error message instead of helper text when both provided and error is true', () => {
    render(<Input error helperText="Enter your email" errorMessage="Invalid email" />);
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
    expect(screen.queryByText('Enter your email')).not.toBeInTheDocument();
  });

  it('shows helper text when error is false', () => {
    render(<Input helperText="Enter your email" errorMessage="Invalid email" />);
    expect(screen.getByText('Enter your email')).toBeInTheDocument();
    expect(screen.queryByText('Invalid email')).not.toBeInTheDocument();
  });

  // ========================================
  // INTERACTIONS
  // ========================================

  it('calls onChange when value changes', () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('calls onFocus when focused', () => {
    const handleFocus = vi.fn();
    render(<Input onFocus={handleFocus} />);

    fireEvent.focus(screen.getByRole('textbox'));
    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it('calls onBlur when blurred', () => {
    const handleBlur = vi.fn();
    render(<Input onBlur={handleBlur} />);

    const input = screen.getByRole('textbox');
    fireEvent.focus(input);
    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  // ========================================
  // SIZES
  // ========================================

  it('renders small size correctly', () => {
    render(<Input size="sm" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('h-6');
  });

  it('renders medium size correctly (default)', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('h-8');
  });

  it('renders large size correctly', () => {
    render(<Input size="lg" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('h-10');
  });

  // ========================================
  // ACCESSIBILITY
  // ========================================

  it('has correct role', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('uses provided id', () => {
    render(<Input id="custom-id" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('id', 'custom-id');
  });

  it('generates unique id when not provided', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input.id).toMatch(/^input-/);
  });

  it('associates label with input correctly', () => {
    render(<Input id="email-input" label="Email Address" />);
    const input = screen.getByLabelText('Email Address');
    expect(input).toHaveAttribute('id', 'email-input');
  });

  // ========================================
  // CUSTOM PROPS
  // ========================================

  it('passes through additional props to input', () => {
    render(<Input name="email" autoComplete="email" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('name', 'email');
    expect(input).toHaveAttribute('autoComplete', 'email');
  });

  it('applies custom className to input', () => {
    render(<Input className="custom-class" />);
    expect(screen.getByRole('textbox')).toHaveClass('custom-class');
  });

  it('applies wrapperClassName to wrapper element', () => {
    const { container } = render(<Input wrapperClassName="wrapper-class" />);
    expect(container.firstChild).toHaveClass('wrapper-class');
  });

  // ========================================
  // FILE INPUT
  // ========================================

  it('renders file input correctly', () => {
    render(<Input type="file" label="Upload" />);
    const input = screen.getByLabelText('Upload');
    expect(input).toHaveAttribute('type', 'file');
  });

  it('auto-applies file variant when type is file', () => {
    render(<Input type="file" />);
    const input = document.querySelector('input[type="file"]');
    expect(input).toHaveClass('file:border-0');
  });
});
