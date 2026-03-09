import React from 'react'

export default function PromotionBanner() {
  return (
    <div className='w-full h-60 grid grid-cols-2 gap-2 mt-4'>
      <div className='w-full h-full rounded-md bg-[url("/images/membership_card.png")] bg-cover px-8 py-4 flex flex-row-reverse'>
        <div  className='w-1/3 h-full flex flex-col justify-center space-y-4'>
            <h1 className='text-4xl font-bold text-[#FFE400]'>10% Back</h1>
            <p className='text-white font-normal'>Earn 10% Cash Back on TechMart. <span><a href="" className='underline'>Learn How</a></span></p>
        </div>
      </div>
      <div className='w-full h-full rounded-md bg-[url("/images/mobile_version.png")] bg-cover p-8 flex flex-col'>
        <div className='w-3/4 h-2/3 flex space-x-8'>
            <h1 className='text-3xl font-bold text-white'>Download our app</h1>
            <p className='font-normal text-gray-300'>Enter your email and we'll send you a link to download the app.</p>
        </div>
        <div className='w-3/5 h-10 bg-[#5f5d5d48] rounded-sm px-4 py-1 flex justify-between items-center'>
            <input className='text-gray-200 text-lg w-3/4 focus:outline-none' type="text" placeholder="example@email.com..." />
            <button className='text-lg text-green-400'>Send Link</button>
        </div>
      </div>
    </div>
  )
}
