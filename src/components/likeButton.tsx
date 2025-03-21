"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const LikeButton = () => {
  const [hasLiked, setHasLiked] = useState(false);
  return (
    <div>
      <Button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "Liked" : "Like"}
      </Button>
    </div>
  );
};

export default LikeButton;
