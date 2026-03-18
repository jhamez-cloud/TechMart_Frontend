'use client'
import React from 'react'
import { SWRConfig } from 'swr'

export default function Providers({children}:{children:React.ReactNode}) {

    const fetcher = async (url:string) => {
        const res = await fetch(url,{credentials:'include'})
        if(!res.ok)throw new Error ("Fetch Data Request Failed...")
        const data = await res.json()
        
        console.log(data)
        return data
    }

  return (
    <SWRConfig value={{
        fetcher,
        revalidateOnFocus:false,
        dedupingInterval:1000,
    }}>
      {children}
    </SWRConfig>
  )
}
