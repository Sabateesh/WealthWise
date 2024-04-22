import React, { useState, useEffect } from 'react'
import { IoHomeSharp, IoBarChart, IoGiftOutline } from "react-icons/io5";
import { BsStack } from "react-icons/bs";
import { FaCreditCard, FaChartPie, FaRegMap, FaThumbsUp, FaSignOutAlt } from "react-icons/fa";
import { FaBullseye, FaArrowTrendUp } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import Image from 'next/image';
import { IoChatbubbleOutline } from "react-icons/io5";
import { useDisclosure } from '@chakra-ui/react';
import HelpSupportModal from './HelpSupportModel';
import { Link } from 'react-router-dom';
import { ChakraProvider, Menu, MenuButton, MenuList, MenuItem, Button} from '@chakra-ui/react';
import PlaidLinkButton from './PlaidLinkButton';
import { IoMdSettings } from "react-icons/io";
import { ChevronDownIcon, MoonIcon,ExternalLinkIcon,RepeatIcon,EditIcon } from '@chakra-ui/icons';
import { BsLightningChargeFill } from "react-icons/bs";




const Sidebar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [linkToken, setLinkToken] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string>('Dashboard'); // Define the state with a default value

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

  const handleMenuItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  const isActive = (itemName: string) => {
    if (itemName === activeItem) {
      return 'bg-[#0F3D8C] text-[#FFF]'; 
    } else {
      return 'hover:bg-[#2B5AAE] text-[#BAC8E5]';
    }
  };
  

  const onSuccess = async (publicToken: string, metadata: any) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/set_access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ public_token: publicToken })
      });
  
      if (!response.ok) {
        throw new Error('Failed to exchange public token');
      }
  
      const data = await response.json();
      console.log('Access token set successfully:', data);
    } catch (error) {
      console.error('Error during public token exchange:', error);
    }
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

      <div className="flex flex-col border-t p-2 border-blue-700">
      <Link to="/" className={`flex items-center py-3.5 pl-4 ${isActive('Dashboard')}`} onClick={() => handleMenuItemClick('Dashboard')}>
          <IoHomeSharp className="mr-4" /> Dashboard
        </Link>    
        <Link to="/accounts" className={`flex items-center pl-4 py-3.5  rounded ${isActive('accounts')}`} onClick={() => handleMenuItemClick('accounts')}>
          <BsStack className="mr-4" /> Accounts
        </Link>
        <Link to="/transactions" className={`flex items-center pl-4 py-3.5 rounded ${isActive('transactions')}`} onClick={() => handleMenuItemClick('transactions')}>
          <FaCreditCard className="mr-4" /> Transactions
        </Link>
        <Link to="/cashflow" className={`flex items-center pl-4 py-3.5 rounded ${isActive('cashflow')}`} onClick={() => handleMenuItemClick('cashflow')}>
          <IoBarChart className="mr-4" /> Cashflow
        </Link>
        <Link to="/reports" className={`flex items-center pl-4 py-3.5 rounded ${isActive('reports')}`} onClick={() => handleMenuItemClick('reports')}>
          <FaChartPie className="mr-4" /> Reports
        </Link>

        <Link to="/budget" className={`flex items-center pl-4 py-3.5 rounded ${isActive('budget')}`} onClick={() => handleMenuItemClick('budget')}>
          <FaRegMap className="mr-4" /> Budget
        </Link>

        <Link to="/recurring" className={`flex items-center pl-4 py-3.5 rounded ${isActive('recurring')}`} onClick={() => handleMenuItemClick('recurring')}>
          <CiCalendar className="mr-4" /> Recurring
        </Link>

        <Link to="/goals" className={`flex items-center pl-4 py-3.5 rounded ${isActive('goals')}`} onClick={() => handleMenuItemClick('goals')}>
          <FaBullseye className="mr-4" /> Goals
        </Link>

        <Link to="/investments" className={`flex items-center pl-4 py-3.5 rounded ${isActive('investments')}`} onClick={() => handleMenuItemClick('investments')}>
          <FaArrowTrendUp className="mr-4" /> Investments
        </Link>

        <Link to="/advice" className={`flex items-center pl-4 py-3.5  rounded ${isActive('advice')}`} onClick={() => handleMenuItemClick('advice')}>
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
          <Button onClick={onOpen}  colorScheme='white' variant='ghost' width='180px' className=" hover:bg-blue-700">
            <IoChatbubbleOutline className='mr-4'/> Help & Support
            <HelpSupportModal isOpen={isOpen} onClose={onClose} />
          </Button>
        </ChakraProvider>
          </div>
      </div>

      <div className="flex items-center px-4 py-2 mt-5 border-t border-blue-700">
        <div className="w-8 h-8 bg-red-500 rounded-full mr-2"></div>
      <ChakraProvider>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant='ghost' color={'#FFF'}>
            Sabateesh
          </MenuButton>
            <MenuList>
              <MenuItem icon={<MoonIcon />} color={'black'}>
                Dark Mode
              </MenuItem>
              <MenuItem icon={<BsLightningChargeFill size={18}/>} color={'black'}>
                What's new
              </MenuItem>
              <MenuItem icon={<IoMdSettings size={18}  />} color={'black'}>
                Settings
              </MenuItem>
              <MenuItem icon={<FaSignOutAlt size={18} />} color={'#ED5585'}>
                Sign out
              </MenuItem>
            </MenuList>
        </Menu>
      </ChakraProvider>
        <div className="w-4 h-4 bg-gray-400 rounded-full ml-auto"></div>
      </div>
    </div>

  );
};

export default Sidebar;
