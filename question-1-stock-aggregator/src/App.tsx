import React from "react";
import Header from "./components/Header";
import StockChart from "./components/StockChart";

function App() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        html, body, #root {
          margin: 0;
          padding: 0;
          height: 100%;
          background-color: #121212;
          color: #e0e0e0;
          font-family: 'Roboto', sans-serif;
          overflow: hidden;
        }
        /* Scrollable container inside fills viewport and scrolls */
        #app-scroll-container {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
        /* Dark scrollbar for WebKit browsers */
        #app-scroll-container::-webkit-scrollbar {
          width: 12px;
        }
        #app-scroll-container::-webkit-scrollbar-track {
          background: #1e1e1e;
        }
        #app-scroll-container::-webkit-scrollbar-thumb {
          background-color: #555;
          border-radius: 6px;
          border: 3px solid #1e1e1e;
        }
        /* Firefox scrollbar */
        #app-scroll-container {
          scrollbar-width: thin;
          scrollbar-color: #555 #1e1e1e;
        }
      `}</style>

      <div id="app-scroll-container" style={{ padding: "0 1rem", boxSizing: "border-box" }}>
        <Header />
        <StockChart />
      </div>
    </>
  );
}

export default App;
