import Link from "next/link";
import { useTranslations } from "next-intl";
import { Logo } from "./logo";

interface NavLinkProps {
  href: string;
  children: string | React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps): JSX.Element {
  return (
    <Link
      className="flex p-3 border border-slate-900 capsize focus:border focus:border-white"
      href={href}
    >
      {children}
    </Link>
  );
}

export function Navigation(): JSX.Element {
  const t = useTranslations();

  return (
    <header className="bg-slate-900">
      <div className="flex justify-between px-5 items-center sticky py-3 text-slate-50 top-[-1px] max-w-5xl mx-auto">
        <Link href="/">
          <Logo />
        </Link>
        <nav aria-label="Primary">
          <ul className="flex">
            <li className="mr-5">
              <NavLink href="/posts">{t("components.nav.posts")}</NavLink>
            </li>
            <li>
              <NavLink href="/snippets">{t("components.nav.snippets")}</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
