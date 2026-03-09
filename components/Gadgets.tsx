import React from 'react'
import GadgetCard from './ui/GadgetCard'
import GadgetCategory from './ui/GadgetCategory'

export default function Gadgets() {
  return (
    <div className='w-full h-200 grid grid-cols-3 gap-2 mt-4'>
        <GadgetCard
            title='AUDIOS & CAMERAS'
            description='Best Speaker 2023'
            image='/images/microphone.png'
        >
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
        </GadgetCard>

        <GadgetCard
            title='GAMING'
            description='Wireless RGB Gaming Mouse'
            image='/images/gaming_mouse.png'
        >
            <GadgetCategory
                name='Monitors'
                image='/images/monitor_gadgets.png'
                quantity={28}
            />
            <GadgetCategory
                name='Gaming Chair'
                image='/images/gaming_chair_gadgets.png'
                quantity={12}
            />
            <GadgetCategory
                name='Controllers'
                image='/images/controller_gadgets.png'
                quantity={9}
            />
            <GadgetCategory
                name='Keyboards'
                image='/images/keyboard_gadgets.png'
                quantity={30}
            />
        </GadgetCard>

        <GadgetCard
            title='OFFICE EQUIPMENTS'
            description='Home Theatre 4K'
            subdescription='Laser Projection'
            image='/images/projector.png'
        >
            <GadgetCategory
                name='Printers'
                image='/images/printer_gadgets.png'
                quantity={9}
            />
            <GadgetCategory
                name='Network Devices'
                image='/images/router_gadgets.png'
                quantity={90}
            />
            <GadgetCategory
                name='Security'
                image='/images/camera_gadgets.png'
                quantity={12}
            />
            <GadgetCategory
                name='Projectors'
                image='/images/projector_gadgets.png'
                quantity={12}
            />
        </GadgetCard>
    </div>
  )
}
