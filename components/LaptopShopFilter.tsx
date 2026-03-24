'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import ProductCard from './ui/ProductCard';
import { ArrowBigRight, ArrowBigLeft, Grid2X2, List } from 'lucide-react';
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

interface Product {
  id: number,
  name: string,
  image: string,
  price?: number,
  old_price?: number,
  new_price?: number,
  discount?: boolean,
  just_in?: boolean,
  free_shipping?: boolean,
  shipping_fee?: number,
  free_gift?: boolean,
  stock_left: number,
  in_stock: boolean,
}

const LaptopShopFilter = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 12;

  const Django_Url = process.env.NEXT_PUBLIC_DJANGO_URL
  const { data: products, error } = useSWR<Product[]>(`${Django_Url}/api/v1/products/?category=laptops`)

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
    <div className="w-full flex flex-col gap-6 mt-4">

      {/* CATEGORIES & FILTERS MOBILE */}
      <aside className="w-full flex flex-col gap-6 bg-white rounded-2xl p-4 shadow-sm">

        {/* Active Filters */}
        <div className="grid grid-cols-2 gap-2">
          <div className="border rounded p-2 text-[10px] text-gray-500">Min: $45.00</div>
          <div className="border rounded p-2 text-[10px] text-gray-500">10.9 inch</div>
          <div className="border rounded p-2 text-[10px] text-gray-500">Color: Red</div>
          <div className="border rounded p-2 text-[10px] text-gray-500">128GB</div>
        </div>

        {/* Brands */}
        <div>
          <h3 className="font-bold text-sm mb-4">By Brands</h3>
          <input
            type="text"
            placeholder="Search brands..."
            className="w-full mb-4 p-2 text-sm border rounded-md outline-none focus:ring-1 ring-[#1ABA1A]"
          />
          <div className="flex flex-wrap gap-2">
            {["envato","codecanyon","videohive","photodune","samsung","iphone","lenovo","xiaomi"].map(brand => (
              <label key={brand} className="flex items-center space-x-2 cursor-pointer">
                <Checkbox />
                <span className="text-xs text-gray-600 capitalize">{brand}</span>
                <span className="text-gray-400 text-[10px]">(14)</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Slider */}
        <div>
          <h3 className="font-bold text-sm mb-2">By Price</h3>
          <Slider defaultValue={[1, 400]} max={1000} step={5} className="w-full" />
          <div className="flex items-center gap-2 mt-2">
            <input type="text" defaultValue="0" className="border px-2 py-1 text-xs w-14" />
            <span>—</span>
            <input type="text" defaultValue="10000" className="border px-2 py-1 text-xs w-16" />
            <button className="bg-[#1ABA1A] text-white text-[10px] px-3 py-1 rounded font-bold">GO</button>
          </div>
        </div>

        {/* Screen Size */}
        <div>
          <h3 className="font-bold text-sm mb-2">By Screen Size</h3>
          <div className="grid grid-cols-2 gap-2">
            {['7" & Under','7.1" - 8.9"','9" - 10.9"','11" & Greater'].map(size => (
              <button key={size} className="w-full p-1 bg-gray-100 text-xs text-gray-600 rounded-sm hover:bg-gray-200">{size}</button>
            ))}
          </div>
        </div>

        {/* Color */}
        <div>
          <h3 className="font-bold text-sm mb-2">By Color</h3>
          <div className="flex flex-wrap gap-2">
            {["bg-red-700","bg-blue-800","bg-cyan-500","bg-black","bg-white border","bg-green-500","bg-gray-500","bg-purple-700"].map((color,i) => (
              <div key={i} className={`w-6 h-6 rounded-md cursor-pointer ${color} shadow-sm hover:scale-110 transition`}></div>
            ))}
          </div>
        </div>

        {/* Memory */}
        <div>
          <h3 className="font-bold text-sm mb-2">By Memory</h3>
          <div className="grid grid-cols-2 gap-2">
            {["512MB","1GB","3GB","4GB","6GB","8GB","12GB","16GB"].map(mem => (
              <label key={mem} className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#1ABA1A]" />
                <span className="text-xs text-gray-600">{mem} <span className="text-gray-400">(4)</span></span>
              </label>
            ))}
          </div>
        </div>

        {/* Condition */}
        <div>
          <h3 className="font-bold text-sm mb-2">By Condition</h3>
          <div className="grid grid-cols-2 gap-2">
            {["New","UK Used","US Used","Almost New","Open Box"].map(cond => (
              <label key={cond} className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#1ABA1A]" />
                <span className="text-xs text-gray-600">{cond} <span className="text-gray-400">(4)</span></span>
              </label>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div>
          <h3 className="font-bold text-sm mb-2">By Rating</h3>
          <div className="grid grid-cols-2 gap-2">
            {["1 Star","2 Star","3 Star","4 Star","5 Star"].map(star => (
              <label key={star} className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#1ABA1A]" />
                <span className="text-xs text-gray-600">{star} <span className="text-gray-400">(4)</span></span>
              </label>
            ))}
          </div>
        </div>

        {/* Hero Banner */}
        <div className="w-full rounded-md bg-[url('/images/hero-camera.png')] bg-cover h-36 flex items-end p-4">
          <div className="text-white">
            <h2 className="text-lg font-semibold">OKODO</h2>
            <p className="text-sm">HERO 11+ BLACK</p>
            <p className="text-xl font-bold text-green-400">$169</p>
          </div>
        </div>

      </aside>

      {/* PRODUCT LIST */}
      <section className="w-full flex flex-col gap-4 bg-white rounded-2xl p-4">

        {/* Top Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-200 pb-4">
          <div className="text-sm text-gray-600">
            <span className="font-semibold text-black">{displayStart} - {displayEnd}</span> of {totalProducts} results
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Show:</span>
              <ButtonGroup>
                <Button variant="secondary" size="sm">24</Button>
                <Button variant="ghost" size="sm">48</Button>
                <Button variant="ghost" size="sm">72</Button>
              </ButtonGroup>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort:</span>
              <Select>
                <SelectTrigger className="w-28 h-8">
                  <SelectValue placeholder="Default" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="price-low">Price Low</SelectItem>
                  <SelectItem value="price-high">Price High</SelectItem>
                  <SelectItem value="popular">Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="relative group">
              <span className="text-sm text-gray-600 cursor-pointer">View As</span>
              <ul className="absolute top-6 right-0 mt-2 hidden group-hover:block bg-white border border-gray-200 rounded-md shadow-md w-28">
                <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                  <Grid2X2 size={16}/> Grid
                </li>
                <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                  <List size={16}/> List
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Products */}
        <ShopList>
          {paginatedProducts.map(product => (
            <ProductCard
              key={product.id}
              name={product.name}
              image={product.image || '/images/default.png'}
              price={product.price}
              old_price={product.discount ? product.new_price : undefined}
              new_price={product.discount ? product.new_price : undefined}
              discount={product.discount || false}
              just_in={product.just_in || false}
              free_shipping={product.free_shipping || false}
              shipping_fee={product.shipping_fee}
              free_gift={product.free_gift || false}
              stock_left={product.stock_left}
              in_stock={product.in_stock}
            />
          ))}
        </ShopList>

        {/* Pagination */}
        <Pagination className="w-full mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                }}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
              <PaginationItem key={pageNum}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === pageNum}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(pageNum);
                  }}
                >
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            ))}

            {totalPages > 5 && currentPage < totalPages - 2 && (
              <PaginationItem><PaginationEllipsis /></PaginationItem>
            )}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

      </section>
    </div>
  )
};

export default LaptopShopFilter;