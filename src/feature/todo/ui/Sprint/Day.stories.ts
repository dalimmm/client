import { Day } from './Day';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Day> = {
  title: 'Sprint/Day',
  component: Day,
};

export default meta;

type Story = StoryObj<typeof Day>;

export const Default: Story = {
  args: {
    date: 1712073061,
    sprintNumber: 2,
    done: false,
  },
};
