import React from 'react';
import { IoHomeSharp, IoBarChart, IoGiftOutline } from "react-icons/io5";
import { BsStack } from "react-icons/bs";
import { FaCreditCard, FaChartPie, FaRegMap, FaThumbsUp } from "react-icons/fa";
import { FaBullseye, FaArrowTrendUp } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import Image from 'next/image';
import { Link } from 'react-router-dom';

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
        <Link to="/" className="flex items-center py-2 hover:bg-blue-700 rounded">
          <IoHomeSharp className="mr-2" /> Dashboard
        </Link>    
        <Link to="/accounts" className="flex items-center py-2 hover:bg-blue-700 rounded">
          <BsStack className="mr-2" /> Accounts
        </Link>
        <Link to="/transactions" className="flex items-center py-2 hover:bg-blue-700 rounded">
          <FaCreditCard className="mr-2" /> Transactions
        </Link>

        <Link to="/cashflow" className="flex items-center py-2 hover:bg-blue-700 rounded">
          <IoBarChart className="mr-2" /> Cashflow
        </Link>
        <Link to="/reports" className="flex items-center py-2 hover:bg-blue-700 rounded">
          <FaChartPie className="mr-2" /> Reports
          <span className="absolute top-0 right-0 bg-blue-400 text-xs rounded px-2 py-1">BETA</span>
        </Link>
        <Link to="/budget" className="flex items-center py-2 hover:bg-blue-700 rounded">
          <FaRegMap className="mr-2" /> Budget
        </Link>
        <Link to="/recurring" className="flex items-center py-2 hover:bg-blue-700 rounded">
          <CiCalendar className="mr-2" /> Recurring
        </Link>
        <Link to="/goals" className="flex items-center py-2 hover:bg-blue-700 rounded">
          <FaBullseye className="mr-2" /> Goals
        </Link>
        <Link to="/investments" className="flex items-center py-2 hover:bg-blue-700 rounded">
          <FaArrowTrendUp className="mr-2" /> Investments
        </Link>
        <Link to="/advice" className="flex items-center py-2 hover:bg-blue-700 rounded">
          <FaThumbsUp className="mr-2" /> Advice
        </Link>
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
