import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Text, DebugLayout } from "ui";

export default function Home(): JSX.Element {
  const t = useTranslations();
  const locale = useLocale();
  const irLatvijaa = locale === "lv";

  const postDir = "posts";
  const postDirs = fs.readdirSync(path.join(postDir));

  const posts = postDirs.map((dirName) => {
    const postContent = fs.readFileSync(
      path.join(postDir, dirName, `index${irLatvijaa ? ".lv" : ""}.md`),
      "utf-8"
    );
    const { data: frontmatter } = matter(postContent);
    return {
      meta: frontmatter,
      slug: dirName.replace(".mdx", ""),
    };
  });

  return (
    <div className="p-5">
      <div className="flex flex-col gap-3">
        <Text level="1">Header 1</Text>
        <Text level="2">Header 2</Text>
        <Text level="3">Header 3</Text>
        <Text level="4">Header 4</Text>
        <Text level="5">Header 5</Text>
        <Text level="6">Header 6</Text>
        <Text>{t("pages.home.intro")}</Text>
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
          {posts.map((post) => (
            <div key={post.slug}>
              <Link href={`/posts/${post.slug}`} key={post.slug} passHref>
                <Text>{post.meta.title}</Text>
                <Text>{post.meta.description}</Text>
                <Text>{post.meta.date}</Text>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
