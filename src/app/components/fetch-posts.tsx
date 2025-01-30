"use client";
import { getPost } from "@/api/get-post";
import React, { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}
const FetchPosts = () => {
  const [postData, setPostData] = useState<Post[]>([]);

  useEffect(() => {
    const getpostData = async () => {
      const res = await getPost();
      setPostData(res.data);
    };
    getpostData();
  }, []);
  return (
    <div className="bg-gray-300">
      <ul className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-5 ">
        {postData.map((post) => (
          <li className="bg-blue-300  p-4 space-y-2" key={post.id}>
            <h1 className="text-xl">Title: {post.title}</h1>
            <p>Body: {post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchPosts;
