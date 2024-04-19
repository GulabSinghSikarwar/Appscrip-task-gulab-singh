"use client"
import { useState } from 'react';
import Image from 'next/image';
import mainLogo from '../../../public/Logo.png'
import heart from '../../../public/heart.png'
import profile from '../../../public/profile.png'
import search from '../../../public/search.png'
import shopping from '../../../public/shopping.png'
import { navlinks as links } from '@/helpers/constants';
import './navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full'>
      <nav className="bg-grey-800">
        <div className="mx px-2 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center ">
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              type="button"
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white sm:hidden"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>

            {/* Logos evenly spaced */}
            <div className="fullscreen-width  pl-4 flex-1 w-full flex items-center justify-between sm:justify-between ">
              <Image src={mainLogo} width={32} height={32} alt="Logo" />
              <div>
                <h4 className='logoHeding'>
                  LOGO
                </h4>
              </div>

              <div className='flex'>
                <Image className='mr-2' src={search} width={24} height={24} alt="Logo" />
                <Image className='mr-2' src={heart} width={24} height={24} alt="Logo" />
                <Image className='mr-2' src={shopping} width={24} height={24} alt="Logo" />
                <Image src={profile} width={24} height={24} alt="Logo" />
              </div>
            </div>

          </div>
          <div className="bg-white sublinks my-10">
            <div className="flex justify-center space-x-4 py-2">
              {links.map((link, index) => (
                <a key={index} href={link.url} className="text-black hover:text-gray-600 font-bold">
                  {link.text}
                </a>
              ))}
            </div>
          </div>

        </div>


        {/* Mobile menu, toggle based on menu state */}
        <div className={`${isOpen ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">

            {links.map((link, index) => (
              <a key={index} href={link.url} className="block px-3 py-2 rounded-md text-base font-medium  text-gray-900">
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
