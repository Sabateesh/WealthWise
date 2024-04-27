import React, { useState, useEffect } from 'react';
import { FaMoneyBillWave, FaRegCalendarAlt } from 'react-icons/fa';

interface Transaction {
  date: string;
  category: string[];
  amount: number;
  personal_finance_category?: {
    detailed: string;
  };
}

interface IncomeData {
  payroll: number;
  other: number;
}
const ProgressBar: React.FC<{ title: string, value: number, maxValue: number }> = ({ title, value, maxValue }) => {
    const percentage = Math.max((value / maxValue) * 100, 20); 
  
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
  
  

const IncomeCard: React.FC = () => {
  const [income, setIncome] = useState<IncomeData>({ payroll: 0, other: 0 });
  const [totalIncome, setTotalIncome] = useState<number>(0);

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
        calculateIncome(data.latest_transactions);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  const calculateIncome = (transactions: Transaction[]) => {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    let payrollTotal = 0;
    let otherTotal = 0;

    transactions.forEach(transaction => {
      const date = new Date(transaction.date);
      if (date.getMonth() === currentMonth && date.getFullYear() === currentYear) {
        if (transaction.category.includes('Payroll')) {
          payrollTotal += Math.abs(transaction.amount);
        } else if (transaction.personal_finance_category?.detailed.startsWith('INCOME')) {
          otherTotal += Math.abs(transaction.amount);
        }
      }
    });

    setIncome({
      payroll: payrollTotal,
      other: otherTotal
    });
    setTotalIncome(payrollTotal + otherTotal);
  };

  const maxValue = Math.max(income.payroll, income.other, 1);


  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold text-[#082864]">Income</h2>
        <h2 className="border-b"></h2>
        <FaRegCalendarAlt className="text-gray-400"/>
      </div>
      <ProgressBar title="💵 Paychecks" value={income.payroll} maxValue={maxValue} />
      <ProgressBar title="💵 Other Income" value={income.other} maxValue={maxValue} />
      <div className="mt-4 pt-2 border-t">
      </div>
    </div>
  );
};

export default IncomeCard;
