import React from "react";
import { Link } from "react-router-dom";
import TableStyle from "../../../css/dashboard/Table.module.css";

function DeliveryDriverNotificationsTable() {
  return (
    <React.Fragment>
      <div className={TableStyle.tabletitle}>
        <h1 className={TableStyle.tableTitleProductStyle}>
          Deliveries Notifications - Tharindu Gihan
        </h1>
      </div>
      <div className={TableStyle.tablebody}>
        <table className={TableStyle.tableShow}>
          <thead>
            <tr>
              <th>
                <div className={TableStyle.header}>Delivery</div>
              </th>
              <th>
                <div className={TableStyle.header}>Customer</div>
              </th>
              <th>
                <div className={TableStyle.header}>Date</div>
              </th>
              <th>
                <div className={TableStyle.header}>Payment</div>
              </th>
              <th>
                <div className={TableStyle.header}>Accept</div>
              </th>
              <th>
                <div className={TableStyle.header}>Decline</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link
                  to="/dashboard/deliveryDriverNotifications/details"
                  className={TableStyle.linkStyleAdd}
                >
                  No:1
                </Link>
              </td>
              <td>Tharindu Gihan</td>
              <td>2021-03-17</td>
              <td>Rs.25000</td>
              <td>
                <span
                  className={
                    TableStyle.statusStyle +
                    " " +
                    TableStyle.statusColorCompleted
                  }
                >
                  Accept
                </span>
              </td>
              <td>
                <span
                  className={
                    TableStyle.statusStyle +
                    " " +
                    TableStyle.statusColorNotCompleted
                  }
                >
                  Decline
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/deliveryDriverNotifications/details"
                  className={TableStyle.linkStyleAdd}
                >
                  No:2
                </Link>
              </td>
              <td>Himasha Anjali</td>
              <td>2021-03-17</td>
              <td>Rs.25000</td>
              <td>
                <span
                  className={
                    TableStyle.statusStyle +
                    " " +
                    TableStyle.statusColorCompleted
                  }
                >
                  Accept
                </span>
              </td>
              <td>
                <span
                  className={
                    TableStyle.statusStyle +
                    " " +
                    TableStyle.statusColorNotCompleted
                  }
                >
                  Decline
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/deliveryDriverNotifications/details"
                  className={TableStyle.linkStyleAdd}
                >
                  No:3
                </Link>
              </td>
              <td>Sathira Dimuthu</td>
              <td>2021-03-17</td>
              <td>Rs.25000</td>
              <td>
                <span
                  className={
                    TableStyle.statusStyle +
                    " " +
                    TableStyle.statusColorCompleted
                  }
                >
                  Accept
                </span>
              </td>
              <td>
                <span
                  className={
                    TableStyle.statusStyle +
                    " " +
                    TableStyle.statusColorNotCompleted
                  }
                >
                  Decline
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/deliveryDriverNotifications/details"
                  className={TableStyle.linkStyleAdd}
                >
                  No:4
                </Link>
              </td>
              <td>Anushaka Tharindu</td>
              <td>2021-03-17</td>
              <td>Rs.25000</td>
              <td>
                <span
                  className={
                    TableStyle.statusStyle +
                    " " +
                    TableStyle.statusColorCompleted
                  }
                >
                  Accept
                </span>
              </td>
              <td>
                <span
                  className={
                    TableStyle.statusStyle +
                    " " +
                    TableStyle.statusColorNotCompleted
                  }
                >
                  Decline
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/deliveryDriverNotifications/details"
                  className={TableStyle.linkStyleAdd}
                >
                  No:5
                </Link>
              </td>
              <td>Tharindu Gihan</td>
              <td>2021-03-17</td>
              <td>Rs.25000</td>
              <td>
                <span
                  className={
                    TableStyle.statusStyle +
                    " " +
                    TableStyle.statusColorCompleted
                  }
                >
                  Accept
                </span>
              </td>
              <td>
                <span
                  className={
                    TableStyle.statusStyle +
                    " " +
                    TableStyle.statusColorNotCompleted
                  }
                >
                  Decline
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/deliveryDriverNotifications/details"
                  className={TableStyle.linkStyleAdd}
                >
                  No:6
                </Link>
              </td>
              <td>Thanuj Dasun</td>
              <td>2021-03-17</td>
              <td>Rs.25000</td>
              <td>
                <span
                  className={
                    TableStyle.statusStyle +
                    " " +
                    TableStyle.statusColorCompleted
                  }
                >
                  Accept
                </span>
              </td>
              <td>
                <span
                  className={
                    TableStyle.statusStyle +
                    " " +
                    TableStyle.statusColorNotCompleted
                  }
                >
                  Decline
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/deliveryDriverNotifications/details"
                  className={TableStyle.linkStyleAdd}
                >
                  No:7
                </Link>
              </td>
              <td>Dimuthu Rathnasinghe</td>
              <td>2021-03-17</td>
              <td>Rs.25000</td>
              <td>
                <span
                  className={
                    TableStyle.statusStyle +
                    " " +
                    TableStyle.statusColorCompleted
                  }
                >
                  Accept
                </span>
              </td>
              <td>
                <span
                  className={
                    TableStyle.statusStyle +
                    " " +
                    TableStyle.statusColorNotCompleted
                  }
                >
                  Decline
                </span>
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

export default DeliveryDriverNotificationsTable;
