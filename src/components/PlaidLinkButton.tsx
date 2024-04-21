// src/components/PlaidLinkButton.tsx
import React from 'react';
import { usePlaidLink } from 'react-plaid-link';
import { IoIosAdd } from "react-icons/io";


interface PlaidLinkButtonProps {
  children?: React.ReactNode;
  token: string;
  onSuccess: (publicToken: string, metadata: any) => void;
  onExit?: (error: any, metadata: any) => void;
}

const PlaidLinkButton: React.FC<PlaidLinkButtonProps> = ({ token, onSuccess, onExit }) => {
  const { open, ready } = usePlaidLink({
    token,
    onSuccess,
    onExit,
  });

  return (
    <button onClick={() => open()} disabled={!ready} className='flex items-center py-4 pl-4 hover:bg-blue-700 rounded-xl' >
     <IoIosAdd className='mr-4'/>Connect
    </button>
  );
};

export default PlaidLinkButton;
