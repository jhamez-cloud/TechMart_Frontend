"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import ProductCard from "./ui/ProductCard";
import { ArrowBigRight, ArrowBigLeft, Grid2X2, List } from "lucide-react";
import { ButtonGroup } from "./ui/button-group";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import ShopList from "./ShopList";
import ApiError from "./ApiError";
import useSWR from "swr";
import ApiLoading from "./ApiLoading";

import { Product } from "@/types";

const ShopFilter = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [openView, setOpenView] = useState(false);
  const PRODUCTS_PER_PAGE = 12;

  const Django_Url = process.env.NEXT_PUBLIC_DJANGO_URL;
  const { data: products, error: error } = useSWR<Product[]>(
    `${Django_Url}/api/v1/products/?category=mobilephones`,
  );

  if (error) return <ApiError />;
  if (!products) return <ApiLoading />;

  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const paginatedProducts = products.slice(startIndex, endIndex);
  const displayStart = startIndex + 1;
  const displayEnd = Math.min(endIndex, totalProducts);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] grid-rows-[auto_auto_auto] lg:grid-rows-[auto_1fr] gap-4 min-h-screen mt-4">

      {/* CATEGORY SIDEBAR */}
      <aside className="bg-white rounded-2xl p-6 shadow-sm order-1 lg:row-start-1 lg:col-start-1">
        <h2 className="text-lg font-bold mb-4">CATEGORIES</h2>

        <button className="w-full text-left bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium shadow-sm mb-6">
          All Categories
        </button>

        <div className="space-y-3">
          <h3 className="font-bold text-sm">Cell Phones & Tablets</h3>

          <ul className="space-y-2 text-sm text-gray-600 pl-2">
            {[
              "All",
              "Iphone",
              "Samsung",
              "Xiaomi",
              "Oppo",
              "iPad",
              "Window Tablets",
              "eReader",
              "Mobilephone Accessories",
              "Gaming Smartphone",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-black cursor-pointer"
              >
                {item}
              </li>
            ))}

            <li className="flex justify-between hover:text-black cursor-pointer">
              <span>Cell Phones</span>
              <span className="font-bold">$200</span>
            </li>
          </ul>
        </div>
      </aside>

      {/* BEST SELLERS */}
      <main className="bg-white rounded-2xl p-6 order-2 lg:row-start-1 lg:col-start-2">
        <h1 className="text-lg font-bold mb-4">
          BEST SELLER IN THIS CATEGORY
        </h1>

        <div className="flex items-center gap-2 overflow-x-auto">
          <button><ArrowBigLeft /></button>

          <div className="flex-1 min-w-75">
            <ShopList>
              <ProductCard name="iPad Pro 12.9 inch M1 2023, 64GB + WiFi, GPS" old_price={759} new_price={569} discount free_shipping in_stock stock_left={152} image="/images/ipad_pro.png" />
              <ProductCard name="uLosk Mini Case 2.0" discount old_price={2119} new_price={1729} free_shipping stock_left={8} image="/images/ulosk_minicase.png" />
              <ProductCard name="Apple Watch Series 8 GPS" shipping_fee={29} in_stock price={979} stock_left={120} image="/images/apple_watch.png" />
              <ProductCard name="iSmart 24V Charger" shipping_fee={3.98} in_stock discount old_price={12} new_price={9} stock_left={140} image="/images/ismart_charger.png" />
            </ShopList>
          </div>

          <button><ArrowBigRight /></button>
        </div>

        <hr className="mt-4" />
      </main>

      {/* ROW 2 LEFT — FILTER SIDEBAR */}
      <aside className="row-start-2 col-start-1 bg-white rounded-2xl p-6 shadow-sm space-y-8 h-full overflow-y-auto">

        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">CATEGORIES</h2>
          <button className="text-xs text-gray-400 hover:text-black">
            Reset All
          </button>
        </div>

        {/* Active filters */}
        <div className="grid grid-cols-2 gap-2">
          <div className="border rounded p-2 text-[10px] text-gray-500">Min: $45.00</div>
          <div className="border rounded p-2 text-[10px] text-gray-500">10.9 inch</div>
          <div className="border rounded p-2 text-[10px] text-gray-500">Color: Red</div>
          <div className="border rounded p-2 text-[10px] text-gray-500">128GB</div>
        </div>

        <hr />

        {/* Brands */}
        <div>
          <h3 className="font-bold text-sm mb-4">By Brands</h3>

          <input
            type="text"
            placeholder="Search brands..."
            className="w-full mb-4 p-2 text-sm border rounded-md outline-none focus:ring-1 ring-[#1ABA1A]"
          />

          <div className="space-y-3">
            {["envato","codecanyon","videohive","photodune","samsung","iphone","lenovo","xiaomi"].map((brand) => (
              <label key={brand} className="flex items-center space-x-3 cursor-pointer">
                <Checkbox />
                <span className="text-sm text-gray-600 capitalize">{brand}</span>
                <span className="text-xs text-gray-400">(14)</span>
              </label>
            ))}
          </div>
        </div>

        <hr />

        {/* Price */}
        <div className="space-y-4">
          <h3 className="font-bold text-sm">By Price</h3>

          <Slider defaultValue={[1, 400]} max={1000} step={5} className="w-full" />

          <div className="flex items-center gap-2">
            <input className="border px-2 py-1 text-xs w-14" defaultValue="0" />
            <span>—</span>
            <input className="border px-2 py-1 text-xs w-16" defaultValue="10000" />
            <button className="bg-[#1ABA1A] text-white text-[10px] px-3 py-2 rounded font-bold">
              GO
            </button>
          </div>
        </div>

        {/* Screen size */}
        <div>
          <h3 className="font-bold text-sm mb-4">By Screen Size</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
            {['7" & Under','7.1" - 8.9"','9" - 10.9"','11" & Greater'].map(size => (
              <button key={size} className="w-full p-1 bg-gray-100 text-sm text-gray-600 font-medium rounded-sm hover:bg-gray-200">
                {size}
              </button>
            ))}
          </div>
        </div>

        <hr />

        {/* Color */}
        <div>
          <h3 className="font-bold text-sm mb-4">By Color</h3>

          <div className="flex flex-wrap gap-2">
            {["bg-red-700","bg-blue-800","bg-cyan-500","bg-black","bg-white border","bg-green-500","bg-gray-500","bg-purple-700"].map((color,i) => (
              <div key={i} className={`w-8 h-8 rounded-md cursor-pointer ${color} shadow-sm hover:scale-110 transition`} />
            ))}
          </div>
        </div>

        <hr />

        {/* Memory */}
        <div>
          <h3 className="font-bold text-sm mb-4">By Memory</h3>

          <div className="grid grid-cols-2 gap-y-3">
            {["512MB","1GB","3GB","4GB","6GB","8GB","12GB","16GB"].map(size => (
              <label key={size} className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-[#1ABA1A]" />
                <span className="text-xs text-gray-600">{size} <span className="text-gray-400">(4)</span></span>
              </label>
            ))}
          </div>
        </div>

        <hr />

        {/* Condition */}
        <div>
          <h3 className="font-bold text-sm mb-4">By Condition</h3>

          <div className="grid grid-cols-2 gap-y-3">
            {["New","UK Used","US Used","Almost New","Open Box"].map(size => (
              <label key={size} className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-[#1ABA1A]" />
                <span className="text-xs text-gray-600">{size} <span className="text-gray-400">(4)</span></span>
              </label>
            ))}
          </div>
        </div>

        <hr />

        {/* Rating */}
        <div>
          <h3 className="font-bold text-sm mb-4">By Rating</h3>

          <div className="grid grid-cols-2 gap-y-3">
            {["1 Star","2 Star","3 Star","4 Star","5 Star"].map((star,i) => (
              <label key={i} className="flex items-center space-x-4 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-[#1ABA1A]" />
                <span className="text-xs text-gray-600">{star} <span className="text-gray-400">(4)</span></span>
              </label>
            ))}
          </div>
        </div>

        <hr />

        {/* Banner */}
        <div className='w-full rounded-md bg-[url("/images/hero-camera.png")] bg-cover'>
          <div className="w-1/2 h-full flex flex-col py-4 pl-8 justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-white">OKODO</h1>
              <h1 className="text-lg text-white">HERO 11+</h1>
              <h1 className="text-lg text-white">BLACK</h1>
            </div>
            <div>
              <p className="text-gray-500 text-lg">From</p>
              <p className="text-3xl text-green-400">$169</p>
            </div>
          </div>
        </div>

      </aside>

      {/* PRODUCTS */}
      <section className="bg-white rounded-2xl p-6 order-4 lg:row-start-2 lg:col-start-2 flex flex-col">

        {/* HEADER */}
        <div className="flex flex-col gap-4 mb-6">

          <h1 className="text-lg font-bold">MOBILE PHONES</h1>

          <div className="flex flex-col lg:flex-row lg:justify-between gap-4 border-b pb-4">

            <div className="text-sm">
              <span className="font-semibold">{displayStart} - {displayEnd}</span> of {totalProducts}
            </div>

            <div className="flex flex-wrap gap-4">

              <ButtonGroup>
                <Button size="sm">24</Button>
                <Button size="sm">48</Button>
                <Button size="sm">72</Button>
              </ButtonGroup>

              <Select>
                <SelectTrigger className="w-28">
                  <SelectValue placeholder="Default"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="price-low">Price Low</SelectItem>
                  <SelectItem value="price-high">Price High</SelectItem>
                </SelectContent>
              </Select>

              {/* VIEW AS FIXED FOR MOBILE */}
              <div className="relative">
                <button
                  onClick={() => setOpenView(!openView)}
                  className="text-sm text-gray-600 cursor-pointer"
                >
                  View As
                </button>

                <ul
                  className={`absolute right-0 top-full mt-2 z-20 bg-white border border-gray-200 rounded-md shadow-md w-28
                  ${openView ? "block" : "hidden"} lg:group-hover:block`}
                >
                  <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                    <Grid2X2 size={16} />
                    Grid
                  </li>

                  <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                    <List size={16} />
                    List
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* PRODUCTS */}
        <ShopList>
          {paginatedProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={Number(product.variants?.[0]?.price)}
              stock_left={product.variants?.[0]?.stock || 0}
              in_stock={product.variants?.[0]?.stock > 0}
              category={product.category}
              free_shipping={product.free_shipping}
              free_gift={product.free_gift}
              shipping_fee={product.shipping_fee}
              just_in={product.just_in}
            />
          ))}
        </ShopList>

        {/* PAGINATION */}
        <Pagination className="mt-6">
          <PaginationContent>
            <PaginationPrevious onClick={(e)=>{e.preventDefault(); if(currentPage>1)setCurrentPage(currentPage-1)}}/>
            {Array.from({length:totalPages},(_,i)=>(
              <PaginationItem key={i}>
                <PaginationLink isActive={currentPage===i+1} onClick={(e)=>{e.preventDefault();setCurrentPage(i+1)}}>
                  {i+1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationNext onClick={(e)=>{e.preventDefault(); if(currentPage<totalPages)setCurrentPage(currentPage+1)}}/>
          </PaginationContent>
        </Pagination>

      </section>
    </div>
  );
};

export default ShopFilter;