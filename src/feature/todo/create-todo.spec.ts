import { makeCreateTodo } from './create-todo';

import { describe, expect, it, vi } from 'vitest';

describe('create-todo', () => {
  const saveTodo = vi.fn();
  const createTodo = makeCreateTodo({
    saveTodo,
  });

  it('save todo', () => {
    const props = {
      content: 'hello',
      date: Date.now(),
      done: false,
    };
    createTodo(props);

    expect(saveTodo).toBeCalledTimes(1);
    expect(saveTodo).toBeCalledWith(props);
  });
});
