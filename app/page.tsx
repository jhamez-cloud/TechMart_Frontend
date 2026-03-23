'use client'
import Brands_Categories from "@/components/Brands_Categories";
import Deals from "@/components/Deals";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Banner from "@/components/Banner";
import BestSelling from "@/components/BestSelling";
import Brands from "@/components/Brands";
import Mobilephones from "@/components/Mobilephones";
import Computers from "@/components/Computers";
import Gadgets from "@/components/Gadgets";
import PromotionBanner from "@/components/PromotionBanner";
import RecentlyViewed from "@/components/RecentlyViewed";
import About from "@/components/About";
import Footer from "@/components/Footer";

import useSWR from "swr";

export default function Home() {

  const Django_URL = process.env.NEXT_PUBLIC_DJANGO_URL
  const {data:products,error:error} = useSWR(`${Django_URL}/api/v1/products/?category=laptops`)

  return (
    <div className={`w-full min-h-screen md:w-full`}>
      <div className="w-full h-full p-12 bg-gray-200">
        <NavBar />
        <Hero />
        <br />
        <Brands_Categories />
        <Deals />
        <Banner />
        <BestSelling />
        <Brands />
        <Mobilephones />
        <Computers />
        <Gadgets />
        <PromotionBanner />
        <RecentlyViewed />
        <About />
      </div>
      <Footer/>
    </div>
  );
}
