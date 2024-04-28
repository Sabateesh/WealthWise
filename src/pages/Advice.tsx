// src/pages/Advice.tsx
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import GoalsList from '../components/GoalsList';
import GoalsList2 from '../components/GoalsList2';

const Advice: React.FC = () => {
  return (
    <div className="pr-0 pl-0 mr-0 ml-0 w-full">
        <div className="flex items-center mb-6 bg-[#FFF] p-4 rounded-lg">
          <AiOutlineMenu className="text-xl text-[#082864] mr-2" />
        <h1 className="text-2xl text-[#082864] font-medium">Advice</h1>
      </div>
      <div className="mt-6 p-3 ">
          <h1 className="text-[#082864] text-2xl pl-4 pb-3 font-semibold ">Recommendations</h1>
          <GoalsList/>
      </div>
      <div className="mt-2 p-3">
          <GoalsList2/>
      </div>
    </div>
  );
};

export default Advice;
