'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { MdExpandMore, MdExpandLess } from 'react-icons/md'
import gpay from '../../../public/gpay.png'
import applePay from '../../../public/applePay.png'
import americanExpress from '../../../public/american.png'
import paypal from '../../../public/paypal.png'
import mastercard from '../../../public/mastercard.png'
import { quickLinks,mettaMusse } from '@/helpers/constants';
const Footer = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showMettaMuse, setShowMettaMuse] = useState(false);
  const [showQuickLinks, setShowQuickLinks] = useState(false);

  // Toggle functions for each section
  const toggleFirst = () => setShowFirst(!showFirst);
  const toggleContact = () => setShowContact(!showContact);
  const toggleMettaMuse = () => setShowMettaMuse(!showMettaMuse);
  const toggleQuickLinks = () => setShowQuickLinks(!showQuickLinks);

  return (
    <footer className="bg-black text-white  width-90 lg:w-full">
      {/* Large Screen View */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-4 lg:w-full lg:py-8 lg:px-4">
        {/* First Row */}
        <div className="col-span-1 flex">
          {/* BE THE FIRST TO KNOW */}
          <div className="w-full">
            <h2 className="font-bold text-lg mb-4">BE THE FIRST TO KNOW</h2>
            <p className="mb-4">Sign up for updates from mettā muse.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="outline-none p-2 max-w-xs w-full card-fade-text-color"
              />
              <button className="bg-gray-700 p-2 ml-2">SUBSCRIBE</button>
            </div>
          </div>
        </div>

        {/* Second Column of First Row Empty to align with the Third Column of Second Row */}
        <div className=" col-span-1">
          {/* This is intentionally left blank for alignment */}
        </div>

        {/* Contact and Currency */}
        <div className="col-span-1">
          <div>
            <h2 className="font-bold text-lg mb-4">CONTACT US</h2>
            <p className="mb-4">+44 221 123 5360 • customercare@mettamuse.com</p>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">CURRENCY</h2>
            <p>🇺🇸 USD</p>
          </div>
        </div>

        {/* Second Row */}
        <div className="col-span-1 border-t pt-6 lg:border-gray-700">
          {/* mettā muse column */}
          <h2 className="font-bold text-lg mb-4">mettā muse</h2>
          {/* List of links */}
          <ul style={{ color: 'white' }}>
            {
              mettaMusse.map((element, index) => {
                return <li  key={index} className='font-quicksand mb-2'>{element}</li>
              })
            }

          </ul>

        </div>
        <div className="col-span-1 border-t pt-6 lg:border-gray-700">
          {/* QUICK LINKS column */}
          <h2 className="font-bold text-lg mb-4">QUICK LINKS</h2>
          {/* List of links */}
          <ul>
            {
              quickLinks.map((link,index) => {
                return <li  key={index} className='font-quicksand' >{link}</li>
              })
            }
          </ul>
        </div>
        <div className="col-span-1 flex flex-col border-t pt-6 lg:border-gray-700">
          {/* FOLLOW US and Payment Options */}
          <div className="mb-4">
            <h2 className="font-bold text-lg">FOLLOW US</h2>
            {/* Social Icons */}
          </div>
          <div>
            <h2 className="font-bold text-lg">mettā muse ACCEPTS</h2>
            {/* Payment Icons */}
            <div className='flex '>
              <Image className='mr-2' src={gpay} width={56} height={35} alt="Goggle pay Logo" />
              <Image className='mr-2' src={mastercard} width={56} height={35} alt="Mastercard Logo" />
              <Image className='mr-2' src={paypal} width={56} height={35} alt="Paypal Logo" />
              <Image className='mr-2' src={americanExpress} width={56} height={35} alt="American Express Logo" />
              <Image className='mr-2' src={applePay} width={56} height={35} alt="Apple Pay  Logo" />

            </div>
          </div>
        </div>
      </div>

      {/* Small Screen View */}
      <div className="lg:hidden">
        {/* BE THE FIRST TO KNOW Section */}
        <div className="p-4 border-t border-gray-700">
          <div
            onClick={toggleFirst}
            className="font-bold text-lg flex justify-between items-center cursor-pointer font-quicksand"
          >
            BE THE FIRST TO KNOW
            {showFirst ? <MdExpandMore /> : <MdExpandLess />}
          </div>
          {showFirst && (
            <div className="mt-4">
              {/* Collapsible content */}
              <p className='font-quicksand'>Sign up for updates from mettā muse.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your e-mail..."
                  className=" outline-none p-2 max-w-xs w-full card-fade-text-color"
                />
                <button className="bg-gray-700 p-2 ml-2 font-quicksand">SUBSCRIBE</button>
              </div>
            </div>
          )}
        </div>

        {/* CONTACT US Section */}
        <div className="p-4 border-t border-gray-700">
          <div
            onClick={toggleContact}
            className="font-bold text-lg flex justify-between items-center cursor-pointer"
          >
            CONTACT US
            {showContact ? <MdExpandMore color='white' /> : <MdExpandLess color='white' />}
          </div>

          {showContact && (
            <div className="mt-4">
              {/* Collapsible content */}
              <p>+44 221 123 5360 • customercare@mettamuse.com</p>
            </div>
          )}
        </div>

        {/* mettā muse Section */}
        <div className="p-4 border-t border-gray-700">
          <div
            onClick={toggleMettaMuse}
            className="font-bold text-lg flex justify-between items-center cursor-pointer"
          >
            mettā muse
            {showMettaMuse ? <MdExpandLess color='white' /> : <MdExpandMore color='white' />}
          </div>
          {showMettaMuse && (
            <div className="mt-4">
              {/* Collapsible content for mettā muse */}
              <ul style={{ color: 'white' }}>
                {
                  mettaMusse.map((element,index) => {
                    return <li key={index} className='font-quicksand mb-2'>{element}</li>
                  })
                }

              </ul>
            </div>
          )}
        </div>

        {/* QUICK LINKS Section */}
        <div className="p-4 border-t border-gray-700">
          <div
            onClick={toggleQuickLinks}
            className="font-bold text-lg flex justify-between items-center cursor-pointer"
          >
            QUICK LINKS
            {showQuickLinks ? <MdExpandLess color='white' /> : <MdExpandMore color='white' />}
          </div>
          {showQuickLinks && (
            <div className="mt-4">
              {/* Collapsible content for QUICK LINKS */}
              <ul>
                {
                  quickLinks.map((link, index) => {
                    return <li key={index} className='font-quicksand mb-2'>{link}</li>
                  })
                }
              </ul>
            </div>
          )}
        </div>

      </div>

      {/* Common Footer Content for all screen sizes */}
      <div className="text-center p-4 border-t border-gray-700">
        <p>Copyright © 2023 mettā muse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
