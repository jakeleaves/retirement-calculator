// src/app/page.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Input from '@/components/Input';
import SavingsChart from '@/components/SavingsChart';
import { RetirementInput, RetirementOutput } from '@/utils/calculateRetirement';
import { useRetirementCalculation } from '@/hooks/useRetirementCalculation';

const HomePage: React.FC = () => {
  const { performCalculation } = useRetirementCalculation();

  const [input, setInput] = useState<RetirementInput>({
    age: 30,
    retirementAge: 65,
    monthlySavings: 500,
    retirementAnnualSpending: 40000,
    currentNetWorth: 50000,
    endAge: 90,
    expectedReturnRate: 5, // Default expected return rate
  });

  const [output, setOutput] = useState<RetirementOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [chartData, setChartData] = useState<{ age: number; netWorth: number }[]>([]);

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
    setChartData([]);

    try {
      // Call the Convex mutation
      const result = await performCalculation(input);
      setOutput(result);
      setChartData(result.detailedNetWorth);
    } catch (err: any) {
      setError(err.message || 'An error occurred while calculating.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Retirement Calculator</h2>
      <form onSubmit={handleSubmit}>
        {/* Basic Inputs */}
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
          label="Retirement Age"
          name="retirementAge"
          type="number"
          value={input.retirementAge}
          onChange={handleChange}
          min={input.age + 1}
          max={120}
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
          label="End Age"
          name="endAge"
          type="number"
          value={input.endAge}
          onChange={handleChange}
          min={input.retirementAge + 1}
          max={120}
        />

        {/* Expected Return Rate */}
        <div className="mb-4">
          <label htmlFor="expectedReturnRate" className="block text-gray-700 text-sm font-bold mb-2">
            Expected Annual Return Rate (%)
          </label>
          <input
            id="expectedReturnRate"
            name="expectedReturnRate"
            type="number"
            value={input.expectedReturnRate}
            onChange={handleChange}
            min={0}
            max={20} // Maximum expected return rate
            step={0.1}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

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
          <h3 className="text-xl font-semibold mb-2">Results</h3>
          <p>Your FIRE Number: ${output.fireNumber.toLocaleString()}</p>
          <p>Your FIRE Age: {output.fireAge.toFixed(2)} years old</p>
          <p>Years Until FIRE: {output.yearsUntilFire.toFixed(2)} years</p>

          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2">Net Worth Growth by Age</h4>
            <SavingsChart data={chartData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
