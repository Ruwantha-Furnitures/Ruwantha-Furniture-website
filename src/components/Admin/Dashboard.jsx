import React from "react";
import Navbar from "./common/Navbar";
import Sidebar from "./common/Sidebar";
import DetailCard from "./common/DetailCard";
import Chart from "./common/Chart";
import TableCard from "./common/TableCard";
import PieChartCard from "./common/PieChartCard";
import MainStyle from "../../css/dashboard/Main.module.css";
import DashboardStyle from "../../css/dashboard/Dashboard.module.css";
// import "../../css/dashboard/BootstrapEffect.module.css";

function Dashboard() {
  return (
    <React.Fragment>
      <div className="bootstrap-iso">
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
              <div className={DashboardStyle.chartCardSection}>
                <div className={DashboardStyle.graphTableSection}>
                  <div className={DashboardStyle.graphSection}>
                    <Chart />
                  </div>
                  <div className={DashboardStyle.tableSection}>
                    <TableCard />
                  </div>
                </div>
                <div className={DashboardStyle.circleGraphSection}>
                  <PieChartCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
