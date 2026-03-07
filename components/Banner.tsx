import React from 'react'
import { Star } from 'lucide-react'

export default function Banner() {
  return (
    <div className='w-full h-20 p-4 bg-green-400 text-white text-lg font-medium flex justify-center items-center mt-8 rounded-md'>
        <div className='w-full flex items-center justify-center space-x-4'>
            <p className='flex items-center space-x-2'><Star/> Member get &nbsp;<span className='text-lg font-semibold text-shadow-black text-yellow-400'>FREE SHIPPING</span>&nbsp; with no minimum order restriction.</p>
            <a href="" className='underline font-serif hover:text-yellow-400'>Apply For 30 Day Free Trial</a>
        </div>
    </div>
  )
}
