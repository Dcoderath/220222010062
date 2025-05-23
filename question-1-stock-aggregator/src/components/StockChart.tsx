import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
} from 'recharts';
import { TooltipProps } from 'recharts';

type DataPoint = {
  time: string;
  price: number;
};

const sampleData: DataPoint[] = [
  { time: '09:00', price: 100 },
  { time: '09:05', price: 102 },
  { time: '09:10', price: 101 },
  { time: '09:15', price: 105 },
  { time: '09:20', price: 110 },
  { time: '09:25', price: 108 },
  { time: '09:30', price: 115 },
];

const calculateAverage = (data: DataPoint[]): number => {
  if (!data.length) return 0;
  const sum = data.reduce((acc, point) => acc + point.price, 0);
  return sum / data.length;
};

const StockChart: React.FC = () => {
  const [data] = useState<DataPoint[]>(sampleData);
  const avg = calculateAverage(data);

  const tooltipFormatter = (value: number | string) => {
    if (typeof value === 'number') return [`$${value.toFixed(2)}`, 'Price'];
    return [value, 'Price'];
  };

  return (
    <div
style={{
  width: '100%',
  height: 500,
  padding: 20,
  boxSizing: 'border-box',
  backgroundColor: 'black',
  borderRadius: 8,
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
}}

    >
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Stock Price Chart</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip
            formatter={tooltipFormatter}
            labelFormatter={(label) => `Time: ${label}`}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#007bff"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey={() => avg}
            stroke="#ff7300"
            strokeDasharray="5 5"
            dot={false}
            isAnimationActive={false}
            name="Average Price"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;
