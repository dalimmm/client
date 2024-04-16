import { Day } from './Day';

export function Week({ weeklySprints }: { weeklySprints: Day[] }) {
  return (
    <div className="flex items-stretch">
      {weeklySprints.map((day) => (
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
