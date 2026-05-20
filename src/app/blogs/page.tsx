import Link from "next/link";
import { getAllBlogs } from "@/lib/blogs";

export default function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <div className="min-h-screen bg-amber-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-2">
          Blog
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg">
          Thoughts on software, AI, and things I build.
        </p>

        {blogs.length === 0 ? (
          <p className="text-gray-400">No posts yet.</p>
        ) : (
          <div className="flex flex-col gap-6">
            {blogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className="group block p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200"
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-black dark:group-hover:text-white mb-2 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {blog.description}
                </p>
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
