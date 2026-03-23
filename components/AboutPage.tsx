import React from 'react'
import { Button } from './ui/button'
import { CheckCircleIcon, ArrowBigRightDashIcon, PiggyBankIcon } from 'lucide-react'

export default function AboutPage() {
  const leaders = [
    { name: "Henry Avery", role: "Chairman", img: "/images/member1.png" },
    { name: "Michael Edward", role: "Vice President", img: "/images/member2.png" },
    { name: "Eden Hazard", role: "CEO", img: "/images/member3.png" },
    { name: "Robert Downey Jr", role: "CEO", img: "/images/member4.png" },
    { name: "Nathan Drake", role: "Strategist Director", img: "/images/member5.png" },
  ];

  return (
    <div className="w-full min-h-260 flex flex-col gap-6 p-4 md:p-10 bg-gray-50">

      {/* Banner + Stats */}
      <div className="w-full rounded-md bg-white flex flex-col gap-4 overflow-hidden">
        <div className="w-full h-48 md:h-72 bg-[url('/images/about_banner.png')] bg-cover bg-center" />

        <div className="w-full flex flex-col md:flex-row gap-6 px-4 md:px-16 py-6 md:py-10">
          <div className="md:w-2/5 flex flex-col justify-center">
            <h1 className="font-bold text-lg md:text-xl">
              OUR PURPOSE IS TO <span className="text-[#1ABA1A]">ENRICH AND ENHANCE LIVES</span> THROUGH TECHNOLOGY
            </h1>
          </div>
          <div className="md:w-3/5 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold text-black">$12,5M</h1>
              <p className="text-gray-400 text-sm md:text-base">TOTAL REVENUE FROM 2001 - 2023</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold text-black">12K+</h1>
              <p className="text-gray-400 text-sm md:text-base">ORDERS DELIVERED SUCCESSFULLY EVERYDAY</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold text-black">725+</h1>
              <p className="text-gray-400 text-sm md:text-base">STORES AND OFFICES IN U.S. AND WORLDWIDE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery + Info */}
      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6">
        <img src="/images/delivery_guy.png" alt="" className="w-full md:w-1/2 h-auto rounded-md object-cover" />
        <div className="w-full md:w-1/2 bg-gray-200 rounded-md p-6 flex flex-col justify-between gap-4">
          <h1 className="text-lg md:text-xl font-bold text-black">
            We connect millions of buyers and sellers around the world, empowering people and creating economic opportunity for all.
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Within our markets, millions of people around the world connect, both online and offline to make, buy and sell unique goods. We also provide a wide range of seller services and tools that help creative entrepreneurs start, manage & scale their businesses.
          </p>
          <Button className="bg-[#1ABA1A] w-fit">OUR SHOWROOM</Button>
        </div>
      </div>

      {/* Features */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Authentic Products */}
        <div className="w-full bg-white rounded-md p-4 flex flex-col justify-between gap-3">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold text-black">100% AUTHENTIC PRODUCTS</h1>
            <div className="w-8 h-8 rounded-full bg-[#1ABA1A] flex items-center justify-center">
              <CheckCircleIcon size={20} color="white" />
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            TechMart distributes 100% authorized products & guarantees quality. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quasi sapiente, est eaque dolor vel.
          </p>
        </div>

        {/* Fast Delivery */}
        <div className="w-full bg-white rounded-md p-4 flex flex-col justify-between gap-3">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold text-black">FAST DELIVERY</h1>
            <div className="w-8 h-8 rounded-full bg-[#1ABA1A] flex items-center justify-center">
              <ArrowBigRightDashIcon size={20} color="white" />
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            Fast shipping with many delivery methods. 100% guarantee your goods always arrive on time and preserve quality.
          </p>
        </div>

        {/* Affordable Price */}
        <div className="w-full bg-white rounded-md p-4 flex flex-col justify-between gap-3">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold text-black">AFFORDABLE PRICE</h1>
            <div className="w-8 h-8 rounded-full bg-[#1ABA1A] flex items-center justify-center">
              <PiggyBankIcon size={20} color="white" />
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            We offer an affordable and competitive price with many special promotions.
          </p>
        </div>
      </div>

      {/* Mission + Vision */}
      <div className="w-full bg-white rounded-md p-6 mt-6 text-gray-800">
        <h2 className="text-xl font-bold uppercase tracking-wider mb-4">Our Mission and Vision</h2>
        <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
          Nam maximus nunc a augue pulvinar, non euismod mauris tempus. <span className="font-bold text-black">Vivamus mollis mauris</span> vitae rhoncus egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
        <div className="w-full h-64 md:h-100 overflow-hidden rounded-lg">
          <img src="/images/city_view.webp" alt="Office Building" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* History Timeline */}
      <div className="w-full bg-white rounded-md p-6 mt-6">
        <h2 className="text-xl font-bold uppercase tracking-wider mb-4">From a Retail Store to the Global Chain of Stores</h2>
        <p className="text-gray-500 mb-6 max-w-4xl text-sm md:text-base">
          Pellentesque laoreet justo nec ex sodales euismod. Aliquam orci tortor, bibendum nec ultricies ac, auctor nec purus. Maecenas in consectetur erat.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600 text-sm md:text-base">
          <div className="space-y-2">
            <p><strong className="text-black">1997:</strong> A small store located in Brooklyn Town, USA</p>
            <p><strong className="text-black">1998:</strong> It is a long established fact that a reader will be distracted</p>
            <p><strong className="text-black">2000:</strong> Lorem Ipsum is simply dummy text of the printing industry</p>
            <p><strong className="text-black">2002:</strong> Lorem Ipsum has been the industry's standard dummy text</p>
            <p><strong className="text-black">2004:</strong> Contrary to popular belief, Lorem Ipsum is not random</p>
            <p><strong className="text-black">2010:</strong> All the Lorem Ipsum generators on the Internet tend to repeat</p>
          </div>
          <div className="space-y-2">
            <p><strong className="text-black">2014:</strong> There are many variations of passages of Lorem Ipsum</p>
            <p><strong className="text-black">2016:</strong> All the Lorem Ipsum generators on the Internet tend to repeat</p>
            <p><strong className="text-black">2020:</strong> Lorem Ipsum comes from sections 1.10.32</p>
            <p><strong className="text-black">2021:</strong> Making this the first true generator on the Internet</p>
            <p><strong className="text-black">2022:</strong> Lorem Ipsum which looks reasonable and generated</p>
            <p><strong className="text-black">2023:</strong> Here are many variations of passages of Lorem Ipsum</p>
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="w-full bg-white rounded-md p-6 mt-6">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-xl font-bold uppercase tracking-wider">Leaderships</h2>
          <button className="text-gray-400 hover:text-black text-sm transition">View All</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {leaders.map((leader, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-2">
                <img src={leader.img} alt={leader.name} className="w-full aspect-3/4 object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="font-bold text-sm">{leader.name}</h3>
              <p className="text-[10px] uppercase text-gray-500 tracking-tighter mt-1">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}