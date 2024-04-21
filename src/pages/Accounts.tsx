// src/pages/Accounts.tsx
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import CashCard from '../components/Cash';


const Accounts: React.FC = () => {
  return (
    <div className="pr-0 pl-0 mr-0 ml-0 w-full">
        <div className="flex items-center mb-6 bg-[#FFF] p-4 rounded-lg">
          <AiOutlineMenu className="text-xl text-[#082864] mr-2" />
        <h1 className="text-2xl text-[#082864] font-medium">Accounts</h1>
        </div>
        <div className="mt-6 p-3">
          <CashCard/>
        </div>
    </div>
  );
};

export default Accounts;
