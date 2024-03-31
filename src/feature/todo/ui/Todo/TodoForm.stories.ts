import { TodoForm } from './TodoForm';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TodoForm> = {
  title: 'Todo/TodoForm',
  component: TodoForm,
};

export default meta;

type Story = StoryObj<typeof TodoForm>;

export const Default: Story = {
  args: {
    due: 1711875600,
  },
};
