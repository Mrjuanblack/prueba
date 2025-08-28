"use client";

import { useEffect, useState } from "react";
import { useBlogById, useDeleteBlog } from "../../hooks/blogs";
import { useComments, useCreateComment, useDeleteComment } from "@/app/hooks/comment";
import { useParams, useRouter } from "next/navigation";

// Blog page
// Here we display the blog and the comments
export default function Blog() {
    const params = useParams();
    const router = useRouter();

    const blogId = parseInt(params.id as string);

    const { blog, getBlogById } = useBlogById(blogId);
    const { deleteBlog } = useDeleteBlog();
    const { comments, getComments } = useComments(blogId);
    const { createComment } = useCreateComment(blogId);
    const { deleteComment } = useDeleteComment();
    
    const [comment, setComment] = useState("");

    const handleDeleteBlog = async () => {
        await deleteBlog(blogId);
        router.push("/");
    }

    const handleAddComment = async () => {
        await createComment({ name: "John Doe", content: comment });
        setComment("");
        getComments();
    }

    const handleDeleteComment = async (commentId: number) => {
        await deleteComment(commentId);
        getComments();
    }

    useEffect(() => {
        getBlogById();
        getComments();
    }, []);

    return (
        <div>
            <button onClick={() => router.push("/")}>Back</button>
            <button onClick={handleDeleteBlog}>Delete Blog</button>
            <h1>{blog?.title}</h1>
            <p>{blog?.content}</p>
            <div>
                <h2>Comments</h2>
                {comments.map((comment) => (
                    <div key={comment.id}>
                        <p style={{ fontWeight: "bold" }}>{comment.name}</p>
                        <p>{comment.content}</p>
                        <button onClick={() => handleDeleteComment(comment.id)}>Delete Comment</button>
                    </div>
                ))}
                <input type="text" placeholder="Add a comment" value={comment} onChange={(e) => setComment(e.target.value)} />
                <button onClick={handleAddComment}>Add Comment</button>
            </div>
        </div>
    );
}