// src/pages/Transactions.tsx
import React from 'react';

const Transactions: React.FC = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl text-blue-500 font-bold mb-6">Transactions</h1>
      
      <div className="flex">
        <div className="flex-grow pl-10">
          <div className="mb-4 flex justify-between">
            <div>
              <button className="text-gray-500 mr-4">Edit multiple</button>
              <select className="border border-gray-300 rounded px-2 py-1">
                <option>All transactions</option>
                // ... other options ...
              </select>
            </div>
            <div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Add transaction</button>
            </div>
          </div>

          <div className="bg-white shadow rounded">
            <div className="p-4 border-b border-gray-200">
              <div className="flex justify-between">
                <div>
                  <div className="text-gray-600">April 13, 2024</div>
                  <div className="text-lg">Uber Eats</div>
                  <div className="text-gray-500">Restaurants & Bars</div>
                </div>
                <div className="text-right">
                  <div className="text-lg text-gray-800">$21.15</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/4 ml-4">
          <div className="bg-white p-4 shadow rounded mb-4">
            <h2 className="text-lg font-bold mb-4">Filter</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Search</label>
              <input type="text" className="w-full border border-gray-300 rounded px-2 py-1" />
            </div>
          </div>
          
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-lg font-bold mb-4">Summary</h2>
            <div className="text-gray-700 mb-2">Total transactions: <span className="font-bold">1,335</span></div>
            <div className="text-gray-700">Largest transaction: <span className="font-bold">$6,035.25</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
