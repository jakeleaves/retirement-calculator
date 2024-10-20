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
    <div className="dark:bg-gray-900 bg-gray-100 p-4 rounded-lg"> {/* Set dark background for container */}
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={data}
          margin={{ left: 20, right: 20 }}
          className="dark:bg-gray-900 bg-gray-100" // Set dark background inside the chart
        >
          <CartesianGrid strokeDasharray="3 3" className="dark:stroke-gray-700" />
          <XAxis
            dataKey="age"
            label={{ value: 'Age', position: 'insideBottomRight', offset: -5 }}
            tick={{ fill: 'white' }} // Change text color to white in dark mode
          />
          <YAxis
            label={{ value: 'Amount ($)', angle: -90, position: 'insideLeft' }}
            tick={{ fill: 'white' }} // Change Y axis text color in dark mode
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#333', // Dark background for tooltips
              borderColor: '#555', // Darker border for tooltips
              color: 'white', // Light text in tooltips
            }}
          />
          <Area
            type="monotone"
            dataKey="contributions"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.4}
            name="Contributions"
          />
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
