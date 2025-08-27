import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

function RandomChart() {
  const [data, setData] = useState([]);

  // تابع تولید داده تصادفی
  const generateData = () => {
    const items = [];
    for (let i = 1; i <= 7; i++) {
      items.push({
        day: `Day ${i}`,
        value: Math.floor(Math.random() * 100) + 1,
      });
    }
    setData(items);
  };

  // ایجاد داده هنگام mount
  useEffect(() => {
    generateData();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>نمودار داده‌های تصادفی</h2>
      <button onClick={generateData} style={{ marginBottom: "20px" }}>
        تولید داده جدید
      </button>
      <BarChart
        width={600}
        height={400}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default RandomChart;
