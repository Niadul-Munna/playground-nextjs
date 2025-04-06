"use client";

import api from "@/lib/api/axios";
import { useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);

      const login = async () => {
        const response = await api.post("/auth/login", {
          username: "emilys",
          password: "emilyspass",
        });
        localStorage.setItem("accessToken", response.data.accessToken);
      };
      login();

      const me = async () => {
        const response = await api.get("/auth/me");
        console.log(response.data);
      };
      me();

      // set user token to local storage
    } catch (error) {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
}
