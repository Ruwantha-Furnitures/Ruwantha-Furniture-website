import React from "react";
import { Link } from "react-router-dom";
import SidebarStyle from "../../../css/dashboard/Sidebar.module.css";

function Sidebar() {
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
          <li>
            <Link to="/dashboard/products" className={SidebarStyle.sidebarLink}>
              <div className={SidebarStyle.lineSection}>
                <div className={SidebarStyle.lineIcon}>
                  <span className={"material-icons " + SidebarStyle.iconWidth}>
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
              to="/dashboard/product/sell"
              className={SidebarStyle.sidebarLink}
            >
              <div className={SidebarStyle.lineSection}>
                <div className={SidebarStyle.lineIcon}>
                  <span className={"material-icons " + SidebarStyle.iconWidth}>
                    local_offer
                  </span>
                </div>
                <div className={SidebarStyle.lineText}>
                  <h1 className={SidebarStyle.lineTextStyle}>Sell Product</h1>
                </div>
              </div>
            </Link>
          </li>
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
