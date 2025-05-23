// CorrelationHeatmap.tsx
import React, { useEffect, useState } from "react";
import { fetchCorrelationData } from "../services/api";

interface CorrelationHeatmapProps {
  minutes: number;
}

const CorrelationHeatmap: React.FC<CorrelationHeatmapProps> = ({ minutes }) => {
  const [matrix, setMatrix] = useState<Record<string, Record<string, number>> | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchCorrelationData();
        setMatrix(data);
      } catch (error) {}
    }
    loadData();
  }, [minutes]);

  const containerStyle: React.CSSProperties = {
    width: "100%",
    overflowX: "auto",
    margin: "1rem 0",
  };

  const tableStyle: React.CSSProperties = {
    borderCollapse: "collapse",
    width: "100%",
    minWidth: 320,
    color: "#e0e0e0",
  };

  const thTdStyle: React.CSSProperties = {
    border: "1px solid #333",
    padding: 8,
    textAlign: "center",
    whiteSpace: "nowrap",
  };

  const thStyle: React.CSSProperties = {
    backgroundColor: "#2c2c2c",
    fontWeight: "700",
  };

  const rowHeaderStyle: React.CSSProperties = {
    fontWeight: "700",
    backgroundColor: "#1f1f1f",
  };

  return (
    <div style={containerStyle}>
      {matrix ? (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={{ ...thTdStyle, ...thStyle }}></th>
              {Object.keys(matrix).map((key) => (
                <th key={key} style={{ ...thTdStyle, ...thStyle }}>
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(matrix).map(([rowKey, row]) => (
              <tr key={rowKey}>
                <td style={{ ...thTdStyle, ...rowHeaderStyle }}>{rowKey}</td>
                {Object.entries(row).map(([colKey, value]) => (
                  <td
                    key={colKey}
                    style={{
                      ...thTdStyle,
                      backgroundColor: `rgba(136, 132, 216, ${value})`,
                      color: value > 0.5 ? "#121212" : "#e0e0e0",
                      fontWeight: "600",
                    }}
                  >
                    {value.toFixed(2)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ color: "#bbb", textAlign: "center" }}>Loading correlation data...</p>
      )}
    </div>
  );
};

export default CorrelationHeatmap;
