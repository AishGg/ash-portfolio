import { Home } from '../components/Home.jsx'
import { Spotlight } from "@/components/ui/Spotlight";

export default function Main() {
  return (
    <div className="flex flex-col items-center bg-amber-50 dark:bg-gray-900 justify-center min-h-screen py-8 px-4">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <Home/>
    </div>
  );
}
