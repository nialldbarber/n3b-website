import { useTranslations } from "next-intl";
import Link from "next/link";
import { Badge, DebugLayout } from "ui";

export default function Home(): JSX.Element {
  const t = useTranslations();

  return (
    <DebugLayout>
      <div className="p-5">
        <div className="flex flex-col gap-3">
          <p className="text-white capsize">{t("home-screen.intro")} </p>
          <p className="text-white capsize">{t("home-screen.para-one")}</p>
          <p className="text-white capsize">
            Currently working at{" "}
            <Link href="https://olioapp.com/en/" target="_blank">
              <span className="text-green-300">Olio</span>
            </Link>
            , decluttering the world pickup by pickup!
          </p>
        </div>
        <div>
          <Badge>hello</Badge>
          <Badge variant="secondary">hello</Badge>
          <Badge variant="tertiary">hello</Badge>
          <Badge variant="danger">hello</Badge>
        </div>
      </div>
    </DebugLayout>
  );
}
