import { cn } from "helpers";

interface MainLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  full?: boolean;
}

export function MainLayout({
  className,
  children,
  full = false,
}: MainLayoutProps): JSX.Element {
  const c = cn(
    "max-w-5xl mx-auto p-5",
    className,
    // TODO: should this be a css variable?
    full && "h-[calc(100vh-96px-64px)]"
  );

  return <div className={c}>{children}</div>;
}
