import React, { useState, useEffect } from 'react';

interface Transaction {
  date: string;
  name: string;
  category: string[];
  amount: number;
}

const BudgetOverview: React.FC = () => {
  const [income, setIncome] = useState<number>(0);
  const [expenses, setExpenses] = useState<number>(0);
  const [savingsRate, setSavingsRate] = useState<number>(0);

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
        const aprilTransactions = data.latest_transactions.filter((transaction: Transaction) => {
          const transactionDate = new Date(transaction.date);
          return transactionDate.getMonth() === 3; // April is month 3 in Date (0-indexed)
        });

        const totalIncome = aprilTransactions
          .filter((transaction: Transaction) => transaction.category.includes('Payroll'))
          .reduce((acc: number, transaction: Transaction) => acc + Math.abs(transaction.amount), 0);

        const totalExpenses = aprilTransactions
          .filter((transaction: Transaction) => transaction.amount > 0 && !transaction.category.includes('Transfer'))
          .reduce((acc: number, transaction: Transaction) => acc + transaction.amount, 0);

        const totalSavings = totalIncome - totalExpenses;
        const rate = totalIncome ? (totalSavings / totalIncome) * 100 : 0;

        setIncome(totalIncome);
        setExpenses(totalExpenses);
        setSavingsRate(rate);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="flex flex-col ">
      <h2 className="text-2xl font-semibold text-[#082864] mb-4 text">April 2024</h2>
      <div className="flex space-x-4">
        <div className="flex flex-col items-center justify-center bg-white rounded w-2/6 py-7 shadow">
          <p className="text-[#499D8B] text-xl font-semibold">${income.toLocaleString()}</p>
          <p className='text-[#7886A4] text-xs font-semibold'>INCOME</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white rounded w-2/6 py-7 shadow">
          <p className="text-[#ED5585] text-xl font-semibold ">${expenses.toLocaleString()}</p>
          <p className='text-[#7886A4] text-xs font-semibold'>EXPENSES</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white rounded w-2/6 py-7 shadow">
          <p className='text-[#082864] text-xl font-semibold'>
            ${Math.abs(income - expenses).toLocaleString()}
          </p>
          <p className='text-[#7886A4] text-xs	font-semibold'>TOTAL SAVINGS</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white rounded w-2/6 py-7 shadow">
          <p className={savingsRate >= 0 ? "text-[#499D8B] text-xl font-semibold" : "text-[#ED5585] text-xl font-semibold"}>
            {savingsRate.toFixed(2)}%
          </p>
          <p className='text-[#7886A4] text-xs font-semibold'>SAVINGS RATE</p>
        </div>
      </div>
    </div>
  );
};

export default BudgetOverview;
