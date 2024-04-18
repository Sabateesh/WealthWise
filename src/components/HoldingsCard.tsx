import React, { useState, useEffect } from 'react';

// Define a type for each holding
type Holding = {
  security: string;
  name: string;
  price: number;
  quantity: number;
  change: number;
  value: number;
};

const HoldingsCard: React.FC = () => {
  const [holdings, setHoldings] = useState<Holding[]>([]);

  useEffect(() => {
    const fetchHoldings = async () => {
        try {
          const response = await fetch('http://127.0.0.1:8000/api/holdings');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log('Received data:', data); 
          setHoldings(data.holdings || []);
        } catch (error) {
          console.error('There was an error fetching the holdings:', error);
        }
    };      
    fetchHoldings();
  }, []);

  return (
    <div className="holdings-container">
      <h2>Holdings</h2>
      <div className="holdings-card">
        {holdings.map((holding: Holding, index: number) => (
          <div key={index} className="holding">
            <div className="holding-header">
              <span className="security-type">{holding.security}</span>
              <span className="group-type">Group by type</span>
            </div>
            <div className="holding-body">
              <div className="security-name">{holding.name}</div>
              <div className="security-details">
                <span className="price">${holding.price.toFixed(2)}</span>
                <span className="quantity">{holding.quantity} Units</span>
                <span className={`change ${holding.change > 0 ? 'positive' : 'negative'}`}>
                  {holding.change.toFixed(2)}%
                </span>
                <span className="value">${holding.value.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="add-holding-btn">+ Add holding</button>
    </div>
  );
};

export default HoldingsCard;
