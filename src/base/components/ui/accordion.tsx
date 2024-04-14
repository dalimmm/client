import classNames from 'classnames';
import { useState, type ReactNode } from 'react';

export function Accordion({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [opened, setOpened] = useState(true);

  function handleToggle() {
    setOpened(!opened);
  }

  return (
    <div className="rounded-lg border border-neutral-200">
      <h2 className="mb-0">
        <button
          className="group flex justify-between item-center w-full rounded-lg border-1 px-5 py-4"
          onClick={handleToggle}
        >
          {title}
          <span
            className={classNames(
              'h-5 w-5 transition-transform',
              opened && 'rotate-180',
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </span>
        </button>
        <div
          className={classNames(
            'transition-[max-height] overflow-hidden',
            opened ? 'max-h-96' : 'max-h-0',
          )}
        >
          <div className="p-4 border-t">{children}</div>
        </div>
      </h2>
    </div>
  );
}
