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
                materialIconName={"local_shipping"}
                cardText={"Today Deliveries"}
                cardPrice={"No.5"}
              />
              <DetailCard
                detailCardMargin={true}
                materialIconName={"category"}
                cardText={"All Deliveries"}
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
                cardText={"Total Income"}
                cardPrice={"Rs.2,500,000"}
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

// export default DashboardDriver;
