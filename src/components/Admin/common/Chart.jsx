import React from "react";
import { BarChart, Bar, XAxis, Cell } from "recharts";
import ChartStyle from "../../../css/dashboard/Chart.module.css";

function Chart() {
  const barColors = ["#542B14", "#B89068"];
  const data = [
    {
      name: "Jan",
      uv: 1000,
      pv: 40,
      amt: 100,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Sep",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Oct",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Nov",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Dec",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className={ChartStyle.graphChart}>
      <BarChart
        width={650}
        height={250}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={30}
      >
        <XAxis dataKey="name" size={30} axisLine={false} tickLine={false} />
        <Bar dataKey="uv" fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={barColors[index % 2]} />
          ))}
        </Bar>
      </BarChart>
      <h1 className={ChartStyle.chartLabel}>Sales of the Year</h1>
    </div>
  );
}

export default Chart;
