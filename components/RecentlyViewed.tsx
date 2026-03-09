import React from "react";
import RecentlyViewedCard from "./ui/RecentlyViewedCard";

export default function RecentlyViewed() {
  return (
    <div className="w-full h-80 flex flex-col space-y-6 rounded-md p-4 px-8 bg-white mt-4">
      <div className="w-full h-10 flex items-center justify-between space-x-6 mb-16">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">YOU RECENTLY VIEWED</h1>
          <a href="" className="text-lg font-mono text-gray-400">
            View All
          </a>
        </div>
        <div className="w-20 h-5 bg-gray-300 rounded-2xl p-2 text-xs flex items-center justify-between font-mono text-white">
          <p className="hover:text-green-300">Prev</p>
          <p className="hover:text-green-300">Next</p>
        </div>
      </div>
      <div className="w-full h-40 grid grid-cols-4 gap-8">
        <RecentlyViewedCard
          name="Apple Watch Series 8 GPS + Cellulose Stainless Steel Case with Milanese loop"
          shipping_fee={29}
          in_stock
          price={979}
          stock_left={120}
          image="/images/apple_watch.png"
        />
        <RecentlyViewedCard
          name="Pineapple MacBook Pro 2022 M1 / 512GB"
          shipping_fee={3.98}
          in_stock
          price={579}
          just_in
          stock_left={140}
          image="/images/macbook_pineapple.png"
        />
        <RecentlyViewedCard
          name="GROK Smartphone 128GB, OLED Retina"
          shipping_fee={3.98}
          in_stock
          discount
          old_price={850}
          new_price={579}
          stock_left={140}
          image="/images/grok_smartphone.png"
        />
        <RecentlyViewedCard
          name="iPad Pro Tablet 2023 LTE + WiFi,GPS Cellulose 12.9 inch,512GB"
          shipping_fee={2.98}
          in_stock
          price={979}
          just_in
          stock_left={140}
          image="/images/ipad_pro_tablet.png"
        />
      </div>
    </div>
  );
}
