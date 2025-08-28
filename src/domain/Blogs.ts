// Domain file for the blog entity

export interface Blog {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
}

export interface CreateBlog {
    title: string;
    content: string;
}