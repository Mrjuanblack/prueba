import { BlogService } from "@/backend/services/blog-service";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;
    const blog = await BlogService.getBlog(parseInt(id));
    return NextResponse.json(blog);
}

export async function DELETE(
    request: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;
    await BlogService.deleteBlog(parseInt(id));
    return NextResponse.json({ message: "Blog deleted" });
}