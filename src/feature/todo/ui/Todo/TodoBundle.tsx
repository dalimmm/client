import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/base/components/ui/accordion';
import { Todo } from './Todo';
import { isToday } from '~/base/utils/date';

export function TodoBundle({
  title,
  bundle,
}: {
  title: string;
  bundle: Todo[];
}) {
  return (
    <Accordion className="w-full" type="single" defaultValue="item" collapsible >
      <AccordionItem value="item">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>
          {bundle.map((todo) => (
            <Todo
              key={todo.id}
              content={todo.content}
              done={todo.done}
              due={todo.due}
              dueVisible={!isToday(todo.due)}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
