import Image from "next/image";
import React from "react";

const PlaygroundOne = () => {
  return (
    <div className="bg-lime-200 w-screen h-screen container mx-auto">
      <div className="columns-3 ...">
        <Image
          className="aspect-3/2 ..."
          src=""
          alt=""
          width={200}
          height={200}
        />
        <Image
          className="aspect-3/2 ..."
          src=""
          alt=""
          width={200}
          height={200}
        />
        <Image
          className="aspect-3/2 ..."
          src=""
          alt=""
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default PlaygroundOne;
