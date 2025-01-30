// "use client";
// import { Button } from "@/components/ui/button";
// import React, { useEffect, useState } from "react";

// const Products = () => {
//   const [display, SetDisplay] = useState("posts");

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${display}`)
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//   }, [display]);
//   return (
//     <div className="flex flex-col gap-10 items-center justify-center">
//       <div className="flex gap-4 mt-10">
//         <Button onClick={() => SetDisplay("posts")}>Posts</Button>
//         <Button onClick={() => SetDisplay("users")}>Users</Button>
//         <Button onClick={() => SetDisplay("comments")}>Comments</Button>
//       </div>
//       <h1 className="text-4xl">{display}</h1>
//     </div>
//   );
// };

// export default Products;
