// src/pages/Transactions.tsx
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

interface Transaction {
  date: string;
  name: string;
  category: string;
  amount: number;
}

const Transactions: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10;

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
        // Sort transactions by date from newest to oldest
        const sortedTransactions = data.latest_transactions.sort((a: Transaction, b: Transaction) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        setTransactions(sortedTransactions);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pageCount = Math.ceil(filteredTransactions.length / transactionsPerPage);
  const changePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  return (
    <div className="pr-0 pl-0 mr-0 ml-0 w-full">
      <div className="flex items-center mb-6 bg-[#FFF] p-4 rounded-lg">
        <AiOutlineMenu className="text-xl text-[#082864] mr-2" />
        <h1 className="text-2xl text-[#082864] font-medium">Transactions</h1>
      </div>
      <div className="flex">
        <div className="flex-grow pl-10">
          <div className="mb-4 flex justify-between">
            <div>
              <input
                type="text"
                placeholder="Search by name or category"
                className="border border-gray-300 rounded px-2 py-1 mr-4"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Add transaction</button>
            </div>
          </div>

          {currentTransactions.map((transaction, index) => (
            <div key={index} className="bg-white shadow rounded mb-2">
              <div className="p-4 border-b border-gray-200">
                <div className="flex justify-between">
                  <div>
                    <div className="text-gray-600">{transaction.date}</div>
                    <div className="text-lg">{transaction.name}</div>
                    <div className="text-gray-500">{transaction.category}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg text-gray-800">${transaction.amount.toFixed(2)}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-center mt-4 mb-4">
            {Array.from({ length: pageCount }, (_, i) => i + 1).map(number => (
              <button key={number} onClick={() => changePage(number)} className={`mx-2 ${currentPage === number ? 'text-blue-700 font-bold' : 'text-gray-500'}`}>
                {number}
              </button>
            ))}
          </div>
        </div>

        <div className="w-1/4 ml-4">
          <div className="bg-white p-4 shadow rounded mb-4">
            <h2 className="text-lg font-bold mb-4">Filter</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Search</label>
              <input type="text" className="w-full border border-gray-300 rounded px-2 py-1" value={searchQuery} onChange={handleSearchChange} />
            </div>
          </div>
          
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-lg font-bold mb-4">Summary</h2>
            <div className="text-gray-700 mb-2">Total transactions: <span className="font-bold">{filteredTransactions.length}</span></div>
            <div className="text-gray-700">Largest transaction: <span className="font-bold">$6,035.25</span> {/* Update this value based on actual data */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
