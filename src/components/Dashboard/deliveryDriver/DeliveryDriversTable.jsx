import React from "react";
import { Link } from "react-router-dom";
import TableStyle from "../../../css/dashboard/Table.module.css";

function DeliveryDriversTable() {
  return (
    <React.Fragment>
      <div className={TableStyle.tabletitle}>
        <h1 className={TableStyle.tableTitleProductStyle}>Delivery Drivers</h1>
      </div>
      <div className={TableStyle.tablebody}>
        <table className={TableStyle.tableShow}>
          <thead>
            <tr>
              <th>
                <Link
                  to="/dashboard/deliveryDriver/profile"
                  className={TableStyle.linkStyle}
                >
                  Delivery Driver
                </Link>
              </th>
              <th>Email</th>
              <th>Contact Number</th>
              <th>Payment(Basic)</th>
              <th>Area</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={TableStyle.moreInfo}>Tharindu Gihan</td>
              <td>wtgihan@gmail.com</td>
              <td>0778522736</td>
              <td>Rs.25000</td>
              <td>Galle</td>
            </tr>
            <tr>
              <td className={TableStyle.moreInfo}>Himasha Anjali</td>
              <td>anjali@gmail.com</td>
              <td>0778522436</td>
              <td>Rs.15000</td>
              <td>Mulleriayawa</td>
            </tr>
            <tr>
              <td className={TableStyle.moreInfo}>Sathira Dimuthu</td>
              <td>dimuthu@gmail.com</td>
              <td>0778222736</td>
              <td>Rs.35000</td>
              <td>Meepawala</td>
            </tr>
            <tr>
              <td className={TableStyle.moreInfo}>Anushka Tharindu</td>
              <td>anushka@gmail.com</td>
              <td>0774536987</td>
              <td>Rs.45000</td>
              <td>Gonapura</td>
            </tr>
            <tr>
              <td className={TableStyle.moreInfo}>Himasha Anjali</td>
              <td>anjali@gmail.com</td>
              <td>0778522436</td>
              <td>Rs.15000</td>
              <td>Colombo</td>
            </tr>
            <tr>
              <td className={TableStyle.moreInfo}>Sathira Dimuthu</td>
              <td>dimuthu@gmail.com</td>
              <td>0778222736</td>
              <td>Rs.35000</td>
              <td>Beddegama</td>
            </tr>
            <tr>
              <td className={TableStyle.moreInfo}>Anushka Tharindu</td>
              <td>anushka@gmail.com</td>
              <td>0774536987</td>
              <td>Rs.45000</td>
              <td>Borella</td>
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

export default DeliveryDriversTable;
