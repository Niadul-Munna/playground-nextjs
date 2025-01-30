import { Docks } from "@/components/docks";
import HeroSection from "@/components/heroSection";
import LikeButton from "./components/likeButton";
import PlaygroundOne from "@/tailwind-css/playground-one";
import FetchPosts from "./components/fetch-posts";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Docks />
      <LikeButton />
      <PlaygroundOne />
      <FetchPosts />
    </div>
  );
}
