'use client'
import React, { useState } from 'react';
import Navbar from '@/components/header/navbar';
import Banner from '@/components/banner/banner';
import FilterSection from '@/components/filterSection/filter';
import Products from '@/components/products/products';
import Footer from '@/components/footer/footer';
import SidebarFilters from '@/components/sidebar/sidebarFilters';


export default function Home() {
  const [showSidebar, setShowSidebar] = useState(true);

  const updateShowSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  return (
    <main className="flex min-h-screen ">
      <div className='w-full'>
        <Navbar />
        <Banner />
        <FilterSection updateShowSidebar={updateShowSidebar} showSidebar={showSidebar} />
        <div className="flex flex-col lg:flex-row">
          {
            showSidebar && <div className="hidden lg:block lg:w-[300px] flex-none">
              <SidebarFilters />
            </div>
          }
          <div className="flex-grow">
            <Products />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
