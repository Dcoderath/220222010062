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
  ResponsiveContainer,
} from "recharts";

const StockChart = () => {
  const [prices, setPrices] = useState<PricePoint[]>([]);
  const [average, setAverage] = useState<number>(0);

  useEffect(() => {
    fetchStockPrices().then((data) => {
      setPrices(data);
      if (data.length) {
        const avg = data.reduce((sum, p) => sum + p.price, 0) / data.length;
        setAverage(avg);
      }
    });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 700,
        margin: "1rem auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>
        Average Price: {average.toFixed(2)}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={prices}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;
