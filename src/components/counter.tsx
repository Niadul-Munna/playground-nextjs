"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>{count}</div>
      <Button onClick={() => setCount(count + 1)} variant="destructive">
        Add
      </Button>
    </div>
  );
};
