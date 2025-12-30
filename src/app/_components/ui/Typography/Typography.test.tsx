import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Heading, Text } from './index';

describe('Typography', () => {
    describe('Heading', () => {
        it('renders correct heading levels', () => {
            const { rerender } = render(<Heading as="h1">Heading 1</Heading>);
            expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Heading 1');

            rerender(<Heading as="h3">Heading 3</Heading>);
            expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Heading 3');
        });

        it('highlights text correctly', () => {
            render(<Heading highlight="world">Hello World</Heading>);
            const highlight = screen.getByText('World');
            expect(highlight).toHaveClass('text-brand-blue');
        });
    });

    describe('Text', () => {
        it('renders as paragraph by default', () => {
            render(<Text>Paragraph text</Text>);
            const p = screen.getByText('Paragraph text');
            expect(p.tagName).toBe('P');
        });

        it('renders as specified element', () => {
            render(<Text as="span">Span text</Text>);
            const span = screen.getByText('Span text');
            expect(span.tagName).toBe('SPAN');
        });

        it('applies muted style', () => {
            render(<Text muted>Muted text</Text>);
            expect(screen.getByText('Muted text')).toHaveClass('text-gray-500');
        });
    });
});
