// src/pages/Dashboard.tsx
import React from 'react';
import BudgetCard from '../components/BudgetCard';
import NetWorthCard from '../components/NetWorth';
import { AiOutlineMenu } from 'react-icons/ai';
import GoalsCard from '../components/GoalsCard';

const Dashboard: React.FC = () => {
  return (
    <div className="container">
      <div className="flex items-center mb-6 bg-[#FFF] p-4 rounded-lg">
        <AiOutlineMenu className="text-3xl text-[#082864] mr-2" />
        <h1 className="text-2xl text-[#082864] font-medium">Dashboard</h1>
      </div>
      <div className="flex flex-col md:flex-row -mx-2">
        <div className="px-2 mb-4 flex-1">
          <BudgetCard />
          <GoalsCard />
        </div>
        <div className="px-2 mb-4 flex-1">
          <NetWorthCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
