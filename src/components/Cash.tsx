import React, { useState, useEffect } from 'react';
import { Avatar } from "@material-tailwind/react";


type AccountBalance = {
  account_id: string;
  balances: {
    available: number;
    current: number;
    iso_currency_code: string;
    limit: number | null;
  };
  mask: string;
  name: string;
  official_name: string;
  subtype: string;
  type: string;
  institution_id: string;
};

const CashCard: React.FC = () => {
  const [accountBalances, setAccountBalances] = useState<AccountBalance[]>([]);
  const [logoUrl, setLogoUrl] = useState<string>(''); 
  const localStorageKey = 'accountBalances';

  useEffect(() => {
    const fetchAccountBalances = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/balance');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAccountBalances(data.accounts || []);
        localStorage.setItem(localStorageKey, JSON.stringify(data.accounts));
        
        if (data.item.institution_id === 'ins_38') {
          setLogoUrl('scotiabank.jpg');
        }
      } catch (error) {
        console.error('Error fetching account balances:', error);
      }
    };

    const savedBalances = localStorage.getItem(localStorageKey);
    if (savedBalances) {
      try {
        const balances = JSON.parse(savedBalances);
        if (balances) {
          setAccountBalances(balances);
        } else {
          fetchAccountBalances();
        }
      } catch (error) {
        console.error('Error parsing account balances:', error);
        fetchAccountBalances();
      }
    } else {
      fetchAccountBalances();
    }

    const intervalId = setInterval(fetchAccountBalances, 1800000);
    return () => clearInterval(intervalId);
  }, []);

  const totalCash = accountBalances.length > 0 
  ? accountBalances.reduce((acc, account) => acc + account.balances.current, 0)
  : 0;

  return (
    <div className="cash-card-container bg-white shadow rounded-lg w-2/3">
      <h2 className="text-sm text-[#7886A4] pl-4 pt-4 font-bold">CASH</h2>
      <div className="text-xl font-semibold mb-2 pl-4 pb-2 text-[#082864] border-b">${totalCash.toLocaleString('en-US', { maximumFractionDigits: 2 })}</div>
      {accountBalances.map((account) => (
        <div key={account.account_id} className="flex justify-between items-center mb-2 py-5 rounded border-b bg-[#FFF]">
          <div className="flex">
          {logoUrl && <img src={logoUrl} alt="Institution Logo" className="h-8 w-10 mt-3 rounded-full" />}
          <div>
            <h3 className="font-semibold text-lg ml-4 text-[#082864]">{account.name}</h3>
            <p className="text-sm mb-4 ml-4 text-gray-600">{account.official_name}</p>
          </div>
          </div>
          <div>
            <p className="font-light mb-6 mr-4 text-[#082864]">{`$${account.balances.current.toLocaleString('en-US', { maximumFractionDigits: 2 })}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CashCard;

