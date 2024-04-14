import { DateTime } from 'luxon';

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
        <label className="relative flex items-center rounded-full cursor-pointer">
          <input
            type="checkbox"
            checked={done}
            className="before:content[''] peer w-5 h-5 mr-2 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all checked:border-indigo-500 checked:bg-indigo-500 checked:before:bg-indigo-500"
          />
          <span className="absolute text-white transition-opacity opacity-0 pointer-events-none peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 ms-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </label>
        <span className="font-semibold">{content}</span>
      </div>
      {dueVisible ? (
        <div className="font-light text-sm">
          {DateTime.fromSeconds(due).toFormat('yyyy.MM.dd')}
        </div>
      ) : null}
    </div>
  );
}
