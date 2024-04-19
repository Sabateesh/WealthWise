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
};

const CashCard: React.FC = () => {
  const [accountBalances, setAccountBalances] = useState<AccountBalance[]>([]);

  useEffect(() => {
    const fetchAccountBalances = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/balance');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAccountBalances(data.accounts);
      } catch (error) {
        console.error('Error fetching account balances:', error);
      }
    };

    fetchAccountBalances();
  }, []);

  const totalCash = accountBalances.reduce((acc, account) => acc + account.balances.current, 0);

  return (
    <div className="cash-card-container bg-white shadow rounded-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Cash</h2>
      <div className="text-xl font-semibold mb-4">${totalCash.toLocaleString('en-US', { maximumFractionDigits: 2 })}</div>
      {accountBalances.map((account) => (
        <div key={account.account_id} className="flex justify-between items-center mb-2 p-2 rounded bg-gray-100">
          <div>
            <h3 className="font-bold">{account.name}</h3>
            <p className="text-sm text-gray-600">{account.official_name}</p>
            <p className="text-sm text-gray-600">{`****${account.mask}`}</p>
          </div>
          <div>
            <p className="font-bold">{`$${account.balances.current.toLocaleString('en-US', { maximumFractionDigits: 2 })}`}</p>
            <p className="text-sm text-gray-600">Available</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CashCard;
