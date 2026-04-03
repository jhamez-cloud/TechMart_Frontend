"use client";
import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "@/context/context";
import NavLink from "./ui/NavLink";
import {
  Search,
  Heart,
  Activity,
  ShoppingCart,
  CircleUser,
  BadgeInfo,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";

import { useAuth } from "@/context/AuthContext";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const context = useContext(CartContext);
  const { currentUser, loading } = useAuth();

  if (!context) throw new Error("Cart Context Not Found");
  const { orders } = context;

  const cartSize = orders.length;

  return (
    <div className="w-full h-auto">
      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-xl transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-between items-center p-4 border-b">
          <h1 className="font-bold text-lg">Menu</h1>
          <X onClick={() => setOpen(false)} className="cursor-pointer" />
        </div>

        {/* NAV ITEMS */}
        <ul className="flex flex-col p-4 space-y-4 font-semibold">
          <li>
            <NavLink href="/">HOME</NavLink>
          </li>

          {/* PAGES */}
          <li>
            <div
              onClick={() => setPagesOpen(!pagesOpen)}
              className="flex justify-between items-center cursor-pointer"
            >
              PAGES <ChevronDown size={16} />
            </div>

            {pagesOpen && (
              <ul className="pl-4 mt-2 space-y-2 font-normal">
                <li>
                  <NavLink href="/pages/login">Login</NavLink>
                </li>
                <li>
                  <NavLink href="/pages/register">Register</NavLink>
                </li>
                <li>
                  <NavLink href="/pages/cart">Cart</NavLink>
                </li>
                <li>
                  <NavLink href="/pages/profile">Profile</NavLink>
                </li>
                <li>
                  <NavLink href="/pages/checkout">Checkout</NavLink>
                </li>
                <li>
                  <NavLink href="/pages/about">About</NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* PRODUCTS */}
          <li>
            <div
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex justify-between items-center cursor-pointer"
            >
              PRODUCTS <ChevronDown size={16} />
            </div>

            {productsOpen && (
              <ul className="pl-4 mt-2 space-y-2 font-normal">
                <li>
                  <NavLink href="/products/laptops">Laptops</NavLink>
                </li>
                <li>
                  <NavLink href="/products/phones">Phones</NavLink>
                </li>
                <li>
                  <NavLink href="/products/accessories">Accessories</NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink href="/contact">CONTACT</NavLink>
          </li>
        </ul>

        {/* 🔥 NEW: USER / CART SECTION (MOBILE) */}
        <div className="border-t p-4 space-y-4">
          {/* ICONS */}
          <ul className="flex items-center space-x-3">
            <li className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <a href="/pages/profile" title="Account Page">
                <CircleUser size={20} />
              </a>
            </li>
            <li className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <Heart size={16} />
            </li>
            <li className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <BadgeInfo size={20} />
            </li>
            <li>
              <div className="flex space-x-2 items-center">
                <div className="relative">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition cursor-pointer">
                    <NavLink href="/pages/cart">
                      <ShoppingCart size={18} className="text-gray-700" />
                    </NavLink>
                  </div>

                  {cartSize > 0 && (
                    <span
                      className="
                        absolute -top-1 -right-1
                        min-w-4.5 h-4.5 px-1
                        flex items-center justify-center
                        text-[11px] font-semibold text-white
                        bg-green-500 rounded-full
                        shadow-sm
                      "
                    >
                      {cartSize}
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-light text-sm">Cart</p>
                  <p className="font-medium text-sm">$1234.90</p>
                </div>
              </div>
            </li>
          </ul>

          {/* AUTH */}
          <div>
            <p className="font-light text-sm">Welcome</p>
            <p className="text-sm">
              {currentUser.email || 
              <>
                <a href="">Login</a> | <a href="">Register</a>
              </>}
            </p>
          </div>

          {/* CART */}
        </div>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* TOP NAV */}
      <div className="w-full h-40">
        <div className="h-2/3 w-full rounded-md bg-white px-4 py-2 flex flex-col">
          {/* TOP BAR */}
          <div className="w-full h-1/4 hidden md:flex justify-between text-xs">
            <div className="flex space-x-4 items-center">
              <div className="px-2 py-1 rounded-sm bg-gray-200">
                HotLine 24/7
              </div>
              <p className="text-sm font-semibold">(055)5530670</p>
            </div>

            <div className="flex space-x-8 text-sm">
              <div className="space-x-4">
                <a href="" className="hover:text-green-700">
                  Sell On TechMart
                </a>
                <a href="" className="hover:text-green-700">
                  Order Tracking
                </a>
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
          <div className="w-full h-3/4 flex items-center justify-between">
            {/* LEFT (LOGO + MENU BTN) */}
            <div className="flex items-center space-x-4">
              {/* MOBILE MENU BUTTON */}
              <Menu
                className="md:hidden cursor-pointer"
                onClick={() => setOpen(true)}
              />

              {/* LOGO */}
              <div className="flex space-x-4 items-center">
                <div className="w-10 h-10 rounded-xl bg-[#1ABA1A] flex items-center justify-center">
                  <Activity size={28} color="white" />
                </div>

                <div>
                  <h1 className="font-bold text-xl">TechMart</h1>
                  <p className="text-sm font-light hidden sm:block">
                    The Best Tech Store
                  </p>
                </div>
              </div>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden md:block w-2/3">
              <ul className="w-full ml-16 flex space-x-6 items-center">
                <li className="font-semibold">
                  <NavLink href="/">HOME</NavLink>
                </li>

                {/* PAGES */}
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
                      <NavLink href="/pages/checkout">Checkout</NavLink>
                    </li>
                    <hr />
                    <li className="p-2 hover:bg-gray-100">
                      <NavLink href="/pages/about">About</NavLink>
                    </li>
                  </ul>
                </li>

                {/* PRODUCTS */}
                <li className="relative group font-semibold cursor-pointer">
                  <NavLink href="/products">PRODUCTS</NavLink>

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
                      <NavLink href="/products/accessories">
                        Accessories
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="font-semibold">
                  <NavLink href="/contact">CONTACT</NavLink>
                </li>
              </ul>
            </nav>

            {/* RIGHT SIDE (HIDDEN ON SMALL) */}
            <div className="hidden md:flex w-1/3 items-center justify-between">
              <ul className="flex space-x-3">
                <li className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <a href="/pages/profile" title="Account Page">
                    <CircleUser size={20} />
                  </a>
                </li>
                <li className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <a href="/pages/checkout" title="WishList">
                    <Heart size={16} />
                  </a>
                </li>
                <li className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <a href="/pages/about" title="About Page">
                    <BadgeInfo size={20} />
                  </a>
                </li>
              </ul>

              <div>
                <p className="font-light text-sm">Welcome</p>
                <p className="text-sm">
                  <a href="">Login</a> | <a href="">Register</a>
                </p>
              </div>

              <div className="flex space-x-2 items-center">
                <div className="relative">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition cursor-pointer">
                    <NavLink href="/pages/cart">
                      <ShoppingCart size={18} className="text-gray-700" />
                    </NavLink>
                  </div>

                  {cartSize > 0 && (
                    <span
                      className="
                        absolute -top-1 -right-1
                        min-w-4.5 h-4.5 px-1
                        flex items-center justify-center
                        text-[11px] font-semibold text-white
                        bg-green-500 rounded-full
                        shadow-sm
                      "
                    >
                      {cartSize}
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-light text-sm">Cart</p>
                  <p className="font-medium text-sm">$1234.90</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR (HIDE FEATURES ON MOBILE) */}
        <div className="h-1/3 w-full px-4 flex items-center justify-between rounded-md bg-[#1aba1a]">
          <div className="w-full md:w-1/4 h-10 bg-white rounded-xl px-2 my-4 flex items-center justify-between">
            <Select>
              <SelectTrigger className="w-32 h-8 border-none">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Devices</SelectLabel>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="phones">Mobile Phones</SelectItem>
                  <SelectItem value="laptops">Laptops & Computers</SelectItem>
                  <SelectItem value="gaming">Gaming</SelectItem>
                  <SelectItem value="accessories">
                    Device Accessories
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <InputGroup className="flex-1 border-none">
              <InputGroupInput placeholder="Search..." type="text" />
              <InputGroupAddon align="inline-end">
                <Search size={16} />
              </InputGroupAddon>
            </InputGroup>
          </div>

          <ul className="hidden md:flex text-white text-lg font-light w-2/4 justify-between">
            <li>FREE SHIPPING OVER $199</li>
            <li>30 DAYS MONEY BACK</li>
            <li>100% SECURE PAYMENT</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
