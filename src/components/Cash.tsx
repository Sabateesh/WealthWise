import React, { useState, useEffect } from 'react';

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
  const localStorageKey = 'accountBalances';

  const fetchAccountBalances = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/balance');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAccountBalances(data.accounts || []);
      localStorage.setItem(localStorageKey, JSON.stringify(data.accounts));
    } catch (error) {
      console.error('Error fetching account balances:', error);
    }
  };

  useEffect(() => {
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

  const totalCash = accountBalances.reduce((acc, account) => acc + account.balances.current, 0);

  const getLogoUrl = (institutionId: string) => {
    switch (institutionId) {
      case 'ins_38':
        return 'scotiabank.jpg';
      case 'ins_37':
        return 'bmo.jpg';
      default:
        return 'default_bank.jpg'; // A default logo if the institution is not listed
    }
  };

  return (
    <div className="cash-card-container bg-white shadow rounded-lg w-2/3">
      <div className="flex justify-between items-center px-4">
        <h2 className="text-sm text-[#7886A4] pt-4 font-bold">CASH</h2>
        <button onClick={fetchAccountBalances} className="bg-[#FFF] text-[#082864] border	font-semibold px-2 rounded">
            Refresh
          </button>
      </div>
      <div className="text-xl font-semibold pl-4 pb-2 text-[#082864] border-b">${totalCash.toLocaleString('en-US', { maximumFractionDigits: 2 })}</div>
      {accountBalances.map((account) => (
        <div key={account.account_id} className="flex justify-between items-center py-5 rounded border-b  hover:bg-[#F7F8FB] bg-[#FFF]">
          <div className="flex items-center">
            <img src={getLogoUrl(account.institution_id)} alt="Bank Logo" className="h-10 w-10 ml-4 mr-3 rounded-full" />
            <div>
              <h3 className="font-semibold text-lg text-[#082864]">{account.name}</h3>
              <p className="text-sm text-gray-600">{account.official_name}</p>
            </div>
          </div>
          <div>
            <p className="font-light text-[#082864] mr-5">{`$${account.balances.current.toLocaleString('en-US', { maximumFractionDigits: 2 })}`}</p>
          </div>
        </div>
      ))}

    </div>
  );
};

export default CashCard;
