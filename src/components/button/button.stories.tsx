import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

// This will share the same title and component with the story.
const meta = {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
    disabled: false,
    size: 'medium',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export default meta;
