"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "./ui/button-group"
import { Input } from "@/components/ui/input"
import { Checkbox } from "./ui/checkbox"
import {
  Plus,
  Minus,
  Twitter,
  Instagram,
  Youtube,
  Facebook,
  MessageCircle,
  Star,
  Heart,
  Truck
} from "lucide-react"

import { Product } from "@/types"
import { useState,useEffect } from "react"

export default function PhoneProductPage({ product}: { product: Product}) {

  const isSingleVariant = product.variants?.length === 1
  const firstVariant = product.variants?.[0]

  const price = Number(firstVariant?.price || 0)
  const stock = firstVariant?.stock || 0

  const [quantity,setQuantity] = useState<number>(1)
  const [selectedColor,setSelectedColor] = useState(firstVariant?.color)
  const [selectedStorage,setSelectedStorage] = useState(firstVariant?.storage)
  const [selectedRam,setSelectedRam] = useState(firstVariant?.ram)

  const [selection,setSelection] = useState([{}])

  useEffect(() => {
    setSelection([
      {
        id: product.id,
        color: selectedColor || firstVariant?.color,
        ram: selectedRam || firstVariant?.ram,
        storage: selectedStorage || firstVariant?.storage,
        quantity: quantity
      }
    ])
  }, [selectedColor, selectedRam, selectedStorage, quantity,product.id,firstVariant])

  useEffect(() => {
    console.log(selection)
    localStorage.setItem("orders",JSON.stringify(selection))
  }, [selection])

  const thumbnails = product.variants?.filter(v => v.image)

  return (
    <div className="grid grid-rows-[auto_auto] mt-4 gap-4">

      <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.5fr_1fr] gap-6 bg-white p-4 lg:p-6 rounded-xl">

        {/* PRODUCT GALLERY */}
        <div className="space-y-6 flex flex-col items-center lg:items-start">

          <div className="rounded-xl flex items-center justify-center p-4 lg:p-6">
            <Image
              src={product.image || "/fallback.png"}
              alt={product.name}
              width={260}
              height={260}
              className="w-48 sm:w-56 lg:w-65 h-auto"
              unoptimized
            />
          </div>

          {/* thumbnails (VARIANTS) */}
          {thumbnails?.length > 0 && (
            <div className="flex gap-2 lg:gap-3 flex-wrap justify-center lg:justify-start">
              {thumbnails.map((v, i) => (
                <div key={i} className="border rounded-md p-2 cursor-pointer">
                  <Image src={v.image!} alt="" width={60} height={60} unoptimized/>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* PRODUCT INFO */}
        <div className="space-y-4">

          <h1 className="text-lg font-semibold">{product.name}</h1>

          {/* rating (static for now) */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} />)}
            </div>
            <span>(0)</span>
          </div>

          {/* price */}
          <div className="text-xl font-bold text-green-600">
            ${price}
          </div>

          <p className="text-sm text-gray-500">
            {product.description || "No description available"}
          </p>

          <hr />

          {/* COLOR */}
          {product.variants?.some(v => v.color) && (
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-600">
                COLOR
              </h3>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                {product.variants.map((v, i) => (
                  v.color && (
                    <figure 
                      key={i}
                      onClick={()=>{
                        if (!isSingleVariant) setSelectedColor(v.color)
                        setSelectedColor(v.color)}} 
                      className={`border rounded-md p-2 flex flex-col sm:flex-row items-center gap-2 cursor-pointer hover:bg-gray-100
                        ${v.color === selectedColor
                        ? 'border-3 border-green-500'
                        : 'bg-white text-gray-700 border'
                      }`}
                    >
                      {v.image && <img src={v.image} alt="" />}
                      <figcaption>
                        {v.color} <span className="font-bold">${v.price}</span>
                      </figcaption>
                    </figure>
                  )
                ))}
              </div>
            </div>
          )}

          {/* MEMORY (STORAGE) */}
          {product.variants?.some(v => v.storage) && (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold">STORAGE SIZE</h3>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v, i) => {
                  if (!v.storage) return null

                  const storageValue = parseInt(v.storage)
                  const displayStorage =
                    storageValue > 1024
                      ? `${storageValue / 1024} TB`
                      : `${storageValue} GB`

                  return (
                    <Button
                      key={i}
                      variant="outline"
                      onClick={() => {
                        if (!isSingleVariant) setSelectedStorage(v.storage)
                        setSelectedStorage(v.storage)}}
                      className={`hover:bg-gray-100 cursor-pointer ${
                        v.storage === selectedStorage
                          ? 'border-3 border-green-500'
                          : 'bg-white text-gray-700 border'
                      }`}
                    >
                      {displayStorage}
                    </Button>
                  )
                })}
              </div>
            </div>
          )}

          {/* MEMORY (RAM) */}
          {product.variants?.some(v => v.ram) && (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold">RAM SIZE</h3>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v, i) => (
                  v.ram && (
                    <Button 
                      key={i} 
                      variant="outline"
                      onClick={()=>{
                        if (!isSingleVariant) setSelectedRam(v.ram)
                        setSelectedRam(v.ram)}}
                      className={`hover:bg-gray-100 cursor-pointer ${v.ram === selectedRam
                        ? 'border-3 border-green-500'
                        : 'bg-white text-gray-700 border'
                      }`}
                    >
                      {v.ram} GB
                    </Button>
                  )
                ))}
              </div>
            </div>
          )}


          <hr />

          {/* PROMO (fallback static) */}
          <div className="w-full rounded-md bg-[#ECF6EC] flex flex-col sm:flex-row items-center gap-4 px-4 py-3">
            <img src="/images/gift_box.png" alt="" />
            <div className="text-sm">
              <ul className="list-disc">
                <li>Buy 2 → Snack Tray</li>
                <li>Buy 4 → Block Toys</li>
              </ul>
            </div>
          </div>

          {/* META */}
          <div className="text-sm">
            <p><b>SKU:</b> {product.id}</p>
            <p><b>Category:</b> {product.category?.title}</p>
            <p><b>Brand:</b> {product.brand?.title}</p>
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
            <div className="text-xl font-bold">${price}</div>

            <div className="text-sm text-green-600">
              {stock > 0 ? 'In Stock' : 'Out of Stock'}
            </div>

            <ButtonGroup>
              <Button variant="outline" onClick={()=>setQuantity(prev=>Math.max(1,prev - 1))}><Minus /></Button>
              <Input value={quantity} min={1} max={stock} readOnly className="w-10 bg-white text-center" />
              <Button variant="outline" onClick={()=>setQuantity(prev=>Math.min(stock,prev + 1))}><Plus /></Button>
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

      {/* FREQUENTLY BOUGHT (static fallback preserved) */}
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-4">

        <div className="lg:col-span-3 bg-white rounded-md p-4 lg:p-8 space-y-4">

          <h1>FREQUENTLY BOUGHT TOGETHER</h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

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