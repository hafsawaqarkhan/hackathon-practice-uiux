import React from 'react'
import Image from 'next/image'
export default function page() {
  return (
    <div>
         <h1 className='ml-10 mt-10'>Wishlist (4)</h1>
    <div className='flex justify-end pr-10 mb-6'>
   <button className='border border-black text-center h-[56px] w-[223px]  hover:bg-[#DB4444]'>Move All to Bag</button>
    </div>
    <div className='grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 md:ml-6 lg:ml-6 sm:ml-24 '>
    <Image src = "/image/w1.png" alt ="" width={270} height={322} className='sm:mt-10'/>
    <Image src = "/image/w2.png" alt ="" width={270} height={322} className='sm:mt-10' />
    <Image src = "/image/w3.png" alt ="" width={270} height={322} className='sm:mt-10'/>
    <Image src = "/image/w4.png" alt ="" width={270} height={322} className='sm:mt-10'/>
    </div>
<Image src ="/image/just.png" alt="" width={150} height={40} className='ml-10 mt-10'/>
<div className='flex justify-end pr-10 mb-6'>
   <button className='border border-black text-center h-[56px] w-[223px]  hover:bg-[#DB4444]'>See All </button>
    </div>
    <div className='grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 md:ml-6 lg:ml-6 sm:ml-24 mb-10 '>
    <Image src = "/image/j1.png" alt ="" width={270} height={322} className='sm:mt-10'/>
    <Image src = "/image/j2.png" alt ="" width={270} height={322} className='sm:mt-10 ' />
    <Image src = "/image/j3.png" alt ="" width={270} height={322} className='sm:mt-10 '/>
    <Image src = "/image/j4.png" alt ="" width={270} height={322} className='sm:mt-10 '/>
    </div>
    </div>
  )
}
