import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDir = path.join(process.cwd(), "content/blogs");

export type BlogMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
};

export type Blog = BlogMeta & {
  content: string;
};

export function getAllBlogs(): BlogMeta[] {
  if (!fs.existsSync(blogsDir)) return [];
  const files = fs.readdirSync(blogsDir).filter((f) => f.endsWith(".mdx"));
  return files
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(blogsDir, filename), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        description: data.description ?? "",
        tags: data.tags ?? [],
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlog(slug: string): Blog | null {
  const filePath = path.join(blogsDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    description: data.description ?? "",
    tags: data.tags ?? [],
    content,
  };
}

export function getLatestBlogs(count = 3): BlogMeta[] {
  return getAllBlogs().slice(0, count);
}
