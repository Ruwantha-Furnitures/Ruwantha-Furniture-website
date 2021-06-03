import React from "react";
import Navbar from "./common/Navbar";
import ProductsTable from "./common/ProductsTable";
import Sidebar from "./common/Sidebar";
import "./css/Products.css";
import "./css/Main.css";
import AllProductsView from "./common/AllProductsView";

function Products() {
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
        <div className="cardDataSection">
          <div className="detailsSection">
            <div className="detailCard">
              <ProductsTable />
            </div>
          </div>
          <div className="productsViewSection">
            <AllProductsView />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
