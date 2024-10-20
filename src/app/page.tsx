// src/app/page.tsx

'use client';

import React, { useState } from 'react';
import RetirementForm from '@/components/RetirementForm';
import RetirementResults from '@/components/RetirementResults';
import SavingsChart from '@/components/SavingsChart';
import { RetirementInput, RetirementOutput } from '@/utils/calculateRetirement';
import { useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';

const HomePage: React.FC = () => {
  const calculateRetirementMutation = useMutation(api.functions.calculateRetirement.calculateFIRE);

  const [input, setInput] = useState<RetirementInput>({
    age: 30,
    monthlySavings: 500,
    retirementAnnualSpending: 40000,
    currentNetWorth: 50000,
    expectedReturnRate: 5,
    withdrawalRate: 4,
  });

  const [output, setOutput] = useState<RetirementOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [chartData, setChartData] = useState<{ age: number; netWorth: number; contributions: number; ratio: number }[]>([]);

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
      const result = await calculateRetirementMutation(input);
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
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <RetirementForm
          input={input}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          loading={loading}
        />
        <RetirementResults output={output} error={error} />
      </div>

      {output && (
        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-semibold mb-4">Net Worth Growth by Age</h3>
          <SavingsChart data={chartData} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
