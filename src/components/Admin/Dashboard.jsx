import React from "react";
import Navbar from "./common/Navbar";
import Sidebar from "./common/Sidebar";
import DetailCard from "./common/DetailCard";
import "./css/Dashboard.css";
import Chart from "./common/Chart";

function Dashboard() {
  return (
    <div className="bodycontainer">
      <div className="navSection">
        <Navbar />
      </div>
      {/* Body */}
      <div className="bodySection">
        <div className="sidebarSection">
          <Sidebar />
        </div>
        <div className="cardSection">
          <div className="detailsCardSection">
            <DetailCard
              detailCardMargin={true}
              materialIconName={"price_change"}
              cardText={"Today Details"}
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
              cardPrice={"Rs.2,500,000"}
            />
          </div>
          <div className="chartCardSection">
            <div className="graphTableSection">
              <div className="graphSection">
                <Chart />
              </div>
              <div className="tableSection">{/* Table */}</div>
              {/* hello */}
            </div>
            <div className="circleGraphSection">{/* Hello2 */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;