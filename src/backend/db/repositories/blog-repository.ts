import { Blog, CreateBlog } from "@/domain/Blogs";
import { db } from "../config";
import { blogs } from "../schema";
import { eq } from "drizzle-orm";

// File that contains all the database operations for the blog entity
export class BlogRepository {
    public static async createBlog(blog: CreateBlog): Promise<Blog> {
        const [newBlog] = await db.insert(blogs).values(blog).returning();
        return this.mapToDomain(newBlog);
    }

    // Get a blog by id
    public static async getBlog(id: number): Promise<Blog | null> {
        throw new Error("Method not implemented.");        
    }

    // Get all blogs
    public static async getBlogs(): Promise<Blog[]> {
        throw new Error("Method not implemented.");
    }

    // Bonus: Get paginated blogs
    // public static async getPaginatedBlogs(page: number, limit: number): Promise<Blog[]> {
    //     throw new Error("Method not implemented.");
    // }

    // Delete a blog
    public static async deleteBlog(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    // Maps the database blog to the domain blog
    private static mapToDomain(blog: typeof blogs.$inferSelect): Blog {
        return {
            id: blog.id,
            title: blog.title,
            content: blog.content,
            createdAt: blog.createdAt,
        };
    }
}