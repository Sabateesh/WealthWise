import React, { useState, useEffect } from 'react';
import { MdTransferWithinAStation, MdOutlinePhonelinkErase, MdCreditCard } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoRestaurantSharp } from "react-icons/io5";
import { RiBillLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

type Transaction = {
  date: string;
  name: string;
  amount: number;
  category: string[];
};

const TransactionsCard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [error, setError] = useState<string | null>(null);
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

        if (data.error) {
          throw new Error(data.error);
        }

        

        const sortedTransactions = data.latest_transactions
        .map((transaction: Transaction) => {
          const customNameReplacements = {
            "UBER CANADA/UBEREATSTORON": "Uber-Eats",
            "Miscellaneous Payment ETT*TheoRENT": "Theo",
            "OPOS 12.95 ExpressVPN 310-6": "Express-VPN",
            "OPOS StuDocuCOM Amste": "StuDocuCOM",
            "WITHDRAWAL FREE INTERAC E-TRANSFER": "E-TRANSFER"


          };
          const customName = Object.entries(customNameReplacements).find(([key,]) => 
            transaction.name.includes(key));
      
          return {
            ...transaction,
            name: customName ? customNameReplacements[customName[0]] :
                  transaction.name.replace(/^(POS Purchase|OPOS|Purchase|POS)\s*/, ''),
            category: [transaction.category[0]]
          };
        })
        .sort((a: Transaction, b: Transaction) => Date.parse(b.date) - Date.parse(a.date))
        .slice(0, 5); // Take the top 5 sorted by most recent
      
      setTransactions(sortedTransactions);
      } catch (error) {
        console.error('There was an issue fetching the transactions:', error);
        setError('Failed to load transactions. Please try again.'); 
      }
    };

    fetchTransactions();
  }, []);

  const renderIcon = (category: string) => {
    switch (category) {
      case 'Transfer': return <MdTransferWithinAStation className="text-blue-500 mr-3" />;
      case 'Electronics': return <MdOutlinePhonelinkErase className="text-green-500 mr-3" />;
      case 'Credit Card': return <MdCreditCard className="text-red-500 mr-3" />;
      case 'Restaurants': return <IoRestaurantSharp className="text-blue-500 mr-3" />;
      case 'Food and Drink': return <IoRestaurantSharp className="text-blue-500 mr-3" />;
      case 'Service': return <RiBillLine className="text-blue-500 mr-3" />;
      default: return null;
    }
  };

  const handleViewAllClick = () => {
    navigate('/transactions');
  };

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="pt-4 pr-4 pl-4 pb-2 border-b flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className="text-sm font-bold text-[#7886A4]">TRANSACTIONS</h2>
          <h2 className="text-lg font-semibold text-[#082864]">Most Recent</h2>
        </div>
          <button
            onClick={handleViewAllClick}
            className="bg-transparent hover:bg-gray-200 font-semibold py-1 px-2 border border-gray-300 rounded"
          >
            View all
          </button>
      </div>
        {error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          transactions.map((transaction, index) => (
            <div key={index} className="flex justify-between items-center pl-4 py-3 border-b">
              <div className="flex items-center">
                {renderIcon(transaction.category[0])}
                <span className="font-normal">{transaction.name}</span>
              </div>
              <div className="flex items-center justify-center w-full">
                <span className="text-gray-500 mx-auto">{transaction.category[0]}</span>
              </div>
              <div className="flex items-center pr-4">
                <span className={`${transaction.amount < 0 ? 'text-green-500' : 'text-[#082864]'} font-normal`}>
                  ${transaction.amount.toFixed(2)}
                </span>
                <BsThreeDotsVertical className="text-gray-500 ml-2" />
              </div>
            </div>
          ))
        )}
      </div>
  );
};

export default TransactionsCard;
