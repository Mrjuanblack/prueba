import { BlogService } from "@/backend/services/blog-service";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const blogs = await BlogService.getBlogs();
    return NextResponse.json(blogs);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const blog = await BlogService.createBlog(body);
    return NextResponse.json(blog);
}
