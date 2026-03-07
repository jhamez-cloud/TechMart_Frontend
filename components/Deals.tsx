import React from 'react'

export default function Deals() {
  return (
    <div className='w-full h-130 flex space-x-4 mt-8'>
        <div className='w-3/4 h-full'>
            <div className='w-full h-10 bg-green-500 rounded-md px-4 py-2'>
                <h1 className='text-white font-medium'>DEALS OF THE DAY</h1>
            </div>
            <div className='w-full h-120 bg-white rounded-md p-8 flex justify-between'>
                <div className='w-1/2 h-full flex'>
                    {/* phone images */}
                    <ul className='w-1/7 h-full flex flex-col space-y-6'>
                        <li><img src="/images/deals-phonepart1.png" alt="" /></li>
                        <li><img src="/images/deals-phonepart2.png" alt="" /></li>
                        <li><img src="/images/deals-phonepart3.png" alt="" /></li>
                        <li><img src="/images/deals-phonepart4.png" alt="" /></li>
                    </ul>
                    <div className='relative w-6/7 h-full'>
                        <figure className='relative py-8'>
                            <img src="/images/deals-phone.png" alt="" />
                        </figure>
                        <span className='absolute top-1 w-25 h-10 flex justify-center items-center bg-green-500 rounded-md text-sm text-white font-medium'>SAVE $199.00</span>
                    </div>
                </div>
                <div className='w-1/2 h-full px-2 flex flex-col space-y-4'>
                    <div>
                        <div className='w-full pl-16'>
                            <span className='text-gray-400 font-light'>{'(12)'}</span>
                        </div>
                        <h1 className='text-xl font-bold text-black'>Xiomi Redmi Note 11 Pro 256GB 2023, Black Smartphone</h1>
                    </div>
                    <div className='w-full flex space-x-2'>
                        <p className='text-xl font-bold text-red-500 font-mono'>$569.00</p>
                        <p className='text-xl font-bold text-gray-500 font-mono line-through'>$759.00</p>
                    </div>
                    <ul className='w-full flex flex-col space-y-1 font-mono text-sm list-disc font-semibold'>
                        <li>
                            <p>Intel LGA 1700 Socket:Suports 12th Gen & 13th Gen Intel Core</p>
                        </li>
                        <li>
                            <p>DDR5 Compatible:4* SMD DIMM's with XMP 3.0 Memory</p>
                        </li>
                        <li>
                            <p>Commanding Power Design:Twin 16+1+2 Phases Digital VRM</p>
                        </li>
                    </ul>
                    <div className='flex flex-row space-x-2 items-center'>
                        <button className='p-2 bg-gray-300 text-green-400 text-xs font-semibold rounded-md'>FREE SHIPPING</button>
                        <button className='p-2 bg-gray-300 text-red-400 text-xs font-semibold rounded-md'>FREE GIFT</button>
                    </div>
                    <div className='w-full flex'>
                        <div className='w-1/3 text-sm font-semibold '>
                            <p>HURRY UP!</p>
                            <p>PROMOTIONS WILL</p>
                            <p>EXPIRE IN</p>
                        </div>
                        <div className='w-3/4 grid grid-cols-7 gap-x-2'>
                            <div className='w-full h-full bg-[#EBEDF3] rounded-md py-2 px-0.5 flex flex-col items-center justify-between'>
                                <p className='font-bold'>-162</p>
                                <p className='text-gray-600'>d</p>
                            </div>
                            <div className='w-full h-full bg-[#EBEDF3] rounded-md py-2 px-0.5 flex flex-col items-center justify-between'>
                                <p className='font-bold'>-12</p>
                                <p className='text-gray-600'>hrs</p>
                            </div>
                            <div className='w-full h-full bg-[#EBEDF3] rounded-md py-2 px-0.5 flex flex-col items-center justify-between'>
                                <p className='font-bold'>-45</p>
                                <p className='text-gray-600'>mins</p>
                            </div>
                            <div className='w-full h-full bg-[#EBEDF3] rounded-md py-2 px-0.5 flex flex-col items-center justify-between'>
                                <p className='font-bold'>-32</p>
                                <p className='text-gray-600'>secs</p>
                            </div>
                        </div>
                    </div>
                    <hr className='my-4'/>
                    <div className='w-full h-2 rounded-2xl bg-[#EBEDF3]'>
                        <div className='h-full w-3/7 bg-green-500 rounded-2xl'></div>
                        <div className='w-full flex items-center space-x-2'>
                            <p className='font-normal text-gray-300'>SOLID :</p>
                            <p className='font-bold text-black'>26/75</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-1/4 h-full grid grid-rows-3 gap-4'>
            <div className='w-full h-full bg-[url("/images/sales-off.png")] bg-cover rounded-md'></div>
            <div className='w-full h-full bg-[url("/images/sales-off2.png")] bg-cover rounded-md'></div>
        </div>
    </div>
  )
}
