export function Card({
  title,
  cta,
}: {
  title: string;
  cta: string;
}): JSX.Element {
  return (
    <div className="group my-4 rounded-lg border border-transparent overflow-hidden bg-origin-border bg-gradient-to-r from-brandred to-brandblue text-[#6b7280] shadow-xl">
      <div className="p-4 bg-zinc-800 h-full">
        <p className="inline-block text-xl text-white">{title}</p>
        <div className="text-xs mt-4 group-hover:underline">{cta} →</div>
      </div>
    </div>
  );
}
