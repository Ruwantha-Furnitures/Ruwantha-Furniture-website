import React, { useState, useEffect } from "react";
import Navbar from "./common/Navbar";
import Sidebar from "./common/Sidebar";
import DetailCard from "./common/DetailCard";
import MainStyle from "../../css/dashboard/Main.module.css";
import DashboardStyle from "../../css/dashboard/Dashboard.module.css";
import ChartDriver from "./common/ChartDriver";
import PieChartCardDriver from "./common/PieChartCardDriver";
import TableCardDriver from "./common/TableCardDriver";
import { getDeliveries } from "./service/delivery";
import Auth from "./service/auth";
import { getDeliveryDrivers } from "./service/deliveryDriver";

function DashboardDriver() {
  const [ordersData, setOrdersData] = useState({
    today_assignment: 0,
    today_completed: 0,
    today_pending: 0,
    availabilty: false,
  });

  useEffect(() => {
    loadDataOfDashboard();
  }, []);

  const loadDataOfDashboard = async () => {
    try {
      const user_email = Auth.getCurrentUserEmail();
      const result_drivers = await getDeliveryDrivers();
      const user_driver = result_drivers.data.filter(
        (driver) => driver.account.email === user_email
      )[0];

      const result = await getDeliveries();
      // console.log(result.data);
      // console.log(user_driver.id);
      const driver_deliveries = result.data.filter(
        (delivery) => delivery.deliveryDriver.id === user_driver.id
      );

      // console.log(driver_deliveries);
      var today = new Date();
      var current_date = today.toISOString().split("T")[0];

      // today assignment
      const new_today_assignments = driver_deliveries.filter(
        (delivery) => delivery.createdAt.split("T")[0] === current_date
      );

      // today completed
      const new_today_completed = driver_deliveries.filter(
        (delivery) =>
          delivery.createdAt.split("T")[0] === current_date &&
          delivery.complete_status === 1
      );

      // today pending
      const new_today_pending = driver_deliveries.filter(
        (delivery) =>
          delivery.request_status === 0 && delivery.complete_status === 0
      );

      // console.log(new_today_assignments.length);
      // console.log(new_today_completed.length);
      // console.log(new_today_pending.length);

      const driverDashboard = {
        today_assignment: new_today_assignments.length,
        today_completed: new_today_completed.length,
        today_pending: new_today_pending.length,
        availabilty:
          user_driver.availability === 1 ? "Available" : "Unavailable",
      };

      // console.log(driverDashboard);
      setOrdersData(driverDashboard);
      // Today assignment
    } catch (error) {
      console.log("Error", error.message);
    }
  };
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
                materialIconName={"assignment"}
                cardText={"Today Assignment"}
                cardPrice={
                  ordersData.today_assignment < 10
                    ? "000" + ordersData.today_assignment
                    : ordersData.today_assignment < 100
                    ? "00" + ordersData.today_assignment
                    : ordersData.today_assignment < 1000
                    ? "0" + ordersData.today_assignment
                    : ordersData.today_assignment
                }
              />
              <DetailCard
                detailCardMargin={true}
                materialIconName={"assignment_turned_in"}
                cardText={"Today Completed"}
                cardPrice={
                  ordersData.today_completed < 10
                    ? "000" + ordersData.today_completed
                    : ordersData.today_completed < 100
                    ? "00" + ordersData.today_completed
                    : ordersData.today_completed < 1000
                    ? "0" + ordersData.today_completed
                    : ordersData.today_completed
                }
              />
              <DetailCard
                detailCardMargin={true}
                materialIconName={"pending_actions"}
                cardText={"Today Pendings"}
                cardPrice={
                  ordersData.today_pending < 10
                    ? "000" + ordersData.today_pending
                    : ordersData.today_pending < 100
                    ? "00" + ordersData.today_pending
                    : ordersData.today_pending < 1000
                    ? "0" + ordersData.today_pending
                    : ordersData.today_pending
                }
              />
              <DetailCard
                detailCardMargin={false}
                materialIconName={"online_prediction"}
                cardText={"Availability"}
                cardPrice={ordersData.availabilty}
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
