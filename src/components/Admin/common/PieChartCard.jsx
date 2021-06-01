import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import "../css/PieChardCard.css";

function PieChartCard() {
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
    <div className="pieChartSection">
      <div className="pieChartLabel">
        <h1 className="pieChartLabelStyle">Sales Of Product</h1>
      </div>
      <div className="pieChart">
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
      <div className="pieChartTable">
        <div className="tablerow">
          <div className="rowPointer">
            <span className="material-icons pointerSize">circle</span>
          </div>
          <div className="rowText">
            <h1 className="rowTextStyle">Product 1</h1>
          </div>
          <div className="rowPercentage">
            <h1 className="rowPercentageStyle">25%</h1>
          </div>
        </div>
        <div className="tablerow">
          <div className="rowPointer">
            <span className="material-icons pointerSize">circle</span>
          </div>
          <div className="rowText">
            <h1 className="rowTextStyle">Product 2</h1>
          </div>
          <div className="rowPercentage">
            <h1 className="rowPercentageStyle">45%</h1>
          </div>
        </div>
        <div className="tablerow">
          <div className="rowPointer">
            <span className="material-icons pointerSize">circle</span>
          </div>
          <div className="rowText">
            <h1 className="rowTextStyle">Product 3</h1>
          </div>
          <div className="rowPercentage">
            <h1 className="rowPercentageStyle">25%</h1>
          </div>
        </div>
        <div className="tablerow">
          <div className="rowPointer">
            <span className="material-icons pointerSize">circle</span>
          </div>
          <div className="rowText">
            <h1 className="rowTextStyle">Product 4</h1>
          </div>
          <div className="rowPercentage">
            <h1 className="rowPercentageStyle">15%</h1>
          </div>
        </div>
        <div className="tablerow">
          <div className="rowPointer">
            <span className="material-icons pointerSize">circle</span>
          </div>
          <div className="rowText">
            <h1 className="rowTextStyle">Product 5</h1>
          </div>
          <div className="rowPercentage">
            <h1 className="rowPercentageStyle">10%</h1>
          </div>
        </div>
        <div className="tablerow">
          <div className="rowPointer">
            <span className="material-icons pointerSize">circle</span>
          </div>
          <div className="rowText">
            <h1 className="rowTextStyle">Product 6</h1>
          </div>
          <div className="rowPercentage">
            <h1 className="rowPercentageStyle">8%</h1>
          </div>
        </div>
        <div className="tablerow">
          <div className="rowPointer">
            <span className="material-icons pointerSize">circle</span>
          </div>
          <div className="rowText">
            <h1 className="rowTextStyle">Other</h1>
          </div>
          <div className="rowPercentage">
            <h1 className="rowPercentageStyle">2%</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PieChartCard;
