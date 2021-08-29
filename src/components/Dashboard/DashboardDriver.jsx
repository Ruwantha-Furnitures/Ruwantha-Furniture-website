import React from "react";
import Navbar from "./common/Navbar";
import Sidebar from "./common/Sidebar";
import DetailCard from "./common/DetailCard";
import MainStyle from "../../css/dashboard/Main.module.css";
import DashboardStyle from "../../css/dashboard/Dashboard.module.css";
import ChartDriver from "./common/ChartDriver";
import PieChartCardDriver from "./common/PieChartCardDriver";
import TableCardDriver from "./common/TableCardDriver";

function DashboardDriver() {
  return (
    <React.Fragment>
      <div className={MainStyle.bodycontainer}>
        <div className={MainStyle.navSection}>
          <Navbar />
        </div>
        {/* Body */}
        <div className={MainStyle.bodySection}>
          {/* Sidebar */}
          <div className={MainStyle.sidebarSection}>
            <Sidebar />
          </div>
          <div className={DashboardStyle.cardSection}>
            <div className={DashboardStyle.detailsCardSection}>
              <DetailCard
                detailCardMargin={true}
                materialIconName={"price_change"}
                cardText={"Today Sales"}
                cardPrice={"Rs.10000"}
              />
              <DetailCard
                detailCardMargin={true}
                materialIconName={"category"}
                cardText={"Sales Items"}
                cardPrice={"10"}
              />
              <DetailCard
                detailCardMargin={true}
                materialIconName={"stacked_line_chart"}
                cardText={"New Orders"}
                cardPrice={"10"}
              />
              <DetailCard
                detailCardMargin={false}
                materialIconName={"spa"}
                cardText={"Today Orders"}
                cardPrice={"30"}
              />
            </div>
            <div className={DashboardStyle.chartCardSection}>
              <div className={DashboardStyle.graphTableSection}>
                <div className={DashboardStyle.graphSection}>
                  <ChartDriver />
                </div>
                <div className={DashboardStyle.tableSection}>
                  <TableCardDriver />
                </div>
              </div>
              <div className={DashboardStyle.circleGraphSection}>
                <PieChartCardDriver />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DashboardDriver;
