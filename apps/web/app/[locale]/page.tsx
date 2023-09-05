import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Card, Text, DebugLayout } from "ui";
import { MainLayout } from "../components/layout/main";

export default function Home(): JSX.Element {
  const t = useTranslations();
  const locale = useLocale();
  const irLatvijaa = locale === "lv";

  const postDir = "posts";
  const postDirs = fs.readdirSync(path.join(postDir));

  const posts = postDirs.map((dirName) => {
    const postContent = fs.readFileSync(
      path.join(postDir, dirName, `index${irLatvijaa ? ".lv" : ""}.mdx`),
      "utf-8"
    );
    const { data: frontmatter } = matter(postContent);
    return {
      meta: frontmatter,
      slug: dirName.replace(".mdx", ""),
    };
  });

  return (
    <MainLayout full>
      <div className="flex flex-col gap-3">
        <Text level="2">{t("pages.home.intro")}</Text>
        <Text>{t("pages.home.para-one")}</Text>
        <Text>
          {t.rich("pages.home.working", {
            link: (chunks) => (
              <Link href="https://olioapp.com/en/" target="_blank">
                <Text level="span">{chunks}</Text>
              </Link>
            ),
          })}
        </Text>
        <div>
          <Text level="1">Latest posts</Text>
          {posts.map(({ slug, meta }) => (
            <Link href={`/posts/${slug}`} key={slug}>
              <Card cta={meta.description} title={meta.title} />
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
