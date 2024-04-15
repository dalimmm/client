import { Sprint } from './Sprint';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Sprint> = {
  title: 'Sprint/Sprints',
  component: Sprint,
};

export default meta;

type Story = StoryObj<typeof Sprint>;

export const Default: Story = {
  args: {
    name: '정재웅',
    total: 2,
    done: 1,
    comment: 4,
  },
};
