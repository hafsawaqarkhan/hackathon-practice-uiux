import Image from 'next/image'; 
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { RiShoppingCart2Line } from "react-icons/ri";
import { RiAccountCircleFill } from "react-icons/ri";
import Link from 'next/link';
const Hero = () => {
  return (
    <>
    <div className='flex space-x-24 m-6'>
    <div className="text-2xl font-bold m-4">
        Exclusive
      </div>
      <div className=" sm:hidden md:flex justify-center items-center space-x-10 ">
        <Link href="#Content" className="text-gray-700 hover:text-black underline underline-offset-4"> Home</Link>
        <a href="/Contact" className="text-gray-700 hover:text-black">
          Contact
        </a>
        <a href="/About" className="text-gray-700 hover:text-black">
          About
        </a>
        <a href="/Signup" className="text-gray-700 hover:text-black">
          Sign Up
        </a>
      </div>
      <div className='md:hidden lg:hidden space-x-2 '>
      <Link href="#Content" className="text-gray-700 hover:text-black underline underline-offset-4"> Home</Link>
        <a href="/Contact" className="text-gray-700 hover:text-black">
          Contact
        </a>
        <a href="/About" className="text-gray-700 hover:text-black">
          About
        </a>
        <a href="/Signup" className="text-gray-700 hover:text-black">
          Sign
        </a>

      </div>
      <div className="flex items-center space-x-4 sm:hidden md:flex lg:flex">
  <div className="lg:flex border rounded-md px-3 py-1 items-center">
    <input
      type="text"
      placeholder="What are you looking for?"
      className="outline-none text-sm w-full sm:hidden lg:block md:block"
    />
    <CiSearch
      className="hover:cursor-pointer"
      aria-label="Search"
    />
  </div>
     <div className="flex justify-center items-center space-x-4">
    <Link href="/Wishlist">
      <CiHeart className="hover:cursor-pointer" aria-label="wishlist" />
    </Link>
  </div>
  <div className="flex justify-center items-center space-x-4">
    <Link href="/Cart">
      <RiShoppingCart2Line className="hover:cursor-pointer" aria-label="Cart" />
    </Link> <Link href="/Account">
    <RiAccountCircleFill className="hover:cursor-pointer" aria-label="Account"/></Link>
  </div>
  </div>
</div>
<div className='flex justify-center items-center space-x-4 md:hidden lg:hidden'>
<Link href="/Wishlist">
      <CiHeart className="hover:cursor-pointer" aria-label="wishlist" />
    </Link>
    <Link href="/Cart">
      <RiShoppingCart2Line className="hover:cursor-pointer" aria-label="Cart" />
    </Link>
    <Link href="/Account">
    <RiAccountCircleFill className="hover:cursor-pointer" aria-label="Account" /></Link>
</div>

 <Image src ="/image/line.png" alt="" width={1170} height={2} className='mt-6 ml-6'/>
          </>
)
}
 
export default Hero;
