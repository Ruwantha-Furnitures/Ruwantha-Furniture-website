import React from "react";
import Navbar from "./common/Navbar";
import Sidebar from "./common/Sidebar";
import "./css/productStyle/Products.css";
// import "./css/PieChardCard.css";

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
              <div className="tabletitle">
                <h1 className="tableTitleStyle">Products</h1>
              </div>
              <div className="tablebody">
                <table className="tableShow">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Product Type</th>
                      <th>Price</th>
                      <th>Discount</th>
                      <th>Qunatity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Desk(Plastic)</td>
                      <td>Product Type 1</td>
                      <td>Rs.25000</td>
                      <td>Rs.250</td>
                      <td>No.12</td>
                    </tr>
                    <tr>
                      <td>Desk(Plastic)</td>
                      <td>Product Type 1</td>
                      <td>Rs.25000</td>
                      <td>Rs.250</td>
                      <td>No.12</td>
                    </tr>
                    <tr>
                      <td>Desk(Plastic)</td>
                      <td>Product Type 1</td>
                      <td>Rs.25000</td>
                      <td>Rs.250</td>
                      <td>No.12</td>
                    </tr>
                    <tr>
                      <td>Desk(Plastic)</td>
                      <td>Product Type 1</td>
                      <td>Rs.25000</td>
                      <td>Rs.250</td>
                      <td>No.12</td>
                    </tr>
                    <tr>
                      <td>Desk(Plastic)</td>
                      <td>Product Type 1</td>
                      <td>Rs.25000</td>
                      <td>Rs.250</td>
                      <td>No.12</td>
                    </tr>
                    <tr>
                      <td>Desk(Plastic)</td>
                      <td>Product Type 1</td>
                      <td>Rs.25000</td>
                      <td>Rs.250</td>
                      <td>No.12</td>
                    </tr>
                    <tr>
                      <td>Desk(Plastic)</td>
                      <td>Product Type 1</td>
                      <td>Rs.25000</td>
                      <td>Rs.250</td>
                      <td>No.12</td>
                    </tr>
                    <tr>
                      <td>Desk(Plastic)</td>
                      <td>Product Type 1</td>
                      <td>Rs.25000</td>
                      <td>Rs.250</td>
                      <td>No.12</td>
                    </tr>
                    <tr>
                      <td>Desk(Plastic)</td>
                      <td>Product Type 1</td>
                      <td>Rs.25000</td>
                      <td>Rs.250</td>
                      <td>No.12</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="productsViewSection">
            <div className="allProductsSection">
              <div className="allProductsLabel">
                <h1 className="allProductsLabelStyle">All Products</h1>
              </div>
              <div className="allProductsTable">
                <div className="allProductsTableRow">
                  <div className="allProductsRowPointer">
                    <span className="material-icons allProductPointerSize">
                      circle
                    </span>
                  </div>
                  <div className="allProductsRowText">
                    <h1 className="allProductsRowTextStyle">Product 1</h1>
                  </div>
                </div>
                <div className="allProductsTableRow">
                  <div className="allProductsRowPointer">
                    <span className="material-icons allProductPointerSize">
                      circle
                    </span>
                  </div>
                  <div className="allProductsRowText">
                    <h1 className="allProductsRowTextStyle">Product 1</h1>
                  </div>
                </div>
                <div className="allProductsTableRow">
                  <div className="allProductsRowPointer">
                    <span className="material-icons allProductPointerSize">
                      circle
                    </span>
                  </div>
                  <div className="allProductsRowText">
                    <h1 className="allProductsRowTextStyle">Product 1</h1>
                  </div>
                </div>
                <div className="allProductsTableRow">
                  <div className="allProductsRowPointer">
                    <span className="material-icons allProductPointerSize">
                      circle
                    </span>
                  </div>
                  <div className="allProductsRowText">
                    <h1 className="allProductsRowTextStyle">Product 1</h1>
                  </div>
                </div>
                <div className="allProductsTableRow">
                  <div className="allProductsRowPointer">
                    <span className="material-icons allProductPointerSize">
                      circle
                    </span>
                  </div>
                  <div className="allProductsRowText">
                    <h1 className="allProductsRowTextStyle">Product 1</h1>
                  </div>
                </div>
                <div className="allProductsTableRow">
                  <div className="allProductsRowPointer">
                    <span className="material-icons allProductPointerSize">
                      circle
                    </span>
                  </div>
                  <div className="allProductsRowText">
                    <h1 className="allProductsRowTextStyle">Product 1</h1>
                  </div>
                </div>
                <div className="allProductsTableRow">
                  <div className="allProductsRowPointer">
                    <span className="material-icons allProductPointerSize">
                      circle
                    </span>
                  </div>
                  <div className="allProductsRowText">
                    <h1 className="allProductsRowTextStyle">Product 1</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
