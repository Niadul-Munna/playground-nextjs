/*************  ✨ Codeium Command ⭐  *************/
"use client";

import { BlogPost } from "@/components/blog-post";

const Blog = () => {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <BlogPost
        title="My first blog post"
        date="2022-07-01"
        content={
          <p>
            This is my first blog post. I&apos;m so excited to finally have a
            blog. I&apos;ve been wanting to start one for a while now, but I
            just couldn&apos;t seem to get started. But now that I have,
            I&apos;m excited to share my thoughts and experiences with all of
            you.
          </p>
        }
      />
      <BlogPost
        title="My second blog post"
        date="2022-07-02"
        content={
          <p>
            This is my second blog post. I&apos;m still getting the hang of this
            whole blogging thing, but I&apos;m enjoying it so far. I hope
            you&apos;re enjoying it too.
          </p>
        }
      />
    </div>
  );
};

export default Blog;
/******  4c339f55-c05c-4375-9e63-072608b8a58c  *******/
