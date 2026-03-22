"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import loading from "@/app/products/phones/loading";
import ProductCard from "./ui/ProductCard";
import { ArrowBigRight, ArrowBigLeft, Grid2X2, List, Star } from "lucide-react";
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
import useSWR from "swr";
import { Spinner } from "./ui/spinner";

interface Product {
  id: number;
  name: string;
  image: string;
  price?: number;
  old_price?: number;
  new_price?: number;
  discount?: boolean;
  just_in?: boolean;
  free_shipping?: boolean;
  shipping_fee?: number;
  free_gift?: boolean;
  stock_left: number;
  in_stock: boolean;
}

const ShopFilter = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 12;

  const Django_Url = process.env.NEXT_PUBLIC_DJANGO_URL;
  const { data: products, error: error } = useSWR<Product[]>(
    `${Django_Url}/api/v1/products/?category=mobilephones`,
  );

  if (error)
    return (
      <div className="mt-4 w-full h-auto flex justify-center items-center">
        <Spinner className="size-8" />
      </div>
    );
  if (!products) return <div>Loading...</div>;

  // Pagination logic
  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const paginatedProducts = products.slice(startIndex, endIndex);
  const displayStart = startIndex + 1;
  const displayEnd = Math.min(endIndex, totalProducts);

  return (
    <div className="grid grid-cols-[300px_1fr] grid-rows-[auto_1fr] gap-4 min-h-screen mt-4">
      {/* ROW 1 LEFT — CATEGORY SIDEBAR */}
      <aside className="row-start-1 col-start-1 bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-bold mb-4">CATEGORIES</h2>

        <button className="w-full text-left bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium shadow-sm mb-6">
          All Categories
        </button>

        <div className="space-y-3">
          <h3 className="font-bold text-sm">Cell Phones & Tablets</h3>

          <ul className="space-y-2 text-sm text-gray-600 pl-2">
            <li className="hover:text-black cursor-pointer">All</li>
            <li className="hover:text-black cursor-pointer">Iphone</li>
            <li className="font-semibold text-black cursor-pointer">Samsung</li>
            <li className="hover:text-black cursor-pointer">Xiaomi</li>
            <li className="hover:text-black cursor-pointer">Oppo</li>
            <li className="hover:text-black cursor-pointer">iPad</li>
            <li className="hover:text-black cursor-pointer">Window Tablets</li>
            <li className="hover:text-black cursor-pointer">eReader</li>
            <li className="hover:text-black cursor-pointer">
              Mobilephone Accessories
            </li>
            <li className="hover:text-black cursor-pointer">
              Gaming Smartphone
            </li>

            <li className="flex justify-between hover:text-black cursor-pointer">
              <span>Cell Phones</span>
              <span className="font-bold">$200</span>
            </li>
          </ul>
        </div>
      </aside>

      {/* ROW 1 RIGHT — BEST SELLERS */}
      <main className="row-start-1 col-start-2 bg-white rounded-2xl p-6">
        <section className="space-y-4">
          <h1 className="text-lg font-bold text-black">
            BEST SELLER IN THIS CATEGORY
          </h1>

          <div className="flex items-center justify-between">
            <button>
              <ArrowBigLeft />
            </button>

            <ShopList>
              <ProductCard
                name="iPad Pro 12.9 inch M1 2023, 64GB + WiFi, GPS"
                old_price={759}
                new_price={569}
                discount
                free_shipping
                in_stock
                stock_left={152}
                image="/images/ipad_pro.png"
              />

              <ProductCard
                name="uLosk Mini Case 2.0"
                discount
                old_price={2119}
                new_price={1729}
                free_shipping
                stock_left={8}
                image="/images/ulosk_minicase.png"
              />

              <ProductCard
                name="Apple Watch Series 8 GPS"
                shipping_fee={29}
                in_stock
                price={979}
                stock_left={120}
                image="/images/apple_watch.png"
              />

              <ProductCard
                name="iSmart 24V Charger"
                shipping_fee={3.98}
                in_stock
                discount
                old_price={12}
                new_price={9}
                stock_left={140}
                image="/images/ismart_charger.png"
              />
            </ShopList>

            <button>
              <ArrowBigRight />
            </button>
          </div>

          <hr className="border-gray-200" />
        </section>
      </main>

      {/* ROW 2 LEFT — FILTER SIDEBAR */}
      <aside className="row-start-2 col-start-1 bg-white rounded-2xl p-6 shadow-sm space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">CATEGORIES</h2>
          <button className="text-xs text-gray-400 hover:text-black">
            Reset All
          </button>
        </div>

        {/* Active filters */}
        <div className="grid grid-cols-2 gap-2">
          <div className="border rounded p-2 text-[10px] text-gray-500">
            Min: $45.00
          </div>

          <div className="border rounded p-2 text-[10px] text-gray-500">
            10.9 inch
          </div>

          <div className="border rounded p-2 text-[10px] text-gray-500">
            Color: Red
          </div>

          <div className="border rounded p-2 text-[10px] text-gray-500">
            128GB
          </div>
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
            {[
              "envato",
              "codecanyon",
              "videohive",
              "photodune",
              "samsung",
              "iphone",
              "lenovo",
              "xiaomi",
            ].map((brand) => (
              <label
                key={brand}
                className="flex items-center space-x-3 cursor-pointer"
              >
                <Checkbox />
                <span className="text-sm text-gray-600 capitalize">
                  {brand}
                </span>
                <span className="text-xs text-gray-400">(14)</span>
              </label>
            ))}
          </div>
        </div>

        <hr />

        {/* Price slider */}
        <div className="space-y-4">
          <h3 className="font-bold text-sm">By Price</h3>

          <Slider
            defaultValue={[1, 400]}
            max={1000}
            step={5}
            className="w-full"
          />

          <div className="flex items-center gap-2">
            <input
              type="text"
              defaultValue="0"
              className="border px-2 py-1 text-xs w-14"
            />

            <span>—</span>

            <input
              type="text"
              defaultValue="10000"
              className="border px-2 py-1 text-xs w-16"
            />

            <button className="bg-[#1ABA1A] text-white text-[10px] px-3 py-2 rounded font-bold">
              GO
            </button>
          </div>
        </div>

        {/* By Screen Size */}
        <div>
          <h3 className="font-bold text-sm mb-4">By Screen Size</h3>

          <div className="grid grid-cols-3 gap-1">
            {['7" & Under', '7.1" - 8.9"', '9" - 10.9"', '11" & Greater'].map(
              (size) => (
                <button
                  key={size}
                  className="w-full p-1 bg-gray-100 text-sm text-gray-600 font-medium rounded-sm hover:bg-gray-200"
                >
                  {size}
                </button>
              ),
            )}
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* By Color */}
        <div>
          <h3 className="font-bold text-sm mb-4">By Color</h3>

          <div className="flex flex-wrap gap-2">
            {[
              "bg-red-700",
              "bg-blue-800",
              "bg-cyan-500",
              "bg-black",
              "bg-white border",
              "bg-green-500",
              "bg-gray-500",
              "bg-purple-700",
            ].map((color, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-md cursor-pointer ${color} shadow-sm hover:scale-110 transition`}
              />
            ))}
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* By Memory */}
        <div>
          <h3 className="font-bold text-sm mb-4">By Memory</h3>

          <div className="grid grid-cols-2 gap-y-3">
            {["512MB", "1GB", "3GB", "4GB", "6GB", "8GB", "12GB", "16GB"].map(
              (size) => (
                <label
                  key={size}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 accent-[#1ABA1A]"
                  />

                  <span className="text-xs text-gray-600">
                    {size} <span className="text-gray-400">(4)</span>
                  </span>
                </label>
              ),
            )}
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* By Condition */}
        <div>
          <h3 className="font-bold text-sm mb-4">By Condition</h3>

          <div className="grid grid-cols-2 gap-y-3">
            {["New", "UK Used", "US Used", "Almost New", "Open Box"].map(
              (size) => (
                <label
                  key={size}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 accent-[#1ABA1A]"
                  />

                  <span className="text-xs text-gray-600">
                    {size} <span className="text-gray-400">(4)</span>
                  </span>
                </label>
              ),
            )}
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* By Rating */}
        <div>
          <h3 className="font-bold  text-sm mb-4">By Rating</h3>

          <div className="grid grid-cols-2 gap-y-3">
            {["1 Star", "2 Star", "3 Star", "4 Star", "5 Star"].map(
              (star, i) => (
                <label
                  key={i}
                  className="flex items-center space-x-4 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 accent-[#1ABA1A]"
                  />

                  <span className="text-xs text-gray-600">
                    {star} <span className="text-gray-400">(4)</span>
                  </span>
                </label>
              ),
            )}
          </div>
        </div>

        <hr className="border-gray-200" />

        <div className='w-full rounded-md bg-[url("/images/hero-camera.png")] bg-cover'>
          <div className="w-1/2 h-full flex flex-col py-4 pl-8 justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-white">OKODO</h1>
              <h1 className="text-lg font-normal text-white">HERO 11+</h1>
              <h1 className="text-lg font-normal text-white">BLACK</h1>
            </div>
            <div>
              <p className="text-gray-500 font-medium text-lg">From</p>
              <p className="text-3xl font-semibold text-green-400">$169</p>
            </div>
          </div>
        </div>
      </aside>

      {/* ROW 2 RIGHT — MOBILE PHONES */}
      <section className="row-start-2 col-start-2 flex flex-col justify-between bg-white rounded-2xl p-6">
        <div className="w-full h-30 flex flex-col mb-6">
          <h1 className="text-lg font-bold">MOBILE PHONES</h1>

          <div className="flex items-center gap-6">
            <div className="flex items-center justify-between w-full py-4 border-b border-gray-200">
              {/* LEFT */}
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-black">
                  {displayStart} - {displayEnd}
                </span>{" "}
                of {totalProducts} results
              </div>

              {/* RIGHT CONTROLS */}
              <div className="flex items-center gap-8">
                {/* SHOW ITEM BUTTON GROUP */}
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500">Show item</span>

                  <ButtonGroup>
                    <Button variant="secondary" size="sm">
                      24
                    </Button>
                    <Button variant="ghost" size="sm">
                      48
                    </Button>
                    <Button variant="ghost" size="sm">
                      72
                    </Button>
                  </ButtonGroup>
                </div>

                {/* SELECT */}
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500">Show item</span>

                  <Select>
                    <SelectTrigger className="w-35 h-9">
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

                {/* VIEW AS */}
                <div className="relative group">
                  <span className="text-sm text-gray-600 cursor-pointer">
                    View As
                  </span>

                  <ul className="absolute top-4 z-10 right-0 mt-2 hidden group-hover:block bg-white border border-gray-200 rounded-md shadow-md   w-28">
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
        </div>

        <div className="w-full flex-1">
          <ShopList>
            {/* phone cards */}
            {paginatedProducts.map((product) => (
              <ProductCard
                key={product.id} // ideally use a unique id or slug from your model
                name={product.name}
                image={product.image || "/images/default.png"}
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
        </div>

        <Pagination className="w-full h-10">
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

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNum) => (
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
              ),
            )}

            {totalPages > 5 && currentPage < totalPages - 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
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
  );
};

export default ShopFilter;
