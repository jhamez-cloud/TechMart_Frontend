import React from 'react'
import { Button } from './ui/button'
import {CheckCircleIcon,ArrowBigRightDashIcon,PiggyBankIcon} from 'lucide-react'

export default function AboutPage() {
    const leaders = [
    { name: "Henry Avery", role: "Chairman", img: "/images/member1.png" },
    { name: "Michael Edward", role: "Vice President", img: "/images/member2.png" },
    { name: "Eden Hazard", role: "CEO", img: "/images/member3.png" },
    { name: "Robert Downey Jr", role: "CEO", img: "/images/member4.png" },
    { name: "Nathan Drake", role: "Strategist Director", img: "/images/member5.png" },
  ];
  
  return (
    <div className='w-full min-h-260'>
        <div className='w-full h-202 rounded-md bg-white mt-4 flex flex-col space-y-4 p-4 '>
            <div className='w-full rounded-md border '>
                    <div className='w-full h-70 rounded-md bg-[url("/images/about_banner.png")] bg-cover bg-center'></div>
                    <div className={`w-full h-40 flex space-x-16 justify-between items-center px-16 py-10`}>
                        <div className={`w-2/5 h-full pl-12`}>
                            <h1 className={`font-bold text-lg`}>
                                OUR PURPOSE IS TO <span className={`text-[#1A1]`}>ENRICH AND ENHANCE LIVES</span> THROUGH TECHNOLOGY
                            </h1>
                        </div>
                        <div className='w-3/5 h-full grid grid-cols-3 gap-6'>
                            <div className='w-full h-full'>
                                <h1 className='text-2xl font-bold text-black'>$12,5M</h1>
                                <p className='text-gray-400 font-normal'>TOTAL REVENUE FROM 2001 - 2023</p>
                            </div>
                            <div className='w-full h-full'>
                                <h1 className='text-2xl font-bold text-black'>12K+</h1>
                                <p className='text-gray-400 font-normal'>ORDERS DELIVERED SUCCESSFULLY EVERYDAY</p>
                            </div>
                            <div className='w-full h-full'>
                                <h1 className='text-2xl font-bold text-black'>725+</h1>
                                <p className='text-gray-400 font-normal'>STORES AND OFFICES IN U.S. AND WORLDWIDE</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='w-full h-80 grid grid-cols-2 gap-2'>
                <img src="/images/delivery_guy.png" alt="" className='w-full h-80 rounded-md'/>
                <div className='w-full h-full rounded-md bg-gray-200 py-6 px-12 flex flex-col justify-between'>
                    <h1 className='text-lg font-bold text-black'>
                        We connect millions of buyers and sellers around the world, empowering people and creating economic opportunity for all.
                    </h1>
                    <p className='font-normal text-gray-600'>
                        Within our markets,millions of people around the world connect,both online and offline to make,buy and sell unique goods.We also provide a wide range of seller services and tools that help creative entrepreneurs start,manage & scale their businesses.
                    </p>
                    <div>
                        <Button className='bg-[#1ABA1A]'> OUR SHOWROOM </Button>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full h-60 mt-4 grid grid-cols-3 gap-2'>
            <div className='w-full h-full rounded-md bg-white flex flex-col justify-between px-4 py-4'>
                <div className='w-full h-10 flex justify-between items-center'>
                    <h1 className='text-lg font-bold text-black w-2/5'>100% AUTHENTIC PRODUCTS</h1>
                    <div className='w-8 h-8 rounded-full bg-[#1ABA1A] flex justify-center items-center'>
                        <CheckCircleIcon size={20} color='white'/>
                    </div>
                </div>
                <p className='font-normal text-gray-600'>
                    TechMart dietributes 100% authorized products & guarantees quality. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quasi sapiente, est eaque dolor vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laudantium, beatae doloremque placeat.
                </p>
            </div>
            <div className='w-full h-full rounded-md bg-white flex flex-col justify-between px-4 py-4'>
                <div className='w-full h-10 flex justify-between items-center'>
                    <h1 className='text-lg font-bold text-black w-1/4'>FAST DELIVERY</h1>
                    <div className='w-8 h-8 rounded-full bg-[#1ABA1A] flex justify-center items-center'>
                        <ArrowBigRightDashIcon size={20} color='white'/>
                    </div>
                </div>
                <p className='font-normal text-gray-600'>
                    Fast shipping with alot of delivery methods.100% guarantee that your goods always arrive on time and preserve quality. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quasi sapiente, est eaque dolor vel. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div className='w-full h-full rounded-md bg-white flex flex-col justify-between px-4 py-4'>
                <div className='w-full h-10 flex justify-between items-center'>
                    <h1 className='text-lg font-bold text-black w-1/4'>AFFORDABLE PRICE</h1>
                    <div className='w-8 h-8 rounded-full bg-[#1ABA1A] flex justify-center items-center'>
                        <PiggyBankIcon size={20} color='white'/>
                    </div>
                </div>
                <p className='font-normal text-gray-600'>
                    We offer an affordable and competitive price with a lot of special promotions. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quasi sapiente, est eaque dolor vel. 
                </p>
            </div>
        </div>
        <div className="w-full rounded-md mx-auto px-6 py-12 mt-4 bg-white text-gray-800">
            {/* Section 1: Mission and Vision */}
            <section className="mb-16">
                <h2 className="text-xl font-bold uppercase tracking-wider mb-6">Our Mission and Vision</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                Nam maximus nunc a augue pulvinar, non euismod mauris tempus. Cras non elit vel magna molestie pellentesque in eu dui. Donec laoreet quis erat vitae finibus. Vestibulum enim eros, porta eget quam et, euismod dictum elit. <span className="font-bold text-black">Vivamus mollis mauris</span> vitae rhoncus egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </p>
                
                <div className="w-full h-[400px] overflow-hidden rounded-lg">
                <img 
                    src="/images/city_view.webp" 
                    alt="Office Building" 
                    className="w-full h-full object-cover"
                />
                </div>
            </section>

            {/* Section 2: History Timeline */}
            <section className="mb-20">
                <h2 className="text-xl font-bold uppercase tracking-wider mb-4">From a Retail Store to the Global Chain of Stores</h2>
                <p className="text-gray-500 mb-10 max-w-4xl">
                Pellentesque laoreet justo nec ex sodales euismod. Aliquam orci tortor, bibendum nec ultricies ac, auctor nec purus. Maecenas in consectetur erat.
                </p>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-sm leading-relaxed text-gray-600">
                <div className="space-y-4">
                    <p><strong className="text-black">1997:</strong> A small store located in Brooklyn Town, USA</p>
                    <p><strong className="text-black">1998:</strong> It is a long established fact that a reader will be distracted</p>
                    <p><strong className="text-black">2000:</strong> Lorem Ipsum is simply dummy text of the printing industry</p>
                    <p><strong className="text-black">2002:</strong> Lorem Ipsum has been the industry's standard dummy text</p>
                    <p><strong className="text-black">2004:</strong> Contrary to popular belief, Lorem Ipsum is not random</p>
                    <p><strong className="text-black">2010:</strong> All the Lorem Ipsum generators on the Internet tend to repeat</p>
                </div>
                <div className="space-y-4">
                    <p><strong className="text-black">2014:</strong> There are many variations of passages of Lorem Ipsum</p>
                    <p><strong className="text-black">2016:</strong> All the Lorem Ipsum generators on the Internet tend to repeat</p>
                    <p><strong className="text-black">2020:</strong> Lorem Ipsum comes from sections 1.10.32</p>
                    <p><strong className="text-black">2021:</strong> Making this the first true generator on the Internet</p>
                    <p><strong className="text-black">2022:</strong> Lorem Ipsum which looks reasonable and generated</p>
                    <p><strong className="text-black">2023:</strong> Here are many variations of passages of Lorem Ipsum</p>
                </div>
                </div>
            </section>

            <hr className="border-gray-200 mb-12" />

            {/* Section 3: Leadership Grid */}
            <section>
                <div className="flex justify-between items-end mb-8">
                <h2 className="text-xl font-bold uppercase tracking-wider">Leaderships</h2>
                <button className="text-gray-400 hover:text-black text-sm transition">View All</button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {leaders.map((leader, index) => (
                    <div key={index} className="group cursor-pointer">
                    <div className="overflow-hidden rounded-xl mb-3">
                        <img 
                        src={leader.img} 
                        alt={leader.name} 
                        className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <h3 className="font-bold text-sm leading-tight">{leader.name}</h3>
                    <p className="text-[10px] uppercase text-gray-500 tracking-tighter mt-1">{leader.role}</p>
                    </div>
                ))}
                </div>
            </section>
        </div>
    </div>
  )
}
