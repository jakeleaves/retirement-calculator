// src/components/SavingsChart.tsx

import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

interface SavingsData {
  year: number
  savings: number
}

interface SavingsChartProps {
  data: SavingsData[]
}

const SavingsChart: React.FC<SavingsChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
      <Legend />
      <Line type="monotone" dataKey="savings" name="Savings" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  </ResponsiveContainer>
)

export default SavingsChart
