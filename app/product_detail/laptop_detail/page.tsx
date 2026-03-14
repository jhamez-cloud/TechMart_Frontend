import React from 'react'
import NavBar from '@/components/NavBar'
import Breadcrumbs from '@/components/Breadcrumbs'
import Footer from '@/components/Footer'
import LaptopProductPage from '@/components/LaptopProductPage'
import LaptopProductDescripton from '@/components/LaptopProductDescription'
import RecentlyViewed from '@/components/RecentlyViewed'
import RelatedProducts from '@/components/RelatedProducts'


export default function page() {
  return (
    <div className={`w-full min-h-screen`}>
        <div className="w-full h-full p-12 bg-gray-200">
            <NavBar/>
            <Breadcrumbs
              parent1='Product Page'
              parent2='Laptop Detail'
            />
            <LaptopProductPage/>
            <RelatedProducts/>
            <LaptopProductDescripton/>
            <RecentlyViewed/>
        </div>
        <Footer/>
    </div>
  )
}
