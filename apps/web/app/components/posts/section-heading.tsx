export function SectionHeading({
  href,
  children,
}: {
  href: string;
  children: string;
}): JSX.Element {
  return (
    <h2 className="p-5">
      <a href={href}>🔗</a>
      {children}
    </h2>
  );
}
