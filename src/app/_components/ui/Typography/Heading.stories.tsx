import type { Meta, StoryObj } from '@storybook/react';
import Heading from './Heading';

const meta = {
  title: 'Molecules/Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    as: {
        control: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    size: {
        control: 'select',
        options: ['hero', '2xl', 'xl', 'lg', 'md', 'sm'],
    },
    highlight: { control: 'text' }
  }
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hero: Story = {
  args: {
    as: 'h1',
    size: 'hero',
    children: 'Hero Heading',
  },
};

export const H1: Story = {
  args: {
    as: 'h1',
    size: '2xl',
    children: 'Heading Level 1',
  },
};

export const H2: Story = {
  args: {
    as: 'h2',
    size: 'xl',
    children: 'Heading Level 2',
  },
};

export const WithHighlight: Story = {
  args: {
    as: 'h2',
    size: 'xl',
    highlight: 'Automation',
    children: 'iMessage Automation for Teams',
  },
};
