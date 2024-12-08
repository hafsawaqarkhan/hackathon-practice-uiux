import Image from 'next/image';
import React from 'react';

const Content2 = () => {
  const contentData = [
    { id: 1, name: "HAVIT HV-G92 Gamepad", price: "$120" ,price2: "$160", image: "/image/content1.png" },
    { id: 2, name: "AK-900 Wired Keyboard", price: "$960",price2: "$1160", image: "/image/content2.png" },
    { id: 3, name: "IPS LCD Gaming Monitor", price: "$370",price2: "$400", image: "/image/content3.png" },
    { id: 4, name: "S-Series Comfort Chair", price: "$375",price2: "$400", image: "/image/content4.png" },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-10 my-10">
        {contentData.map((content) => (
          <div key={content.id} className="bg-white p-5 rounded-md shadow-md text-center">
            <img
              src={content.image}
              alt={content.name}
              className="w-full rounded-md transition-transform duration-300 transform hover:scale-110"
            />
            <h3 className="mt-4 text-xl font-thin">{content.name}</h3>
            <div className='flex justify-center space-x-2'>
            <p className="mt-2 text-lg font-medium text-[#DB4444] ">{content.price}</p>
            <p className="mt-2 text-lg font-medium text-gray-400 line-through">{content.price2}</p>
          </div>
            </div>

            
        ))}
      </div><div className='flex justify-center m-4'>
      <button className='w-[236px] h-[56px]  text-center bg-[#DB4444] text-white'>View All Products</button>
      </div>
      
      <Image src ="/image/line.png" alt="" width={1170} height={2}/>
    </div>
  );
};

export default Content2;
