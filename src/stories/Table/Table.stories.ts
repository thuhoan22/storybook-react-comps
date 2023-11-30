import type { Meta, StoryObj } from '@storybook/react';

import Table from './Table';

const meta = {
  component: Table,
  title: 'Example/Table',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicTable: Story = {
  args: {
    checkboxcolum: false,
    style: false,
  },
};

export const DataTable: Story = {
  args: {
    checkboxcolum: true,
    style: false,
  },
};

export const Customization: Story = {
  args: {
    checkboxcolum: false,
    style: true,
  },
};
