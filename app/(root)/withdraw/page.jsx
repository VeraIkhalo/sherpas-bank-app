'use client'

import { useState } from 'react';
import { useTransactionContext } from '@/context/TransactionContext';

export default function Withdraw() {
  const [amount, setAmount] = useState('');
  const { addTransaction } = useTransactionContext();

  const handleWithdraw = () => {
    if (amount > 0) {
      addTransaction({ date: new Date().toISOString(), amount: -amount, type: 'withdraw' });
      alert(`You just made a withdrawal of $${amount}`);
      setAmount('');
    }
  };

  return (
    <main>
      <h1 className="text-2xl font-bold">Withdraw Money</h1>
      <div className="mt-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 outline-none"
          placeholder="Amount"
        />
        <button onClick={handleWithdraw} className="bg-blue-500 text-white p-2 ml-2 pointer-cursor">
          Withdraw
        </button>
      </div>
    </main>
  );
}
