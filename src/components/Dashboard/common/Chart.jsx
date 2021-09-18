import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ChartStyle from "../../../css/dashboard/Chart.module.css";
import { getSellProducts } from "./../service/sellProduct";

function Chart() {
  const barColors = ["#542B14", "#B89068"];
  const [salesOfYear, setSalesOfYear] = useState([
    {
      name: "Jan",
      sales: 1,
    },
    {
      name: "Feb",
      sales: 1,
    },
    {
      name: "Mar",
      sales: 1,
    },
    {
      name: "Apr",
      sales: 1,
    },
    {
      name: "May",
      sales: 1,
    },
    {
      name: "Jun",
      sales: 1,
    },
    {
      name: "Jul",
      sales: 1,
      pv: 4300,
      amt: 21,
    },
    {
      name: "Aug",
      sales: 1,
    },
    {
      name: "Sep",
      sales: 1,
    },
    {
      name: "Oct",
      sales: 1,
    },
    {
      name: "Nov",
      sales: 1,
    },
    {
      name: "Dec",
      sales: 1,
    },
  ]);

  useEffect(() => {
    loadChartData();
  }, []);

  const loadChartData = async () => {
    try {
      const result = await getSellProducts();
      const sellProductsData = result.data;

      var monthlyCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      // 0 index not equal to to month
      // 1 index equal to Jan like this
      // 12 index equal to Dec

      // console.log(monthlyCount);
      sellProductsData.forEach((sellProduct) => {
        var date = sellProduct.createdAt.split("T")[0];
        var month = parseInt(date.split("-")[1]);
        monthlyCount[month] =
          parseInt(monthlyCount[month]) + parseInt(sellProduct.quantity);

        console.log("Date:" + date + " Month:" + month);
      });

      const data = [
        {
          name: "Jan",
          sales: monthlyCount[1],
        },
        {
          name: "Feb",
          sales: monthlyCount[2],
        },
        {
          name: "Mar",
          sales: monthlyCount[3],
        },
        {
          name: "Apr",
          sales: monthlyCount[4],
        },
        {
          name: "May",
          sales: monthlyCount[5],
        },
        {
          name: "Jun",
          sales: monthlyCount[6],
        },
        {
          name: "Jul",
          sales: monthlyCount[7],
        },
        {
          name: "Aug",
          sales: monthlyCount[8],
        },
        {
          name: "Sep",
          sales: monthlyCount[9],
        },
        {
          name: "Oct",
          sales: monthlyCount[10],
        },
        {
          name: "Nov",
          sales: monthlyCount[11],
        },
        {
          name: "Dec",
          sales: monthlyCount[12],
        },
      ];

      setSalesOfYear(data);

      console.log(monthlyCount);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  // console.log(data);
  return (
    <div className={ChartStyle.graphChart}>
      <ResponsiveContainer width="100%" height="91%">
        <BarChart
          width={600}
          height={250}
          data={salesOfYear}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={30}
        >
          <Tooltip />
          <XAxis dataKey="name" size={30} axisLine={false} tickLine={false} />
          <Bar dataKey="sales" fill="#8884d8">
            {salesOfYear.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={barColors[index % 2]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <h1 className={ChartStyle.chartLabel}>Sales Items of the Year</h1>
    </div>
  );
}

export default Chart;
