import { Day } from './Day';

export function Week({ oneWeek }: { oneWeek: Day[] }) {
  return (
    <div className="flex items-stretch">
      {oneWeek.map((day) => (
        <Day
          key={day.date}
          date={day.date}
          sprintNumber={day.sprintNumber}
          done={day.done}
        />
      ))}
    </div>
  );
}
