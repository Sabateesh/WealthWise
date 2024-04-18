// src/components/TransactionsCard.tsx
import React from 'react';
import { MdTransferWithinAStation, MdOutlinePhonelinkErase, MdCreditCard } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';

const TransactionsCard: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Most recent</h2>
          <button className="bg-transparent hover:bg-gray-200 font-semibold py-1 px-2 border border-gray-300 rounded">
            All transactions
          </button>
        </div>
        <div>
          {[
            { label: 'From', category: 'Transfer', amount: '+$20.00' },
            { label: 'Interac', category: 'Transfer', amount: '$1,500.00' },
            { label: 'Apple', category: 'Electronics', amount: '$10.16' },
            { label: 'WealthSimple', category: 'Transfer', amount: '$17.06' },
            { label: 'Mobile Banking Transfer', category: 'Credit Card', amount: '$20.00' },
          ].map((transaction, index) => (
            <div key={index} className="flex justify-between items-center py-3 border-b">
              <div className="flex items-center">
                <span className="mr-3">
                  {transaction.category === 'Transfer' && <MdTransferWithinAStation className="text-blue-500" />}
                  {transaction.category === 'Electronics' && <MdOutlinePhonelinkErase className="text-green-500" />}
                  {transaction.category === 'Credit Card' && <MdCreditCard className="text-red-500" />}
                </span>
                <span className="font-medium">{transaction.label}</span>
                <span className="text-gray-500 mx-2">{transaction.category}</span>
              </div>
              <div className="flex items-center">
                <span className={`${transaction.amount.startsWith('+') ? 'text-green-500' : 'text-red-500'} font-bold`}>
                  {transaction.amount}
                </span>
                <BsThreeDotsVertical className="text-gray-500 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 py-3">
        <button className="text-blue-500 hover:text-blue-600">View all 1,345 transactions</button>
      </div>
    </div>
  );
};

export default TransactionsCard;
