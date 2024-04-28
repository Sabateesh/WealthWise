import React from 'react';
import { FaHome, FaCar } from 'react-icons/fa';

type Goal = {
  title: string;
  description: string;
  icon: JSX.Element;
  tasksCount: number;
  status: 'NOT STARTED' | 'IN PROGRESS' | 'COMPLETED';
};

const goalsData: Goal[] = [
  {
    title: 'Buy a home',
    description: 'Buying a home is a big goal and can take a lot of planning. This advice can help guide you through the process. As you save for a down payment...',
    icon: <FaHome />,
    tasksCount: 8,
    status: 'NOT STARTED'
  },
  {
    title: 'Buy a car',
    description: 'As you consider getting a car, there are a few key decisions to make such as buying vs leasing or paying in cash, getting a loan or having...',
    icon: <FaCar />,
    tasksCount: 5,
    status: 'NOT STARTED'
  }
];

const GoalCard: React.FC<Goal> = ({ title, description, icon, tasksCount, status }) => {
  return (
    <div className="goal-card p-4 bg-[#FFF] hover:bg-[#F0F4F8] shadow-md border-b w-3/5">
      <div className="flex items-start">
        <div className="icon-container p-2 rounded-full bg-blue-100 text-blue-500">
          {icon}
        </div>
        <div className="ml-4">
          <h3 className="text-[#082864] font-semibold">{title}</h3>
          <p className="text-sm text-[#7886A4]">{description}</p>
          <p className="text-sm font-bold text-[#7886A4] mt-2">{status} · {tasksCount} TASKS TO COMPLETE</p>
        </div>
      </div>
    </div>
  );
};

const GoalsList: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold pb-4 pl-4 pt-4 w-3/5 bg-[#FFF] rounded-t-lg border-b">Prioritized by you</h2>
      {goalsData.map((goal, index) => (
        <GoalCard key={index} {...goal} />
      ))}
    </div>
  );
};

export default GoalsList;
