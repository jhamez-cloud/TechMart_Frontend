import React from 'react'

export default function Deals() {
  return (
    <div className='w-full flex flex-col lg:flex-row gap-4 mt-8'>

      {/* MAIN DEAL */}
      <div className='w-full lg:w-3/4'>

        {/* HEADER */}
        <div className='w-full h-10 bg-green-500 rounded-md px-4 py-2'>
          <h1 className='text-white font-medium'>DEALS OF THE DAY</h1>
        </div>

        {/* CONTENT */}
        <div className='w-full bg-white rounded-md p-4 md:p-8 flex flex-col lg:flex-row gap-6'>

          {/* 🔥 IMAGE SECTION */}
          <div className='w-full lg:w-1/2 flex md:flex-col items-center'>

            {/* THUMBNAILS (horizontal on mobile) */}
            <ul className='flex lg:flex-col gap-4 mb-4 overflow-x-auto'>
              <li><img className='h-16 object-contain' src="/images/deals-phonepart1.png" alt="" /></li>
              <li><img className='h-16 object-contain' src="/images/deals-phonepart2.png" alt="" /></li>
              <li><img className='h-16 object-contain' src="/images/deals-phonepart3.png" alt="" /></li>
              <li><img className='h-16 object-contain' src="/images/deals-phonepart4.png" alt="" /></li>
            </ul>

            {/* MAIN IMAGE */}
            <div className='relative'>
              <img className='max-h-64 object-contain' src="/images/deals-phone.png" alt="" />
              <span className='absolute top-0 left-0 px-3 py-1 bg-green-500 rounded-md text-xs text-white font-medium'>
                SAVE $199.00
              </span>
            </div>

          </div>

          {/* 🔥 DESCRIPTION */}
          <div className='w-full lg:w-1/2 flex flex-col space-y-4'>

            <div>
              <span className='text-gray-400 text-sm'>(12)</span>
              <h1 className='text-lg md:text-xl font-bold'>
                Xiomi Redmi Note 11 Pro 256GB 2023, Black Smartphone
              </h1>
            </div>

            <div className='flex space-x-2'>
              <p className='text-lg md:text-xl font-bold text-red-500'>$569.00</p>
              <p className='text-lg md:text-xl text-gray-500 line-through'>$759.00</p>
            </div>

            <ul className='text-sm font-mono list-disc pl-4 space-y-1 font-semibold'>
              <li>Intel LGA 1700 Socket: Supports 12th & 13th Gen Intel Core</li>
              <li>DDR5 Compatible: 4* SMD DIMM's with XMP 3.0 Memory</li>
              <li>Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
            </ul>

            {/* TAGS */}
            <div className='flex flex-wrap gap-2'>
              <button className='p-2 bg-gray-300 text-green-400 text-xs font-semibold rounded-md'>
                FREE SHIPPING
              </button>
              <button className='p-2 bg-gray-300 text-red-400 text-xs font-semibold rounded-md'>
                FREE GIFT
              </button>
            </div>

            {/* COUNTDOWN */}
            <div className='flex flex-col sm:flex-row gap-4'>

              <div className='text-sm font-semibold'>
                <p>HURRY UP!</p>
                <p>PROMOTIONS WILL</p>
                <p>EXPIRE IN</p>
              </div>

              <div className='grid grid-cols-4 gap-2 flex-1'>
                {['-162 d', '-12 hrs', '-45 mins', '-32 secs'].map((t, i) => (
                  <div key={i} className='bg-[#EBEDF3] rounded-md py-2 flex flex-col items-center'>
                    <p className='font-bold'>{t.split(' ')[0]}</p>
                    <p className='text-gray-600 text-xs'>{t.split(' ')[1]}</p>
                  </div>
                ))}
              </div>

            </div>

            <hr />

            {/* PROGRESS */}
            <div>
              <div className='w-full h-2 rounded-2xl bg-[#EBEDF3]'>
                <div className='h-full w-2/5 bg-green-500 rounded-2xl'></div>
              </div>

              <div className='flex items-center space-x-2 mt-2'>
                <p className='text-gray-400 text-sm'>SOLD :</p>
                <p className='font-bold text-sm'>26/75</p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* 🔥 SIDE BANNERS */}
      <div className='w-full lg:w-1/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4'>
        <div className='h-40 lg:h-auto bg-[url("/images/sales-off.png")] bg-cover rounded-md'></div>
        <div className='h-40 lg:h-auto bg-[url("/images/sales-off2.png")] bg-cover rounded-md'></div>
      </div>

    </div>
  )
}