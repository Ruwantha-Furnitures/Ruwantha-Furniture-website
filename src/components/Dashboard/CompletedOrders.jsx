import React from "react";
import Navbar from "./common/Navbar";
import Sidebar from "./common/Sidebar";
import AllProductsView from "./common/AllProductsView";
import MainStyle from "../../css/dashboard/Main.module.css";
import ProductStyle from "../../css/dashboard/Products.module.css";
import { Link } from "react-router-dom";
import TableStyle from "../../css/dashboard/Table.module.css";

function CompletedOrders() {
  return (
    <div className={MainStyle.bodycontainer}>
      <div className={MainStyle.navSection}>
        <Navbar />
      </div>
      {/* Body */}
      <div className={MainStyle.bodySection}>
        {/* Sidebar */}
        <div className={MainStyle.sidebarSection}>
          <Sidebar />
        </div>
        <div className={ProductStyle.cardDataSection}>
          <div className={ProductStyle.detailsSection}>
            <div className={ProductStyle.detailCard}>
              {/* Dilvery Drivers with Order Table */}
              <React.Fragment>
                <div className={TableStyle.tabletitle}>
                  <h1 className={TableStyle.tableTitleProductStyle}>
                    Completed Orders
                  </h1>
                </div>
                <div className={TableStyle.tablebody}>
                  <table className={TableStyle.tableShow}>
                    <thead>
                      <tr>
                        <th>Order Id</th>
                        <th>Customer</th>
                        <th>Contact Number</th>
                        <th>Date</th>
                        <th>Driver</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={TableStyle.moreInfo}>No:1</td>
                        <td>Tharindu Gihan</td>
                        <td>0778522736</td>
                        <td>2021-03-17</td>
                        <td className={TableStyle.moreInfo}>
                          Gihan Withanchchi
                        </td>
                      </tr>
                      <tr>
                        <td className={TableStyle.moreInfo}>No:2</td>
                        <td>Himasha Anjali</td>
                        <td>0778522736</td>
                        <td>2021-03-17</td>
                        <td className={TableStyle.moreInfo}>Himasha Anjali</td>
                      </tr>
                      <tr>
                        <td className={TableStyle.moreInfo}>No:3</td>
                        <td>Sathira Dimuthu</td>
                        <td>0778522736</td>
                        <td>2021-03-17</td>
                        <td className={TableStyle.moreInfo}>Sathira Dimuthu</td>
                      </tr>
                      <tr>
                        <td className={TableStyle.moreInfo}>No:4</td>
                        <td>Anushaka Tharindu</td>
                        <td>0778522736</td>
                        <td>2021-03-17</td>
                        <td className={TableStyle.moreInfo}>
                          Anushka Tharindu
                        </td>
                      </tr>
                      <tr>
                        <td className={TableStyle.moreInfo}>No:5</td>
                        <td>Tharindu Gihan</td>
                        <td>0778522736</td>
                        <td>2021-03-17</td>
                        <td className={TableStyle.moreInfo}>Tharindu Gihan</td>
                      </tr>
                      <tr>
                        <td className={TableStyle.moreInfo}>No:6</td>
                        <td>Thanuj Dasun</td>
                        <td>0778522736</td>
                        <td>2021-03-17</td>
                        <td className={TableStyle.moreInfo}>
                          Dimuthu Ranthansinghe
                        </td>
                      </tr>
                      <tr>
                        <td className={TableStyle.moreInfo}>No:7</td>
                        <td>Dimuthu Rathnasinghe</td>
                        <td>0778522736</td>
                        <td>2021-03-17</td>
                        <td className={TableStyle.moreInfo}>Tharindu Gihan</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className={TableStyle.tablePagination}>
                  <Link to="#" className={TableStyle.paginationLink}>
                    <span
                      className={
                        "material-icons " + TableStyle.paginationArrowIcon
                      }
                    >
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
                    <span
                      className={
                        "material-icons " + TableStyle.paginationCircleIcon
                      }
                    >
                      circle
                    </span>
                  </Link>
                  <Link to="#" className={TableStyle.paginationLink}>
                    <span
                      className={
                        "material-icons " + TableStyle.paginationCircleIcon
                      }
                    >
                      circle
                    </span>
                  </Link>
                  <Link to="#" className={TableStyle.paginationLink}>
                    <span
                      className={
                        "material-icons " + TableStyle.paginationCircleIcon
                      }
                    >
                      circle
                    </span>
                  </Link>
                  <Link to="#" className={TableStyle.paginationLink}>
                    <span
                      className={
                        "material-icons " + TableStyle.paginationCircleIcon
                      }
                    >
                      circle
                    </span>
                  </Link>
                  <Link to="#" className={TableStyle.paginationLink}>
                    <span
                      className={
                        "material-icons " + TableStyle.paginationArrowIcon
                      }
                    >
                      arrow_forward_ios
                    </span>
                  </Link>
                </div>
              </React.Fragment>
            </div>
          </div>
          <div className={ProductStyle.productsViewSection}>
            <AllProductsView />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedOrders;
