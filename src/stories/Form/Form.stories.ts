import type { Meta, StoryObj } from '@storybook/react';

import Form from './Form';

const meta = {
  component: Form,
  title: 'Example/Form',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    inputdefault: true,
    validation: false,
    select: false,
  },
};

export const InputValidate: Story = {
  args: {
    inputdefault: false,
    validation: true,
    select: false,
  },
};

export const Select: Story = {
  args: {
    inputdefault: false,
    validation: false,
    select: true,
  },
};
