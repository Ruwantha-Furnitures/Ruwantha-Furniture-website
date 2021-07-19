import React from "react";
import Navbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";
import DriverDateView from "../common/DriverDateView";
import MainStyle from "../../../css/dashboard/Main.module.css";
import ProductStyle from "../../../css/dashboard/Products.module.css";
import DeliveryDriverNotificationsTable from "./common/DeliveryDriverNotificationsTable";

function DeliveryDriverNotifications() {
  return (
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
        <div className={ProductStyle.cardDataSection}>
          <div className={ProductStyle.detailsSection}>
            <div className={ProductStyle.detailCard}>
              {/* Dilvery Drivers Table */}
              <DeliveryDriverNotificationsTable />
            </div>
          </div>
          <div className={ProductStyle.productsViewSection}>
            <DriverDateView />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryDriverNotifications;
