import { renderHook, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { wrapper } from '@/test';

import { makeUseTodoList } from './useTodoList';

const todoList = [
  {
    id: '1',
    content: 'mock todo',
    done: false,
    due: Date.now() as UnixTimestamp,
  },
];

describe('useTodoList', () => {
  const fetchTodoList = vi.fn(async () => todoList);

  const useTodoList = makeUseTodoList({
    fetchTodoList,
  });

  it('투두 목록을 불러온다', async () => {
    const { result } = renderHook(() => useTodoList({ date: '20240403' }), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.todoList).toMatchObject([...todoList]);
  });
});
