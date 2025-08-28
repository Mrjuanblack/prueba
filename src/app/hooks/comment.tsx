import { Comment, CreateComment } from "@/domain/Comment";
import { useState } from "react";

export const useComments = (blogId: number) => {
    const [comments, setComments] = useState<Comment[]>([]);

    const getComments = async () => {
        const response = await fetch(`http://localhost:3000/api/comment/${blogId}`);
        const data = await response.json();
        setComments(data);
    }

    return { comments, getComments };
}

export const useCreateComment = (blogId: number) => {
    const createComment = async (comment: CreateComment): Promise<Comment> => {
        const response = await fetch(`http://localhost:3000/api/comment/${blogId}`, {
            method: "POST",
            body: JSON.stringify(comment),
        });
        const data = await response.json();
        return data;
    }
    return { createComment };
}

export const useDeleteComment = () => {
    const deleteComment = async (id: number): Promise<void> => {
        const response = await fetch(`http://localhost:3000/api/comment/${id}`, {
            method: "DELETE",
        });
        await response.json();
    }
    return { deleteComment };
}