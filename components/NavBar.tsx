import React from 'react'
import NavLink from './ui/NavLink'
import { Search, Heart, Activity, ShoppingCart, CircleUser, BadgeInfo,ArrowRight } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon
} from "@/components/ui/input-group"


export default function NavBar() {
  return (
    <div className="w-full h-40">

      {/* TOP NAV */}
      <div className="h-2/3 w-full rounded-md bg-white px-4 py-2 flex flex-col">

        {/* TOP BAR */}
        <div className="w-full h-1/4 flex justify-between text-xs">

          <div className="flex space-x-4 items-center">
            <div className="px-2 py-1 rounded-sm bg-gray-200">
              HotLine 24/7
            </div>
            <p className="text-sm font-semibold">(055)5530670</p>
          </div>

          <div className="flex space-x-8 text-sm">
            <div className="space-x-4">
              <a href="" className="hover:text-green-700">Sell On TechMart</a>
              <a href="" className="hover:text-green-700">Order Tracking</a>
            </div>

            <div className="space-x-2">
              <select>
                <option>USD</option>
                <option>GHS</option>
                <option>CAD</option>
              </select>
              |
              <select>
                <option>ENG</option>
                <option>FR</option>
                <option>RUS</option>
              </select>
            </div>
          </div>

        </div>

        {/* MAIN NAV */}
        <div className="w-full h-3/4 flex items-center">

          {/* LOGO */}
          <div className="w-1/4 flex space-x-4 items-center">

            <div className="w-10 h-10 rounded-xl bg-[#1ABA1A] flex items-center justify-center">
              <Activity size={28} color="white" />
            </div>

            <div>
              <h1 className="font-bold text-xl">TechMart</h1>
              <p className="text-sm font-light">The Best Tech Store</p>
            </div>

          </div>

          {/* NAV LINKS */}
          <nav className="w-2/3">

            <ul className="flex space-x-6 items-center">

              <li className="font-semibold">
                <NavLink href="/">HOME</NavLink>
              </li>

              {/* PAGES DROPDOWN */}
              <li className="relative group font-semibold cursor-pointer">

                <NavLink href="/pages">PAGES</NavLink>

                <ul className="absolute z-10 top-6 left-0 hidden group-hover:block bg-white shadow-xl shadow-black rounded-md w-40">

                  <li className="p-2 hover:bg-gray-100">
                    <NavLink href="/pages/login">Login</NavLink>
                  </li>
                    <hr />
                  <li className="p-2 hover:bg-gray-100">
                    <NavLink href="/pages/register">Register</NavLink>
                  </li>
                    <hr />
                  <li className="p-2 hover:bg-gray-100">
                    <NavLink href="/pages/cart">Cart</NavLink>
                  </li>
                    <hr />
                  <li className="p-2 hover:bg-gray-100">
                    <NavLink href="/pages/profile">Profile</NavLink>
                  </li>
                    <hr />
                  <li className="p-2 hover:bg-gray-100">
                    <NavLink href="/pages/contact">Contact</NavLink>
                  </li>
                    <hr />
                  <li className="p-2 hover:bg-gray-100">
                    <NavLink href="/pages/checkout">Checkout</NavLink>
                  </li>
                    <hr />
                  <li className="p-2 hover:bg-gray-100">
                    <NavLink href="/pages/about">About</NavLink>
                  </li>

                </ul>

              </li>

              {/* PRODUCTS DROPDOWN */}
              <li className="relative group font-semibold cursor-pointer">

                <NavLink href='/products'>PRODUCTS</NavLink>

                <ul className="absolute top-6 left-0 hidden group-hover:block bg-white shadow-xl shadow-black rounded-md w-40">

                  <li className="p-2 hover:bg-gray-100">
                    <NavLink href="/products/laptops">Laptops</NavLink>
                  </li>
                    <hr />
                  <li className="p-2 hover:bg-gray-100">
                    <NavLink href="/products/phones">Phones</NavLink>
                  </li>
                    <hr />
                  <li className="p-2 hover:bg-gray-100">
                    <NavLink href="/products/accessories">Accessories</NavLink>
                  </li>

                </ul>

              </li>

              <li className="font-semibold">
                <NavLink href="/contact">CONTACT</NavLink>
              </li>

            </ul>

          </nav>

          {/* RIGHT SIDE */}
          <div className="w-1/3 flex items-center justify-between">

            <ul className="flex space-x-3">

              <li className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <CircleUser size={20} />
              </li>

              <li className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <Heart size={16} />
              </li>

              <li className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <BadgeInfo size={20} />
              </li>

            </ul>

            <div>
              <p className="font-light text-sm">Welcome</p>
              <p className="text-sm">
                <a href="">Login</a> | <a href="">Register</a>
              </p>
            </div>

            <div className="flex space-x-2 items-center">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <ShoppingCart size={16} />
              </div>

              <div>
                <p className="font-light text-sm">Cart</p>
                <p className="font-medium text-sm">$1234.90</p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="h-1/3 w-full px-4 flex items-center justify-between rounded-md bg-[#1aba1a]">

        {/* SEARCH */}
        <div className="w-1/4 h-10 bg-white rounded-xl px-2 my-4 flex items-center justify-between">

          {/* Category Select */}
          <Select>
            <SelectTrigger className="w-40 h-8 border-none">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectLabel>Devices</SelectLabel>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="phones">Mobile Phones</SelectItem>
                <SelectItem value="laptops">Laptops & Computers</SelectItem>
                <SelectItem value="gaming">Gaming</SelectItem>
                <SelectItem value="accessories">Device Accessories</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Search Input */}
          <InputGroup className="flex-1 border-none">
            <InputGroupInput
              placeholder="Search products..."
              type="text"
              id="search-input"
            />

            <InputGroupAddon align="inline-end">
              <Search size={16} />
            </InputGroupAddon>
          </InputGroup>

        </div>

        {/* FEATURES */}
        <ul className="text-white text-lg font-light w-2/4 flex justify-between">

          <li>FREE SHIPPING OVER $199</li>
          <li>30 DAYS MONEY BACK</li>
          <li>100% SECURE PAYMENT</li>

        </ul>

      </div>

    </div>
  )
}