import Image from 'next/image';
import React from 'react';

const Product2 = () => {
  const productData = [
    { id: 1, name: "The north coat", price: "$260" ,price2: "$360", image: "/image/cart.png" },
    { id: 2, name: "Gucci duffle bag", price: "$960",price2: "$1170", image: "/image/cart1.png" },
    { id: 3, name: "RGB liquid CPU Cooler", price: "$160",price2: "$170", image: "/image/cart2.png" },
    { id: 4, name: "Small BookSelf", price: "$360",price2: "", image: "/image/cart3.png" },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-10 my-10">
        {productData.map((product) => (
          <div key={product.id} className="bg-white p-5 rounded-md shadow-md text-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-md transition-transform duration-300 transform hover:scale-110"
            />
            <h3 className="mt-4 text-xl font-thin">{product.name}</h3>
            <div className='flex justify-center space-x-2'>
            <p className="mt-2 text-lg font-medium text-[#DB4444] ">{product.price}</p>
            <p className="mt-2 text-lg font-medium text-gray-400 line-through">{product.price2}</p>
          </div>
            </div>

        
        ))}
      </div>
      <Image src="/image/products.png" alt="" height={500} width={1170} className='m-8'/>
      <div>
      <Image src ="/image/product3.png" alt="" width = {130} height={70} className='m-6 pl-6'/>
      <h3 className='font-medium m-8 leading-[48px] text-[36px]'>Explore Our Products</h3>
      </div>
    </div>
  );
};

export default Product2;
