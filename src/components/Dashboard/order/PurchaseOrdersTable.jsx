import React from "react";
import { Link } from "react-router-dom";
import TableStyle from "../../../css/dashboard/Table.module.css";

function PurchaseOrdersTable() {
  return (
    <React.Fragment>
      <div className={TableStyle.tabletitle}>
        <h1 className={TableStyle.tableTitleProductStyle}>Purchase Orders</h1>
      </div>
      <div className={TableStyle.tablebody}>
        <table className={TableStyle.tableShow}>
          <thead>
            <tr>
              <th>Order</th>
              <th>Customer Name</th>
              <th>Customer Email</th>
              <th>Discount</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={TableStyle.moreInfo}>Order 1</td>
              <td>Tharindu Gihan</td>
              <td>wtgihan@gmail.com</td>
              <td>10%</td>
              <td>Rs.100000</td>
            </tr>
            <tr>
              <td className={TableStyle.moreInfo}>Order 1</td>
              <td>Tharindu Gihan</td>
              <td>wtgihan@gmail.com</td>
              <td>10%</td>
              <td>Rs.100000</td>
            </tr>
            <tr>
              <td className={TableStyle.moreInfo}>Order 1</td>
              <td>Tharindu Gihan</td>
              <td>wtgihan@gmail.com</td>
              <td>10%</td>
              <td>Rs.100000</td>
            </tr>
            <tr>
              <td className={TableStyle.moreInfo}>Order 1</td>
              <td>Tharindu Gihan</td>
              <td>wtgihan@gmail.com</td>
              <td>10%</td>
              <td>Rs.100000</td>
            </tr>
            <tr>
              <td className={TableStyle.moreInfo}>Order 1</td>
              <td>Tharindu Gihan</td>
              <td>wtgihan@gmail.com</td>
              <td>10%</td>
              <td>Rs.100000</td>
            </tr>
            <tr>
              <td className={TableStyle.moreInfo}>Order 1</td>
              <td>Tharindu Gihan</td>
              <td>wtgihan@gmail.com</td>
              <td>10%</td>
              <td>Rs.100000</td>
            </tr>
            <tr>
              <td className={TableStyle.moreInfo}>Order 1</td>
              <td>Tharindu Gihan</td>
              <td>wtgihan@gmail.com</td>
              <td>10%</td>
              <td>Rs.100000</td>
            </tr>
            <tr>
              <td className={TableStyle.moreInfo}>Order 1</td>
              <td>Tharindu Gihan</td>
              <td>wtgihan@gmail.com</td>
              <td>10%</td>
              <td>Rs.100000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={TableStyle.tablePagination}>
        <Link to="#" className={TableStyle.paginationLink}>
          <span className={"material-icons " + TableStyle.paginationArrowIcon}>
            arrow_back_ios
          </span>
        </Link>
        <Link to="#" className={TableStyle.paginationLink}>
          <span
            className={
              "material-icons " +
              TableStyle.paginationCircleIcon +
              " " +
              TableStyle.active
            }
          >
            circle
          </span>
        </Link>
        <Link to="#" className={TableStyle.paginationLink}>
          <span className={"material-icons " + TableStyle.paginationCircleIcon}>
            circle
          </span>
        </Link>
        <Link to="#" className={TableStyle.paginationLink}>
          <span className={"material-icons " + TableStyle.paginationCircleIcon}>
            circle
          </span>
        </Link>
        <Link to="#" className={TableStyle.paginationLink}>
          <span className={"material-icons " + TableStyle.paginationCircleIcon}>
            circle
          </span>
        </Link>
        <Link to="#" className={TableStyle.paginationLink}>
          <span className={"material-icons " + TableStyle.paginationCircleIcon}>
            circle
          </span>
        </Link>
        <Link to="#" className={TableStyle.paginationLink}>
          <span className={"material-icons " + TableStyle.paginationArrowIcon}>
            arrow_forward_ios
          </span>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default PurchaseOrdersTable;
