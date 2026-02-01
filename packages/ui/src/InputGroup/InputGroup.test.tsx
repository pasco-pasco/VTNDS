import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
  InputGroupText,
} from './InputGroup';

describe('InputGroup', () => {
  describe('InputGroup Container', () => {
    it('renders children correctly', () => {
      render(
        <InputGroup>
          <InputGroupInput placeholder="Test input" />
        </InputGroup>
      );

      expect(screen.getByPlaceholderText('Test input')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const { container } = render(
        <InputGroup className="custom-class">
          <InputGroupInput />
        </InputGroup>
      );

      expect(container.firstChild).toHaveClass('custom-class');
    });
  });

  describe('InputGroupInput', () => {
    it('renders with placeholder', () => {
      render(<InputGroupInput placeholder="Enter text" />);
      expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    });

    it('accepts value prop', () => {
      render(<InputGroupInput value="Test value" readOnly />);
      expect(screen.getByDisplayValue('Test value')).toBeInTheDocument();
    });

    it('can be disabled', () => {
      render(<InputGroupInput disabled />);
      expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('has data-slot attribute', () => {
      render(<InputGroupInput />);
      expect(screen.getByRole('textbox')).toHaveAttribute('data-slot', 'input-group-control');
    });
  });

  describe('InputGroupTextarea', () => {
    it('renders with placeholder', () => {
      render(<InputGroupTextarea placeholder="Enter message" />);
      expect(screen.getByPlaceholderText('Enter message')).toBeInTheDocument();
    });

    it('accepts rows prop', () => {
      render(<InputGroupTextarea rows={5} />);
      expect(screen.getByRole('textbox')).toHaveAttribute('rows', '5');
    });

    it('can be disabled', () => {
      render(<InputGroupTextarea disabled />);
      expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('has data-slot attribute', () => {
      render(<InputGroupTextarea />);
      expect(screen.getByRole('textbox')).toHaveAttribute('data-slot', 'input-group-control');
    });
  });

  describe('InputGroupAddon', () => {
    it('renders children correctly', () => {
      render(
        <InputGroupAddon>
          <span>Addon content</span>
        </InputGroupAddon>
      );

      expect(screen.getByText('Addon content')).toBeInTheDocument();
    });

    it('applies inline-start alignment by default', () => {
      const { container } = render(
        <InputGroupAddon>
          <span>Content</span>
        </InputGroupAddon>
      );

      expect(container.firstChild).toHaveClass('left-0');
    });

    it('applies inline-end alignment', () => {
      const { container } = render(
        <InputGroupAddon align="inline-end">
          <span>Content</span>
        </InputGroupAddon>
      );

      expect(container.firstChild).toHaveClass('right-0');
    });

    it('applies block-start alignment', () => {
      const { container } = render(
        <InputGroupAddon align="block-start">
          <span>Content</span>
        </InputGroupAddon>
      );

      expect(container.firstChild).toHaveClass('pb-2');
    });

    it('applies block-end alignment', () => {
      const { container } = render(
        <InputGroupAddon align="block-end">
          <span>Content</span>
        </InputGroupAddon>
      );

      expect(container.firstChild).toHaveClass('pt-2');
    });
  });

  describe('InputGroupButton', () => {
    it('renders with text', () => {
      render(<InputGroupButton>Click me</InputGroupButton>);
      expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
    });

    it('applies ghost variant by default', () => {
      const { container } = render(<InputGroupButton>Button</InputGroupButton>);
      expect(container.firstChild).toHaveClass('bg-transparent');
    });

    it('applies default variant', () => {
      const { container } = render(
        <InputGroupButton variant="default">Button</InputGroupButton>
      );
      expect(container.firstChild).toHaveClass('bg-[var(--color-primary-default)]');
    });

    it('applies xs size by default', () => {
      const { container } = render(<InputGroupButton>Button</InputGroupButton>);
      expect(container.firstChild).toHaveClass('h-5');
    });

    it('applies icon-xs size', () => {
      const { container } = render(
        <InputGroupButton size="icon-xs" aria-label="Icon button">
          Icon
        </InputGroupButton>
      );
      expect(container.firstChild).toHaveClass('h-5', 'w-5');
    });

    it('can be disabled', () => {
      render(<InputGroupButton disabled>Button</InputGroupButton>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('defaults to type="button"', () => {
      render(<InputGroupButton>Button</InputGroupButton>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });
  });

  describe('InputGroupText', () => {
    it('renders text content', () => {
      render(<InputGroupText>$</InputGroupText>);
      expect(screen.getByText('$')).toBeInTheDocument();
    });

    it('applies muted foreground color', () => {
      const { container } = render(<InputGroupText>USD</InputGroupText>);
      expect(container.firstChild).toHaveClass('text-[var(--color-muted-foreground)]');
    });

    it('prevents text selection', () => {
      const { container } = render(<InputGroupText>@</InputGroupText>);
      expect(container.firstChild).toHaveClass('select-none');
    });
  });

  describe('Composition', () => {
    it('renders complete input group with icon', () => {
      render(
        <InputGroup>
          <InputGroupInput placeholder="Search" />
          <InputGroupAddon align="inline-end">
            <span data-testid="search-icon">🔍</span>
          </InputGroupAddon>
        </InputGroup>
      );

      expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
      expect(screen.getByTestId('search-icon')).toBeInTheDocument();
    });

    it('renders input group with text prefix and suffix', () => {
      render(
        <InputGroup>
          <InputGroupInput placeholder="0.00" />
          <InputGroupAddon align="inline-start">
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      );

      expect(screen.getByText('$')).toBeInTheDocument();
      expect(screen.getByText('USD')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('0.00')).toBeInTheDocument();
    });

    it('renders input group with button', () => {
      render(
        <InputGroup>
          <InputGroupInput placeholder="Enter URL" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton>Search</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      );

      expect(screen.getByPlaceholderText('Enter URL')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
    });

    it('renders textarea with footer', () => {
      render(
        <InputGroup>
          <InputGroupTextarea placeholder="Enter message" />
          <InputGroupAddon align="block-end">
            <InputGroupText>0/280</InputGroupText>
            <InputGroupButton>Post</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      );

      expect(screen.getByPlaceholderText('Enter message')).toBeInTheDocument();
      expect(screen.getByText('0/280')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Post' })).toBeInTheDocument();
    });
  });
});
