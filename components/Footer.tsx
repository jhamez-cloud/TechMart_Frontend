import React from "react";
import {
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  ArrowUpRight,
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
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full bg-white mt-8 px-4 md:px-12 py-8 space-y-8">
      
      {/* Top Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        
        {/* Column 1: Contact */}
        <div className="flex flex-col space-y-6 col-span-2">
          <h1 className="text-xl md:text-2xl font-bold">
            Tech Mart - Best Online Technology Market
          </h1>
          <div>
            <p className="font-light">HOTLINE 24/7</p>
            <h1 className="text-2xl md:text-3xl font-bold text-green-500">
              {"(055) 553 0670"}
            </h1>
          </div>
          <div className="font-medium text-sm md:text-base text-gray-700">
            <p>257 Thatcher Road St, Brooklyn, Manhanttan,</p>
            <p>NY 10092</p>
            <p>contact@techmart.com</p>
          </div>
          <ul className="flex space-x-2">
            {[Twitter, Facebook, Instagram, Youtube, MessageCircle].map((Icon, idx) => (
              <li
                key={idx}
                className="w-10 h-10 rounded-full flex justify-center items-center bg-gray-200"
              >
                <Icon />
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Top Categories */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-xl font-bold">TOP CATEGORIES</h1>
          <ul className="text-gray-400 font-normal space-y-1 text-sm md:text-base">
            {[
              "Laptops",
              "Smartphones",
              "PC & Computers",
              "Tablets",
              "Gming & VR",
              "Networking",
              "Camera",
              "Sounds",
              "Office Equipment",
              "Storage, USB",
              "Accessories",
              "Monitors",
              "Clearance",
            ].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Column 3: Company */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-xl font-bold">COMPANY</h1>
          <ul className="text-gray-400 font-normal space-y-1 text-sm md:text-base">
            {["About TechMart", "Contact", "Career", "SiteMap", "Store Locations"].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Column 4: Help Centre */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-xl font-bold">HELP CENTRE</h1>
          <ul className="text-gray-400 font-normal space-y-1 text-sm md:text-base">
            {[
              "Customer Service",
              "Policy",
              "Terms and Conditions",
              "Track Order",
              "FAQs",
              "My Account",
              "Product Support",
            ].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Column 5: Partners */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-xl font-bold">PARTNERS</h1>
          <ul className="text-gray-400 font-normal space-y-1 text-sm md:text-base">
            {["Become Seller", "Affiliate", "Advertise", "Partnership", "Shareholder"].map(
              (item, idx) => (
                <li key={idx}>{item}</li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 items-start">
        
        {/* Currency & Language Selects */}
        <div className="flex flex-col md:flex-row gap-4 col-span-2">
          <Select>
            <SelectTrigger className="w-full md:max-w-50">
              <SelectValue placeholder="Select Currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Accepted Currencies</SelectLabel>
                <SelectItem value="USD">USD</SelectItem>
                <SelectItem value="GHS">GHS</SelectItem>
                <SelectItem value="EUR">EUR</SelectItem>
                <SelectItem value="GBP">GBP</SelectItem>
                <SelectItem value="ROB">ROB</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full md:max-w-50">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Available Languages</SelectLabel>
                <SelectItem value="Eng">Eng</SelectItem>
                <SelectItem value="Fr">Fr</SelectItem>
                <SelectItem value="Man">Man</SelectItem>
                <SelectItem value="Jpn">Jpn</SelectItem>
                <SelectItem value="Rus">Rus</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Subscription */}
        <div className="col-span-4 flex flex-col space-y-4">
          <h1 className="text-xl font-bold">
            SUBSCRIBE & GET <span className="text-red-400">10% OFF</span> FOR YOUR FIRST ORDER
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <input
              type="email"
              placeholder="Enter your email address"
              className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-3/4 focus:outline-none"
            />
            <Button variant="link" className="flex items-center gap-2 text-green-500">
              SUBSCRIBE <ArrowUpRight size={18} />
            </Button>
          </div>

          <p className="text-black text-sm italic">
            By subscribing, you've accepted our{" "}
            <span className="font-medium underline">Privacy Policy</span>
          </p>
        </div>
      </div>

      <hr />

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm md:text-base">&copy; 2026 <span className="font-semibold">XianDataCentre</span>. All Rights Reserved</p>
        <ul className="flex space-x-4">
          {["/logos/paypal.png","/logos/mastercard.png","/logos/visa.png","/logos/stripe.png","/logos/klarna.png"].map((src, idx) => (
            <li key={idx}><img src={src} alt="" className="h-6" /></li>
          ))}
        </ul>
        <a href="" className="text-blue-500 font-normal flex items-center text-sm md:text-lg">
          Admin Panel
        </a>
      </div>
    </footer>
  );
}