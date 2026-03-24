"use client"
import React, { useState } from 'react'

export default function ProductDescripton() {

  const [activeTab, setActiveTab] = useState("description")

  return (
    <div className='w-full bg-white rounded-md mt-4 px-4 lg:px-10 py-6 space-y-6'>

      {/* TABS HEADER */}
      <div className='w-full border-b flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>

        {/* LEFT TABS */}
        <div className='flex flex-wrap gap-6 text-sm lg:text-base font-medium'>

          <button
            onClick={() => setActiveTab("description")}
            className={`pb-2 ${
              activeTab === "description"
                ? "border-b-2 border-black text-black font-bold"
                : "text-gray-500"
            }`}
          >
            Description
          </button>

          <button
            onClick={() => setActiveTab("reviews")}
            className={`pb-2 ${
              activeTab === "reviews"
                ? "border-b-2 border-black text-black font-bold"
                : "text-gray-500"
            }`}
          >
            Reviews (152)
          </button>

          <button
            onClick={() => setActiveTab("info")}
            className={`pb-2 ${
              activeTab === "info"
                ? "border-b-2 border-black text-black font-bold"
                : "text-gray-500"
            }`}
          >
            Additional Info
          </button>

        </div>

        {/* RIGHT */}
        <button className='text-sm text-gray-400 hover:text-black'>
          View All
        </button>

      </div>


      {/* ================= DESCRIPTION ================= */}
      {activeTab === "description" && (
        <div className='space-y-6'>

          <p className='text-sm lg:text-base text-gray-600 leading-relaxed'>
            Built for ultra-fast performance, the thin and lightweight Samsung Galaxy Tab S2 goes anywhere you go.
            Photos, movies and documents pop on a crisp, clear 
            <span className='font-semibold text-black'> Super AMOLED display</span>.
          </p>

          <img
            src="/images/samsung_product/product_description_banner1.png"
            alt=""
            className='w-full h-48 sm:h-64 lg:h-90 object-cover rounded-md'
          />

          <p className='text-center text-xs text-gray-400 italic'>
            * Ideal for office tasks with 4:3 display ratio
          </p>

          {/* FROM MANUFACTURER */}
          <div className='space-y-4'>
            <h1 className='text-lg lg:text-xl font-bold'>From the manufacturer</h1>

            <div className='space-y-2 text-sm text-gray-600'>
              <p>
                Dive into blockbuster movies. Switch apps quickly with improved octa-core processor.
              </p>
              <p>
                Expand memory up to 128GB and enjoy seamless Samsung device integration.
              </p>
            </div>

            {/* IMAGES */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
              <img src="/images/samsung_product/from_manifacturer.png" alt="" className='w-full rounded-md'/>
              <img src="/images/samsung_product/from_manifacturer2.png" alt="" className='w-full rounded-md'/>
            </div>

          </div>

          {/* COLLAPSIBLE TEXT */}
          <div className='space-y-2'>
            <h1 className='text-lg font-bold'>Samsung Galaxy Tab S2</h1>

            <p className='text-sm text-gray-500 line-clamp-4'>
              The Samsung Galaxy Tab S2 offers dual cameras and premium apps optimized for your tablet experience.
            </p>

            <button className='text-blue-500 text-sm font-medium'>
              Show more
            </button>
          </div>

        </div>
      )}


      {/* ================= REVIEWS ================= */}
      {activeTab === "reviews" && (
        <div className='space-y-4 text-sm text-gray-600'>
          <h1 className='font-bold text-lg'>Customer Reviews</h1>
          <p>No reviews yet. Be the first to review this product.</p>
        </div>
      )}


      {/* ================= ADDITIONAL INFO ================= */}
      {activeTab === "info" && (
        <div className='space-y-4 text-sm text-gray-600'>

          <h1 className='font-bold text-lg'>Product Details</h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>

            <div className='flex justify-between border-b py-2'>
              <span className='font-medium'>Brand</span>
              <span>Samsung</span>
            </div>

            <div className='flex justify-between border-b py-2'>
              <span className='font-medium'>Display</span>
              <span>Super AMOLED</span>
            </div>

            <div className='flex justify-between border-b py-2'>
              <span className='font-medium'>Storage</span>
              <span>128GB</span>
            </div>

            <div className='flex justify-between border-b py-2'>
              <span className='font-medium'>Camera</span>
              <span>8MP Rear</span>
            </div>

          </div>

        </div>
      )}

    </div>
  )
}