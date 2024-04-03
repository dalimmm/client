import { convertDayNumToText } from '~/base/utils/date';

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
      <div className=" bg-yellow-200 rounded-full size-7 text-center">
        {sprintNumber}
      </div>
      <div>{day}</div>
    </div>
  );
}
