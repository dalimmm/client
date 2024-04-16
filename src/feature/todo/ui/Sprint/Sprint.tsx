import {
  CalendarIcon,
  CheckCircledIcon,
  ChatBubbleIcon,
} from '@radix-ui/react-icons';
export function Sprint({
  name,
  total,
  done,
  comment,
}: {
  name: string;
  total: number;
  done: number;
  comment: number;
}) {
  return (
    <div className="flex items-center px-4 py-2 justify-between rounded-xl border border-gray-400 ring-0">
      <div>
        <span>{name}</span>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center m-1">
          <CalendarIcon /> <span className="ms-1">{total}</span>
        </div>
        <div className="flex justify-center items-center m-1">
          <CheckCircledIcon /> <span className="ms-1">{done}</span>
        </div>
        <div className="flex justify-center items-center m-1">
          <ChatBubbleIcon /> <span className="ms-1">{comment}</span>
        </div>
      </div>
    </div>
  );
}
