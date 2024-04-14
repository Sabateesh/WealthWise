import React from 'react';
import { IoHomeSharp, IoBarChart, IoGiftOutline } from "react-icons/io5";
import { BsStack } from "react-icons/bs";
import { FaCreditCard, FaChartPie, FaRegMap, FaThumbsUp } from "react-icons/fa";
import { FaBullseye, FaArrowTrendUp } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import Image from 'next/image';
import wealthsimple from '../../public/wealthsimple.png'
const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-blue-800 text-white">
        <div className="flex items-center justify-between p-4">
        <Image
          src= '/wealthsimple.png'
          alt="Icon description"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>

      <div className="px-4 py-2">
        <div className="text-sm">Free trial</div>
        <div className="w-full bg-blue-300 rounded-full h-2 my-2">
          <div className="bg-green-500 h-2 rounded-full" style={{ width: '70%' }}></div>
        </div>
        <div className="text-xs">7 days left</div>
      </div>

      <div className="flex flex-col px-4">
        <a href="#" className="flex items-center py-2 hover:bg-blue-700 rounded">
          <IoHomeSharp className="mr-2" /> Dashboard
        </a>        
        <a href="#" className="flex items-center py-2 hover:bg-blue-700 rounded">
          <BsStack className="mr-2" /> Accounts
        </a>
        <a href="#" className="flex items-center py-2 hover:bg-blue-700 rounded">
          <FaCreditCard className="mr-2" /> Transactions
        </a>

        <a href="#" className="flex items-center py-2 hover:bg-blue-700 rounded">
          <IoBarChart className="mr-2" /> Cashflow
        </a>
        <a href="#" className="flex items-center py-2 hover:bg-blue-700 rounded relative">
          <FaChartPie className="mr-2" /> Reports
          <span className="absolute top-0 right-0 bg-blue-400 text-xs rounded px-2 py-1">BETA</span>
        </a>
        <a href="#" className="flex items-center py-2 hover:bg-blue-700 rounded">
          <FaRegMap className="mr-2" /> Budget
        </a>
        <a href="#" className="flex items-center py-2 hover:bg-blue-700 rounded">
          <CiCalendar className="mr-2" /> Recurring
        </a>
        <a href="#" className="flex items-center py-2 hover:bg-blue-700 rounded">
          <FaBullseye className="mr-2" /> Goals
        </a>
        <a href="#" className="flex items-center py-2 hover:bg-blue-700 rounded">
          <FaArrowTrendUp className="mr-2" /> Investments
        </a>
        <a href="#" className="flex items-center py-2 hover:bg-blue-700 rounded">
          <FaThumbsUp className="mr-2" /> Advice
        </a>
      </div>

      <div className="flex flex-col px-4 mt-auto">
        <div className="mb-100">
          <a href="#" className="flex items-center py-2 hover:bg-blue-700 rounded">
            <IoGiftOutline className="mr-2" /> Get 1 Month Free
          </a>
          <a href="#" className="py-2 hover:bg-blue-700 rounded">Help & Support</a>
          </div>
      </div>

      <div className="flex items-center px-4 py-2 mt-5 border-t border-blue-700">
        <div className="w-8 h-8 bg-red-500 rounded-full mr-2"></div>
          Sabateesh
        <div className="w-4 h-4 bg-gray-400 rounded-full ml-auto"></div>
      </div>
    </div>
  );
};

export default Sidebar;
