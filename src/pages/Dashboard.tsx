// src/pages/Dashboard.tsx
import React from 'react';
import BudgetCard from '../components/BudgetCard';
import NetWorthCard from '../components/NetWorth';
import { AiOutlineMenu } from 'react-icons/ai';
import GoalsCard from '../components/GoalsCard';
import InvestmentsCard from '../components/InvestmentsCard';
import TransactionsCard from '../components/TransactionsCard';
import HoldingsCard from '../components/HoldingsCard';
import CashCard from '../components/Cash';
import IdentityCard from '../components/Identitiy';


const Dashboard: React.FC = () => {
  return (
    <div className=" pr-0 pl-0 mr-0 ml-0 w-full">
      <div className="flex items-center mb-6 bg-[#FFF] p-4 rounded-lg">
        <AiOutlineMenu className="text-xl text-[#082864] mr-2" />
        <h1 className="text-2xl text-[#082864] font-medium">Dashboard</h1>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-6 mb-8 pl-2">
        <div className="md:flex-1">
          <BudgetCard />
          <div className="mt-6">
            <GoalsCard />
          </div>
          <div className="mt-6">
            <TransactionsCard />
          </div>
        </div>
        <div className="md:flex-1 pr-3">
          <NetWorthCard />
          <div className="mt-6 pr-3">
            <InvestmentsCard />
          </div>
          <div className="mt-6 pr-3">
            <HoldingsCard/>
          </div>
          <div className="mt-6 pr-3">
          </div>
          <div className="mt-6 pr-3">
            <IdentityCard/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
