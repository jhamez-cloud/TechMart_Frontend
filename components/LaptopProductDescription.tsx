import React from 'react'

export default function LaptopProductDescripton() {
  return (
    <div className='w-full min-h-200 bg-white rounded-md space-y-4 py-4 px-10 mt-4'>
        <div className='w-full h-10 flex items-center justify-between space-x-6 mb-8'>
            <div className='flex items-center space-x-10'>
                <h1 className='text-xl font-bold'>DESCRIPTION</h1>
                <a href="" className='text-xl font-normal text-gray-500'>REVIEW(S)</a>
                <a href="" className='text-xl font-normal text-gray-500'>ADDITIONAL INFORMATION</a>
            </div>
            <a href="" className='text-lg font-mono text-gray-400'>View All</a>
        </div>
        <div className='w-full space-y-3'>
            <p>
                Built for ultra-fast performance, the thin and lightweight Samsung Galaxy Tab S2 goes anywhere you go. Photos, movies and documents pop on a crisp, clear Super AMOLED display. Expandablememory lets you enjoy more of your favorite content. And connecting and sharing between all your Samsung devices is easier than ever. Welcome to life with the reimagined Samsung Galaxy TabS2. Watch thev world come to life on your tablet's <span className='text-lg font-semibold'>Super AMOLED display</span> * . With deep contrast, rich colors and crisp details, you won't miss a thing
            </p>
            <img src="/images/laptops/laptop_description_banner.png" alt="" className='w-full h-90 rounded-md' />
            <div className='text-center'>
                <p className='text-gray-400 italic font-light'>* The Galaxy Tab S2’s 4 : 3 ratio display provides you with an ideal environment for performing office tasks.</p>
            </div>
        </div>
        <div className='space-y-4'>
            <h1 className='text-xl font-bold text-black'>From the manifacturer</h1>
            <div className='space-y-2'>
                <p>
                    Dive into the blockbuster movies you can't wait to see. Switch between your favorite apps quickly and easily. The new and improved octa-core processor gives you the power and speed you need to see more and do more. Expand your tablet's memory from 32GB to up to an additional 128GB and enjoy more of your favorite music, photos, movies and games on the go with a microSD card.With Quick Connect, start a show on your Smart TV and, with the touch of a button, take it with you by moving it to your Galaxy Tab S2.
                </p>
                <p>
                    Or send videos and photos from your tablet screen to your TV screen to share with everyone in the room. Work effortlessly between your Samsung tablet and Samsung smartphone with SideSync.Quickly drag and drop photos between devices. And even respond to a call from your smartphone right on your tablet screen.
                </p>
            </div>
            <div className='w-full flex justify-between space-x-2'>
                <img src="/images/laptops/black_macbook.png" alt="" className='w-1/2'/>
                <img src="/images/laptops/macbook_typing.png" alt="" className='flex-1'/>
            </div>
        </div>
        <div className='w-full'>
            <h1 className='text-xl font-bold text-black'>Samsung Galaxy Tab S2, 8-inch, White</h1>
            <div>
                <p className='fade-out-20 text-gray-300'>
                    The Samsung Galaxy Tab S2 offers dual cameras: a rear-facing 8-megapixel camera with Auto Focus and a 2.1-megapixel camera on the front. Take high-quality pictures and video or video chat with friends, family, and colleagues. Customize your Galaxy Tab S2 with the apps you use most. The Samsung Galaxy Essentials widget provides a collection of premium complimentary apps optimized for your tablet screen. Select and download the apps you want to instantly upgrade your tablet experience.
                </p>
            </div>
            <p className='text-blue-400 font-medium'><a href="">SHOW MORE</a></p>
        </div>
    </div>
  )
}
