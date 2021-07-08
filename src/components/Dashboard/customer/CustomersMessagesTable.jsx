import React from "react";
import { Link } from "react-router-dom";
import TableStyle from "../../../css/dashboard/Table.module.css";

function CustomersMessagesTable() {
  return (
    <React.Fragment>
      <div className={TableStyle.titleHeader}>
        <h1 className={TableStyle.tableTitleProductStyle}>Messages</h1>
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
                <div className={TableStyle.header}>Message</div>
              </th>
              <th>
                <div className={TableStyle.header}>Customer Name</div>
              </th>
              <th>
                <div className={TableStyle.header}>Email</div>
              </th>
              <th>
                <div className={TableStyle.header}>Contact Number</div>
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
                  to="/dashboard/customerMessage/view"
                  className={TableStyle.linkStyle}
                >
                  No:1
                </Link>
              </td>
              <td>Tharindu Gihan</td>
              <td>wtgihan@gmail.com</td>
              <td>0778522736</td>
              <td>Galle</td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/customerMessage/view"
                  className={TableStyle.linkStyle}
                >
                  No:2
                </Link>
              </td>
              <td>Himasha Anjali</td>
              <td>anjali@gmail.com</td>
              <td>0778522436</td>
              <td>Colombo</td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/customerMessage/view"
                  className={TableStyle.linkStyle}
                >
                  No:3
                </Link>
              </td>
              <td>Sathira Dimuthu</td>
              <td>dimuthu@gmail.com</td>
              <td>0778222736</td>
              <td>Galle</td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/customerMessage/view"
                  className={TableStyle.linkStyle}
                >
                  No:4
                </Link>
              </td>
              <td>Anushka Tharindu</td>
              <td>anushka@gmail.com</td>
              <td>0774536987</td>
              <td>Pandura</td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/customerMessage/view"
                  className={TableStyle.linkStyle}
                >
                  No:5
                </Link>
              </td>
              <td>Himasha Anjali</td>
              <td>anjali@gmail.com</td>
              <td>0778522436</td>
              <td>Colombo</td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/customerMessage/view"
                  className={TableStyle.linkStyle}
                >
                  No:6
                </Link>
              </td>
              <td>Sathira Dimuthu</td>
              <td>dimuthu@gmail.com</td>
              <td>0778222736</td>
              <td>Poddala</td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/dashboard/customerMessage/view"
                  className={TableStyle.linkStyle}
                >
                  No:7
                </Link>
              </td>
              <td>Anushka Tharindu</td>
              <td>anushka@gmail.com</td>
              <td>0774536987</td>
              <td>Galle</td>
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

export default CustomersMessagesTable;
