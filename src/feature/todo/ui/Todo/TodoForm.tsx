import { Button } from '~/base/components/ui/button';
import { Calendar } from '~/base/components/ui/calendar';
import { Checkbox } from '~/base/components/ui/checkbox';
import { Input } from '~/base/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/base/components/ui/popover';
import { cn } from '~/base/components/utils';

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
      <div className="flex items-center">
        <Checkbox className="mr-2" />
        <span className="text-sm">완료된 할 일</span>
      </div>
      <div className="flex items-center mt-3">
        <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              className={cn(
                'rounded-full w-[240px] justify-start text-left font-normal',
                !date && 'text-muted-foreground',
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date
                ? DateTime.fromJSDate(date).toFormat('yyyy.MM.dd')
                : DateTime.fromSeconds(due).toFormat('yyyy.MM.dd')}
            </Button>
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
      <div className="flex rounded-full items-center space-x-2 mt-3 max-w-80 shadow-sm border border-input px-1">
        <Input
          className="rounded-full border-none shadow-none focus-visible:ring-0"
          type="text"
          placeholder="할 일을 적어주세요"
        />
        <Button
          className="rounded-full flex flex-shrink-0 size-7"
          size="icon"
          type="submit"
        >
          <ArrowUpIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
