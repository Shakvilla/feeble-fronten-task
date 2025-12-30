import type { Meta, StoryObj } from '@storybook/react';
import {Navbar} from './page';

const meta = {
  title: 'Organisms/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
