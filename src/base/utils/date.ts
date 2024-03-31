import { DateTime } from 'luxon';

export function isToday(unixDate: number): boolean {
  return DateTime.fromSeconds(unixDate).hasSame(DateTime.now(), 'day');
}
