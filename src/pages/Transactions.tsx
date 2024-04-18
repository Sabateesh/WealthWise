// src/pages/Transactions.tsx
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

// Define the interface for a transaction
interface Transaction {
  date: string;
  name: string;
  category: string;
  amount: number;
}

const Transactions: React.FC = () => {
  // Use the interface to type the state
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/transactions', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTransactions(data.latest_transactions);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);
  return (
    <div className="container pl-0 pr-0">
      <div className="flex items-center mb-6 bg-[#FFF] p-4 rounded-lg">
        <AiOutlineMenu className="text-xl text-[#082864] mr-2" />
        <h1 className="text-2xl text-[#082864] font-medium">Transactions</h1>
      </div>
      <div className="flex">
        <div className="flex-grow pl-10">
          <div className="mb-4 flex justify-between">
            <div>
              <button className="text-gray-500 mr-4">Edit multiple</button>
              <select className="border border-gray-300 rounded px-2 py-1">
                <option>All transactions</option>
                {/* Populate other options here */}
              </select>
            </div>
            <div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Add transaction</button>
            </div>
          </div>

          {transactions.map((transaction, index) => (
            <div key={index} className="bg-white shadow rounded mb-2">
              <div className="p-4 border-b border-gray-200">
                <div className="flex justify-between">
                  <div>
                    <div className="text-gray-600">{transaction.date}</div>
                    <div className="text-lg">{transaction.name}</div>
                    <div className="text-gray-500">{transaction.category}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg text-gray-800">${transaction.amount}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
            <div className="text-gray-700 mb-2">Total transactions: <span className="font-bold">{transactions.length}</span></div>
            <div className="text-gray-700">Largest transaction: <span className="font-bold">$6,035.25</span></div> {/* Update this value based on actual data */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
