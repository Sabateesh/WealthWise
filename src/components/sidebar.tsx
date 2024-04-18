import React, { useState, useEffect } from 'react'

import { IoHomeSharp, IoBarChart, IoGiftOutline } from "react-icons/io5";
import { BsStack } from "react-icons/bs";
import { FaCreditCard, FaChartPie, FaRegMap, FaThumbsUp } from "react-icons/fa";
import { FaBullseye, FaArrowTrendUp } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import Image from 'next/image';
import { IoChatbubbleOutline } from "react-icons/io5";
import { useDisclosure } from '@chakra-ui/react';
import HelpSupportModal from './HelpSupportModel';
import { Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import PlaidLinkButton from './PlaidLinkButton';
import { IoIosAdd } from "react-icons/io";

const Sidebar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [linkToken, setLinkToken] = useState<string | null>(null);
  useEffect(() => {
    const getLinkToken = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/create_link_token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setLinkToken(data.link_token);
        } catch (error) {
            console.error('There was an issue fetching the link token:', error);
        }
    };

    getLinkToken();
  }, []);


  const onSuccess = (publicToken: string, metadata: any) => {
    // Send the publicToken to your app server
    console.log('publicToken:', publicToken);
  };

  const onExit = (error: any, metadata: any) => {
    // Handle the exit event
    if (error) {
      console.error('Link flow exited with error:', error);
    }
  };
  return (
    <div className="flex flex-col h-screen bg-[#1348A5] text-white">
        <div className="flex items-center justify-between p-1">
        <Image
          src= '/wealthsimple.png'
          alt="Icon description"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>

      <div className="px-4 py-4 border-t border-blue-700">
        <div className="text-sm">Free trial</div>
        <div className="w-full bg-blue-300 rounded-full h-2 my-2">
          <div className="bg-green-500 h-2 rounded-full" style={{ width: '70%' }}></div>
        </div>
        <div className="text-xs">7 days left</div>
      </div>

      <div className="flex flex-col">
        <Link to="/" className="flex items-center py-3.5 pl-4 hover:bg-blue-700 rounded-xl">
          <IoHomeSharp className="mr-4" /> Dashboard
        </Link>    
        <Link to="/accounts" className="flex items-center pl-4 py-3.5 hover:bg-blue-700 rounded-xl">
          <BsStack className="mr-4" /> Accounts
        </Link>
        <Link to="/transactions" className="flex items-center pl-4 py-3.5 hover:bg-blue-700 rounded-xl">
          <FaCreditCard className="mr-4" /> Transactions
        </Link>

        <Link to="/cashflow" className="flex items-center py-4 pl-4 hover:bg-blue-700 rounded-xl">
          <IoBarChart className="mr-4" /> Cashflow
        </Link>
        <Link to="/reports" className="flex items-center py-4 pl-4 hover:bg-blue-700 rounded-xl">
          <FaChartPie className="mr-4" /> Reports
        </Link>
        <Link to="/budget" className="flex items-center py-4 pl-4 hover:bg-blue-700 rounded-xl">
          <FaRegMap className="mr-4" /> Budget
        </Link>
        <Link to="/recurring" className="flex items-center py-4 pl-4 hover:bg-blue-700 rounded-xl">
          <CiCalendar className="mr-4" /> Recurring
        </Link>
        <Link to="/goals" className="flex items-center py-4 pl-4 hover:bg-blue-700 rounded-xl">
          <FaBullseye className="mr-4" /> Goals
        </Link>
        <Link to="/investments" className="flex items-center py-4 pl-4 hover:bg-blue-700 rounded-xl">
          <FaArrowTrendUp className="mr-4" /> Investments
        </Link>
        <Link to="/advice" className="flex items-center py-4 pl-4 hover:bg-blue-700 rounded-xl">
          <FaThumbsUp className="mr-4" /> Advice
        </Link>
      {linkToken && (
      <PlaidLinkButton
        token={linkToken}
        onSuccess={onSuccess}
        onExit={onExit}
      >
        Connect a Bank Account
      </PlaidLinkButton>
    )}



      </div>

      <div className="flex flex-col mt-auto">
        <div className="mb-100">
          <a href="#" className="flex items-center py-4 pl-4 hover:bg-blue-700 rounded">
            <IoGiftOutline className="mr-4" /> Get 1 Month Free
          </a>
        <ChakraProvider>
          <Button onClick={onOpen} className="flex items-center py-4 pl-4 hover:bg-blue-700 rounded">
            <IoChatbubbleOutline className='mr-4'/> Help & Support
            <HelpSupportModal isOpen={isOpen} onClose={onClose} />
          </Button>
        </ChakraProvider>
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
