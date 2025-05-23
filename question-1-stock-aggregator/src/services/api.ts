export interface PricePoint {
  time: string;
  price: number;
}

export async function fetchStockPrices(): Promise<PricePoint[]> {
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

export type CorrelationMatrix = {
  [stockSymbol: string]: {
    [otherStockSymbol: string]: number;
  };
};

export async function fetchCorrelationData(): Promise<CorrelationMatrix> {
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
