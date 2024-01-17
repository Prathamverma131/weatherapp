
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';




const Graph = ({sunrise,sunset}) => {

    const data = [
        {time: '5 AM',uv:0},
        { time: "", uv: 0 },
        { time: "", uv: 15 },
        { time: "", uv: 30 },
        { time: '2 pm', uv: 45 },
        { time: "", uv: 30 },
        { time: "", uv: 15 },
        { time: "", uv: 0 },
        { time: '6 PM', uv: 0 },
      ];


  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="sunlightGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ffeda0" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#ffeda0" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="time" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#ff7300" fillOpacity={1} fill="url(#sunlightGradient)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};


export default Graph

