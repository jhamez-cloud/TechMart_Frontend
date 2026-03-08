import React from 'react'
import GadgetCard from './ui/GadgetCard'

export default function Gadgets() {
  return (
    <div className='w-full h-200 grid grid-cols-3 gap-2 mt-4'>
      <GadgetCard
        title='AUDIOS & CAMERAS'
        description='Best Speaker 2023'
        image='/images/microphone.png'
      />
      <GadgetCard
        title='GAMING'
        description='Wireless RGB Gaming Mouse'
        image='/images/gaming_mouse.png'
      />
      <GadgetCard
        title='OFFICE EQUIPMENTS'
        description='Home Theatre 4K Laser Projector'
        image='/images/projector.png'
      />
    </div>
  )
}
