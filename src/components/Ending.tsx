import Image from 'next/image'
import React from 'react'

const Ending = () => {
  return (
  <>
    <div className='md:flex justify-center space-x-6 mt-20 mb-14 sm:hidden  lg:flex'> 
  <Image src="/image/end1.png" alt = "" width={249} height={161} className='gap-[24px]'/>
  <Image src="/image/end2.png" alt = "" width={262} height={161} className='gap-[24px]'/>
  <Image src="/image/end3.png" alt = "" width={256} height={161} className='gap-[24px]'/>
    </div>  
    <div className='md:hidden lg:hidden sm:block sm:mt-10  sm:space-y-6 sm:pl-20 sm:ml-8'>
        <Image src="/image/end1.png" alt = "" width={249} height={161} className='gap-[24px]'/>
  <Image src="/image/end2.png" alt = "" width={262} height={161} className='gap-[24px]'/>
  <Image src="/image/end3.png" alt = "" width={256} height={161} className='gap-[24px]'/></div>
        
   </>
  )
}

export default Ending
