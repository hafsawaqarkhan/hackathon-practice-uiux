import React from 'react'
import Image from 'next/image'
const Feature = () => {
  return (
    <div>
      <Image src ="/image/feature.png" alt="" width = {125} height={40} className='m-6 pl-6'/>
      <h3 className='font-medium m-16 leading-[48px] text-[36px]'>New Arrival</h3>
      <div className="grid md:grid-cols-4 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 sm:grid-cols-1" >
  <div className="col-span-2 row-span-2">
    <Image src="/image/f1.png" alt="PlayStation 5" width={570} height={600} className="w-full h-full object-cover" />
  </div>
  <div className="col-span-2 ">
    <Image src="/image/f2.png" alt="Women's Collections" width={570} height={284} className="w-full h-full object-cover" />
  </div>
<div className="md:col-span-1 lg:col-span-1 sm:col-span-2">
    <Image src="/image/f3.png" alt="Speakers" width={270} height={284} className="w-full h-full object-cover" />
  </div>
  <div className="md:col-span-1 lg:col-span-1 sm:col-span-2">
    <Image src="/image/f4.png" alt="Perfume" width={270} height={284} className="w-full h-full object-cover" />
</div>
</div>


</div>
  )
}

export default Feature
