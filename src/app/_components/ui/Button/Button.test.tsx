import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button';

describe('Button', () => {
    it('renders with default props', () => {
        render(<Button>Click me</Button>);
        const button = screen.getByRole('button', { name: /click me/i });
        expect(button).toBeInTheDocument();
        expect(button).not.toBeDisabled();
    });

    it('renders different variants', () => {
        const { rerender } = render(<Button variant="primary">Primary</Button>);
        expect(screen.getByRole('button')).toHaveClass('bg-brand-blue');

        rerender(<Button variant="secondary">Secondary</Button>);
        expect(screen.getByRole('button')).toHaveClass('bg-transparent');
        
        rerender(<Button variant="ghost">Ghost</Button>);
        expect(screen.getByRole('button')).toHaveClass('text-gray-900');
    });

    it('renders different sizes', () => {
        const { rerender } = render(<Button size="sm">Small</Button>);
        expect(screen.getByRole('button')).toHaveClass('text-sm');

        rerender(<Button size="lg">Large</Button>);
        expect(screen.getByRole('button')).toHaveClass('text-lg');
    });

    it('handles click events', () => {
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Click me</Button>);
        
        fireEvent.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('shows loading state', () => {
        render(<Button isLoading>Loading</Button>);
        const button = screen.getByRole('button');
        
        expect(button).toBeDisabled();
        expect(button).toHaveAttribute('aria-busy', 'true');
        // Check for loader, assuming SVG or aria-label for loader
        expect(button.querySelector('.animate-spin')).toBeInTheDocument();
    });

    it('is disabled when disabled prop is passed', () => {
        render(<Button disabled>Disabled</Button>);
        expect(screen.getByRole('button')).toBeDisabled();
    });
});
