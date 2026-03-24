import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "./ui/button-group"
import { Input } from "@/components/ui/input"
import { Checkbox } from "./ui/checkbox"
import { Plus,Minus,Twitter,Instagram,Youtube,Facebook,MessageCircle } from "lucide-react"

import { Star, Heart, RefreshCcw, Truck } from "lucide-react"

export default function LaptopProductPage() {
  return (
    <div className="grid grid-rows-[auto_auto] mt-4">

      {/* TOP PRODUCT SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.5fr_1fr] gap-6 bg-white p-4 sm:p-6 rounded-xl">

        {/* PRODUCT GALLERY */}
        <div className="space-y-8">

          <div className="rounded-xl flex items-center justify-center p-6">
            <Image
              src="/images/laptops/macbook_pineapple.png"
              alt="phone"
              width={400}
              height={400}
              className="w-full max-w-[300px] mx-auto object-contain"
            />
          </div>

          {/* thumbnails */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <div className="border rounded-md p-2 cursor-pointer">
              <Image src="/images/laptops/laptop_front.png" alt="" width={60} height={60} />
            </div>

            <div className="border rounded-md p-2 cursor-pointer">
              <Image src="/images/laptops/laptop_side.png" alt="" width={60} height={60} />
            </div>

            <div className="border rounded-md p-2 cursor-pointer">
              <Image src="/images/laptops/laptop_closed.png" alt="" width={60} height={60} />
            </div>
          </div>

        </div>


        {/* PRODUCT INFO */}
        <div className="space-y-4">

          <h1 className="text-lg font-semibold">
            Pinnapple Macbook Pro 2022 M1 / 512GB Dark Grey
          </h1>

          {/* rating */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <div className="flex text-yellow-400">
              <Star size={16}/>
              <Star size={16}/>
              <Star size={16}/>
              <Star size={16}/>
              <Star size={16}/>
            </div>

            <span>(152)</span>
          </div>

          {/* price */}
          <div className="text-xl font-bold text-green-600">
            $569.00 – $609.00
          </div>

          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium quod ipsum corporis.
          </p>

          <hr className="border-gray-400"/>


          {/* MEMORY */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">MEMORY SIZE</h3>

            <div className="flex flex-wrap gap-2">
              <Button variant="outline">64GB</Button>
              <Button variant="outline">128GB</Button>
              <Button variant="outline">256GB</Button>
            </div>
          </div>

          <hr className="border-gray-400"/>

          {/* STORAGE*/}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">STORAGE SIZE</h3>

            <div className="flex flex-wrap gap-2">
              <Button variant="outline">128GB</Button>
              <Button variant="outline">256GB</Button>
              <Button variant="outline">512GB</Button>
              <Button variant="outline">1TB</Button>
            </div>
          </div>

          <hr className="border-gray-400"/>

          <div className="w-full rounded-md bg-[#ECF6EC] flex flex-col sm:flex-row items-start sm:items-center gap-4 px-4 py-3">
            <img src="/images/gift_box.png" alt="" />
            <div className="flex flex-col space-y-4 w-full">
                <ul className="list-disc">
                    <li>Buy <span className="text-red-500">02</span> Boxes and get a <span className="font-bold">Snack Tray</span></li>
                    <li>Buy <span className="text-red-500">04</span> Boxes and get <span className="font-bold">Block Toys</span></li>
                </ul>

                <p className="text-gray-400 italic">Promotion will expire in 9h00 pm , 25/05/2026</p>
            </div>
          </div>

          <div>
            <p className="font-bold">SKU : <span className="text-gray-400 font-normal">ABC025168</span></p>
            <p className="font-bold">CATEGORY : <span className="text-gray-400 font-normal">Mobile Phones</span></p>
            <p className="font-bold">BRAND : <span className="text-gray-400 font-normal">Samsung</span></p>
          </div>

          <ul className="flex space-x-2">
            <li className="w-10 h-10 rounded-full flex justify-center items-center bg-gray-200">
              <Twitter />
            </li>
            <li className="w-10 h-10 rounded-full flex justify-center items-center bg-gray-200">
              <Facebook />
            </li>
            <li className="w-10 h-10 rounded-full flex justify-center items-center bg-gray-200">
              <Instagram />
            </li>
            <li className="w-10 h-10 rounded-full flex justify-center items-center bg-gray-200">
              <Youtube />
            </li>
            <li className="w-10 h-10 rounded-full flex justify-center items-center bg-gray-200">
              <MessageCircle />
            </li>
          </ul>

        </div>


        {/* BUY BOX */}
        <div className="flex flex-col space-y-4">
            <div className="bg-gray-200 rounded-lg p-4 space-y-4">
                <div className="text-xl font-bold ">$609.00</div>

                <div className="text-sm text-green-600">In Stock</div>

                <ButtonGroup>
                <Button variant="outline" aria-label="increase">
                    <Plus />
                </Button>
                <Input placeholder="1" readOnly type='text' className='w-10 bg-white'/>
                <Button variant="outline" aria-label="decrease">
                    <Minus />
                </Button>
                </ButtonGroup>


                {/* buttons */}
                <div className="space-y-2">

                <Button className="w-full bg-green-600 hover:bg-green-700">
                    Add to Cart
                </Button>

                <Button variant="outline" className="w-full bg-orange-400 flex items-center justify-center gap-2">
                  Buy With <img src="/logos/paypal.png" alt="" className="h-5" />
                </Button>

                </div>


                {/* wishlist */}
                <button className="flex items-center gap-2 text-sm text-gray-500">
                <Heart size={16}/>
                Add to Wishlist
                </button>


                {/* payment icons */}
                <div className="flex flex-col space-y-2 pt-3">
                <h1 className="text-lg font-semibold">Guarantee Safe Checkout</h1>
                <img src="/images/payment_methods.png" alt="" className="w-full object-contain" />
                </div>
            </div>
            <div className="bg-gray-200 rounded-lg p-6 flex flex-col items-center justify-center space-y-2">
                <Button variant={'outline'} className="bg-black text-white">Quick Order 24/7</Button>
                <h1 className="text-3xl text-black font-bold">(055) 553 0670</h1>
            </div>

            <p className="text-gray-400 text-sm sm:text-lg flex items-center gap-2 p-4 flex-wrap">
              <Truck size={24} color="black"/>
              Ships From <span className="font-bold text-black">&nbsp;United States</span>
            </p>
        </div>

      </section>

    </div>
  )
}