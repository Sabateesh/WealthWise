// src/components/BudgetCard.tsx
import React from 'react';

interface ProgressBarProps {
  title: string;
  value: number;
  budget: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ title, value, budget, color }) => {
  const percentage = Math.min(100, (value / budget) * 100);
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{title}</span>
        <span className="text-sm font-medium text-gray-700">${value.toLocaleString()} / ${budget.toLocaleString()} budget</span>
      </div>
      <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700">
        <div className={`h-2.5 ${color} rounded`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

const BudgetCard: React.FC = () => {
  return (
    <div className="p-1">
      <div className="bg-white shadow rounded-lg p-5 max-w-4xl">
        <h2 className="text-lg font-bold mb-4 text-black">Budget - April</h2>
        <ProgressBar title="Income" value={1470} budget={1520} color="bg-green-500" />
        <ProgressBar title="Expenses" value={459} budget={253} color="bg-red-500" />
        <ProgressBar title="Goals" value={0} budget={2500} color="bg-blue-500" />
      </div>
    </div>
  );
};

export default BudgetCard;
