import React from "react";
import Navbar from "./common/Navbar";
import Sidebar from "./common/Sidebar";
import AllProductsView from "./common/AllProductsView";
import MainStyle from "../../css/dashboard/Main.module.css";
import ProductStyle from "../../css/dashboard/Products.module.css";
import { Link } from "react-router-dom";
import TableStyle from "../../css/dashboard/Table.module.css";

function DeliveryDrivers() {
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
              {/* Dilvery Drivers Table */}

              <React.Fragment>
                <div className={TableStyle.tabletitle}>
                  <h1 className={TableStyle.tableTitleProductStyle}>
                    Delivery Drivers
                  </h1>
                </div>
                <div className={TableStyle.tablebody}>
                  <table className={TableStyle.tableShow}>
                    <thead>
                      <tr>
                        <th>Delivery Driver</th>
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
                        <td className={TableStyle.moreInfo}>
                          Anushka Tharindu
                        </td>
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
                        <td className={TableStyle.moreInfo}>
                          Anushka Tharindu
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

export default DeliveryDrivers;
