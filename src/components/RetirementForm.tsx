// src/components/RetirementForm.tsx

import React from 'react';
import Input from '@/components/Input';

interface RetirementFormProps {
  input: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  loading: boolean;
}

const RetirementForm: React.FC<RetirementFormProps> = ({
  input,
  handleChange,
  handleSubmit,
  loading,
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
      <div>
        <label className="block text-gray-900 dark:text-gray-200 font-semibold mb-2">Current Age</label>
        <Input
          name="age"
          type="number"
          value={input.age}
          onChange={handleChange}
          min={0}
          max={100}
          className="py-2 px-3 bg-gray-100 dark:bg-gray-800 dark:text-gray-200 text-gray-900 border dark:border-gray-600 rounded-md" label={''}
        />
      </div>

      <div>
        <label className="block text-gray-900 dark:text-gray-200 font-semibold mb-2">Monthly Savings ($)</label>
        <Input
          name="monthlySavings"
          type="number"
          value={input.monthlySavings}
          onChange={handleChange}
          min={0}
          className="py-2 px-3 bg-gray-100 dark:bg-gray-800 dark:text-gray-200 text-gray-900 border dark:border-gray-600 rounded-md" label={''}
        />
      </div>

      <div>
        <label className="block text-gray-900 dark:text-gray-200 font-semibold mb-2">Retirement Annual Spending ($)</label>
        <Input
          name="retirementAnnualSpending"
          type="number"
          value={input.retirementAnnualSpending}
          onChange={handleChange}
          min={0}
          className="py-2 px-3 bg-gray-100 dark:bg-gray-800 dark:text-gray-200 text-gray-900 border dark:border-gray-600 rounded-md" label={''}
        />
      </div>

      <div>
        <label className="block text-gray-900 dark:text-gray-200 font-semibold mb-2">Current Net Worth ($)</label>
        <Input
            name="currentNetWorth"
            type="number"
            value={input.currentNetWorth}
            onChange={handleChange}
            min={0}
            className="py-2 px-3 bg-gray-100 dark:bg-gray-800 dark:text-gray-200 text-gray-900 border dark:border-gray-600 rounded-md" label={''}        />
      </div>

      <div>
        <label className="block text-gray-900 dark:text-gray-200 font-semibold mb-2">Expected Annual Return Rate (%)</label>
        <Input
            name="expectedReturnRate"
            type="number"
            value={input.expectedReturnRate}
            onChange={handleChange}
            min={0}
            max={20}
            step={0.1}
            className="py-2 px-3 bg-gray-100 dark:bg-gray-800 dark:text-gray-200 text-gray-900 border dark:border-gray-600 rounded-md" label={''}        />
      </div>

      <div>
        <label className="block text-gray-900 dark:text-gray-200 font-semibold mb-2">Withdrawal Rate (%)</label>
        <Input
            name="withdrawalRate"
            type="number"
            value={input.withdrawalRate}
            onChange={handleChange}
            min={1}
            max={20}
            step={0.1}
            className="py-2 px-3 bg-gray-100 dark:bg-gray-800 dark:text-gray-200 text-gray-900 border dark:border-gray-600 rounded-md" label={''}        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 dark:bg-blue-800 text-white font-bold py-3 rounded-md hover:bg-blue-700 dark:hover:bg-blue-900 transition duration-200"
        disabled={loading}
      >
        {loading ? 'Calculating...' : 'Calculate FIRE'}
      </button>
    </form>
  );
};

export default RetirementForm;
