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
    done: false,
    due: 1711875600,
    dueVisible: true,
  },
};

export const Done: Story = {
  args: {
    content: 'This is todo',
    done: true,
    due: 1711875600,
  },
};
