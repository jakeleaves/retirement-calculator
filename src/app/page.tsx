'use client';

import React, { useState } from 'react';
import Input from '@/components/Input';
import SavingsChart from '@/components/SavingsChart';
import { useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api'; // Ensure this is correctly pointing to your API functions

interface RetirementInput {
  currentAge: number;
  retirementAge: number;
  currentSavings: number;
  monthlyContribution: number;
  annualReturnRate: number; // in percentage
  inflationRate: number; // in percentage
  desiredRetirementIncome: number;
}

interface RetirementOutput {
  totalSavings: number;
  annualRetirementIncome: number;
  yearsInRetirement: number;
}

const HomePage: React.FC = () => {
  const [input, setInput] = useState<RetirementInput>({
    currentAge: 30,
    retirementAge: 65,
    currentSavings: 50000,
    monthlyContribution: 500,
    annualReturnRate: 5,
    inflationRate: 2,
    desiredRetirementIncome: 40000,
  });

  const [output, setOutput] = useState<RetirementOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Use the Convex mutation for calculating retirement
  const calculateRetirement = useMutation(api.functions.calculateRetirement.calculateRetirement);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: Number(value),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setOutput(null);

    try {
      const result = await calculateRetirement(input); // Use the mutation to call the Convex function
      setOutput(result);
    } catch (err) {
      setError('An error occurred while calculating.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Retirement Calculator</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Current Age" name="currentAge" type="number" value={input.currentAge} onChange={handleChange} />
        <Input label="Retirement Age" name="retirementAge" type="number" value={input.retirementAge} onChange={handleChange} />
        <Input label="Current Savings ($)" name="currentSavings" type="number" value={input.currentSavings} onChange={handleChange} />
        <Input label="Monthly Contribution ($)" name="monthlyContribution" type="number" value={input.monthlyContribution} onChange={handleChange} />
        <Input label="Annual Return Rate (%)" name="annualReturnRate" type="number" value={input.annualReturnRate} onChange={handleChange} />
        <Input label="Inflation Rate (%)" name="inflationRate" type="number" value={input.inflationRate} onChange={handleChange} />
        <Input label="Desired Retirement Income ($)" name="desiredRetirementIncome" type="number" value={input.desiredRetirementIncome} onChange={handleChange} />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          disabled={loading}
        >
          {loading ? 'Calculating...' : 'Calculate'}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {output && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Results</h3>
          <p>Total Savings at Retirement: ${output.totalSavings.toLocaleString()}</p>
          <p>Annual Retirement Income: ${output.annualRetirementIncome.toLocaleString()}</p>
          <p>Estimated Years in Retirement: {output.yearsInRetirement}</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
