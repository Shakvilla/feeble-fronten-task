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
      options: ['default', 'secondary', 'destructive', 'outline', 'brand', 'success'],
    },
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

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Badge',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive Badge',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Badge',
  },
};

export const Brand: Story = {
  args: {
    variant: 'brand',
    children: 'Brand Badge',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success Badge',
  },
};
