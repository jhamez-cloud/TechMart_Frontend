import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function PromotionBanner() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      
      {/* Membership Banner */}
      <div
        className='w-full h-60 rounded-md bg-[url("/images/membership_card.png")] bg-cover px-6 py-4 flex justify-center items-center'
      >
        <div className="w-2/3 md:w-full h-full md:justify-center flex flex-col items-center justify-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#FFE400]">10% Back</h1>
          <p className="text-white text-shadow-black text-center font-normal text-sm md:text-base">
            Earn 10% Cash Back on TechMart.{" "}
            <a href="" className="underline">
              Learn How
            </a>
          </p>
        </div>
      </div>

      {/* App Download Banner */}
      <div
        className='w-full h-60 rounded-md bg-[url("/images/mobile_version.png")] bg-cover p-6 flex flex-col justify-between'
      >
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Download our app</h1>
          <p className="text-gray-300 text-sm md:text-base">
            Enter your email and we'll send you a link to download the app.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:space-x-2 mt-4 md:mt-0">
          <div className="w-full md:w-2/3">
            <Input
            type="email"
            placeholder="example@email.com..."
            className="text-gray-200 w-full md:flex-1"
          />
          </div>
          <Button variant="link" className="mt-2 md:mt-0 flex items-center text-green-500 text-lg text-shadow-white font-bold">
            Send Link <ArrowUpRight className="ml-2 h-4 w-4 " />
          </Button>
        </div>
      </div>
    </div>
  );
}