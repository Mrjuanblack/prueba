"use client";

import { Blog, CreateBlog } from "@/domain/Blogs";
import { useState } from "react";

// Hooks for the blog entity
// Here we interact with the backend
export const useBlog = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    const getBlogs = async () => {
        const response = await fetch("http://localhost:3000/api/blog");
        const data = await response.json();
        setBlogs(data);
    }

    return { blogs, getBlogs };
}

export const useCreateBlog = () => {
    const createBlog = async (blog: CreateBlog): Promise<Blog> => {
        const response = await fetch("http://localhost:3000/api/blog", {
            method: "POST",
            body: JSON.stringify(blog),
        });
        const data = await response.json();
        return data;
    }
    return { createBlog };
}

export const useDeleteBlog = () => {
    const deleteBlog = async (id: number): Promise<void> => {
        const response = await fetch(`http://localhost:3000/api/blog/${id}`, {
            method: "DELETE",
        });
        await response.json();
    }
    return { deleteBlog };
}

export const useBlogById = (id: number) => {
    const [blog, setBlog] = useState<Blog | null>(null);

    const getBlogById = async () => {
        const response = await fetch(`http://localhost:3000/api/blog/${id}`);
        const data = await response.json();
        setBlog(data);
    }

    return { blog, getBlogById };
}