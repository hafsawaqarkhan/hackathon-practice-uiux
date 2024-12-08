import React from 'react'
import Image from 'next/image'

function Page() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-6'>
      <div className='space-y-6'>
        <h1 className='text-3xl font-medium mb-6 ml-10'>Billing Details</h1>
        <div className='space-y-4 ml-10'>
          <div>
            <label className='text-gray-400 block'>Full Name*</label>
            <input type="text" required className='bg-[#F5F5F5] rounded w-full md:w-[470px] h-[50px] p-3'/>
          </div>
          <div>
            <label className='text-gray-400 block'>Company Name*</label>
            <input type="text" required className='bg-[#F5F5F5] rounded w-full md:w-[470px] h-[50px] p-3'/>
          </div>
          <div>
            <label className='text-gray-400 block'>Street Address*</label>
            <input type="text" required className='bg-[#F5F5F5] rounded w-full md:w-[470px] h-[50px] p-3'/>
          </div>
          <div>
            <label className='text-gray-400 block'>Apartment, floor, etc. (optional)</label>
            <input type="text" className='bg-[#F5F5F5] rounded w-full md:w-[470px] h-[50px] p-3'/>
          </div>
          <div>
            <label className='text-gray-400 block'>Town/City*</label>
            <input type="text" required className='bg-[#F5F5F5] rounded w-full md:w-[470px] h-[50px] p-3'/>
          </div>
          <div>
            <label className='text-gray-400 block'>Phone Number*</label>
            <input type="text" required className='bg-[#F5F5F5] rounded w-full md:w-[470px] h-[50px] p-3'/>
          </div>
          <div>
            <label className='text-gray-400 block'>Email Address*</label>
            <input type="email" required className='bg-[#F5F5F5] rounded w-full md:w-[470px] h-[50px] p-3'/>
          </div>
        </div>

        <div className='mt-4'>
          <Image src="/image/bill.png" alt="Billing Image" height={24} width={451} className='w-full ml-10'/>
        </div>
      </div>

      {/* Right Section - Product */}
      <div className='sm:hidden md:block lg:block'>
        <div className='mt-28 flex justify-start items-start space-x-4 text-center'><Image src="/image/lcd.png" alt="LCD Monitor" width={54} height={54} />
    <span className='text-xl mt-2'>LCD Monitor</span> <h1 className='mt-2 pl-24'>$650</h1></div>
   
      <div className='mt-10 flex justify-start items-start space-x-4 text-center'><Image src="/image/gamepad.png" alt="LCD Monitor" width={54} height={54} />
    <span className='text-xl mt-2'>H1 Gamepad</span> <h1 className='mt-2 pl-24'>$1150</h1>
    </div>
    <div className='mt-10 flex justify-start items-start space-x-4 text-center'>
    <span className='text-sm mt-2'>Subtotal:</span> <h1 className='mt-2 pl-56'>$1750</h1>
    </div> 
    <hr className='w-96 mt-4'/>
    <div className='mt-6 flex justify-start items-start space-x-4 text-center'>
    <span className='text-sm mt-2'>Shipping:</span> <h1 className='mt-2 pl-56'>Free</h1>
    </div> 
    <hr className='w-96 mt-4'/>
    <div className='mt-4 flex justify-start items-start space-x-4 text-center'>
    <span className='text-sm mt-2'>Total:</span> <h1 className='mt-2 pl-64'>$1750</h1>
    </div> 
   
    <div>
      <div className="flex items-center justify-between mb-4">
        <label className="flex items-center cursor-pointer">
          <input type="radio" className="w-5 h-5 border-gray-300 mr-3"/>
          <span className="text-gray-700">Bank</span>
        </label>
        <div className="flex items-center mr-36 mt-4 ">
          <Image src="/image/cards.png" alt="" width={192} height={28} />
        </div>
      </div>
      <div className="flex items-center">
        <label className="flex items-center cursor-pointer">
          <input
            type="radio" className="w-5 h-5 border-gray-300 mr-3"/>
          <span className="text-gray-700">Cash on delivery</span>
        </label>
      </div>
    </div>
  <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <input type="text"
            placeholder="Coupon code"
            className="w-[300px] mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none"
          />
          <button className="px-4 py-3 bg-[#DB4444] text-white font-medium mt-2 rounded-lg">Apply Coupon</button>
        </div>
     <button className="w-[190px] py-3 bg-[#DB4444] text-white font-medium rounded-lg hover:bg-red-500">
          Reset
        </button>
      </div>

     </div>
   
      
    </div>
  )
}

export default Page;
