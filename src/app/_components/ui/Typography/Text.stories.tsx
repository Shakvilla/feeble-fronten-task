import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta = {
  title: 'Molecules/Typography/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    as: {
        control: 'select',
        options: ['p', 'span', 'div', 'label'],
    },
    size: {
        control: 'select',
        options: ['lg', 'md', 'sm', 'xs'],
    },
    muted: {
        control: 'boolean',
    }
  }
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Paragraph: Story = {
  args: {
    as: 'p',
    size: 'md',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
};

export const Muted: Story = {
  args: {
    muted: true,
    children: 'This is muted text.',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large text content.',
  },
};

export const Small: Story = {
    args: {
        size: 'sm',
        children: 'Small text content.',
    }
}
