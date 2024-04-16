// src/pages/Dashboard.tsx
import React from 'react';
import BudgetCard from '../components/BudgetCard';
import NetWorthCard from '../components/NetWorth';
const Dashboard: React.FC = () => {
  return (
    <div className="container">
      <h1 className="text-3xl text-blue-500 font-bold mb-6">Dashboard</h1>
      <div className="flex flex-col md:flex-row -mx-2">
        <div className="px-2 mb-4 flex-1">
          <BudgetCard />
        </div>
        <div className="px-2 mb-4 flex-1">
          <NetWorthCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
