// import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

function renderPieChart() {
  const data = [
    { name: 'Completed', value: 60, color: '#0088FE' },
    { name: 'In-progress', value: 30, color: '#00C49F' },
    { name: 'Pending', value: 10, color: '#FFBB28' },
  ];

  return (
    <PieChart width={300} height={200}>
      <Pie
        dataKey="value"
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={40}
        outerRadius={60}
        paddingAngle={5}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <text x="50%" y="43%" textAnchor="middle" dominantBaseline="middle" fill="black">
        Status
      </text>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}

export default renderPieChart;