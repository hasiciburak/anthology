import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from './callout';

const meta = {
  title: 'Components/Callout',
  component: Callout,
  args: {
    children: 'This is a callout',
  },
} satisfies Meta;

export default meta;
export type Story = StoryObj<typeof Callout>;

export const primary: Story = {
  args: {
    title: 'Primary',
    variant: 'primary',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'information', 'danger', 'warning', 'success'],
    },
  },
};

export const Information: Story = {
  args: {
    title: 'Secondary',
    variant: 'information',
  },
};

export const Danger: Story = {
  args: {
    title: 'Danger',
    variant: 'danger',
  },
};

export const Warning: Story = {
  args: {
    title: 'Warning',
    variant: 'warning',
  },
};

export const Success: Story = {
  args: {
    title: 'Success',
    variant: 'success',
  },
};
