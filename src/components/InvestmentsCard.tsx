// src/components/InvestmentsCard.tsx
import React from 'react';

interface StockProps {
  ticker: string;
  company: string;
  price: number;
  change: number;
  changePercent: number;
}

const StockItem: React.FC<StockProps> = ({ ticker, company, price, change, changePercent }) => {
  const changeColor = changePercent >= 0 ? 'text-green-500' : 'text-red-500';
  return (
    <div className="flex justify-between items-center border-b border-gray-200 py-2">
      <div>
        <div className="font-bold">{ticker}</div>
        <div className="text-gray-500">{company}</div>
      </div>
      <div className="text-right">
        <div className="font-bold">${price.toFixed(2)}</div>
        <div className={`${changeColor}`}>{changePercent.toFixed(2)}%</div>
      </div>
    </div>
  );
};

const InvestmentsCard: React.FC = () => {
  const stocks: StockProps[] = [
    { ticker: 'SHOP', company: 'Shopify Inc. Class A Subordinate', price: 69.41, change: 0.71, changePercent: 1.03 },
    { ticker: 'CP.TO', company: 'CANADIAN PAC KANS CITY LTD', price: 115.25, change: -1.18, changePercent: -1.02 },
    { ticker: 'AAPL', company: 'Apple Inc.', price: 168.00, change: -1.35, changePercent: -0.81 },
    { ticker: 'GOOGL', company: 'Alphabet Inc.', price: 155.47, change: 1.07, changePercent: 0.69 },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="mb-4">
        <h2 className="text-lg font-bold">INVESTMENTS</h2>
        <div className="text-3xl">$10,308.62 <span className="text-red-500">▼ $14.63 (-0.1%) Today</span></div>
      </div>
      <div>
        <h3 className="font-bold mb-2">TOP MOVERS TODAY</h3>
        {stocks.map(stock => (
          <StockItem
            key={stock.ticker}
            ticker={stock.ticker}
            company={stock.company}
            price={stock.price}
            change={stock.change}
            changePercent={stock.changePercent}
          />
        ))}
      </div>
    </div>
  );
};

export default InvestmentsCard;
