
import { CreateBlog } from "@/domain/Blogs";
import { BlogRepository } from "../db/repositories/blog-repository";

// Service file for the blog entity
// Here we define the business logic for the blog entity
export class BlogService {
    public static async createBlog(blog: CreateBlog) {
        return BlogRepository.createBlog(blog);
    }

    public static async getBlog(id: number) {
        return BlogRepository.getBlog(id);
    }

    public static async getBlogs() {
        return BlogRepository.getBlogs();
    }

    public static async deleteBlog(id: number) {
        return BlogRepository.deleteBlog(id);
    }
}