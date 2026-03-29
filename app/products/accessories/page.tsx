import React from 'react'
import NavBar from '@/components/NavBar'
import Breadcrumbs from '@/components/Breadcrumbs'
import Footer from '@/components/Footer'

export default function page() {
  return (
    <div className={`w-full min-h-screen`}>
        <div className="w-full h-full p-12 py-10 bg-gray-200">
            <NavBar/>
            <Breadcrumbs
              parent1='Products'
              parent2='Accessories'
            />
            <h1>Accessories Page</h1>
        </div>
        <Footer/>
    </div>
  )
}
