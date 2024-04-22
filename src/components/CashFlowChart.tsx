import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface CashFlowData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
  }[];
}

interface Transaction {
  date: string;
  name: string;
  category: string[];
  amount: number;
}

const CashflowChart: React.FC = () => {
  const [cashFlowData, setCashFlowData] = useState<CashFlowData>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/transactions', {
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const transactions: Transaction[] = data.latest_transactions;

        // Organize transactions by month
        const incomeByMonth: { [key: string]: number } = {};
        const expensesByMonth: { [key: string]: number } = {};

        transactions.forEach((transaction) => {
            const month = new Date(transaction.date).toLocaleString('default', { month: 'short', year: 'numeric' });
            if (transaction.category.includes('Payroll')) {
              // Assuming a negative amount indicates income
              if (transaction.amount < 0) {
                incomeByMonth[month] = (incomeByMonth[month] || 0) + Math.abs(transaction.amount);
              }
            } else if (!transaction.category.includes('Transfer') && transaction.amount > 0) {
              // Expenses are positive amounts not marked as 'Transfer'
              expensesByMonth[month] = (expensesByMonth[month] || 0) + transaction.amount;
            }
        });

        const sortedMonths = Object.keys({ ...incomeByMonth, ...expensesByMonth })
        .map(month => new Date(month))
        .sort((a, b) => a.getTime() - b.getTime())
        .map(date => date.toLocaleString('default', { month: 'short', year: 'numeric' }));

        const incomeData = sortedMonths.map(month => incomeByMonth[month] || 0);
        const expensesData = sortedMonths.map(month => -(expensesByMonth[month] || 0));

        const chartData = {
          labels: sortedMonths,
          datasets: [
            {
              label: 'Income',
              data: incomeData,
              backgroundColor: '#18D2A5',
              borderColor: '#18D2A5',
            },
            {
              label: 'Expenses',
              data: expensesData,
              backgroundColor: '#F0648C',
              borderColor: '#F0648C',
            },
          ],
        };

        setCashFlowData(chartData);

      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <Bar
  data={cashFlowData}
  options={{
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
    backgroundColor: 'rgb(255, 255, 0)'
  }}
/>
    </div>
  );
};

export default CashflowChart;