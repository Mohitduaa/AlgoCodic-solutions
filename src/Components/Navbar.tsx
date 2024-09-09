"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <>
      <div className='flex justify-between items-center px-6 py-4 md:px-10'>
        <div className='flex items-center gap-2 whitespace-nowrap'>
          <Image src="/images/logo.png" alt="logo" height={65} width={70} />
          <h1 className=' md:text-2xl font-medium'>AlgoCodic Solutions</h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className='md:hidden' onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <FaTimes className='text-2xl cursor-pointer' />
          ) : (
            <FaBars className='text-2xl cursor-pointer' />
          )}
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex gap-8`}>
          <Link href="/" className='text-base font-medium leading-[25px]'>Home</Link>
          <li className='list-none relative group'>
            <span className='text-base font-medium leading-[25px] cursor-pointer'>Services</span>
            <ul className='absolute hidden group-hover:block bg-white shadow-lg p-2 space-y-2'>
              <Link href="/services" className='block w-[180px] px-4 py-1 text-black hover:text-red-500'>Web Development</Link>          
              <Link href="/Digital_markting" className='block px-4 py-1 text-black hover:text-red-500'>Digital Marketing</Link>
            </ul>
          </li>
          <Link href="/Courses" className='text-base font-medium leading-[25px]'>Courses</Link>
          <Link href="/career" className='text-base font-medium leading-[25px]'>Career</Link>
          <Link href="/tools" className='text-base font-medium leading-[25px]'>Tools</Link>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-20 right-0 w-[55%] bg-gray-100 shadow-lg ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <ul className='flex flex-col items-center space-y-6 py-4'>
            <Link href="/" onClick={toggleMobileMenu} className='text-base font-medium leading-[25px]  '>Home</Link>
            <li className='relative'>
              <span onClick={toggleServicesDropdown} className='text-base font-medium leading-[25px] cursor-pointer '>Services</span>
              {isServicesDropdownOpen && (
                <ul className='bg-gray-100 shadow-lg p-2 space-y-2'>
                  <li><Link href="/services" onClick={toggleMobileMenu} className='block w-[175px] px-4 py-1 text-black hover:text-red-500'>Web Development</Link></li>           
                  <li><Link href="/Digital_markting" onClick={toggleMobileMenu} className='block px-4 py-1 text-black hover:text-red-500'>Digital Marketing</Link></li>
                </ul>
              )}
            </li>
            <Link href="/Courses" onClick={toggleMobileMenu} className='text-base font-medium leading-[25px] '>Courses</Link>
            <Link href="/career" onClick={toggleMobileMenu} className='text-base font-medium leading-[25px] '>Career</Link>
            <Link href="/tools" onClick={toggleMobileMenu} className='text-base font-medium leading-[25px]  '>Tools</Link>
          </ul>
        </div>

        {/* Contact Us Button */}
        <div className='hidden md:block bg-gradient-to-r from-blue-300 via-blue-200 to-gray-100 px-4 py-1 rounded-sm border border-black'>
          <Link href="/Letstalk" className='text-sm font-semibold leading-[14px]'>Contact Us</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
