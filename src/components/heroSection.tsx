import React from "react";
import GetStartedButton from "./ui/get-started-btn";
import Tooltip from "./ui/tool-tip";
import BookCard from "./book-card";
import Loader from "./new-loader";

const HeroSection = () => {
  return (
    <div>
      <section className="bg-[#0A2540] h-screen">
        <div className="text-center  flex flex-col items-center justify-center ">
          <div className="mt-4 mb-10">
            <h1 className="text-6xl text-white font-bold">
              Welcome to my playground
            </h1>
            <p className="text-2xl text-white mt-4 mb-4">
              A place where i experiment with new technologies and ideas{" "}
            </p>
            <div className="flex items-center justify-center gap-4 ">
              <GetStartedButton />
              <Tooltip />
              <Loader />
            </div>
          </div>
          <BookCard />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
