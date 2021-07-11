import React from "react";
import { Link } from "react-router-dom";
import TableStyle from "../../../css/dashboard/Table.module.css";

function DeliveryDriversTable() {
  return (
    <React.Fragment>
      <div className={TableStyle.titleHeader}>
        <h1 className={TableStyle.tableTitleProductStyle}>Delivery Drivers</h1>
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
                <div className={TableStyle.header}>
                  Delivery Driver
                  <Link
                    to="/dashboard/deliveryDriver/profile"
                    className={TableStyle.linkStyleAdd}
                  >
                    <span
                      className={"material-icons " + TableStyle.addIconStyle}
                    >
                      add_circle
                    </span>
                  </Link>
                </div>
              </th>
              <th>
                <div className={TableStyle.header}>Email</div>
              </th>
              <th>
                <div className={TableStyle.header}>Contact Number</div>
              </th>
              <th>
                <div className={TableStyle.header}>Payment(Basic)</div>
              </th>
              <th>
                <div className={TableStyle.header}>Area</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link
                  to="/dashboard/deliveryDriver/view"
                  className={TableStyle.linkStyleAdd}
                >
                  Tharindu Gihan
                </Link>
              </td>
              <td>wtgihan@gmail.com</td>
              <td>0778522736</td>
              <td>Rs.25000</td>
              <td>Galle</td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/deliveryDriver/view"
                  className={TableStyle.linkStyleAdd}
                >
                  Himasha Anjali
                </Link>
              </td>
              <td>anjali@gmail.com</td>
              <td>0778522436</td>
              <td>Rs.15000</td>
              <td>Mulleriayawa</td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/deliveryDriver/view"
                  className={TableStyle.linkStyleAdd}
                >
                  Sathira Dimuthu
                </Link>
              </td>
              <td>dimuthu@gmail.com</td>
              <td>0778222736</td>
              <td>Rs.35000</td>
              <td>Meepawala</td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/deliveryDriver/view"
                  className={TableStyle.linkStyleAdd}
                >
                  Anushka Tharindu
                </Link>
              </td>
              <td>anushka@gmail.com</td>
              <td>0774536987</td>
              <td>Rs.45000</td>
              <td>Gonapura</td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/deliveryDriver/view"
                  className={TableStyle.linkStyleAdd}
                >
                  Himasha Anjali
                </Link>
              </td>
              <td>anjali@gmail.com</td>
              <td>0778522436</td>
              <td>Rs.15000</td>
              <td>Colombo</td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/deliveryDriver/view"
                  className={TableStyle.linkStyleAdd}
                >
                  Sathira Dimuthu
                </Link>
              </td>
              <td>dimuthu@gmail.com</td>
              <td>0778222736</td>
              <td>Rs.35000</td>
              <td>Beddegama</td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/deliveryDriver/view"
                  className={TableStyle.linkStyleAdd}
                >
                  Anushka Tharindu
                </Link>
              </td>
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
