import React from "react";
import {
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full h-180 p-12 bg-white">
      <div className="w-full h-120 grid grid-cols-6 gap-4">
        <div className="w-full h-full col-span-2 flex flex-col space-y-6">
          <h1 className="text-xl font-bold">
            Tech Mart - Best Online Technology Market
          </h1>
          <div>
            <p className="font-light">HOTLINE 24/7</p>
            <h1 className="text-3xl font-bold text-green-500">
              {"(055) 553 0670"}
            </h1>
          </div>
          <div className="font-medium">
            <p>257 Thatcher Road St, Brooklyn, Manhanttan,</p>
            <p>NY 10092</p>
            <p>contact@techmart.com</p>
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
        <div className="w-full h-full flex flex-col space-y-6">
          <h1 className="text-xl font-bold">TOP CATEGORIES</h1>
          <ul className="text-gray-400 font-normal">
            <li>Laptops</li>
            <li>Smartphones</li>
            <li>PC & Computers</li>
            <li>Tablets</li>
            <li>Gming & VR</li>
            <li>Networking</li>
            <li>Camera</li>
            <li>Sounds</li>
            <li>Office Equipment</li>
            <li>Storage, USB</li>
            <li>Accessories</li>
            <li>Monitors</li>
            <li>Clearance</li>
          </ul>
        </div>
        <div className="w-full h-full flex flex-col space-y-6">
          <h1 className="text-xl font-bold">COMPANY</h1>
          <ul className="text-gray-400 font-normal">
            <li>About TechMart</li>
            <li>Contact</li>
            <li>Career</li>
            <li>SiteMap</li>
            <li>Store Locations</li>
          </ul>
        </div>
        <div className="w-full h-full flex flex-col space-y-6">
          <h1 className="text-xl font-bold">HELP CENTRE</h1>
          <ul className="text-gray-400 font-normal">
            <li>Customer Service</li>
            <li>Policy</li>
            <li>Terms and Conditions</li>
            <li>Track Order</li>
            <li>FAQs</li>
            <li>My Account</li>
            <li>Product Support</li>
          </ul>
        </div>
        <div className="w-full h-full flex flex-col space-y-6">
          <h1 className="text-xl font-bold">PARTNERS</h1>
          <ul className="text-gray-400 font-normal">
            <li>Become Seller</li>
            <li>Affiliate</li>
            <li>Advertise</li>
            <li>Partnership</li>
            <li>Shareholder</li>
          </ul>
        </div>
      </div>
      <div className="w-full h-40 grid grid-cols-6 gap-4">
        <div className="w-full h-full col-span-2 space-x-4 px-12">
          <select
            name=""
            id=""
            className="border border-gray-300 rounded-md py-1 pl-4 font-medium"
          >
            <option value="">USD</option>
          </select>
          <select
            name=""
            id=""
            className="border border-gray-300 rounded-md py-1 pl-4 font-medium"
          >
            <option value="">Eng</option>
          </select>
        </div>
        <div className="w-full h-full col-span-4 space-y-8">
          <h1 className="text-xl font-bold">
            SUBSCRIBE & GET <span className="text-red-400">10% OFF</span> FOR
            YOUR FIRST ORDER
          </h1>
          <div className="w-full">
            <div className="w-full border-b-2 border-gray-300 pb-2 flex flex-row justify-between font-semibold px-8">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-4/5 font-medium text-black"
              />
              <a href="" className="text-green-500">
                SUBSCRIBE
              </a>
            </div>
            <p className="font-normal text-black italic">
              By subscribing, you've accepted our{" "}
              <span className="font-medium underline">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="w-full h-10 flex justify-between items-center px-4">
        <p>&copy; 2026 <span>XianDataCentre</span>.All Rights Reserved</p>
        <ul className='w-1/3 h-full flex items-center space-x-4'>
            <li><img src="/logos/paypal.png" alt="" /></li>
            <li><img src="/logos/mastercard.png" alt="" /></li>
            <li><img src="/logos/visa.png" alt="" /></li>
            <li><img src="/logos/stripe.png" alt="" /></li>
            <li><img src="/logos/klarna.png" alt="" /></li>
        </ul>
        <a href="" className="text-lg font-normal text-blue-500">Admin Panel</a>
      </div>
    </footer>
  );
}
