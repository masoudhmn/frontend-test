import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data generation function
const generateSampleData = () => {
  const data = [];
  for (let i = 1; i <= 12; i++) {
    data.push({
      month: `Month ${i}`,
      value: Math.floor(Math.random() * 100) + 50, // Random values between 50 and 150
    });
  }
  return data;
};

const ProfessionalChart = () => {
  const data = generateSampleData();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Professional Line Chart Example</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="month" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px', padding: '10px' }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#3b82f6" 
            strokeWidth={2} 
            dot={{ r: 4, fill: '#3b82f6' }} 
            activeDot={{ r: 6 }} 
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-500 mt-4 text-center">
        This chart displays randomly generated sample data for demonstration purposes.
      </p>
    </div>
  );
};

export default ProfessionalChart;