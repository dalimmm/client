import { Calendar } from '~/base/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/base/components/ui/popover';

import { ArrowUpIcon, CalendarIcon } from '@radix-ui/react-icons';
import { DateTime } from 'luxon';
import { useState } from 'react';

import type { SelectSingleEventHandler } from 'react-day-picker';

export function TodoForm({ due }: { due: number }) {
  const [date, setDate] = useState<Date>(new Date(due * 1000));

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleOnSelect: SelectSingleEventHandler = (newDate) => {
    if (newDate === undefined) return;
    setDate(newDate);
    setIsCalendarOpen(false);
  };
  return (
    <div>
      <div className="">
        <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
          <span>날짜</span>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="rounded-full w-[240px] p-1 ms-10 text-center font-normal bg-indigo-200"
            >
              <span>
                {date
                  ? DateTime.fromJSDate(date).toFormat('yyyy.MM.dd')
                  : DateTime.fromSeconds(due).toFormat('yyyy.MM.dd')}
              </span>
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              defaultMonth={date}
              onSelect={handleOnSelect}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex items-center mt-3">
        <label className="relative flex items-center rounded-full cursor-pointer">
          <input
            type="checkbox"
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
        <span>완료된 할 일</span>
      </div>
      <div className="flex rounded-2xl items-center mt-3 max-w-80 shadow-sm border border-input p-1">
        <input
          className="grow ms-1 border-none shadow-none ring-0 focus:outline-none focus:ring-0 focus:ring-transparent"
          type="text"
          placeholder="할 일을 적어주세요"
        />
        <button
          className="inline-flex items-center rounded-full size-7 bg-indigo-300 hover:bg-indigo-400"
          type="submit"
        >
          <ArrowUpIcon className="size-4 ms-1.5 text-white" />
        </button>
      </div>
    </div>
  );
}
