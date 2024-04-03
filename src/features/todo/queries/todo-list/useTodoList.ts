import { useQuery } from '@tanstack/react-query';

import { getTodoListKey } from '../query-keys';

export function makeUseTodoList(dependencies: {
  fetchTodoList: (date: string) => Promise<Todo[]>;
}) {
  const { fetchTodoList } = dependencies;

  return function useTodoList({ date }: { date: string }) {
    const { isLoading, data: todoList } = useQuery({
      queryKey: getTodoListKey(date),
      queryFn: () => fetchTodoList(date),
    });

    return { isLoading, todoList };
  };
}
