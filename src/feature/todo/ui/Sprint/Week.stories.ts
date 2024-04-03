import { Week } from './Week';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Week> = {
  title: 'Sprint/Week',
  component: Week,
};

export default meta;

type Story = StoryObj<typeof Week>;

export const Default: Story = {
  args: {
    oneWeek: [
      {
        date: 1711901173,
        sprintNumber: 2,
        done: true,
      },
      {
        date: 1711987573,
        sprintNumber: 1,
        done: true,
      },
      {
        date: 1712073973,
        sprintNumber: 1,
        done: true,
      },
      {
        date: 1712160373,
        sprintNumber: 1,
        done: true,
      },
      {
        date: 1712246773,
        sprintNumber: 1,
        done: true,
      },
      {
        date: 1712333173,
        sprintNumber: 0,
        done: true,
      },
      {
        date: 1712419573,
        sprintNumber: 4,
        done: true,
      },
    ],
  },
};
