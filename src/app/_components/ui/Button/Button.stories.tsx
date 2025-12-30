import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { Loader2, Mail } from 'lucide-react';

const meta = {
  title: 'Molecules/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    children: 'Please wait',
  },
};


export const LeftIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Left Icon',
    leftIcon: <Mail className="mr-2 h-4 w-4" />,
  },
};

export const RightIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Right Icon',
    rightIcon: <Mail className="mr-2 h-4 w-4" />,
  },
};

export const ShowDivider: Story = {
  args: {
    variant: 'primary',
    children: 'Show Line',
    fullWidth: true,
    showDivider: true,
  },
};