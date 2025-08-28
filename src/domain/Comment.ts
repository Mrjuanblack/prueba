// Domain file for the comment entity

export interface Comment {
    id: number;
    name: string;
    content: string;
    createdAt: Date;
    blogId: number;
}

// Id comes from the url
export interface CreateComment {
    name: string;
    content: string;
}