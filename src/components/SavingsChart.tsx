// src/components/SavingsChart.tsx

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface SavingsData {
  age: number;
  netWorth: number;
}

interface SavingsChartProps {
  data: SavingsData[];
}

const SavingsChart: React.FC<SavingsChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="age" label={{ value: 'Age', position: 'insideBottomRight', offset: -5 }} />
      <YAxis label={{ value: 'Net Worth ($)', angle: -90, position: 'insideLeft' }} />
      <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
      <Line type="monotone" dataKey="netWorth" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  </ResponsiveContainer>
);

export default SavingsChart;
