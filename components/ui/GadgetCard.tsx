import React from 'react'
import GadgetCategory from './GadgetCategory'

interface Props{
    title:string,
    image:string,
    description:string
}

export default function GadgetCard(props:Props) {
  return (
    <div className='w-full h-full flex flex-col space-y-8 rounded-md p-8 bg-white'>
        <div className='w-full h-10 flex justify-between items-center'>
            <h1 className='text-xl font-bold'>{props.title}</h1>
            <a href="" className='text-xl font-semibold text-gray-400'>View All</a>
        </div>
        <div 
            className='w-full h-60 flex items-center bg-cover rounded-md'
            style={{
              backgroundImage:`url(${props.image})`,
              backgroundSize:"cover"
            }}
          >
          {/* background image */}
            <div className='w-1/4 h-full flex flex-col space-y-4 py-8 pl-8 text-white'>
              <p className='font-semibold'>{props.description}</p>
            </div>
        </div>
        <hr />
        <div className='w-[98%] h-90 grid grid-cols-2 grid-rows-2 gap-y-8 gap-x-8'>
            <GadgetCategory
                name='Speaker'
                image='/images/speaker_category.png'
                quantity={12}
            />
            <GadgetCategory
                name='DSLR Camera'
                image='/images/camera_category.png'
                quantity={9}
            />
            <GadgetCategory
                name='Earbuds'
                image='/images/earbuds_category.png'
                quantity={5}
            />
            <GadgetCategory
                name='Microphone'
                image='/images/microphone_category.png'
                quantity={12}
            />
        </div>
    </div>
  )
}
