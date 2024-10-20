// src/components/RetirementForm.tsx

import React from 'react';
import Input from '@/components/Input';

interface RetirementFormProps {
  input: any; // Define a more specific type for input later
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Current Age"
        name="age"
        type="number"
        value={input.age}
        onChange={handleChange}
        min={0}
        max={100}
      />
      <Input
        label="Monthly Savings ($)"
        name="monthlySavings"
        type="number"
        value={input.monthlySavings}
        onChange={handleChange}
        min={0}
      />
      <Input
        label="Retirement Annual Spending ($)"
        name="retirementAnnualSpending"
        type="number"
        value={input.retirementAnnualSpending}
        onChange={handleChange}
        min={0}
      />
      <Input
        label="Current Net Worth ($)"
        name="currentNetWorth"
        type="number"
        value={input.currentNetWorth}
        onChange={handleChange}
        min={0}
      />
      <Input
        label="Expected Annual Return Rate (%)"
        name="expectedReturnRate"
        type="number"
        value={input.expectedReturnRate}
        onChange={handleChange}
        min={0}
        max={20}
        step={0.1}
      />
      <Input
        label="Withdrawal Rate (%)"
        name="withdrawalRate"
        type="number"
        value={input.withdrawalRate}
        onChange={handleChange}
        min={1}
        max={20}
        step={0.1}
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
        disabled={loading}
      >
        {loading ? 'Calculating...' : 'Calculate FIRE'}
      </button>
    </form>
  );
};

export default RetirementForm;
