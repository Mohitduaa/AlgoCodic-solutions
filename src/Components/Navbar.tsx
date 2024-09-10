import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Letstalk from './Letstalk'

const Navbar = () => {
  return (
    <>
        <div className='flex justify-between items-center px-10 py-2'>
            <div className='flex items-center gap-2'>
                <Image src="/images/logo.png" alt="logo" className='' height={65} width={70} />
                <h1 className='text-2xl font-medium '>AlgoCodic Solutions</h1>
            </div>
            <div>
                <ul className='flex gap-8'>
                    <Link href="/" className='text-base font-medium leading-[25px] font-[Inter]'>Home</Link>
                    <li className='relative group'>
                    <span className='text-base font-medium leading-[25px] font-[Inter] '>Services</span>
                    <ul className='absolute hidden group-hover:block bg-white shadow-lg p-2 space-y-2'>
                    <li ><Link href="/services" className='block w-[180px] px-4 py-1  text-black hover:text-red-500'>Web Development</Link></li>           
                    <li><Link href="/Digital_markting" className='block px-4   text-black hover:text-red-500'>Digital Marketing</Link></li>
                     </ul>
                     </li>
                    
                    {/* <li className='text-base font-medium leading-[25px] font-[Inter]'>Services</li> */}
                    <Link href="/Courses" className='text-base font-medium leading-[25px] font-[Inter]'>Courses</Link>
                    <Link href="/career" className='text-base font-medium leading-[25px] font-[Inter]'>Career</Link>
                    <Link href="" className='text-base font-medium leading-[25px] font-[Inter]'>Tools</Link>
                </ul>
            </div>
            <div className='bg-gradient-to-r from-blue-300 via-blue-200 to-gray-100 px-4 py-1 rounded-sm border border-black'>
                <Link href="/Letstalk" className=' text-sm font-semibold leading-[14px] font-[Inter]'>Contact Us</Link>
            </div>
            
        </div>
    </>
  )
}

export default Navbar 
