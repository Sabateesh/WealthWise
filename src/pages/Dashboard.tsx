// src/pages/Dashboard.tsx
import React from 'react';
import BudgetCard from '../components/BudgetCard';

const Dashboard: React.FC = () => {
  return (
    <div className="container p-4">
      <h1 className="text-3xl text-blue-500 font-bold mb-6">Dashboard</h1>
      <BudgetCard />
    </div>
  );
};

export default Dashboard;
