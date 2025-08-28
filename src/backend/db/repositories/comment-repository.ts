import { CreateComment } from "@/domain/Comment";
import { db } from "../config";
import { comments } from "../schema";
import { eq } from "drizzle-orm";
import { Comment } from "@/domain/Comment";

export class CommentRepository {
    public static async createComment(comment: CreateComment, blogId: number) {
        const [newComment] = await db.insert(comments).values({ ...comment, blogId }).returning();
        return newComment;
    }

    public static async getComments(blogId: number): Promise<Comment[]> {
        const resultComments = await db.query.comments.findMany({
            where: eq(comments.blogId, blogId),
        });
        return resultComments.map(this.mapToDomain);
    }

    public static async deleteComment(id: number) {
        await db.delete(comments).where(eq(comments.id, id));
    }

    private static mapToDomain(comment: typeof comments.$inferSelect): Comment {
        return {
            id: comment.id,
            name: comment.name,
            content: comment.content,
            createdAt: comment.createdAt,
            blogId: comment.blogId ?? 0,
        };
    }
}