import type { Metadata } from "next";
import { createTranslator, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Navigation } from "../components/navigation";
import "../styles/globals.css";
import "ui/styles.css";

async function getMessages(locale: string): Promise<any> {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

// export function generateStaticParams() {
//   return ["en", "lv"].map((locale) => ({ locale }));
// }

// export async function generateMetadata({ params: { locale } }: Props) {
//   const messages = await getMessages(locale);
//   const t = createTranslator({ locale, messages });

//   return {
//     title: t("LocaleLayout.title"),
//   };
// }

export const metadata: Metadata = {
  title: "Niall Barber | Frontend Engineer",
  description:
    "Hey! I'm a Frontend Engineer based in the U.K. specialising in React Native",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}): Promise<JSX.Element> {
  const messages = await getMessages(locale);

  console.log(messages);

  return (
    <html className="bg-zinc-900" lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body>
          <Navigation />
          <main>
            <div className="max-w-5xl mx-auto">{children}</div>
          </main>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
