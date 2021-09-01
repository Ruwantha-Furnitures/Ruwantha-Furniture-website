import React from "react";
import Auth from "../service/auth";
import Navbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";
import AllProductsView from "../common/AllProductsView";
import MainStyle from "../../../css/dashboard/Main.module.css";
import ProductStyle from "../../../css/dashboard/Products.module.css";
import DeliveryDriverUpdateForm from "./common/DeliveryDriverUpdateForm";
import DriverDateView from "../common/DriverDateView";

function DeliveryDriverUpdate() {
  const user = Auth.getCurrentUser();
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
              {/* Delivery Driver View Profile */}

              <DeliveryDriverUpdateForm />
            </div>
          </div>
          <div className={ProductStyle.productsViewSection}>
            {user !== "Delivery Driver" ? (
              <AllProductsView />
            ) : (
              <DriverDateView />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryDriverUpdate;
