import { ReactNode } from "react";

export interface BlogPostProps {
  title: string;
  date: string;
  content: ReactNode;
}

export const BlogPost = ({ title, date, content }: BlogPostProps) => {
  return (
    <article className="mb-16">
      <div className="mb-4">
        <h2 className="text-3xl font-bold">{title}</h2>
        <div className="text-sm text-muted">{date}</div>
      </div>
      <div className="prose">{content}</div>
    </article>
  );
};
