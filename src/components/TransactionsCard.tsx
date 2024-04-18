import React, { useState, useEffect } from 'react';
import { MdTransferWithinAStation, MdOutlinePhonelinkErase, MdCreditCard } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

type Transaction = {
  date: string;
  name: string; 
  amount: number; 
  category: string;
};

const TransactionsCard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/transactions', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        setTransactions(data.latest_transactions);
      } catch (error) {
        console.error('There was an issue fetching the transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  const renderIcon = (category: string) => {
    switch (category) {
      case 'Transfer':
        return <MdTransferWithinAStation className="text-blue-500" />;
      case 'Electronics':
        return <MdOutlinePhonelinkErase className="text-green-500" />;
      case 'Credit Card':
        return <MdCreditCard className="text-red-500" />;
      default:
        return null;
    }
  };
  const handleViewAllClick = () => {
    navigate('/transactions');
  };

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Recent Transactions</h2>
          <button
          onClick={handleViewAllClick} 
          className="bg-transparent hover:bg-gray-200 font-semibold py-1 px-2 border border-gray-300 rounded"
          >
            View all
          </button>
        </div>
        {transactions.map((transaction, index) => (
          <div key={index} className="flex justify-between items-center py-3 border-b">
            <div className="flex items-center">
              {renderIcon(transaction.category)}
              <span className="font-medium">{transaction.name}</span>
              <span className="text-gray-500 mx-2">{transaction.category}</span>
            </div>
            <div className="flex items-center">
              <span className={`${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'} font-bold`}>
                ${transaction.amount.toFixed(2)}
              </span>
              <BsThreeDotsVertical className="text-gray-500 ml-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionsCard;
