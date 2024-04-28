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
    title: 'Get everything in one place',
    description: 'Putting all your information in one place is the first step to understanding your finances and seeing where you are. It also enables Monarch to deliver the best advice for you.',
    icon: <FaHome />,
    tasksCount: 8,
    status: 'NOT STARTED'
  },
  {
    title: 'Review cash flow setup',
    description: 'Tracking cash flow allows you to see where money comes in and goes out. Income includes paychecks, interest, and any other places you..',
    icon: <FaCar />,
    tasksCount: 5,
    status: 'NOT STARTED'
  },
  {
    title: 'Review cash flow setup',
    description: 'Tracking cash flow allows you to see where money comes in and goes out. Income includes paychecks, interest, and any other places you..',
    icon: <FaCar />,
    tasksCount: 5,
    status: 'NOT STARTED'
  },
  {
    title: 'Review cash flow setup',
    description: 'Tracking cash flow allows you to see where money comes in and goes out. Income includes paychecks, interest, and any other places you..',
    icon: <FaCar />,
    tasksCount: 5,
    status: 'NOT STARTED'
  },
  {
    title: 'Review cash flow setup',
    description: 'Tracking cash flow allows you to see where money comes in and goes out. Income includes paychecks, interest, and any other places you..',
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

const GoalsList2: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold pb-4 pl-4 pt-4 w-3/5 bg-[#FFF] rounded-t-lg border-b">Essential advice</h2>
      {goalsData.map((goal, index) => (
        <GoalCard key={index} {...goal} />
      ))}
    </div>
  );
};

export default GoalsList2;
