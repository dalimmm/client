export function makeCreateTodo({
  saveTodo,
}: {
  saveTodo: (props: { content: string; date: number; done: boolean }) => void;
}) {
  return (props: { content: string; date: number; done: boolean }) => {
    return saveTodo(props);
  };
}
