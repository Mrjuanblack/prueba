"use client";

import { useRouter } from "next/navigation";
import { useBlog } from "./hooks/blogs";
import { useEffect } from "react";

// Home page
export default function Home() {
  const { blogs, getBlogs } = useBlog();
  const router = useRouter();

  useEffect(() => {
    getBlogs();
  }, []);

  const handleCreateBlog = () => {
    router.push("/blog/create");
  }

  return (
    <div>
      <div>
        <h1>Blogs</h1>
        <button onClick={handleCreateBlog}>Create Blog</button>
      </div>
      <div>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <h1>{blog.title}</h1>
            <button onClick={() => router.push(`/blog/${blog.id}`)}>View Blog</button>
          </div>
        ))}
      </div>
    </div>
  );
}
