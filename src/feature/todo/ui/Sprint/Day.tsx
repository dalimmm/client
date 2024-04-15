import { convertDayNumToText } from '~/base/utils/date';

import classNames from 'classnames';
import { DateTime } from 'luxon';

export function Day({
  date,
  sprintNumber,
  done,
}: {
  date: number;
  sprintNumber: number;
  done: boolean;
}) {
  const parsedDate = DateTime.fromSeconds(date);
  const day = parsedDate.day;
  const weekday = convertDayNumToText(parsedDate.weekday);
  console.log(weekday);
  return (
    <div className="w-11 h-22 m-1 flex flex-col items-center rounded-sm">
      <div>{weekday}</div>
      <div
        className={classNames(
          'bg-gray-300 rounded-full size-7 flex justify-center items-center',
          done ? 'bg-yellow-300' : 'bg-gray-300',
        )}
      >
        {sprintNumber}
      </div>
      <div>{day}</div>
    </div>
  );
}
