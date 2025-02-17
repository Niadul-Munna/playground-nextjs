import { Docks } from "@/components/docks";
import HeroSection from "@/components/heroSection";
// import LikeButton from "./components/likeButton";
// import FetchPosts from "./components/fetch-posts";
import DataTable from "./components/data-table";

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* <LikeButton /> */}
      <DataTable />
      {/* <FetchPosts /> */}
    </div>
  );
}
