import React, { useState, useEffect } from 'react';

type AddressData = {
  city: string;
  country: string;
  postal_code: string;
  region: string;
  street: string;
};

type EmailData = {
  data: string;
  primary: boolean;
  type: string;
};

type PhoneNumberData = {
  data: string;
  primary: boolean;
  type: string;
};

type AccountOwner = {
  addresses: {
    data: AddressData;
    primary: boolean;
  }[];
  emails: EmailData[];
  names: string[];
  phone_numbers: PhoneNumberData[];
};

type Account = {
  account_id: string;
  balances: {
    available: number;
    current: number;
    iso_currency_code: string;
    limit: number | null;
    unofficial_currency_code: string | null;
  };
  mask: string;
  name: string;
  official_name: string;
  owners: AccountOwner[];
  subtype: string;
  type: string;
};

type ApiResponse = {
  identity: Account[];
};

const IdentityCard: React.FC = () => {
  const [owners, setOwners] = useState<AccountOwner[]>([]);

  useEffect(() => {
    const fetchIdentity = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/identity');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: ApiResponse = await response.json();
        const ownersData = data.identity.flatMap((account: Account) => account.owners);
        setOwners(ownersData);
      } catch (error) {
        console.error('There was an error fetching the identity information:', error);
      }
    };

    fetchIdentity();
  }, []);

  return (
    <div className="identity-card-container bg-white shadow rounded-lg p-4">
      {owners.length > 0 ? (
        owners.map((owner, index) => (
          <div key={index} className="owner-info mb-4">
            <div className="names">
              <strong>Names:</strong> {owner.names.join(', ')}
            </div>
            <div className="emails">
              <strong>Email:</strong> {owner.emails.filter(email => email.primary).map(email => email.data).join(', ')}
            </div>
            <div className="phones">
              <strong>Mobile Phone:</strong> {owner.phone_numbers.filter(phone => phone.type === 'mobile').map(phone => phone.data).join(', ')}
            </div>
            <div className="addresses">
              <strong>Primary Address:</strong>
              {owner.addresses.filter(address => address.primary).map((address, addrIndex) => (
                <div key={addrIndex}>
                  {address.data.street}, {address.data.city}, {address.data.region}, {address.data.postal_code}, {address.data.country}
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>Loading identity information...</p>
      )}
    </div>
  );
};

export default IdentityCard;
