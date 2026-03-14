import React from 'react'
import NavBar from '@/components/NavBar'
import Breadcrumbs from '@/components/Breadcrumbs'
import Footer from '@/components/Footer'
import ShopFilter from '@/components/ShopFilter'
import ProductsHero from '@/components/ProductsHero'
import PopularCategories from '@/components/PopularCategories'


export default function page() {
  return (
    <div className={`w-full min-h-screen`}>
        <div className="w-full h-full p-12 bg-gray-200">
            <NavBar/>
            <Breadcrumbs
              parent1='Products'
              parent2='Phones'
            />
            <ProductsHero/>
            <PopularCategories/>
            <ShopFilter/>
        </div>
        <Footer/>
    </div>
  )
}
