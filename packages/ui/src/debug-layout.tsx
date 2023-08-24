type DebugLayoutProps = {
  children: JSX.Element | string;
};

export function DebugLayout({ children }: DebugLayoutProps): JSX.Element {
  return <div className="border border-red-400">{children}</div>;
}
