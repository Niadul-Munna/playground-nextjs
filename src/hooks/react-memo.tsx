"use client";
import React, { useState } from "react";

const MyComp = React.memo(({ name }: { name: string }) => {
  console.log(`Rendering: `, name);
  return <h1 className="bg-yellow-300 text-black p-2">Hello,{name}</h1>;
});

export default function Reactmemo() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <MyComp name="Munna" />
      <div>counting:{count}</div>
      <button onClick={handleCount}>Add+</button>
    </div>
  );
}
