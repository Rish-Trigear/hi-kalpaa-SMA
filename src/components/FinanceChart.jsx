"use client";
import React from "react";
import Image from "next/image";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expenses: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expenses: 1398,
  },
  {
    name: "Mar",
    income: 2000,
    expenses: 9800,
  },
  {
    name: "Apr",
    income: 2780,
    expenses: 3908,
  },
  {
    name: "May",
    income: 1890,
    expenses: 4800,
  },
  {
    name: "Jun",
    income: 2390,
    expenses: 3800,
  },
  {
    name: "Jul",
    income: 3490,
    expenses: 4300,
  },
  {
    name: "Aug",
    income: 3490,
    expenses: 4300,
  },
  {
    name: "Sept",
    income: 3490,
    expenses: 4300,
  },
  {
    name: "Oct",
    income: 3490,
    expenses: 4300,
  },
  {
    name: "Nov",
    income: 3490,
    expenses: 4300,
  },
  {
    name: "Dec",
    income: 3490,
    expenses: 4300,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-lg h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finances</h1>
        <Image src="/moreDark.png" width={20} height={20} alt="" />
      </div>
      <ResponsiveContainer width="100%" height="90%" s>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1dbd5" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1dbd5" }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#c3ebfa"
            strokeWidth={5}
          />

          <Line
            type="monotone"
            dataKey="expenses"
            stroke="#cfceff"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
