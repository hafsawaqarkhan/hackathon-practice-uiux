import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function cart () {
  return (
    <div>
      <div className='flex justify-center align items-center lg:space-x-48 lg:mt-16 lg:mb-10 sm:space-x-12 sm:mt-8
      sm:mb-6 md:space-x-36 md:mt-12 md:mb-8 sm:ml-4 h-16 font-medium rounded bg-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300
        border text-xl  mx-auto  border-gray-200 bg-opacity-5'>
        <h1>Product</h1>
        <h2>Price </h2>
        <h3>Quantity</h3>
        <h4> SubTotal</h4>
</div>
<div className='flex justify-center align items-center lg:space-x-48 lg:mt-16 lg:mb-10 sm:space-x-12 sm:mt-8
      sm:mb-6 md:space-x-36 md:mt-12 md:mb-8 sm:ml-4 h-16 font-medium rounded bg-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300
        border text-xl  mx-auto  border-gray-200 bg-opacity-5'>
<Image src="/image/lcd.png" alt='' width={54} height={54} />LCD  Monitor
<h1> $650</h1><h1 className='border border-black h-8 w-10 text-center'>01&gt;</h1><h1>$650</h1>
      </div>
      <div className='flex justify-center align items-center lg:space-x-48 lg:mt-16 lg:mb-10 sm:space-x-12 sm:mt-8
      sm:mb-6 md:space-x-36 md:mt-12 md:mb-8 sm:ml-4 h-16 font-medium rounded bg-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300
        border text-xl  mx-auto  border-gray-200 bg-opacity-5'>
<Image src="/image/gamepad.png" alt='' width={54} height={54} />H1  Gamepad
<h1> $550</h1><h1 className='border border-black h-8 w-10 text-center'>02&gt;</h1><h1>$1100</h1>
      </div>
      <div className="flex justify-between">
  <button className="border border-black text-center ml-4 h-[56px] w-[218px] mb-4 rounded hover:bg-[#DB4444]">Return To Shop</button>
  <button className="border border-black text-center mr-4 h-[56px] w-[196px] mb-4 rounded hover:bg-[#DB4444]">Update Cart</button>
</div>

<div className='flex md:space-x-4 lg:space-x-4 sm:space-x-6 md:mb-48 lg:mb-48 sm:mb-10'>
<input placeholder='Coupon Code' className='w-[300px] h-[56px] border border-gray-700 ml-4 mt-4 p-4  rounded '/>
<button className='sm:hidden md:block lg:block h-[56px] w-[211px] border bg-[#DB4444] rounded mt-4 p-4 text-white '>Apply Coupon</button>
<button className='sm:block md:hidden lg:hidden h-[56px] w-[200px] border bg-[#DB4444] rounded mt-4 p-4 text-white '>Apply Coupon</button>

 <div className="w-80 p-6 border border-gray-300 rounded-lg mt-6 ml-4  sm:hidden md:block lg:block ">
    <h2 className="text-xl font-semibold mb-2">Cart Total</h2>
    <div className="space-y-2">
        <p className="text-lg">Subtotal: <span className="ml-24">$1750</span></p><hr/>
        <p className="text-lg">Shipping: <span className="ml-24">Free</span></p><hr/>
        <p className="text-lg">Total: <span className="ml-32">$1750</span></p><hr/>
    </div><Link href="/Checkout">
    <button className="mt-6 w-full py-2 bg-[#DB4444] hover:bg-[#a63d3d] text-white rounded-lg">
        Proceed to Checkout
    </button></Link>
</div>
 
 </div>
 <div className="w-80 p-6 border border-gray-300 rounded-lg  ml-6 right-4 sm:block md:hidden lg:hidden">
    <h2 className="text-xl font-semibold mb-2">Cart Total</h2>
    <div className="space-y-2">
        <p className="text-lg">Subtotal: <span className="ml-24">$1750</span></p><hr/>
        <p className="text-lg">Shipping: <span className="ml-24">Free</span></p><hr/>
        <p className="text-lg">Total: <span className="ml-24">$1750</span></p><hr/>
    </div><Link href="/Checkout">
    <button className="mt-6 w-full py-2 bg-[#DB4444] hover:bg-[#a63d3d] text-white rounded-lg">
        Proceed to Checkout
    </button></Link>
</div>
 
 
 
  </div>
  )
}
