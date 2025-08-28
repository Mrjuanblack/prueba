"use client";

import { useRouter } from "next/navigation";
import { useCreateBlog } from "../../hooks/blogs";
import { useState } from "react";

// Create blog page
// Here we create a new blog
export default function CreateBlog() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { createBlog } = useCreateBlog();

    const router = useRouter();

    const handleCreateBlog = async () => {
        await createBlog({ title, content });
        router.push("/");
    }

    return (
        <div>
            <h1>Create Blog</h1>
            <input type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
            <input type="text" value={content} placeholder="Content" onChange={(e) => setContent(e.target.value)} />
            <button onClick={handleCreateBlog}>Create Blog</button>
        </div>
    );
}