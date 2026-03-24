"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "./ui/button-group"
import { Input } from "@/components/ui/input"
import { Checkbox } from "./ui/checkbox"
import { Plus, Minus, Twitter, Instagram, Youtube, Facebook, MessageCircle, Star, Heart, Truck } from "lucide-react"

export default function PhoneProductPage() {
  return (
    <div className="grid grid-rows-[auto_auto] mt-4 gap-4">

      {/* TOP PRODUCT SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.5fr_1fr] gap-6 bg-white p-4 lg:p-6 rounded-xl">

        {/* PRODUCT GALLERY */}
        <div className="space-y-6 flex flex-col items-center lg:items-start">

          <div className="rounded-xl flex items-center justify-center p-4 lg:p-6">
            <Image
              src="/images/samsung_product/samsung_product.png"
              alt="phone"
              width={260}
              height={260}
              className="w-48 sm:w-56 lg:w-[260px] h-auto"
            />
          </div>

          {/* thumbnails */}
          <div className="flex gap-2 lg:gap-3 flex-wrap justify-center lg:justify-start">
            <div className="border rounded-md p-2 cursor-pointer">
              <Image src="/images/samsung_product/product_fandb.png" alt="" width={60} height={60} />
            </div>
            <div className="border rounded-md p-2 cursor-pointer">
              <Image src="/images/samsung_product/product_b.png" alt="" width={60} height={60} />
            </div>
            <div className="border rounded-md p-2 cursor-pointer">
              <Image src="/images/samsung_product/product_f.png" alt="" width={60} height={60} />
            </div>
          </div>
        </div>

        {/* PRODUCT INFO */}
        <div className="space-y-4">

          <h1 className="text-lg font-semibold">
            Samsung Galaxy S20 FE 5G (SM-G781U), Black
          </h1>

          {/* rating */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} />)}
            </div>
            <span>(152)</span>
          </div>

          {/* price */}
          <div className="text-xl font-bold text-green-600">
            $569.00 – $609.00
          </div>

          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <hr />

          {/* COLOR */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-gray-600">
              COLOR: <span className="text-gray-400 font-normal">Midnight Blue</span>
            </h3>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              {[
                { name: "Midnight Blue", img: "/images/samsung_product/midnight_blue.png" },
                { name: "Deep Purple", img: "/images/samsung_product/purple_samsung.png" },
                { name: "Space Black", img: "/images/samsung_product/space_black_samsung.png" },
              ].map((item, i) => (
                <figure key={i} className="border rounded-md p-2 flex flex-col sm:flex-row items-center gap-2">
                  <img src={item.img} alt="" />
                  <figcaption>{item.name} <span className="font-bold">$569</span></figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* MEMORY */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">MEMORY SIZE</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline">64GB</Button>
              <Button variant="outline">128GB</Button>
              <Button variant="outline">256GB</Button>
            </div>
          </div>

          <hr />

          {/* PROMO */}
          <div className="w-full rounded-md bg-[#ECF6EC] flex flex-col sm:flex-row items-center gap-4 px-4 py-3">
            <img src="/images/gift_box.png" alt="" />
            <div className="text-sm">
              <ul className="list-disc">
                <li>Buy 02 → Snack Tray</li>
                <li>Buy 04 → Block Toys</li>
              </ul>
            </div>
          </div>

          {/* META */}
          <div className="text-sm">
            <p><b>SKU:</b> ABC025168</p>
            <p><b>Category:</b> Mobile Phones</p>
            <p><b>Brand:</b> Samsung</p>
          </div>

          {/* SOCIAL */}
          <ul className="flex flex-wrap gap-2">
            {[Twitter, Facebook, Instagram, Youtube, MessageCircle].map((Icon, i) => (
              <li key={i} className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200">
                <Icon />
              </li>
            ))}
          </ul>

        </div>

        {/* BUY BOX */}
        <div className="flex flex-col space-y-4 w-full">

          <div className="bg-gray-200 rounded-lg p-4 space-y-4 w-full">
            <div className="text-xl font-bold">$609.00</div>
            <div className="text-sm text-green-600">In Stock</div>

            <ButtonGroup>
              <Button variant="outline"><Plus /></Button>
              <Input value="1" readOnly className="w-10 bg-white text-center" />
              <Button variant="outline"><Minus /></Button>
            </ButtonGroup>

            <div className="space-y-2">
              <Button className="w-full bg-green-600">Add to Cart</Button>
              <Button variant="outline" className="w-full bg-orange-400">
                Buy with PayPal
              </Button>
            </div>

            <button className="flex items-center gap-2 text-sm">
              <Heart size={16}/> Wishlist
            </button>
          </div>

          <div className="bg-gray-200 rounded-lg p-4 text-center">
            <h1 className="text-xl font-bold">(055) 553 0670</h1>
          </div>

          <p className="text-sm flex items-center gap-2">
            <Truck size={20}/> Ships from USA
          </p>

        </div>

      </section>


      {/* FREQUENTLY BOUGHT */}
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-4">

        {/* LEFT */}
        <div className="lg:col-span-3 bg-white rounded-md p-4 lg:p-8 space-y-4">

          <h1>FREQUENTLY BOUGHT TOGETHER</h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

            {/* ITEMS */}
            <div className="lg:col-span-3 space-y-6">

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start items-center">
                <img src="/images/samsung_s9_plus.png" alt="" />
                <Plus />
                <img src="/images/boso_headphone.png" alt="" />
                <Plus />
                <img src="/images/smart_watch.png" alt="" />
              </div>

              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><Checkbox /> Phone</li>
                <li className="flex items-center gap-2"><Checkbox /> Headphone</li>
                <li className="flex items-center gap-2"><Checkbox /> Watch</li>
              </ul>

            </div>

            {/* TOTAL */}
            <div className="space-y-4">
              <h1 className="text-xl font-bold">$767</h1>
              <Button className="w-full bg-green-500">Add All</Button>
            </div>

          </div>

        </div>

        {/* ADS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          <div className='bg-[url("/images/sales-off.png")] bg-cover h-40 rounded-md'></div>
          <div className='bg-[url("/images/sales-off2.png")] bg-cover h-40 rounded-md'></div>
        </div>

      </section>

    </div>
  )
}