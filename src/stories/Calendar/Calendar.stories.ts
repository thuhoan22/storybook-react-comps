import type { Meta, StoryObj } from '@storybook/react';

import Calendar from './Calendar';

const meta = {
  component: Calendar,
  title: 'Example/Calendar',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DateCalendar: Story = {
  args: {
    date: true,
    time: false,
    datetime: false,
    daterange: false,
  },
};

export const TimePicker: Story = {
  args: {
    date: false,
    time: true,
    datetime: false,
    daterange: false,
  },
};

export const DateTimePicker: Story = {
  args: {
    date: false,
    time: false,
    datetime: true,
    daterange: false,
  },
};

export const DateRange: Story = {
  args: {
    date: false,
    time: false,
    datetime: false,
    daterange: true,
  },
};



