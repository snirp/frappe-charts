import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Chart } from "frappe-charts";

import "./styles.css";

function App() {
  useEffect(() => {
    const data = {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [{ values: [18, 40, 30, 35, 8, 52, 17, -4] }]
    };

    const chart = new Chart("#chart", {
      data: data,
      type: "bar",
      height: 140,
      colors: ["red"]
    });

    return () => {
      chart.unbindWindowEvents();
    };
  }, []);

  return (
    <div>
      hoi
      <div id="chart" style={{ opacity: "1", zIndex: "9999" }} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
