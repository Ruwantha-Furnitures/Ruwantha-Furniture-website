import React from "react";
import Navbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";
import AllProductsView from "../common/AllProductsView";
import DriverDateView from "../common/DriverDateView";
import MainStyle from "../../../css/dashboard/Main.module.css";
import ProductStyle from "../../../css/dashboard/Products.module.css";
import OrderDetailsForm from "./common/OrderDetailsForm";
import Auth from "../service/auth";

function OrderDetails() {
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
              {/* OrderDetails Form*/}
              <OrderDetailsForm />
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

export default OrderDetails;
