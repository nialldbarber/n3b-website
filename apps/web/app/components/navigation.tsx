import Link from "next/link";
import { DebugLayout } from "ui";
import { useTranslations } from "next-intl";
import { Logo } from "./logo";

interface NavLinkProps {
  href: string;
  children: string | JSX.Element;
}

function NavLink({ href, children }: NavLinkProps): JSX.Element {
  return (
    <Link className="p-3 capsize" href={href}>
      {children}
    </Link>
  );
}

export function Navigation(): JSX.Element {
  const t = useTranslations();

  return (
    <DebugLayout>
      <header className="bg-slate-900">
        <div className="flex justify-between items-center sticky py-3 text-slate-50 top-[-1px] max-w-5xl mx-auto">
          <div>
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <nav>
            <DebugLayout>
              <ul className="flex">
                <li className="mr-5">
                  <NavLink href="/posts">{t("components.nav.posts")}</NavLink>
                </li>
                <li>
                  <NavLink href="/snippets">
                    {t("components.nav.snippets")}
                  </NavLink>
                </li>
              </ul>
            </DebugLayout>
          </nav>
        </div>
      </header>
    </DebugLayout>
  );
}
