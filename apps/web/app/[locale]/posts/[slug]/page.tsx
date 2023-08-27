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
import { headers } from "next/headers";
import { useLocale } from "next-intl";

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

// export function generateStaticParams({ params }): { slug: string }[] {
//   console.log(params);
//   const posts = fs.readdirSync(path.join("posts"));
//   const paths = posts.map((filename) => ({
//     slug: filename.replace(".mdx", ""),
//   }));
//   return paths;
// }

function getPost({
  locale = "en",
  slug,
}: {
  locale: "en" | "lv";
  slug: string;
}): {
  frontMatter: Record<string, any>;
  slug: string;
  content: string;
} {
  const irLatvijaa = locale === "lv";

  // console.log("slug is: ", slug);
  console.log("locale is:", locale);
  console.log("irLatvijaa is:", irLatvijaa);

  const postDir = "posts";
  const postDirs = fs.readdirSync(path.join(postDir));

  console.log("dskjgnsdkfj;gksjdgksjdpg", slug);

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

export function generateMetadata({ params }: any): {
  title: any;
  description: any;
} {
  const post = getPost(params);

  return {
    title: post.frontMatter.title,
    description: post.frontMatter.description,
  };
}

export default function Post({ params }: any): JSX.Element {
  const locale = useLocale();
  const props = getPost(locale, params);

  return (
    <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto capsize">
      <h1>{props.frontMatter.title}</h1>
      <MDXRemote options={options} source={props.content} />
    </article>
  );
}
