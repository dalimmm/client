import { Todo } from './Todo';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Todo> = {
  title: 'Todo/Todo',
  component: Todo,
};

export default meta;

type Story = StoryObj<typeof Todo>;

export const Default: Story = {
  args: {
    content: 'This is todo',
  },
};

export const Done: Story = {
  args: {
    done: true,
    content: 'This is todo',
  },
};
