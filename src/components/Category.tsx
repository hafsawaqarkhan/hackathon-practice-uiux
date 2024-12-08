import React from 'react'
import Image from 'next/image'
const Category = () => {
  return (
    <div>
      <div>
      <Image src="/image/category.png" alt="" height={240} width={174} className='m-8 pl-6   '/>
      <h3 className='font-thin m-16 leading-[48px] text-[36px]'>Browse By Category</h3>
      </div>
    </div>
  )
}

export default Category
