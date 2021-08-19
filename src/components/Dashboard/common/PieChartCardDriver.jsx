import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import PieChartCardStyle from "../../../css/dashboard/PieChardCard.module.css";

function PieChartCardDriver() {
  const data = [
    { name: "Group A", value: 200 },
    { name: "Group B", value: 200 },
    { name: "Group C", value: 90 },
    { name: "Group D", value: 90 },
    { name: "Group D", value: 120 },
    { name: "Group D", value: 180 },
    { name: "Group D", value: 130 },
  ];
  const COLORS = [
    "#E3E6EC",
    "#542B14",
    "#B89068",
    "#a3582d",
    "#cfd3db",
    "#351a0b",
    "#806346",
    "#a54812",
  ];

  return (
    <div className={PieChartCardStyle.pieChartSection}>
      <div className={PieChartCardStyle.pieChartLabel}>
        <h1 className={PieChartCardStyle.pieChartLabelStyle}>
          Deliveries Of Product
        </h1>
      </div>
      <div className={PieChartCardStyle.pieChart}>
        {" "}
        <PieChart
          width={250}
          height={200}
          // onMouseEnter={this.onPieEnter}
        >
          <Pie
            data={data}
            cx={140}
            cy={90}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className={PieChartCardStyle.pieChartTable}>
        <div className={PieChartCardStyle.tablerow}>
          <div className={PieChartCardStyle.rowPointer}>
            <span className={"material-icons " + PieChartCardStyle.pointerSize}>
              circle
            </span>
          </div>
          <div className={PieChartCardStyle.rowText}>
            <h1 className={PieChartCardStyle.rowTextStyle}>Table</h1>
          </div>
          <div className={PieChartCardStyle.rowPercentage}>
            <h1 className={PieChartCardStyle.rowPercentageStyle}>25%</h1>
          </div>
        </div>
        <div className={PieChartCardStyle.tablerow}>
          <div className={PieChartCardStyle.rowPointer}>
            <span className={"material-icons " + PieChartCardStyle.pointerSize}>
              circle
            </span>
          </div>
          <div className={PieChartCardStyle.rowText}>
            <h1 className={PieChartCardStyle.rowTextStyle}>Chair</h1>
          </div>
          <div className={PieChartCardStyle.rowPercentage}>
            <h1 className={PieChartCardStyle.rowPercentageStyle}>45%</h1>
          </div>
        </div>
        <div className={PieChartCardStyle.tablerow}>
          <div className={PieChartCardStyle.rowPointer}>
            <span className={"material-icons " + PieChartCardStyle.pointerSize}>
              circle
            </span>
          </div>
          <div className={PieChartCardStyle.rowText}>
            <h1 className={PieChartCardStyle.rowTextStyle}>Cupboard</h1>
          </div>
          <div className={PieChartCardStyle.rowPercentage}>
            <h1 className={PieChartCardStyle.rowPercentageStyle}>25%</h1>
          </div>
        </div>
        <div className={PieChartCardStyle.tablerow}>
          <div className={PieChartCardStyle.rowPointer}>
            <span className={"material-icons " + PieChartCardStyle.pointerSize}>
              circle
            </span>
          </div>
          <div className={PieChartCardStyle.rowText}>
            <h1 className={PieChartCardStyle.rowTextStyle}>Desk</h1>
          </div>
          <div className={PieChartCardStyle.rowPercentage}>
            <h1 className={PieChartCardStyle.rowPercentageStyle}>15%</h1>
          </div>
        </div>
        <div className={PieChartCardStyle.tablerow}>
          <div className={PieChartCardStyle.rowPointer}>
            <span className={"material-icons " + PieChartCardStyle.pointerSize}>
              circle
            </span>
          </div>
          <div className={PieChartCardStyle.rowText}>
            <h1 className={PieChartCardStyle.rowTextStyle}>Desk(High)</h1>
          </div>
          <div className={PieChartCardStyle.rowPercentage}>
            <h1 className={PieChartCardStyle.rowPercentageStyle}>10%</h1>
          </div>
        </div>
        <div className={PieChartCardStyle.tablerow}>
          <div className={PieChartCardStyle.rowPointer}>
            <span className={"material-icons " + PieChartCardStyle.pointerSize}>
              circle
            </span>
          </div>
          <div className={PieChartCardStyle.rowText}>
            <h1 className={PieChartCardStyle.rowTextStyle}>Cabinet</h1>
          </div>
          <div className={PieChartCardStyle.rowPercentage}>
            <h1 className={PieChartCardStyle.rowPercentageStyle}>8%</h1>
          </div>
        </div>
        <div className={PieChartCardStyle.tablerow}>
          <div className={PieChartCardStyle.rowPointer}>
            <span className={"material-icons " + PieChartCardStyle.pointerSize}>
              circle
            </span>
          </div>
          <div className={PieChartCardStyle.rowText}>
            <h1 className={PieChartCardStyle.rowTextStyle}>Other</h1>
          </div>
          <div className={PieChartCardStyle.rowPercentage}>
            <h1 className={PieChartCardStyle.rowPercentageStyle}>2%</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PieChartCardDriver;
