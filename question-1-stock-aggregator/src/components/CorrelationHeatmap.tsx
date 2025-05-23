import React, { useEffect, useState } from "react";
import { fetchCorrelationData } from "../service/api";

interface CorrelationHeatmapProps {
  minutes: number; // You have this prop, but API does not use it yet
}

const CorrelationHeatmap: React.FC<CorrelationHeatmapProps> = ({ minutes }) => {
  const [matrix, setMatrix] = useState<any>(null);

  useEffect(() => {
    async function loadData() {
      try {
        // Call without arguments as api.ts fetchCorrelationData expects none
        const data = await fetchCorrelationData();
        setMatrix(data);
      } catch (error) {
        console.error("Error fetching correlation data:", error);
      }
    }
    loadData();
  }, [minutes]); // If you want to refetch when minutes changes

  return (
    <div>
      {matrix ? (
        <pre>{JSON.stringify(matrix, null, 2)}</pre>
      ) : (
        <p>Loading correlation data...</p>
      )}
    </div>
  );
};

export default CorrelationHeatmap;
