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
      } catch (error) {
        console.error("Error fetching correlation data:", error);
      }
    }
    loadData();
  }, [minutes]);

  const containerStyle: React.CSSProperties = {
    width: "100%",
    overflowX: "auto",
    margin: "1rem 0",
    fontFamily: "Arial, sans-serif",
  };

  const tableStyle: React.CSSProperties = {
    borderCollapse: "collapse",
    width: "100%",
    minWidth: 320,
  };

  const thTdStyle: React.CSSProperties = {
    border: "1px solid #ddd",
    padding: 8,
    textAlign: "center",
    whiteSpace: "nowrap",
  };

  const thStyle: React.CSSProperties = {
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
  };

  const rowHeaderStyle: React.CSSProperties = {
    fontWeight: "bold",
    backgroundColor: "#f9f9f9",
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
                      color: value > 0.5 ? "white" : "black",
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
        <p>Loading correlation data...</p>
      )}
    </div>
  );
};

export default CorrelationHeatmap;
