import Image from 'next/image'
import React from 'react'

function Content() {
  return (
    <div>
      <div className='flex sm:flex justify-center'>
        <Image src="/image/pic1.png" alt="" height={240} width={174} className='m-8 pl-6   '/>
        
        <Image src="/image/pic2.png" alt="" height={340} width={674} className='m-8 pl-5 sm:hidden md:block lg:block'/>
      
      </div>  <Image src="/image/pic2.png" alt="" height={340} width={450} className='m-8 pl-5 md:hidden lg:hidden'/>
      <Image src="/image/pic3.png" alt="" height={40} width={100} className='m-16'/>
      <div className='flex'>
      <h3 className='font-thin m-16 leading-[48px] text-[36px]'>Flash Sales</h3>
      <Image src="/image/pic4.png" alt="" height={150} width={300} className='m-16 sm:hidden md:block lg:block'/>
      
  </div>
   <Image src="/image/pic4.png" alt="" height={150} width={300} className='m-8 sm:block md:hidden lg:hidden'/>
    </div>
  )
}

export default Content
