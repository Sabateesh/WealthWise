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
    <button onClick={() => open()} disabled={!ready}>
     <IoIosAdd className='mr-4'/>Connect a bank account
    </button>
  );
};

export default PlaidLinkButton;
