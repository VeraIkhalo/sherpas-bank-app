'use client'

import { useState } from 'react';
import { useTransactionContext } from '@/context/TransactionContext';

export default function Statement() {
  const { transactions } = useTransactionContext();
  const [sortOrder, setSortOrder] = useState('desc');

  const sortTransactions = (order) => {
    return [...transactions].sort((a, b) =>
      order === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date)
    );
  };

  const sortedTransactions = sortTransactions(sortOrder);

  return (
    <main>
      <h1 className="text-2xl font-bold">Account Statement</h1>
      <div className="mt-4">
        <button
          onClick={() => setSortOrder('asc')}
          className={`p-2 mr-2 ${sortOrder === 'asc' ? 'bg-gray-300' : 'bg-gray-100'}`}
        >
          Ascending
        </button>
        <button
          onClick={() => setSortOrder('desc')}
          className={`p-2 ${sortOrder === 'desc' ? 'bg-gray-300' : 'bg-gray-100'}`}
        >
          Descending
        </button>
      </div>
      <table className="mt-4 w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">Date</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Balance</th>
          </tr>
        </thead>
        <tbody>
          {sortedTransactions.map((entry, index) => (
            <tr key={index}>
              <td className="border p-2">{new Date(entry.date).toLocaleDateString()}</td>
              <td className="border p-2">{entry.amount > 0 ? `+${entry.amount}` : entry.amount}</td>
              <td className="border p-2">
                {sortedTransactions
                  .slice(0, index + 1)
                  .reduce((acc, curr) => acc + curr.amount, 0)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
