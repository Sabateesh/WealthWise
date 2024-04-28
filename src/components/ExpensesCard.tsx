import React, { useState, useEffect } from 'react';
import { FaMoneyBillWave, FaRegCalendarAlt } from 'react-icons/fa';

interface Transaction {
  date: string;
  category: string[];
  amount: number;
}

interface ExpensesData {
  [category: string]: number;
}

const ProgressBar: React.FC<{ title: string, value: number, maxValue: number }> = ({ title, value, maxValue }) => {
  const percentage = Math.min(100, (value / maxValue) * 100);
  
  return (
    <div className="my-2">
      <div className="w-full bg-[#FFF] rounded-md overflow-hidden">
        <div className="flex items-center bg-[#DBF6EE] h-14" style={{ width: `${percentage}%` }}>
          <div className="flex justify-between w-full px-4">
            <span>{title}</span>
            <span>${value.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExpensesCard: React.FC = () => {
  const [expenses, setExpenses] = useState<ExpensesData>({});
  const [totalExpenses, setTotalExpenses] = useState<number>(0);

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
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const currentMonthTransactions = data.latest_transactions.filter((transaction: Transaction) => {
          const transactionDate = new Date(transaction.date);
          return transactionDate.getMonth() === new Date().getMonth() && transaction.amount > 0;
        });

        const categorizedExpenses: ExpensesData = currentMonthTransactions.reduce((acc: ExpensesData, transaction: Transaction) => {
          if (!transaction.category.includes('Transfer')) {
            const category = transaction.category[0]; 
            acc[category] = (acc[category] || 0) + transaction.amount;
          }
          return acc;
        }, {});

        setExpenses(categorizedExpenses);
        setTotalExpenses(Object.values(categorizedExpenses).reduce((acc, expense) => acc + expense, 0));
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  const maxValue = Math.max(...Object.values(expenses), 1);

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-[#082864]">Expenses</h2>
        <FaRegCalendarAlt className="text-gray-400"/>
      </div>
      {Object.entries(expenses).map(([category, amount], index) => (
        <ProgressBar key={index} title={category} value={amount} maxValue={maxValue} />
      ))}
      <div className="mt-4 pt-2 border-t">
        <div className="flex justify-between">
          <span className="text-gray-500">Total Expenses</span>
          <span className="font-semibold text-[#082864]">${totalExpenses.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ExpensesCard;
