// src/components/BudgetCard.tsx
import React, { useState, useEffect } from 'react';

interface ProgressBarProps {
  title: string;
  value: number;
  budget: number;
  color: string;
}

interface Transaction {
  date: string;
  name: string;
  category: string[];
  amount: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ title, value, budget, color }) => {
  const percentage = Math.min(100, (value / budget) * 100);
  return (
    <div className="mb-2  pl-4 mr-4">
      <div className="flex justify-between mb-1">
        <span className="text-m mb-2 font-sm pt-4 text-gray-700">{title}</span>
        <span className="text-sm font-medium text-gray-700"></span>
      </div>
      <div className="w-full bg-gray-200 rounded h-2.5">
        <div className={`h-2.5 ${color} rounded`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

const BudgetCard: React.FC = () => {
  const [income, setIncome] = useState<number>(0);
  const [incomeBudget, setIncomeBudget] = useState<number>(0);
  const [expenses, setExpenses] = useState<number>(0);


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
        const startOfApril = new Date(new Date().getFullYear(), 3, 1);
        const endOfApril = new Date(new Date().getFullYear(), 3, 30);

        const aprilTransactions = data.latest_transactions.filter((transaction: Transaction) => {
          const transactionDate = new Date(transaction.date);
          return transactionDate >= startOfApril && transactionDate <= endOfApril;
        });

        const payrollTransactions = data.latest_transactions.filter((transaction: Transaction) =>
          transaction.category.includes('Payroll')
        );

        const now = new Date();
        const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());

        const totalIncome = payrollTransactions
          .filter((transaction: Transaction) => {
            const transactionDate = new Date(transaction.date);
            return transactionDate > lastMonth && transactionDate < now;
          })
          .reduce((acc: number, transaction: Transaction) => acc + Math.round(Math.abs(transaction.amount)), 0);

        setIncome(totalIncome);
        setIncomeBudget(totalIncome);

        const expenseTransactions = aprilTransactions.filter((transaction: Transaction) => 
          transaction.amount > 0 && !transaction.category.includes('Transfer')
        );
        const totalExpenses = expenseTransactions.reduce((acc: number, transaction: Transaction) => acc + Math.round(transaction.amount), 0);
        setExpenses(totalExpenses);

        console.log('Expenses for April:');
        totalExpenses.forEach((transaction: Transaction) => {
          console.log(`Name: ${transaction.name}, Amount: $${transaction.amount}`);
        });

      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  const expensesBudget = expenses;

  return (
    <div className="p-1">
      <div className="bg-white shadow rounded-lg pt-5 pb-5 max-w-4xl">
        <h2 className="text-lg font-semi-bold border-b pl-4  pb-2 text-black">Budget - April</h2>
        <ProgressBar title="Income" value={income} budget={incomeBudget} color="bg-[#18D2A5]" />
        <h2 className="text-lg border-b pl-4 font-medium pb-4 text-black">${income} earned</h2>
        <ProgressBar title="Expenses" value={expenses} budget={incomeBudget} color="bg-[#F0648C]" />
        <h2 className="text-lg  pl-4 font-medium mb-4 text-black">${expensesBudget} spent</h2>

      </div>
    </div>
  );
};

export default BudgetCard;
