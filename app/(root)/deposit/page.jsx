'use client'
import { useTransactionContext } from '@/context/TransactionContext';
import { useState } from 'react';


export default function Deposit() {
  const [amount, setAmount] = useState('');
  const { addTransaction } = useTransactionContext();

  const handleDeposit = () => {
    if (amount > 0) {
      addTransaction({ date: new Date().toISOString(), amount: +amount, type: 'deposit' });
      alert(`Deposited ${amount}`);
      setAmount('');
    }
  };

  return (
    <main>
      <h1 className="text-2xl font-bold">Deposit Money</h1>
      <div className="mt-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 outline-none"
          placeholder="Amount"
        />
        <button onClick={handleDeposit} className="bg-blue-500 text-white p-2 ml-2 cursor-pointer">
          Deposit
        </button>
      </div>
    </main>
  );
}
