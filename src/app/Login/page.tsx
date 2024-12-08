import React from 'react';

function Login() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="flex-1 bg-blue-100 flex justify-center items-center p-6">
        <div className="max-w-md">
          <img 
            src="/image/s1.png"  alt="" className="w-full h-auto"/>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Log in to Exclusive</h2>
          <p className="text-gray-500 mb-6">Enter your details below</p>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400">Email or Phone Number</label>
              <input 
                type="email" 
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                required 
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-400">Password</label>
              <input 
                type="password" 
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                required 
              />
            </div>
            <button 
              type="submit"
              className="w-[143px] bg-red-500 text-white py-2 rounded-md shadow hover:bg-red-600"
            >Log in
            </button>
          </form>
          <p className='text-red-500 mt-2'>Forget password?</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
