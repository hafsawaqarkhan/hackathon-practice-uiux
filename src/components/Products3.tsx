import Image from 'next/image';
import React from 'react';
import { FcRating } from 'react-icons/fc';

const Product3 = () => {
  const productsData = [
    { id: 1, name: "Breed Dry Dog Food", price: "$100" , image: "/image/p1.png" },
    { id: 2, name: "CANON EOS DSLR Camera", price: "$360", image: "/image/p2.png" },
    { id: 3, name: "ASUS FHD Gaming Laptop", price: "$700", image: "/image/p3.png" },
    { id: 4, name: "Curology Product Set ", price: "$500", image: "/image/p4.jpeg" },
    { id: 5, name: "Kids Electric Car", price: "$960", image: "/image/p5.png" }, 
    { id: 6, name: "Jr. Zoom Soccer Cleats", price: "$1160", image: "/image/p6.png" },
    { id: 7, name: "GP11 Shooter USB Gamepad", price: "$660", image: "/image/p7.png" },
    { id: 8, name: "Quilted Satin Jacket", price: "$660", image: "/image/p8.png" },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-10 my-10">
        {productsData.map((products) => (
          <div key={products.id} className="bg-white p-5 rounded-md shadow-md text-center">
            <img
              src={products.image}
              alt={products.name}
              className="w-full rounded-md transition-transform duration-300 transform hover:scale-110"
            />
            <h3 className="mt-4 text-xl font-thin">{products.name}</h3>
            <div className='flex justify-center space-x-2'>
            <p className="mt-2 text-lg font-medium text-[#DB4444] ">{products.price}</p>
          </div>
            </div>

        
        ))}
      </div>
      <div className='flex justify-center m-4'>
      <button className='w-[236px] h-[56px]  text-center bg-[#DB4444] text-white'>View All Products</button>
      </div>
    </div>
  );
};

export default Product3;
