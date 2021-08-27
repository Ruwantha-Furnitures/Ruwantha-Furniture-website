import React, { useState, useEffect } from "react";
import Navbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";
import AllProductsView from "../common/AllProductsView";
import MainStyle from "../../../css/dashboard/Main.module.css";
import ProductStyle from "../../../css/dashboard/Products.module.css";
import PurchaseOrdersTable from "./common/PurchaseOrdersTable";
import PropagateLoader from "react-spinners/PropagateLoader";

function PurchaseOrders() {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);

  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 28000);
  // }, []);

  return (
    <div className={MainStyle.bodycontainer}>
      {loading ? (
        <div className={MainStyle.loader}>
          <PropagateLoader color={"#542B14"} loading={loading} size={25} />
        </div>
      ) : (
        <>
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
                  {/* Purchase Orders Page */}
                  <PurchaseOrdersTable />
                </div>
              </div>
              <div className={ProductStyle.productsViewSection}>
                <AllProductsView />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PurchaseOrders;
