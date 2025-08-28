import { CreateComment } from "@/domain/Comment";
import { CommentRepository } from "../db/repositories/comment-repository";

// Service file for the comment entity
// Here we define the business logic for the comment entity
export class CommentService {
    public static async createComment(comment: CreateComment, blogId: number) {
        return CommentRepository.createComment(comment, blogId);
    }

    public static async getComments(blogId: number) {
        return CommentRepository.getComments(blogId);
    }

    public static async deleteComment(id: number) {
        return CommentRepository.deleteComment(id);
    }
}