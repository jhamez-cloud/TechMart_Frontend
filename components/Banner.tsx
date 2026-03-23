import React from "react";
import { Star } from "lucide-react";

export default function Banner() {
  return (
    <div className="w-full min-h-16 md:min-h-20 p-3 md:p-4 bg-green-400 text-white flex justify-center items-center mt-6 md:mt-8 rounded-md">
      <div className="w-full max-w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 md:gap-4">
        <p className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start text-center md:text-left text-sm md:text-base gap-1 md:gap-2">
          <Star className="w-4 h-5 md:w-5 shrink-0" />
          <span className="whitespace-nowrap">Member get</span>
          <span className="font-semibold text-yellow-400 whitespace-nowrap">
            FREE SHIPPING
          </span>
          <span className="hidden md:inline">
            with no minimum order restriction.
          </span>
          <span className="md:hidden">with no minimum order.</span>
        </p>
        <a
          href=""
          className="underline font-serif hover:text-yellow-400 text-sm md:text-base whitespace-nowrap flex-shrink-0"
        >
          Apply For 30 Day Free Trial
        </a>
      </div>
    </div>
  );
}
