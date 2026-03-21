import React from 'react'
import { Spinner } from '@/components/ui/spinner'

export default function loading() {
  return (
    <div className='w-full h-auto flex justify-center items-center'>
      <Spinner fontSize={36}/>
    </div>
  )
}
