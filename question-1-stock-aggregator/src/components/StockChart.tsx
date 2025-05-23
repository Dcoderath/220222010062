import React, { useEffect, useState } from "react";
import { fetchStockPrices, PricePoint } from "../services/api";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import { fetchStockPrices, PricePoint } from "../services/api";

const StockChart = () => {
  const [prices, setPrices] = useState<PricePoint[]>([]);
  const [average, setAverage] = useState<number>(0);

  useEffect(() => {
    fetchStockPrices().then((data) => {
      setPrices(data);
      if (data.length) {
        const avg =
          data.reduce((sum: number, p: PricePoint) => sum + p.price, 0) /
          data.length;
        setAverage(avg);
      }
    });
  }, []);

  return (
    <div>
      <h3>Average Price: {average.toFixed(2)}</h3>
      <LineChart width={600} height={300} data={prices}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default StockChart;
