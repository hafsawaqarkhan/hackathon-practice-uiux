import React from 'react'
import Image from 'next/image'
const Category2 = () => {
  return (
    <div>
        <div className='grid grid-cols-3 md:grid-cols-6'>
        <Image  src="/image/category1.png" alt="" width={170} height={145} className='hover:bg-[#DB4444] sm:gap-4'/>
        <Image src="/image/category2.png" alt="" width={170} height={145} className='hover:bg-[#DB4444] sm:gap-4'/>
        <Image src="/image/category3.png" alt="" width={170} height={145} className='hover:bg-[#DB4444] sm:gap-4'/>
        <Image src="/image/category4.png" alt="" width={170} height={145} className='hover:bg-[#DB4444] sm:gap-4'/>
        <Image src="/image/category5.png" alt="" width={170} height={145} className='hover:bg-[#DB4444] sm:gap-4'/>
        <Image src="/image/category6.png" alt="" width={170} height={145} className='hover:bg-[#DB4444] sm:gap-4'/>
        </div>

        <Image src ="/image/line.png" alt="" width={1170} height={2} className='m-8'/>
    </div>
  )
}

export default Category2
