'use client'

import { useState } from 'react';
import { useTransactionContext } from '@/context/TransactionContext';

export default function Transfer() {
  const [amount, setAmount] = useState('');
  const [iban, setIban] = useState('');
  const { addTransaction } = useTransactionContext();

  const handleTransfer = () => {
    const ibanRegex = /^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/;
    if (!iban.match(ibanRegex)) {
      alert('Invalid IBAN');
      return;
    }
    if (amount > 0) {
      addTransaction({ date: new Date().toISOString(), amount: -amount, type: 'transfer', iban });
      alert(`Transferred ${amount} to ${iban}`);
      setAmount('');
      setIban('');
    }
  };

  return (
    <main>
      <h1 className="text-2xl font-bold">Transfer Money</h1>
      <div className="mt-4">
        <input
          type="text"
          value={iban}
          onChange={(e) => setIban(e.target.value)}
          className="border p-2 outline-none"
          placeholder="IBAN"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 ml-2 outline-none"
          placeholder="Amount"
        />
        <button onClick={handleTransfer} className="bg-blue-500 text-white p-2 ml-2 cursor-pointer">
          Transfer
        </button>
      </div>
    </main>
  );
}
