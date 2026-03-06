import Brands_Categories from "@/components/Brands_Categories";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className={`w-full min-h-screen p-4 bg-gray-200`}>
      <NavBar/>
      <Hero/>
      <br />
      <Brands_Categories/>
    </div>
  );
}
