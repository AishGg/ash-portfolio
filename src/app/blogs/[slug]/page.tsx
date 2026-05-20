import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getBlog, getAllBlogs } from "@/lib/blogs";

export async function generateStaticParams() {
  return getAllBlogs().map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) return {};
  return { title: blog.title, description: blog.description };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) notFound();

  return (
    <div className="min-h-screen bg-amber-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white mb-8 transition-colors"
        >
          ← All posts
        </Link>

        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">
          {blog.title}
        </h1>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-10">
          {new Date(blog.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <article className="prose prose-gray dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-code:before:content-none prose-code:after:content-none prose-code:bg-gray-100 prose-code:dark:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:dark:bg-gray-950">
          <MDXRemote
            source={blog.content}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </article>
      </div>
    </div>
  );
}
