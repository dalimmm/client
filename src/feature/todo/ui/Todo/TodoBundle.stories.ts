import { Todo } from './Todo';

import type { Meta, StoryObj } from '@storybook/react';
import { TodoBundle } from './TodoBundle';

const meta: Meta<typeof Todo> = {
  title: 'Todo/TodoBundle',
  component: TodoBundle,
};

export default meta;

type Story = StoryObj<typeof TodoBundle>;

export const Default: Story = {
  args: {
    title: "미완료",
    bundle: [
      {
        id: "1",
        content: "react 공부하기",
        due: 1711848501,
        done: false,
      },
      {
        id: "2",
        content: "todo 만들기 공부하기",
        due: 1711848501,
        done: false,
      }
    ]
  },
};

export const Done: Story = {
  args: {
    title: "완료",
    bundle: [
      {
        id: "1",
        content: "react 공부하기",
        due: 1711848501,
        done: true,
      },
      {
        id: "2",
        content: "todo 만들기 공부하기",
        due: 1711848501,
        done: true,
      }
    ]
  },
};

export const Expired: Story = {
  args: {
    title: "기간 만료",
    bundle: [
      {
        id: "5",
        content: "react 공부하기",
        due: 1711762101,
        done: true,
      },
      {
        id: "6",
        content: "todo 만들기 공부하기",
        due: 1711762101,
        done: true,
      }
    ]
  },
};