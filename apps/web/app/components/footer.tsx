import Link from "next/link";
import { MainLayout } from "./layout/main";

function SocialLink({
  href,
  children,
}: {
  href: string;
  children: string;
}): JSX.Element {
  return (
    <Link href={href} target="_blank">
      <span className="p-2">{children}</span>
    </Link>
  );
}

export function Footer(): JSX.Element {
  return (
    <footer className="text-white pb-4" role="contentinfo">
      <MainLayout className="items-center justify-around text-center">
        <SocialLink href="https://github.com/nialldbarber">Github</SocialLink>
        <SocialLink href="https://www.instagram.com/nialldbarber/">
          Instagram
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/niall-barber/">
          LinkedIn
        </SocialLink>
      </MainLayout>
    </footer>
  );
}
