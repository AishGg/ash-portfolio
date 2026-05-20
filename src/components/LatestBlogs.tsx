import Link from "next/link";
import { getLatestBlogs } from "@/lib/blogs";

export function LatestBlogs() {
  const blogs = getLatestBlogs(3);
  if (blogs.length === 0) return null;

  return (
    <section className="w-full max-w-3xl mx-auto mt-0 px-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          Latest Posts
        </h2>
        <Link
          href="/blogs"
          className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
        >
          All posts →
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className="group flex items-start justify-between gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200"
          >
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-800 dark:text-white group-hover:text-black dark:group-hover:text-white truncate transition-colors">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">
                {blog.description}
              </p>
            </div>
            <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap mt-0.5">
              {new Date(blog.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
