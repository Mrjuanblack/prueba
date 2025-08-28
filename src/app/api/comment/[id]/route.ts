import { CommentService } from "@/backend/services/comment-service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    // ID for blog
    const { id } = await context.params;
    const comments = await CommentService.getComments(parseInt(id));
    return NextResponse.json(comments);
}

export async function POST(
    request: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    // ID for blog
    const { id } = await context.params;
    const body = await request.json();
    const comment = await CommentService.createComment(body, parseInt(id));
    return NextResponse.json(comment);
}

export async function DELETE(
    request: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    // ID for comment
    const { id } = await context.params;
    await CommentService.deleteComment(parseInt(id));
    return NextResponse.json({ message: "Comment deleted" });
}