import { Docks } from "@/components/docks";
import HeroSection from "@/components/heroSection";
import FetchPosts from "./components/fetch-posts";
import DataTable from "./components/data-table";
import Login from "@/components/login";
import Profile from "@/components/profile";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DataTable />
      <FetchPosts />
      <Login />
      <Profile />
      <Docks />
    </div>
  );
}
