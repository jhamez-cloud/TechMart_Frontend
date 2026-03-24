"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import ProductCard from "./ui/ProductCard";
import {
  ArrowBigRight,
  ArrowBigLeft,
  Grid2X2,
  List,
} from "lucide-react";
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
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import ShopList from "./ShopList";
import ApiError from "./ApiError";
import useSWR from "swr";
import ApiLoading from "./ApiLoading";

const ShopFilter = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 12;

  const Django_Url = process.env.NEXT_PUBLIC_DJANGO_URL;
  const { data: products, error } = useSWR(
    `${Django_Url}/api/v1/products/?category=mobilephones`
  );

  if (error) return <ApiError />;
  if (!products) return <ApiLoading />;

  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const paginatedProducts = products.slice(startIndex, endIndex);

  return (
    <div className="w-full mt-4 flex flex-col lg:grid lg:grid-cols-[300px_1fr] gap-4">

      {/* CATEGORY SIDEBAR */}
      <aside className="bg-white rounded-2xl p-6 shadow-sm order-1 lg:order-none">
        <h2 className="text-lg font-bold mb-4">CATEGORIES</h2>

        <button className="w-full border rounded-lg px-4 py-2 text-sm mb-6">
          All Categories
        </button>

        <ul className="space-y-2 text-sm text-gray-600">
          <li className="font-semibold text-black">Samsung</li>
          <li>Iphone</li>
          <li>Xiaomi</li>
          <li>Oppo</li>
        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex flex-col gap-4">

        {/* BEST SELLER */}
        <section className="bg-white rounded-2xl p-6">
          <h1 className="text-lg font-bold mb-4">
            BEST SELLER IN THIS CATEGORY
          </h1>

          <div className="flex items-center gap-4">

            <button className="hidden md:block">
              <ArrowBigLeft />
            </button>

            {/* MOBILE SCROLL */}
            <div className="flex gap-4 overflow-x-auto md:overflow-visible">
              <ProductCard name="iPad Pro" stock_left={10} image="/images/ipad_pro.png"/>
              <ProductCard name="uLosk Case" stock_left={8} image="/images/ulosk_minicase.png"/>
              <ProductCard name="Apple Watch" stock_left={12} image="/images/apple_watch.png"/>
            </div>

            <button className="hidden md:block">
              <ArrowBigRight />
            </button>

          </div>
        </section>

        {/* FILTER SIDEBAR STACKED FOR MOBILE */}
        <aside className="bg-white rounded-2xl p-6 space-y-6 w-full overflow-auto">
          {/* Active Filters */}
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
            <div className="space-y-3 max-h-40 overflow-auto">
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

          {/* Price Slider */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm">By Price</h3>
            <Slider defaultValue={[1,400]} max={1000} step={5} className="w-full" />
            <div className="flex items-center gap-2">
              <input type="text" defaultValue="0" className="border px-2 py-1 text-xs w-14" />
              <span>—</span>
              <input type="text" defaultValue="10000" className="border px-2 py-1 text-xs w-16" />
              <button className="bg-[#1ABA1A] text-white text-[10px] px-3 py-2 rounded font-bold">GO</button>
            </div>
          </div>
          <hr />

          {/* Screen Size */}
          <div>
            <h3 className="font-bold text-sm mb-4">By Screen Size</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
              {['7" & Under','7.1" - 8.9"','9" - 10.9"','11" & Greater'].map(size => (
                <button key={size} className="w-full p-1 bg-gray-100 text-sm text-gray-600 rounded-sm hover:bg-gray-200">
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
              {["bg-red-700","bg-blue-800","bg-cyan-500","bg-black","bg-white border","bg-green-500","bg-gray-500","bg-purple-700"].map((color,i)=>(
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
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#1ABA1A]" />
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
              {["New","UK Used","US Used","Almost New","Open Box"].map(cond => (
                <label key={cond} className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#1ABA1A]" />
                  <span className="text-xs text-gray-600">{cond} <span className="text-gray-400">(4)</span></span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* PRODUCTS */}
        <section className="bg-white rounded-2xl p-6 flex flex-col gap-6">

          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4">

            <p className="text-sm">
              Showing {startIndex + 1} - {endIndex} of {totalProducts}
            </p>

            <div className="flex flex-wrap gap-4">

              <ButtonGroup>
                <Button size="sm">24</Button>
                <Button size="sm" variant="ghost">48</Button>
              </ButtonGroup>

              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="price">Price</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex gap-2">
                <Grid2X2 size={18}/>
                <List size={18}/>
              </div>

            </div>
          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {paginatedProducts.map((p:any) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>

          {/* PAGINATION */}
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}/>
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    isActive={currentPage === i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}/>
              </PaginationItem>
            </PaginationContent>
          </Pagination>

        </section>

      </div>
    </div>
  );
};

export default ShopFilter;