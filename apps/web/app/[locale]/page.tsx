import { useTranslations } from "next-intl";
import Link from "next/link";
import { Text, DebugLayout } from "ui";

export default function Home(): JSX.Element {
  const t = useTranslations();

  return (
    <DebugLayout>
      <div className="p-5">
        <div className="flex flex-col gap-3">
          <Text level="1">hello</Text>
          <Text>hello</Text>
          <Text level="span">hello</Text>
          <p className="text-white capsize">{t("pages.home.intro")}</p>
          <p className="text-white capsize">{t("pages.home.para-one")}</p>
          <p className="text-white capsize">
            {t.rich("pages.home.working", {
              link: (chunks) => (
                <Link href="https://olioapp.com/en/" target="_blank">
                  <span className="text-green-200">{chunks}</span>
                </Link>
              ),
            })}
          </p>
        </div>
      </div>
    </DebugLayout>
  );
}
