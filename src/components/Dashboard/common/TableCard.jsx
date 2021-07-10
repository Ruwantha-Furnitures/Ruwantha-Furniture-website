import React from "react";
import TableCardStyle from "../../../css/dashboard/Table.module.css";

function TableCard() {
  return (
    <div className={TableCardStyle.table}>
      <div className={TableCardStyle.tabletitle}>
        <h1 className={TableCardStyle.tableTitleStyle}>Top Selling Products</h1>
      </div>
      <div className={TableCardStyle.tablebody}>
        <table className={TableCardStyle.tableShow}>
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
              <td>Table</td>
              <td>Rs.25000</td>
              <td>Rs.250</td>
              <td>No.12</td>
              <td>Direct</td>
            </tr>
            <tr>
              <td>Chair</td>
              <td>Rs.25000</td>
              <td>Rs.250</td>
              <td>No.12</td>
              <td>Online</td>
            </tr>
            <tr>
              <td>Cupboard</td>
              <td>Rs.25000</td>
              <td>Rs.250</td>
              <td>No.12</td>
              <td>Direct</td>
            </tr>
            <tr>
              <td>Desk</td>
              <td>Rs.25000</td>
              <td>Rs.250</td>
              <td>No.12</td>
              <td>Direct</td>
            </tr>
            <tr>
              <td>Desk(High)</td>
              <td>Rs.25000</td>
              <td>Rs.250</td>
              <td>No.12</td>
              <td>Online</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableCard;
