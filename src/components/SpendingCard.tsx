import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

interface Transaction {
  date: string;
  amount: number;
}

interface ChartData {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }>;
}

const getWeekFromDate = (dateInput: string): number => {
  const date = new Date(dateInput);
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000 + firstDayOfYear.getDay() + 1;
  return Math.ceil(pastDaysOfYear / 7);
};

const SpendingCard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [{
      label: 'Weekly Spending',
      data: [],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
    }]
  });

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

  useEffect(() => {
    if (transactions.length > 0) {
      const spendingByWeek: { [key: string]: number } = {};
      transactions.forEach(transaction => {
        if (transaction.amount > 0) {
          const week = `Week ${getWeekFromDate(transaction.date)}`;
          if (!spendingByWeek[week]) {
            spendingByWeek[week] = 0;
          }
          spendingByWeek[week] += transaction.amount;
        }
      });

      const labels = Object.keys(spendingByWeek).sort();
      const data = labels.map(label => spendingByWeek[label]);

      setChartData({
        labels,
        datasets: [{
          label: 'Weekly Spending',
          data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
        }]
      });
    }
  }, [transactions]);

  return (
    <div>
      <h2 className="text-lg font-bold mb-3">Weekly Spending</h2>
      <Line data={chartData} options={{
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }} />
    </div>
  );
};

export default SpendingCard;
