import Brands_Categories from "@/components/Brands_Categories";
import Deals from "@/components/Deals";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Banner from "@/components/Banner"
import BestSelling from "@/components/BestSelling";
import Brands from "@/components/Brands";
import Mobilephones from "@/components/Mobilephones";
import Computers from "@/components/Computers";
import Gadgets from "@/components/Gadgets";

export default function Home() {
  return (
    <div className={`w-full min-h-screen p-4 bg-gray-200`}>
      <NavBar/>
      <Hero/>
      <br />
      <Brands_Categories/>
      <Deals/>
      <Banner/>
      <BestSelling/>
      <Brands/>
      <Mobilephones/>
      <Computers/>
      <Gadgets/>
    </div>
  );
}
