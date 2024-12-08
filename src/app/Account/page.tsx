import React from 'react';

function Account() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 p-4">
      <aside className="w-full md:w-1/4 bg-white shadow-md rounded-lg p-4 mb-6 md:mb-0"><nav>
          <ul><li className="font-semibold text-gray-900 mb-4">Manage My Account</li>
        <li className="mb-2 text-red-500">My Profile</li>
            <li className="mb-2 text-gray-600 hover:text-gray-900 cursor-pointer"> Address Book</li>
            <li className="mb-4 text-gray-600 hover:text-gray-900 cursor-pointer"> My Payment Options</li>
            <li className="font-semibold text-gray-900 mb-4">My Orders</li>
            <li className="mb-2 text-gray-600 hover:text-gray-900 cursor-pointer">My Returns </li>
            <li className="mb-4 text-gray-600 hover:text-gray-900 cursor-pointer"> My Cancellations </li>
            <li className="font-semibold text-gray-900 mb-4">My Wishlist</li> </ul> </nav></aside>
      <main className="w-full md:w-3/4 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-red-500 mb-4">Edit Your Profile</h2>
         <form><div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"><div>
              <label className="block text-gray-700 font-medium">First Name</label>
              <input type="text" placeholder="Md"className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"/>
            </div>
            <div> <label className="block text-gray-700 font-medium">Last Name</label>
              <input type="text" placeholder="Rimel"
         className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"/>  </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input type="email" placeholder="rimel111@gmail.com" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"/>
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Address</label>
              <input type="text" placeholder="Kingston, 5236, United States"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"/>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Current Password</label>
            <input type="password" placeholder="Current Password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 font-medium">New Password</label>
              <input type="password" placeholder="New Password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"/>
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Confirm New Password</label>
              <input type="password" placeholder="Confirm New Password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"/>
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100">Cancel</button>
            <button type="submit"
    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600" >  Save Changes </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Account;
