"use client"
import React, { useState } from 'react'

export default function LaptopProductDescripton() {
  const [activeTab, setActiveTab] = useState<'desc' | 'reviews' | 'info'>('desc')

  return (
    <div className='w-full bg-white rounded-md space-y-6 py-4 px-4 sm:px-6 lg:px-10 mt-4'>

      {/* HEADER */}
      <div className='w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6'>

        {/* TABS */}
        <div className='flex flex-wrap gap-4 sm:gap-8'>
          <button
            onClick={() => setActiveTab('desc')}
            className={`text-base sm:text-xl font-semibold ${
              activeTab === 'desc' ? 'text-black' : 'text-gray-500'
            }`}
          >
            DESCRIPTION
          </button>

          <button
            onClick={() => setActiveTab('reviews')}
            className={`text-base sm:text-xl ${
              activeTab === 'reviews' ? 'text-black font-semibold' : 'text-gray-500'
            }`}
          >
            REVIEW(S)
          </button>

          <button
            onClick={() => setActiveTab('info')}
            className={`text-base sm:text-xl ${
              activeTab === 'info' ? 'text-black font-semibold' : 'text-gray-500'
            }`}
          >
            ADDITIONAL INFORMATION
          </button>
        </div>

        <button className='text-sm sm:text-lg font-mono text-gray-400'>
          View All
        </button>
      </div>

      {/* CONTENT */}
      <div className="transition-all duration-300">

        {/* DESCRIPTION */}
        {activeTab === 'desc' && (
          <div className='space-y-6 animate-fadeIn'>
            <p className="text-sm sm:text-base leading-relaxed">
              Built for ultra-fast performance, the thin and lightweight Samsung Galaxy Tab S2 goes anywhere you go...
            </p>

            <img
              src="/images/laptops/laptop_description_banner.png"
              className='w-full rounded-md object-cover'
            />

            <p className='text-center text-gray-400 italic text-sm'>
              * The Galaxy Tab S2’s 4:3 ratio display provides an ideal environment.
            </p>

            <div className='space-y-4'>
              <h1 className='text-lg sm:text-xl font-bold'>From the manufacturer</h1>

              <p className="text-sm sm:text-base leading-relaxed">
                Dive into blockbuster movies, switch apps quickly...
              </p>

              <div className='flex flex-col sm:flex-row gap-4'>
                <img src="/images/laptops/black_macbook.png" className='w-full sm:w-1/2 rounded-md object-cover'/>
                <img src="/images/laptops/macbook_typing.png" className='w-full sm:flex-1 rounded-md object-cover'/>
              </div>
            </div>
          </div>
        )}

        {/* REVIEWS */}
        {activeTab === 'reviews' && (
          <div className='space-y-4 animate-fadeIn'>
            <h1 className='text-lg font-bold'>Customer Reviews</h1>

            <p className='text-gray-500 text-sm'>
              ⭐⭐⭐⭐⭐ (152 reviews)
            </p>

            <div className='space-y-3'>
              <div className='border p-3 rounded-md'>
                <p className='font-semibold'>John D.</p>
                <p className='text-sm text-gray-500'>Great product, fast and reliable!</p>
              </div>

              <div className='border p-3 rounded-md'>
                <p className='font-semibold'>Ama K.</p>
                <p className='text-sm text-gray-500'>Worth every penny.</p>
              </div>
            </div>
          </div>
        )}

        {/* ADDITIONAL INFO */}
        {activeTab === 'info' && (
          <div className='space-y-4 animate-fadeIn'>
            <h1 className='text-lg font-bold'>Product Specifications</h1>

            <ul className='text-sm text-gray-600 space-y-2'>
              <li><strong>Brand:</strong> Samsung</li>
              <li><strong>Screen Size:</strong> 10.9 inches</li>
              <li><strong>Storage:</strong> 512GB</li>
              <li><strong>Memory:</strong> 8GB RAM</li>
              <li><strong>Processor:</strong> Octa-core</li>
            </ul>
          </div>
        )}

      </div>
    </div>
  )
}