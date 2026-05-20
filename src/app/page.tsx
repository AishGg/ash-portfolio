import { Home } from '../components/Home.jsx'
import { Spotlight } from "@/components/ui/Spotlight";
import { LatestBlogs } from "@/components/LatestBlogs";

export default function Main() {
  return (
    <div className="flex flex-col items-center bg-amber-50 dark:bg-gray-900 min-h-screen py-8 px-4">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <Home/>
      <LatestBlogs />
    </div>
  );
}
