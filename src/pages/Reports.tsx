// src/pages/Reports.tsx
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';


const Reports: React.FC = () => {
  return (
    <div className="container pr-0 pl-0">
        <div className="flex items-center mb-6 bg-[#FFF] p-4 rounded-lg">
          <AiOutlineMenu className="text-xl text-[#082864] mr-2" />
        <h1 className="text-2xl text-[#082864] font-medium">Accounts</h1>
      </div>
    </div>
  );
};

export default Reports;
