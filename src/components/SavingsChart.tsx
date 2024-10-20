// src/components/SavingsChart.tsx

import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface SavingsData {
  age: number;
  netWorth: number;
  contributions: number;
  ratio: number;
}

interface SavingsChartProps {
  data: SavingsData[];
}

const SavingsChart: React.FC<SavingsChartProps> = ({ data }) => {
  return (
    <div className="dark:bg-gray-900 bg-white p-4 rounded-lg">
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 20, bottom: 40, left: 60 }} // Adjust padding for labels
        >
          <CartesianGrid strokeDasharray="3 3" className="dark:stroke-gray-700 stroke-gray-300" />
          
          {/* X Axis */}
          <XAxis
            dataKey="age"
            label={{
              value: 'Age (years)',
              position: 'insideBottom', // Position it below the numbers
              offset: -25, // Increased offset for extra space
              className: 'text-black dark:text-white', // Use Tailwind for dynamic color
            }}
            tick={{ fill: 'currentColor' }} // Inherit the color dynamically
          />

          {/* Y Axis */}
          <YAxis
            tickFormatter={(value) => `$${value.toLocaleString()}`} // Format as $1,000,000
            tick={{ fill: 'currentColor' }} // Inherit the color dynamically
          />

          {/* Tooltip */}
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--tooltip-bg)',
              borderColor: 'var(--tooltip-border)',
              color: 'var(--tooltip-text)',
            }}
          />

          {/* Area for Contributions */}
          <Area
            type="monotone"
            dataKey="contributions"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.4}
            name="Contributions"
          />

          {/* Area for Net Worth */}
          <Area
            type="monotone"
            dataKey="netWorth"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
            name="Net Worth"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SavingsChart;
