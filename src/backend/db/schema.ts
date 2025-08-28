import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const blogs = pgTable("blogs", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    content: text("content").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const comments = pgTable("comments", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    content: text("content").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    blogId: integer("blog_id").notNull().references(() => blogs.id, { onDelete: "cascade" }),
});

// Relations

export const blogRelations = relations(blogs, ({ many }) => ({
    comments: many(comments),
}));

export const commentRelations = relations(comments, ({ one }) => ({
    blog: one(blogs, {
        fields: [comments.blogId],
        references: [blogs.id],
    }),
}));