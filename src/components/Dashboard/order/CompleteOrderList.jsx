import React from "react";
import { Link } from "react-router-dom";
import TableStyle from "../../../css/dashboard/Table.module.css";

function CompleteOrderList() {
  return (
    <React.Fragment>
      <div className={TableStyle.titleHeader}>
        <h1 className={TableStyle.tableTitleProductStyle}>Completed Orders</h1>
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
                <div className={TableStyle.header}>Order Id</div>
              </th>
              <th>
                <div className={TableStyle.header}>Customer</div>
              </th>
              <th>
                <div className={TableStyle.header}>Contact Number</div>
              </th>
              <th>
                <div className={TableStyle.header}>Date</div>
              </th>
              <th>
                <div className={TableStyle.header}>Driver</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link
                  to="/dashboard/completedOrder/details"
                  className={TableStyle.linkStyleAdd}
                >
                  Order 1
                </Link>
              </td>
              <td>Tharindu Gihan</td>
              <td>0778511736</td>
              <td>2021-04-17</td>
              <td>
                <Link
                  to="/dashboard/deliveryDriver/viewOnly"
                  className={TableStyle.linkStyleAdd}
                >
                  Gihan Withanchchi
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/completedOrder/details"
                  className={TableStyle.linkStyleAdd}
                >
                  Order 2
                </Link>
              </td>
              <td>Himasha Anjali</td>
              <td>0778522737</td>
              <td>2021-03-18</td>
              <td>
                <Link
                  to="/dashboard/deliveryDriver/viewOnly"
                  className={TableStyle.linkStyleAdd}
                >
                  Himasha Anjali
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/completedOrder/details"
                  className={TableStyle.linkStyleAdd}
                >
                  Order 3
                </Link>
              </td>
              <td>Sathira Dimuthu</td>
              <td>0778522836</td>
              <td>2021-02-17</td>
              <td>
                <Link
                  to="/dashboard/deliveryDriver/viewOnly"
                  className={TableStyle.linkStyleAdd}
                >
                  Sathira Dimuthu
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/completedOrder/details"
                  className={TableStyle.linkStyleAdd}
                >
                  Order 4
                </Link>
              </td>
              <td>Anushaka Tharindu</td>
              <td>0778522746</td>
              <td>2021-01-17</td>
              <td>
                <Link
                  to="/dashboard/deliveryDriver/viewOnly"
                  className={TableStyle.linkStyleAdd}
                >
                  Anushka Tharindu
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/completedOrder/details"
                  className={TableStyle.linkStyleAdd}
                >
                  Order 5
                </Link>
              </td>
              <td>Tharindu Gihan</td>
              <td>0778522736</td>
              <td>2021-03-17</td>
              <td>
                <Link
                  to="/dashboard/deliveryDriver/viewOnly"
                  className={TableStyle.linkStyleAdd}
                >
                  Tharindu Gihan
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/completedOrder/details"
                  className={TableStyle.linkStyleAdd}
                >
                  Order 6
                </Link>
              </td>
              <td>Thanuj Dasun</td>
              <td>0778522736</td>
              <td>2021-05-17</td>
              <td>
                <Link
                  to="/dashboard/deliveryDriver/viewOnly"
                  className={TableStyle.linkStyleAdd}
                >
                  Dimuthu Ranthansinghe
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/completedOrder/details"
                  className={TableStyle.linkStyleAdd}
                >
                  Order 7
                </Link>
              </td>
              <td>Dimuthu Rathnasinghe</td>
              <td>0778522736</td>
              <td>2021-03-17</td>
              <td>
                <Link
                  to="/dashboard/deliveryDriver/viewOnly"
                  className={TableStyle.linkStyleAdd}
                >
                  Tharindu Gihan
                </Link>
              </td>
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

export default CompleteOrderList;
