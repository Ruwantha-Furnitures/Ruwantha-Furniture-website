import React from "react";
import "../css/Table.css";

function TableCard() {
  return (
    <div className="table">
      <div className="tabletitle">
        <h1 className="tableTitleStyle">Top Selling Products</h1>
      </div>
      <div className="tablebody">
        <table className="tableShow">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Sold</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Desk(Plastic)</td>
              <td>Rs.25000</td>
              <td>Rs.250</td>
              <td>No.12</td>
              <td>Direct</td>
            </tr>
            <tr>
              <td>Desk(Plastic)</td>
              <td>Rs.25000</td>
              <td>Rs.250</td>
              <td>No.12</td>
              <td>Direct</td>
            </tr>
            <tr>
              <td>Desk(Plastic)</td>
              <td>Rs.25000</td>
              <td>Rs.250</td>
              <td>No.12</td>
              <td>Direct</td>
            </tr>
            <tr>
              <td>Desk(Plastic)</td>
              <td>Rs.25000</td>
              <td>Rs.250</td>
              <td>No.12</td>
              <td>Direct</td>
            </tr>
            <tr>
              <td>Desk(Plastic)</td>
              <td>Rs.25000</td>
              <td>Rs.250</td>
              <td>No.12</td>
              <td>Direct</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableCard;
