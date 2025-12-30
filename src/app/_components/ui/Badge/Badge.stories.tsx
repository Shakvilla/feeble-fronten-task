import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';

const meta = {
  title: 'Molecules/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'solid', 'outline'],
    },
    animated: {
        control: 'boolean',
    }
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Default Badge',
  },
};

export const Solid: Story = {
  args: {
    variant: 'solid',
    children: 'Solid Badge',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Badge',
  },
};

export const WithLeftElement: Story = {
    args: {
        children: 'Version 2.0',
        leftElement: <span className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">v2.0</span>
    }
}

export const Animated: Story = {
    args: {
        children: 'Typing...',
        animated: true,
    }
}
