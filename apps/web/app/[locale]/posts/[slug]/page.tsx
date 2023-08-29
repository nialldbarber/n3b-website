import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypeHighlight from "rehype-highlight";
import { useLocale } from "next-intl";
import { MainLayout } from "../../../components/layout/main";

export const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm, remarkMdxFrontmatter, remarkFrontmatter],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      rehypeSlug,
      rehypeHighlight,
    ],
  },
};

export type Locales = "en" | "lv";

function getPost({ locale = "en", slug }: { locale: Locales; slug: string }): {
  frontMatter: Record<string, string>;
  slug: string;
  content: string;
} {
  const irLatvijaa = locale === "lv";
  const markdownFile = fs.readFileSync(
    path.join("posts", slug, `index${irLatvijaa ? ".lv" : ""}.md`),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export function generateMetadata({ params }): {
  title: string;
  description: string;
} {
  const post = getPost({ locale: params.locale, slug: params.slug });
  return {
    title: post.frontMatter.title,
    description: post.frontMatter.description,
  };
}

export default function Post({
  params: { slug },
}: {
  params: { slug: string };
}): JSX.Element {
  const locale = useLocale();
  // @ts-expect-error
  const props = getPost({ locale, slug });

  return (
    <MainLayout>
      <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto max-w-full">
        <h1 className="capsize">{props.frontMatter.title}</h1>
        <MDXRemote options={options} source={props.content} />
      </article>
    </MainLayout>
  );
}
