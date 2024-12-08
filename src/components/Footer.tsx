import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 md:py-8">
      <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        
        <div>
          <h3 className="text-lg font-medium">Exclusive</h3>
          <p className="mt-2">Subscribe</p>
          <p className="text-gray-400">Get 10% off your first order</p>
          <form className="mt-4 flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l bg-gray-800 text-gray-200 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2  text-white  rounded-r">
              &rarr;</button>
          </form></div>
        <div>
          <h3 className="text-lg font-medium">Support</h3>
          <p className="mt-2 text-gray-400">
            111 Bijoy Sarani, Dhaka, <br />
            DH 1515, Bangladesh.
          </p>
          <p className="mt-2 text-gray-400">exclusive@gmail.com</p>
          <p className="mt-2 text-gray-400">+88015-88888-9999</p>
        </div>
        <div>
          <h3 className="text-lg font-medium">Account</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">My Account</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Login / Register</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Cart</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Wishlist</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Shop</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium">Quick Link</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Terms of Use</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">FAQ</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium">Download App</h3>
          <p className="mt-2 text-gray-400">Save $3 with App New User Only</p>
          <div className="mt-4 flex items-center space-x-4">
            <Image
              src="/image/googlePlay.png"
              alt="Google Play"
              width={112}
              height={40}
              className="w-28"
            />
            <Image
              src="/image/app.png"
              alt="App Store"
              width={112}
              height={40}
              className="w-28"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <Image
          src="/image/socials.png"
          alt="Social Icons"
          width={168}
          height={24}
          className="text-white"
        />
      </div>
    </footer>
  );
};

export default Footer;
