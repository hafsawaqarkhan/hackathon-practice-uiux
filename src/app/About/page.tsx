import React from 'react'
import Image from 'next/image'
import Ending from '@/components/Ending'
function page() {
  return (
    <div><>
   <div className="relative flex flex-col-reverse md:flex-row items-start 
   md:items-center justify-between px-8 py-12 md:px-16 lg:px-24">
  <div className="z-10 max-w-full md:max-w-lg">
    <h3 className="font-medium text-[36px] md:text-[54px] leading-[44px] md:leading-[64px] mb-6">
      Our Story</h3>
    <p className="text-gray-700 text-sm md:text-base mb-4">
      Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an
      active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service
      solutions, Exclusive has 10,500 sellers and 300 brands, serving 3 million customers across the region.
    </p>
    <p className="text-gray-700 text-sm md:text-base">
      Exclusive offers more than 1 million products and is growing rapidly. The platform provides a
      diverse assortment of categories ranging from consumer goods to electronics, fashion, and more.
    </p>
  </div>
  <div className="relative w-full md:w-auto flex justify-center md:justify-end mb-8 md:mb-0">
    <Image
      src="/image/aboutimg.png"
      alt="Our Story"
      width={600}
      height={500}
      className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
    />
  </div>
</div>

</>
      <div className='grid grid-cols-1 md:grid-cols-4 md:mt-56 md:mb-10 lg:mt-56 lg:mb-10 sm:mt-30 sm:ml-20'>
     <Image src ="/image/a1.png" alt='' width={270} height={230} className='sm:mb-2'/> 
     <Image src ="/image/a2.png" alt='' width={270} height={230}  className='sm:mb-2'/> 
     <Image src ="/image/a3.png" alt='' width={270} height={230 }  className='sm:mb-2'/> 
     <Image src ="/image/a4.png" alt='' width={270} height={230}  className='sm:mb-2'/> 
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 mt-20 mb-20 pl-10 pr-10'>
     <Image src ="/image/AB1.png" alt='' width={370} height={564}/> 
     <Image src ="/image/AB2.png" alt='' width={370} height={564}/> 
     <Image src ="/image/AB3.png" alt='' width={370} height={564}/> 
    
      </div>

<Ending/>
    </div>
  )
}

export default page
