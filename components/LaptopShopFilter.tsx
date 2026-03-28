'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import ProductCard from './ui/ProductCard';
import { ArrowBigRight,ArrowBigLeft,Grid2X2,List,Menu,X } from 'lucide-react';
import { ButtonGroup } from './ui/button-group';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import ShopList from './ShopList';
import useSWR from 'swr';
import ApiError from './ApiError';
import ApiLoading from './ApiLoading';

import { Product } from '@/types';

const LaptopShopFilter = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const PRODUCTS_PER_PAGE = 12;

  const Django_Url = process.env.NEXT_PUBLIC_DJANGO_URL
  const {data:products,error} = useSWR<Product[]>(`${Django_Url}/api/v1/products/?category=laptops`)

  if (error) return <ApiError/>
  if (!products) return <ApiLoading/>

  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const paginatedProducts = products.slice(startIndex, endIndex);

  const displayStart = startIndex + 1;
  const displayEnd = Math.min(endIndex, totalProducts);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-4 min-h-screen mt-4">

      {/* MOBILE FILTER BUTTON */}
      <button
        onClick={() => setShowFilters(true)}
        className="lg:hidden flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md"
      >
        <Menu size={18}/> Filters
      </button>

      {/* ================= SIDEBAR ================= */}
      <div className={`
        fixed lg:static top-0 left-0 h-full w-[85%] max-w-[320px] z-50
        transform ${showFilters ? 'translate-x-0' : '-translate-x-full'}
        transition duration-300 lg:translate-x-0 overflow-y-auto
      `}>

        {/* CLOSE BTN */}
        <div className="flex justify-between items-center p-4 lg:hidden">
          <h2 className="font-bold">Filters</h2>
          <button onClick={() => setShowFilters(false)}>
            <X/>
          </button>
        </div>

        {/* CATEGORY SIDEBAR */}
        <aside className="bg-white rounded-2xl mb-4 p-6 shadow-sm">
          <h2 className="text-lg font-bold mb-4">CATEGORIES</h2>

          <button className="w-full text-left border rounded-lg px-4 py-2 text-sm mb-6">
            All Categories
          </button>

          <div className="space-y-3">
            <h3 className="font-bold text-sm">Cell Phones & Tablets</h3>

            <ul className="space-y-2 text-sm text-gray-600 pl-2">
              {["All","HP","Dell","Lenovo","MacBook","ASUS","MSI","Microsoft Surface","Acer","Gaming Laptops"].map((item,i)=>(
                <li key={i} className="hover:text-black cursor-pointer">{item}</li>
              ))}
              <li className="flex justify-between">
                <span>Monitors</span>
                <span className="font-bold">$200</span>
              </li>
            </ul>
          </div>
        </aside>

        {/* FILTER SIDEBAR */}
        <aside className="bg-white rounded-2xl p-6 shadow-sm space-y-8 mt-4 lg:mt-0">
          {/* KEEP ALL FILTERS SAME */}
          {/* Active Filters */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">CATEGORIES</h2>
            <button className="text-xs text-gray-400">Reset All</button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="border p-2 text-[10px]">Min: $45.00</div>
            <div className="border p-2 text-[10px]">10.9 inch</div>
            <div className="border p-2 text-[10px]">Color: Red</div>
            <div className="border p-2 text-[10px]">128GB</div>
          </div>

          <hr/>

          {/* Brands */}
          <div>
            <h3 className="font-bold mb-4">By Brands</h3>
            <input className="w-full mb-4 p-2 border rounded-md"/>
            <div className="grid grid-cols-2 space-y-3">
              {["envato","codecanyon","videohive","photodune","samsung","iphone","lenovo","xiaomi"].map(b=>(
                <label key={b} className="flex items-center gap-3">
                  <Checkbox/>
                  <span className="text-sm">{b}</span>
                </label>
              ))}
            </div>
          </div>

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
            <h3 className="font-bold  mb-4">By Memory</h3>
  
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
            <h3 className="font-bold mb-4">By Condition</h3>
  
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
        </aside>
      </div>

      {/* ================= RIGHT ================= */}
      <div className="flex flex-col gap-4">

        {/* ================= BEST SELLERS ROW ================= */}
        <main className="bg-white rounded-2xl p-6">
          <section className="space-y-4">
            <h1 className="text-lg font-bold text-black">
              BEST SELLER IN THIS CATEGORY
            </h1>

            <div className="flex items-center justify-between">

              <button>
                <ArrowBigLeft />
              </button>

              <ShopList>
                <ProductCard name="iPad Pro 12.9 inch M1 2023, 64GB + WiFi, GPS" old_price={759} new_price={569} discount free_shipping in_stock stock_left={152} image='/images/laptops/surface_laptop_go3.jpg' />
                <ProductCard name="uLosk Mini Case 2.0" discount old_price={2119} new_price={1729} free_shipping stock_left={8} image='/images/laptops/surface_laptop_go3.jpg' />
                <ProductCard name="Apple Watch Series 8 GPS" shipping_fee={29} in_stock price={979} stock_left={120} image='/images/laptops/surface_laptop_go3.jpg' />
                <ProductCard name="iSmart 24V Charger" shipping_fee={3.98} in_stock discount old_price={12} new_price={9} stock_left={140} image='/images/laptops/surface_laptop_go3.jpg' />
              </ShopList>

              <button>
                <ArrowBigRight />
              </button>

            </div>
            <hr className="border-gray-200" />
          </section>
        </main>

        {/* ================= PRODUCTS GRID ROW ================= */}
        <section className="flex flex-col bg-white rounded-2xl p-4 lg:p-6">

          {/* HEADER */}
          <div className="flex flex-col lg:flex-row justify-between gap-4 border-b pb-4">

            <div className="text-sm">
              <span className="font-semibold">
                {displayStart} - {displayEnd}
              </span> of {totalProducts}
            </div>

            <div className="flex flex-wrap items-center gap-4">

              <div className="hidden lg:flex items-center gap-3">
                <span className="text-sm">Show item</span>
                <ButtonGroup>
                  <Button size="sm">24</Button>
                  <Button size="sm" variant="ghost">48</Button>
                  <Button size="sm" variant="ghost">72</Button>
                </ButtonGroup>
              </div>

              <Select>
                <SelectTrigger className="w-32 h-9">
                  <SelectValue placeholder="Default"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="price-low">Price Low</SelectItem>
                </SelectContent>
              </Select>

              <div className="relative z-20">
                <details>
                  <summary className="cursor-pointer text-sm">View As</summary>
                  <ul className="absolute right-0 mt-2 bg-white border rounded shadow w-28">
                    <li className="flex gap-2 p-2"><Grid2X2 size={16}/>Grid</li>
                    <li className="flex gap-2 p-2"><List size={16}/>List</li>
                  </ul>
                </details>
              </div>

            </div>
          </div>

          {/* PRODUCTS */}
          <div className="mt-4">
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
          </div>

          {/* PAGINATION */}
          <Pagination className="mt-4">
            <PaginationContent>
              <PaginationPrevious onClick={(e)=>{
                e.preventDefault()
                if(currentPage>1) setCurrentPage(currentPage-1)
              }}/>
              {Array.from({length:totalPages},(_,i)=>(
                <PaginationItem key={i}>
                  <PaginationLink
                    isActive={currentPage===i+1}
                    onClick={(e)=>{
                      e.preventDefault()
                      setCurrentPage(i+1)
                    }}
                  >
                    {i+1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationNext onClick={(e)=>{
                e.preventDefault()
                if(currentPage<totalPages) setCurrentPage(currentPage+1)
              }}/>
            </PaginationContent>
          </Pagination>

        </section>
      </div>
    </div>
  );
};

export default LaptopShopFilter;