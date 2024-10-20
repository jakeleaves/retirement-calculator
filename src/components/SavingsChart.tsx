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
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data} margin={{ left: 20, right: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />

        {/* X Axis */}
        <XAxis dataKey="age" label={{ value: 'Age', position: 'insideBottomRight', offset: -5 }} />

        {/* Y Axis for Net Worth and Contributions */}
        <YAxis
          label={{
            value: 'Amount ($)',
            angle: -90,
            position: 'insideLeft',
            offset: 10, // Offset to avoid overlap
            dy: -10, // Move the label up slightly
          }}
          tickMargin={10} // Add margin for better visibility of the ticks
        />

        {/* Tooltip with custom formatter to show the ratio */}
        <Tooltip
          formatter={(value: number, name: string, props: any) => {
            if (name === 'Net Worth') {
              const ratio = props.payload.ratio;
              return [
                `$${value.toLocaleString()}`,
                `${name} (${ratio.toFixed(1)}x ratio)`,
              ];
            }
            return [`$${value.toLocaleString()}`, name];
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
  );
};

export default SavingsChart;
