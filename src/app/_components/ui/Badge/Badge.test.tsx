import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Badge from './Badge';

describe('Badge', () => {
    it('renders with default props', () => {
        render(<Badge>New</Badge>);
        const badge = screen.getByText('New');
        expect(badge).toBeInTheDocument();
    });

    it('renders variants correctly', () => {
        const { rerender } = render(<Badge variant="solid">Solid</Badge>);
        expect(screen.getByText('Solid').closest('span')?.parentElement).toHaveClass('bg-brand-blue');

        rerender(<Badge variant="outline">Outline</Badge>);
        expect(screen.getByText('Outline').closest('span')?.parentElement).toHaveClass('border-brand-blue');
    });

    it('renders left and right elements', () => {
        render(
            <Badge 
                leftElement={<span data-testid="left">L</span>}
                rightElement={<span data-testid="right">R</span>}
            >
                Content
            </Badge>
        );
        expect(screen.getByTestId('left')).toBeInTheDocument();
        expect(screen.getByTestId('right')).toBeInTheDocument();
    });

    it('renders animated dots when animated prop is true', () => {
        // Render with left element to trigger the specific animated dots branch if needed, 
        // or just animated=true which might render dots depending on implementation
        const { container } = render(<Badge animated>Live</Badge>);
        // The implementation showed dots are rendered when animated is true.
        // We can check for the dot elements or their container.
        // Since they are motion divs, they might be hard to query by role, so we check class or hierarchy.
        // Or check if the component renders without crashing.
        expect(container.querySelector('.bg-brand-blue.rounded-full')).toBeInTheDocument();
    });
});
