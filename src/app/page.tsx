import { Docks } from "@/components/docks";
import HeroSection from "@/components/heroSection";
import LikeButton from "./components/likeButton";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Docks />
      <LikeButton />
    </div>
  );
}
