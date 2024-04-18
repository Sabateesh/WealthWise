"use client";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import Dashboard from '../pages/Dashboard';
import Accounts from '../pages/Accounts';
import Transactions from '../pages/Transactions';
import Cashflow from '../pages/CashFlow';
import Reports from '../pages/Reports';
import Recurring from '../pages/Recurring';
import Goals from '../pages/Goals';
import Investments from '../pages/Investments';
import Advice from '../pages/Advice';
import Budget from '../pages/Budget';
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="fixed top-0 left-0 w-60 h-screen bg-blue-800 text-white overflow-y-auto z-10">
          <Sidebar />
        </aside>

        {/* Main content area */}
        <main className="flex-1 ml-60 bg[#F0F4F8] overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/cashflow" element={<Cashflow />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/recurring" element={<Recurring />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/advice" element={<Advice />} />
            <Route path="/budget" element={<Budget />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
