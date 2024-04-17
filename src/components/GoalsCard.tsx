// src/components/GoalsCard.tsx
import React from 'react';

const GoalsCard: React.FC = () => {
  const goalAmount = 12142;
  const goalProgressAmount = 5398.51;
  const goalProgressPercentage = (goalProgressAmount / goalAmount) * 100;

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="text-md text-gray-500 font-semibold">GOALS</h3>
      <h2 className="text-xl text-gray-500 font-bold my-2">Your top priorities</h2>
      <div className="flex items-center my-4">
        <div
          className="w-16 h-16 bg-cover bg-center mr-4 rounded"
          style={{ backgroundImage: 'url(/house.jpg)' }}
        />
        <div>
          <div className="text-md text-gray-700">DOWN PAYMENT</div>
          <div className="text-2xl text-gray-500 font-bold">${goalAmount.toLocaleString()}</div>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-green-500 h-2.5 rounded-full"
          style={{ width: `${goalProgressPercentage}%` }}
        ></div>
      </div>
      <div className="text-green-500 text-md mt-2">
        ↑ ${goalProgressAmount.toLocaleString()} ({goalProgressPercentage.toFixed(1)}%) This month
      </div>
      <button className="w-full mt-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        View all goals
      </button>
    </div>
  );
};

export default GoalsCard;

