export function Todo({
  content,
  done = false,
}: {
  content: string;
  done: boolean;
}) {
  return (
    <div>
      <input type="checkbox" checked={done} />
      {content}
    </div>
  );
}
