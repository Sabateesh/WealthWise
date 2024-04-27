// src/components/NetWorthCard.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const data = {
  labels: ['Mar 24', 'Mar 28', 'Apr 1', 'Apr 5', 'Apr 9', 'Apr 14'],
  datasets: [
    {
      label: 'Net Worth',
      data: [9700, 10200, 11700, 12500, 16700, 20000.00],
      fill: true,
      backgroundColor: 'rgba(173, 216, 230, 0.2)',
      borderColor: 'rgb(54, 162, 235)', 
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  scales: {
    x: {
      display: true,
    },
    y: {
      display: true,
    },
  },
  interaction: {
    mode: 'nearest',
    axis: 'x',
    intersect: false,
  },
  elements: {
    point:{
      radius: 0
    }
  }
};

const NetWorthCard: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg p-5 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-black">NET WORTH</h2>
        <div className="relative">
          <select className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
            <option>1 month</option>
          </select>
        </div>
      </div>
      <div className="mb-2">
        <div className="text-3xl font-bold text-black">$20,500.00</div>
        <div className="text-green-500">
          ↑ $6,275.11 (54.7%) 1 month change
        </div>
      </div>
      <div>
        <Line data={data} options={options}/>
      </div>
    </div>
  );
};

export default NetWorthCard;
