import { Todo } from './Todo';

import { Accordion } from '~/base/components/ui/Accordion';
import { isToday } from '~/base/utils/date';

export function TodoBundle({
  title,
  bundle,
}: {
  title: string;
  bundle: Todo[];
}) {
  return (
    <Accordion title={title}>
      {bundle.map((todo) => (
        <Todo
          key={todo.id}
          content={todo.content}
          done={todo.done}
          due={todo.due}
          dueVisible={!isToday(todo.due)}
        />
      ))}
    </Accordion>
  );
}
