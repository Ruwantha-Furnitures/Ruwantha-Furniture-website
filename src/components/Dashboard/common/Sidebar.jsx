import React from "react";
import { Link } from "react-router-dom";
import SidebarStyle from "../../../css/dashboard/Sidebar.module.css";

function Sidebar() {
  // Admin
  // Owner
  // DeliveryDriver
  const user = "DeliveryDriver";

  return (
    <div className={SidebarStyle.sidebarBar}>
      <div className={SidebarStyle.sideList}>
        <ul>
          <li>
            <Link to="/dashboard" className={SidebarStyle.sidebarLink}>
              <div className={SidebarStyle.lineSection}>
                <div className={SidebarStyle.lineIcon}>
                  <span className={"material-icons " + SidebarStyle.iconWidth}>
                    home
                  </span>
                </div>
                <div className={SidebarStyle.lineText}>
                  <h1 className={SidebarStyle.lineTextStyle}>Dashboard</h1>
                </div>
              </div>
            </Link>
          </li>
          {(user === "Admin" || user === "Owner") && (
            <>
              <li>
                <Link
                  to="/dashboard/products"
                  className={SidebarStyle.sidebarLink}
                >
                  <div className={SidebarStyle.lineSection}>
                    <div className={SidebarStyle.lineIcon}>
                      <span
                        className={"material-icons " + SidebarStyle.iconWidth}
                      >
                        chair
                      </span>
                    </div>
                    <div className={SidebarStyle.lineText}>
                      <h1 className={SidebarStyle.lineTextStyle}>Product</h1>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/purchaseOrders"
                  className={SidebarStyle.sidebarLink}
                >
                  <div className={SidebarStyle.lineSection}>
                    <div className={SidebarStyle.lineIcon}>
                      <span
                        className={"material-icons " + SidebarStyle.iconWidth}
                      >
                        inventory_2
                      </span>
                    </div>
                    <div className={SidebarStyle.lineText}>
                      <h1 className={SidebarStyle.lineTextStyle}>Orders</h1>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/completedOrders"
                  className={SidebarStyle.sidebarLink}
                >
                  <div className={SidebarStyle.lineSection}>
                    <div className={SidebarStyle.lineIcon}>
                      <span
                        className={"material-icons " + SidebarStyle.iconWidth}
                      >
                        fact_check
                      </span>
                    </div>
                    <div className={SidebarStyle.lineText}>
                      <h1 className={SidebarStyle.lineTextStyle}>Completed </h1>
                    </div>
                  </div>
                </Link>
              </li>
            </>
          )}
          {/* Commone for all users */}
          <li>
            <Link
              to="/dashboard/deliveryDrivers"
              className={SidebarStyle.sidebarLink}
            >
              <div className={SidebarStyle.lineSection}>
                <div className={SidebarStyle.lineIcon}>
                  <span className={"material-icons " + SidebarStyle.iconWidth}>
                    local_shipping
                  </span>
                </div>
                <div className={SidebarStyle.lineText}>
                  <h1 className={SidebarStyle.lineTextStyle}>Drivers</h1>
                </div>
              </div>
            </Link>
          </li>
          {user === "Admin" && (
            <>
              <li>
                <Link
                  to="/dashboard/product/sell/customer"
                  className={SidebarStyle.sidebarLink}
                >
                  <div className={SidebarStyle.lineSection}>
                    <div className={SidebarStyle.lineIcon}>
                      <span
                        className={"material-icons " + SidebarStyle.iconWidth}
                      >
                        local_offer
                      </span>
                    </div>
                    <div className={SidebarStyle.lineText}>
                      <h1 className={SidebarStyle.lineTextStyle}>
                        Sell Product
                      </h1>
                    </div>
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  to="/dashboard/assignListOrderDriver"
                  className={SidebarStyle.sidebarLink}
                >
                  <div className={SidebarStyle.lineSection}>
                    <div className={SidebarStyle.lineIcon}>
                      <span
                        className={"material-icons " + SidebarStyle.iconWidth}
                      >
                        assignment
                      </span>
                    </div>
                    <div className={SidebarStyle.lineText}>
                      <h1 className={SidebarStyle.lineTextStyle}>Assign</h1>
                    </div>
                  </div>
                </Link>
              </li>
            </>
          )}
          {user === "Owner" && (
            <>
              <li>
                <Link
                  to="/dashboard/customers"
                  className={SidebarStyle.sidebarLink}
                >
                  <div className={SidebarStyle.lineSection}>
                    <div className={SidebarStyle.lineIcon}>
                      <span
                        className={"material-icons " + SidebarStyle.iconWidth}
                      >
                        supervisor_account
                      </span>
                    </div>
                    <div className={SidebarStyle.lineText}>
                      <h1 className={SidebarStyle.lineTextStyle}>Customers</h1>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/customerMessages"
                  className={SidebarStyle.sidebarLink}
                >
                  <div className={SidebarStyle.lineSection}>
                    <div className={SidebarStyle.lineIcon}>
                      <span
                        className={"material-icons " + SidebarStyle.iconWidth}
                      >
                        contact_mail
                      </span>
                    </div>
                    <div className={SidebarStyle.lineText}>
                      <h1 className={SidebarStyle.lineTextStyle}>Messages</h1>
                    </div>
                  </div>
                </Link>
              </li>
            </>
          )}
          {user === "DeliveryDriver" && (
            <>
              <li>
                <Link
                  to="/dashboard/deliveryDriver/deliveries"
                  className={SidebarStyle.sidebarLink}
                >
                  <div className={SidebarStyle.lineSection}>
                    <div className={SidebarStyle.lineIcon}>
                      <span
                        className={"material-icons " + SidebarStyle.iconWidth}
                      >
                        home_repair_service
                      </span>
                    </div>
                    <div className={SidebarStyle.lineText}>
                      <h1 className={SidebarStyle.lineTextStyle}>Deliveries</h1>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/deliveryDriver/notifications"
                  className={SidebarStyle.sidebarLink}
                >
                  <div className={SidebarStyle.lineSection}>
                    <div className={SidebarStyle.lineIcon}>
                      <span
                        className={"material-icons " + SidebarStyle.iconWidth}
                      >
                        notifications
                      </span>
                    </div>
                    <div className={SidebarStyle.lineText}>
                      <h1 className={SidebarStyle.lineTextStyle}>
                        Notifications
                      </h1>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/deliveryDriverProfile"
                  className={SidebarStyle.sidebarLink}
                >
                  <div className={SidebarStyle.lineSection}>
                    <div className={SidebarStyle.lineIcon}>
                      <span
                        className={"material-icons " + SidebarStyle.iconWidth}
                      >
                        account_box
                      </span>
                    </div>
                    <div className={SidebarStyle.lineText}>
                      <h1 className={SidebarStyle.lineTextStyle}>Profile</h1>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/deliveryDriver/availablity"
                  className={SidebarStyle.sidebarLink}
                >
                  <div className={SidebarStyle.lineSection}>
                    <div className={SidebarStyle.lineIcon}>
                      <span
                        className={"material-icons " + SidebarStyle.iconWidth}
                      >
                        assistant
                      </span>
                    </div>
                    <div className={SidebarStyle.lineText}>
                      <h1 className={SidebarStyle.lineTextStyle}>
                        Availability
                      </h1>
                    </div>
                  </div>
                </Link>
              </li>
            </>
          )}
          <li>
            <div className={SidebarStyle.lineSection}>
              <div className={SidebarStyle.lineIcon}>
                <span className={"material-icons " + SidebarStyle.iconWidth}>
                  space_dashboard
                </span>
              </div>
              <div className={SidebarStyle.lineText}>
                <h1 className={SidebarStyle.lineTextStyle}>Website</h1>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
