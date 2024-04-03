import { makeUseTodoList } from './useTodoList';

/**
 * TODO: replace mock
 */
export const useTodoList = makeUseTodoList({
  fetchTodoList: async () => [
    {
      id: '1',
      content: 'mock todo',
      done: false,
      due: Date.now() as UnixTimestamp,
    },
  ],
});
