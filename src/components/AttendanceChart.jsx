"use client";
import Image from "next/image";
import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 43,
    absent: 23,
  },
  {
    name: "Tue",
    present: 53,
    absent: 24,
  },
  {
    name: "Wed",
    present: 53,
    absent: 34,
  },
  {
    name: "Thu",
    present: 65,
    absent: 36,
  },
  {
    name: "Fri",
    present: 65,
    absent: 46,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" width={20} height={20} alt="" />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1dbd5" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1dbd5" }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            fill="#c3ebfa"
            radius={[10, 10, 0, 0]}
            // activeBar={<Rectangle fill="pink" stroke="blue" />}
            legendType="circle"
          />
          <Bar
            dataKey="absent"
            fill="#fae27c"
            legendType="circle"
            radius={[10, 10, 0, 0]}
            // activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
