"use client";
import { deletePost, getPost } from "@/api/get-post";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

const FetchPosts = () => {
  const [postData, setPostData] = useState<Post[]>([]);

  const handleDeletePost = async (id: number) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const newUpdatedPosts = postData.filter((item) => {
          return item.id !== id;
        });
        setPostData(newUpdatedPosts);
      } else {
        console.log("Failed to delete the post", res.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      const getpostData = async () => {
        const res = await getPost();
        setPostData(res.data);
      };
      getpostData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="bg-gray-300">
      <ol className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-5 list-decimal list-inside ">
        {postData.map((post) => (
          <li
            className="bg-blue-300  p-5
           space-y-2 rounded-2xl"
            key={post.id}
          >
            <h1 className="text-xl">Title: {post.title}</h1>
            <p>Body: {post.body}</p>
            <div className="space-x-2">
              <Button className="bg-green-500 hover:bg-green-600 hover:shadow-2xl">
                Edit
              </Button>
              <Button
                onClick={() => handleDeletePost(post.id)}
                variant="destructive"
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default FetchPosts;
