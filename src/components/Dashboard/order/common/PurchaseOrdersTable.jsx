import React from "react";
import { Link } from "react-router-dom";
import TableStyle from "../../../../css/dashboard/Table.module.css";

function PurchaseOrdersTable() {
  return (
    <React.Fragment>
      <div className={TableStyle.titleHeader}>
        <h1 className={TableStyle.tableTitleProductStyle}>Purchase Orders</h1>
        <div className={TableStyle.searchSection}>
          <form action="#">
            <div className={TableStyle.search}>
              <div className={TableStyle.searchicon}>
                <span
                  className={"material-icons " + TableStyle.searchIconStyle}
                >
                  search
                </span>
              </div>

              <div className={TableStyle.searchText}>
                <input
                  type="search"
                  placeholder="Search Here"
                  value=""
                  name="search"
                  className={TableStyle.searchinput}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className={TableStyle.tablebody}>
        <table className={TableStyle.tableShow}>
          <thead>
            <tr>
              <th>
                <div className={TableStyle.header}>Order</div>
              </th>
              <th>
                <div className={TableStyle.header}>Customer Name</div>
              </th>
              <th>
                <div className={TableStyle.header}>Customer Email</div>
              </th>
              <th>
                <div className={TableStyle.header}>Discount</div>
              </th>
              <th>
                <div className={TableStyle.header}>Price</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link
                  to="/dashboard/purchaseOrder/details"
                  className={TableStyle.linkStyleAdd}
                >
                  Order 1
                </Link>
              </td>
              <td>Tharindu Gihan</td>
              <td>wtgihan@gmail.com</td>
              <td>10%</td>
              <td>Rs.100000</td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/purchaseOrder/details"
                  className={TableStyle.linkStyleAdd}
                >
                  Order 2
                </Link>
              </td>
              <td>Tharindu Gihan</td>
              <td>wtgihan@gmail.com</td>
              <td>10%</td>
              <td>Rs.100000</td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/purchaseOrder/details"
                  className={TableStyle.linkStyleAdd}
                >
                  Order 3
                </Link>
              </td>
              <td>Tharindu Gihan</td>
              <td>wtgihan@gmail.com</td>
              <td>10%</td>
              <td>Rs.100000</td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/purchaseOrder/details"
                  className={TableStyle.linkStyleAdd}
                >
                  Order 4
                </Link>
              </td>
              <td>Tharindu Gihan</td>
              <td>wtgihan@gmail.com</td>
              <td>10%</td>
              <td>Rs.100000</td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/purchaseOrder/details"
                  className={TableStyle.linkStyleAdd}
                >
                  Order 5
                </Link>
              </td>
              <td>Tharindu Gihan</td>
              <td>wtgihan@gmail.com</td>
              <td>10%</td>
              <td>Rs.100000</td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/purchaseOrder/details"
                  className={TableStyle.linkStyleAdd}
                >
                  Order 6
                </Link>
              </td>
              <td>Tharindu Gihan</td>
              <td>wtgihan@gmail.com</td>
              <td>10%</td>
              <td>Rs.100000</td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/purchaseOrder/details"
                  className={TableStyle.linkStyleAdd}
                >
                  Order 7
                </Link>
              </td>
              <td>Tharindu Gihan</td>
              <td>wtgihan@gmail.com</td>
              <td>10%</td>
              <td>Rs.100000</td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/purchaseOrder/details"
                  className={TableStyle.linkStyleAdd}
                >
                  Order 8
                </Link>
              </td>
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
