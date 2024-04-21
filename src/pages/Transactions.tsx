// src/pages/Transactions.tsx
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

interface Transaction {
  date: string;
  name: string;
  category: string[];
  amount: number;
}
interface GroupedTransactions {
  [key: string]: Transaction[];
}

const Transactions: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 8;

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

  const formatCategories = (categories: string[]): string => {
    return categories.join(', '); // Joins all categories with a comma
  };

  const groupByDate = (transactions: Transaction[]): GroupedTransactions => {
    return transactions.reduce((acc, current) => {
      const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      const date = new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(current.date));
      acc[date] = acc[date] || [];
      acc[date].push(current);
      return acc;
    }, {} as GroupedTransactions);
  };


  const filteredTransactions = transactions.filter(transaction =>
    transaction.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.category.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const groupedTransactionsArray = Object.entries(groupByDate(filteredTransactions));

  const pageCount = Math.ceil(groupedTransactionsArray.length / transactionsPerPage);
  const changePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastGroup = currentPage * transactionsPerPage;
  const indexOfFirstGroup = indexOfLastGroup - transactionsPerPage;
  const currentGroupedTransactions = groupedTransactionsArray.slice(indexOfFirstGroup, indexOfLastGroup);

  return (
    <div className="pr-0 pl-0 mr-0 ml-0 w-full">
      <div className="flex items-center mb-6 bg-[#FFF] p-4 rounded-lg">
        <AiOutlineMenu className="text-xl text-[#082864] mr-2" />
        <h1 className="text-2xl text-[#082864] font-medium">Transactions</h1>
      </div>
      <div className="flex">
        <div className="flex-grow pl-5">
          
        <div className=" bg-white p-4 rounded-t-lg shadow flex justify-between items-center">
        <div className="relative">
          <select className="border border-gray-300 rounded px-4 py-2 appearance-none">
            <option>All transactions</option>
            {/* More filter options */}
          </select>
          {/* Dropdown arrow icon */}
        </div>
        <div className="flex">
          <button className="border border-gray-300 rounded px-4 py-2 mr-2">
            Edit multiple
          </button>
          <div className="relative">
            <select 
              className="border border-gray-300 rounded px-4 py-2 appearance-none"
            >
              <option value="dateDesc">Sort</option>
              <option value="dateAsc">Date Ascending</option>
              <option value="amountDesc">Amount Descending</option>
              {/* More sort options */}
            </select>
            {/* Dropdown arrow icon */}
          </div>
        </div>
      </div>

          {currentGroupedTransactions.map(([date, dailyTransactions]) => (
            <div key={date} className="bg-white shadow rounded">
              <div className="border-b border-gray-200">
                <div className="text-[#7886A4] font-medium bg-[#F0F4F8] pl-3 pb-1.5 pt-1.5">{date} </div>
                {dailyTransactions.map((transaction, index) => (
                  <div key={index} className="flex justify-between mb-2 py-2 border-b">
                    <div className="text-lg ml-3 ">{transaction.name}</div>
                    <div className="text-right mr-5">
                      <div className={`text-lg ${transaction.amount < 0 ? 'text-[#499D8B]' : 'text-gray-800'}`}>
                        ${Math.abs(transaction.amount).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
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
