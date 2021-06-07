import React from "react";
// import "../css/Table.css";

function ProductsTable() {
  return (
    <React.Fragment>
      <div className="tabletitle">
        <h1 className="tableTitleProductStyle">Products</h1>
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
              <td className="moreInfo">Desk(Plastic)</td>
              <td>Product Type 1</td>
              <td>Rs.25000</td>
              <td>Rs.250</td>
              <td>No.12</td>
            </tr>
            <tr>
              <td className="moreInfo">Desk(Plastic)</td>
              <td>Product Type 1</td>
              <td>Rs.25000</td>
              <td>Rs.250</td>
              <td>No.12</td>
            </tr>
            <tr>
              <td className="moreInfo">Desk(Plastic)</td>
              <td>Product Type 1</td>
              <td>Rs.25000</td>
              <td>Rs.250</td>
              <td>No.12</td>
            </tr>
            <tr>
              <td className="moreInfo">Desk(Plastic)</td>
              <td>Product Type 1</td>
              <td>Rs.25000</td>
              <td>Rs.250</td>
              <td>No.12</td>
            </tr>
            <tr>
              <td className="moreInfo">Desk(Plastic)</td>
              <td>Product Type 1</td>
              <td>Rs.25000</td>
              <td>Rs.250</td>
              <td>No.12</td>
            </tr>
            <tr>
              <td className="moreInfo">Desk(Plastic)</td>
              <td>Product Type 1</td>
              <td>Rs.25000</td>
              <td>Rs.250</td>
              <td>No.12</td>
            </tr>
            <tr>
              <td className="moreInfo">Desk(Plastic)</td>
              <td>Product Type 1</td>
              <td>Rs.25000</td>
              <td>Rs.250</td>
              <td>No.12</td>
            </tr>
            <tr>
              <td className="moreInfo">Desk(Plastic)</td>
              <td>Product Type 1</td>
              <td>Rs.25000</td>
              <td>Rs.250</td>
              <td>No.12</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="tablePagination">
        <a href="#" className="paginationLink">
          <span class="material-icons paginationArrowIcon">arrow_back_ios</span>
        </a>
        <a href="#" className="paginationLink">
          <span className="material-icons paginationCircleIcon active">
            circle
          </span>
        </a>
        <a href="#" className="paginationLink">
          <span className="material-icons paginationCircleIcon">circle</span>
        </a>
        <a href="#" className="paginationLink">
          <span className="material-icons paginationCircleIcon">circle</span>
        </a>
        <a href="#" className="paginationLink">
          <span className="material-icons paginationCircleIcon">circle</span>
        </a>
        <a href="#" className="paginationLink">
          <span className="material-icons paginationCircleIcon">circle</span>
        </a>
        <a href="#" className="paginationLink">
          <span class="material-icons paginationArrowIcon">
            arrow_forward_ios
          </span>
        </a>
      </div>
    </React.Fragment>
  );
}

export default ProductsTable;
