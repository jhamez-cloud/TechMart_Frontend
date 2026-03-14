import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "./ui/button-group"
import { Input } from "@/components/ui/input"
import { Checkbox } from "./ui/checkbox"
import { Plus,Minus,Twitter,Instagram,Youtube,Facebook,MessageCircle } from "lucide-react"

import { Star, Heart, RefreshCcw, Truck } from "lucide-react"

export default function PhoneProductPage() {
  return (
    <div className="grid grid-rows-[auto_auto] mt-4">

      {/* TOP PRODUCT SECTION */}
      <section className="grid grid-cols-[1.2fr_1.5fr_1fr] gap-6 bg-white p-6 rounded-xl">

        {/* PRODUCT GALLERY */}
        <div className="space-y-8">

          <div className="rounded-xl flex items-center justify-center p-6">
            <Image
              src="/images/samsung_product/samsung_product.png"
              alt="phone"
              width={260}
              height={260}
            />
          </div>

          {/* thumbnails */}
          <div className="flex gap-3">
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

          {/* COLOR */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-600">COLOR: <span className="text-gray-400 font-normal">Midnight Blue</span></h3>

            <div className="flex gap-4">
              <figure className="border border-green-400 rounded-md p-2 flex items-center justify-between">
                <img src="/images/samsung_product/midnight_blue.png" alt="" />
                <figcaption>Midnight Blue <span className="font-bold text-lg text-black">$569.00</span></figcaption>
              </figure>
              <figure className="border border-gray-400 rounded-md p-2 flex items-center justify-between">
                <img src="/images/samsung_product/purple_samsung.png" alt="" />
                <figcaption>Deep Purple <span className="font-bold text-lg text-black">$569.00</span></figcaption>
              </figure>
              <figure className="border border-gray-400 rounded-md p-2 flex items-center justify-between">
                <img src="/images/samsung_product/space_black_samsung.png" alt="" />
                <figcaption>Space Black <span className="font-bold text-lg text-black">$569.00</span></figcaption>
              </figure>
            </div>
          </div>


          {/* MEMORY */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">MEMORY SIZE</h3>

            <div className="flex gap-2">
              <Button variant="outline">64GB</Button>
              <Button variant="outline">128GB</Button>
              <Button variant="outline">256GB</Button>
            </div>
          </div>

          <hr className="border-gray-400"/>

          <div className="w-full h-30 rounded-md bg-[#ECF6EC] flex items-center justify-between px-4 py-2">
            <img src="/images/gift_box.png" alt="" />
            <div className="flex flex-col space-y-4 text-lg">
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

                <Button variant="outline" className="w-full bg-orange-400">
                    Buy With <img src="/logos/paypal.png" alt="" /> Paypal 
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
                <img src="/images/payment_methods.png" alt=""/>
                </div>
            </div>
            <div className="h-30 bg-gray-200 rounded-lg p-6 flex flex-col items-center justify-center space-y-2">
                <Button variant={'outline'} className="bg-black text-white">Quick Order 24/7</Button>
                <h1 className="text-3xl text-black font-bold">(055) 553 0670</h1>
            </div>

            <p className="text-gray-400 text-lg flex items-center space-x-2 p-4">
                <Truck size={24} color="black"/>
                Ships From <span className="font-bold text-black">&nbsp;United States</span>
            </p>
        </div>

      </section>
      
      <section className="h-110 grid grid-cols-4 gap-2 mt-4">
            <div className="col-span-3 bg-white rounded-md flex flex-col space-y-4 p-8">
                <h1>FREQUENTLY BOUGHT TOGETHER</h1>
                <div className=" grid grid-cols-4">
                    <div className="col-span-3 flex flex-col space-y-8">
                        <div className="flex items-center">
                            <img src="/images/samsung_s9_plus.png" alt="" />
                            <span className="w-8 h-8 rounded-full bg-gray-200 p-1 flex justify-center items-center"><Plus size={24}/></span>

                            <img src="/images/boso_headphone.png" alt="" />
                            <span className="w-8 h-8 rounded-full bg-gray-200 p-1 flex justify-center items-center"><Plus size={24}/></span>

                            <img src="/images/smart_watch.png" alt="" />
                        </div>
                        <ul className="text-lg font-normal space-y-2">
                            <li className="space-x-4 flex items-center"><Checkbox className="border-2 border-gray-500"></Checkbox><span className="text-black font-bold">This Item:</span>&nbsp;Samsung Galaxy x6 Ultra LTE 4G/ 128GB , Black Smartphone ( <span className="text-red-400 font-bold">369.00</span> )</li>
                            <li className="space-x-4 flex items-center"><Checkbox className="border-2 border-gray-500"></Checkbox>BOSE 2 Wireless Over Ear Headphone (<span className="text-red-400 font-bold">269.00</span> )</li>
                            <li className="space-x-4 flex items-center"><Checkbox className="border-2 border-gray-500"></Checkbox>Apple Watch Series 8 GPS + Cellular Stainless Steel Case with Milanese Loop ( <span className="text-red-400 font-bold">129.00</span> )</li>
                        </ul>
                    </div>
                    <div className="col-span-1 flex flex-col space-y-6 p-8">
                        <div>
                            <p className="text-lg font-light text-gray-400">TOTAL PRICE :</p>
                            <h1 className="text-2xl font-bold text-black">$767.00</h1>
                        </div>
                        <div className="space-y-2">
                            <Button className="bg-green-500 text-white w-full">
                                Add To Cart
                            </Button>
                            <p className="text-gray-400 flex items-center"><Heart size={20}/>&nbsp;Add All To Wishlist</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-span-1 grid grid-rows-2 gap-2">
                <div className='row-span-1 bg-[url("/images/sales-off.png")] bg-cover rounded-md'></div>
                <div className='row-span-1 bg-[url("/images/sales-off2.png")] bg-cover rounded-md flex flex-col p-8 justify-between'>
                    <div>
                        <h1 className="text-2xl font-bold text-white">iPad Pro</h1>
                        <p className="text-lg font-semibold text-white">Mini 5</p>
                    </div>
                    <div>
                        <p className="text-lg text-gray-600">FROM</p>
                        <h1 className="text-xl font-light text-green-500">$169</h1>
                    </div>
                </div>
            </div>
      </section>

    </div>
  )
}