import React from "react";
import Navbar from "./common/Navbar";
import Sidebar from "./common/Sidebar";
import DetailCard from "./common/DetailCard";

import Chart from "./common/Chart";
import TableCard from "./common/TableCard";
import PieChartCard from "./common/PieChartCard";
import "./css/Dashboard.css";

function Dashboard() {
  return (
    <div className="bodycontainer">
      <div className="navSection">
        <Navbar />
      </div>
      {/* Body */}
      <div className="bodySection">
        {/* Sidebar */}

        <div className="sidebarSection">
          <Sidebar />
        </div>
        <div className="cardSection">
          <div className="detailsCardSection">
            <DetailCard
              detailCardMargin={true}
              materialIconName={"price_change"}
              cardText={"Today Details"}
              cardText={"Today Sales"}
              cardPrice={"Rs.1000"}
            />
            <DetailCard
              detailCardMargin={true}
              materialIconName={"category"}
              cardText={"Sales Items"}
              cardPrice={"No.10"}
            />
            <DetailCard
              detailCardMargin={true}
              materialIconName={"stacked_line_chart"}
              cardText={"Daily Income"}
              cardPrice={"Rs.25,000"}
            />
            <DetailCard
              detailCardMargin={false}
              materialIconName={"spa"}
              cardText={"Today Details"}
              cardText={"Total Income"}
              cardPrice={"Rs.2,500,000"}
            />
          </div>
          <div className="chartCardSection">
            <div className="graphTableSection">
              <div className="graphSection">
                <Chart />
              </div>
              <div className="tableSection">
                <TableCard />
              </div>
            </div>
            <div className="circleGraphSection">
              <PieChartCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
