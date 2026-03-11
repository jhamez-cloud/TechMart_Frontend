import ContactPage from '@/components/ContactPage'
import NavBar from '@/components/NavBar'
import Breadcrumbs from '@/components/Breadcrumbs'
import Footer from '@/components/Footer'
import React from 'react'

export default function page() {
  return (
    <div className={`w-full min-h-screen`}>
        <div className="w-full h-full p-12 bg-gray-200">
            <NavBar/>
            <Breadcrumbs/>
            <ContactPage/>
        </div>
        <Footer/>
    </div>
  )
}
