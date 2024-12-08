import React from 'react'
import Image from 'next/image'
const Products = () => {
  return (
    <div>
      <Image src ="/image/product.png" alt="" width = {125} height={40} className='m-6 pl-6'/>
      <div className='flex'>
      <h3 className='font-thin m-16 leading-[48px] text-[36px] sm:text-[24px] sm:leading-[24px]'>Best Selling Products</h3>
      <button className='w-[150px] h-[56px] m-8 absolute right-4 text-center bg-[#DB4444] text-white'>View All </button>
      </div>
    


      </div>
  )
}

export default Products
