import { DateTime } from 'luxon';
import { Checkbox } from '~/base/components/ui/checkbox';

export function Todo({
  content,
  done,
  due,
  dueVisible = false,
}: {
  content: string;
  done: boolean;
  due: number;
  dueVisible?: boolean;
}) {
  return (
    <div className="flex items-center p-2 justify-between">
      <div className="flex items-center">
        <Checkbox className="mr-2" checked={done} />
        <span className="font-semibold">{content}</span>
      </div>
      {dueVisible ? (
        <div className="font-light text-sm">
          {DateTime.fromSeconds(due).toFormat('yyyy MM dd')}
        </div>
      ) : null}
    </div>
  );
}
