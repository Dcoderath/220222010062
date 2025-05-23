// src/services/api.ts

// Define the PricePoint type
export interface PricePoint {
  time: string;
  price: number;
}

// Dummy example function to fetch stock prices
export async function fetchStockPrices(): Promise<PricePoint[]> {
  // Simulate fetching data from an API or backend
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { time: "09:00", price: 100 },
        { time: "10:00", price: 105 },
        { time: "11:00", price: 102 },
        { time: "12:00", price: 108 },
      ]);
    }, 500);
  });
}

// Define type for correlation matrix
export type CorrelationMatrix = {
  [stockSymbol: string]: {
    [otherStockSymbol: string]: number;
  };
};

// Dummy example function to fetch correlation data
export async function fetchCorrelationData(): Promise<CorrelationMatrix> {
  // Simulate fetching correlation matrix data from an API or backend
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        AAPL: { AAPL: 1, MSFT: 0.8, GOOGL: 0.5 },
        MSFT: { AAPL: 0.8, MSFT: 1, GOOGL: 0.6 },
        GOOGL: { AAPL: 0.5, MSFT: 0.6, GOOGL: 1 },
      });
    }, 500);
  });
}
