import React from "react";
import { Link } from "react-router-dom";
import NavbarStyle from "../../../css/dashboard/Navbar.module.css";

function Navbar() {
  return (
    <div className={NavbarStyle.navgation}>
      <div className={NavbarStyle.logoSection}>
        <div className={NavbarStyle.logodiv}>
          <div className={NavbarStyle.logo}></div>
          <div className={NavbarStyle.logoname}>
            <h1 className={NavbarStyle.logonameStyle}>AR Magic</h1>
          </div>
        </div>
      </div>
      <div className={NavbarStyle.dateSection}>
        <div className={NavbarStyle.date}>
          <div className={NavbarStyle.dateicon}>
            <span className={"material-icons " + NavbarStyle.dateIconStyle}>
              drag_indicator
            </span>
          </div>
          <div className={NavbarStyle.dateText}>
            <h1 className={NavbarStyle.dateTitle}>Welcome to Owner Portal</h1>
          </div>
          <div className={NavbarStyle.dateicon2}>
            <span className={"material-icons " + NavbarStyle.dateIconStyle}>
              drag_indicator
            </span>
          </div>
        </div>
      </div>
      <div className={NavbarStyle.profileSection}>
        <div className={NavbarStyle.alignSection}>
          <div className={NavbarStyle.profileIcon}>
            <Link
              to="/dashboard/profile/changePassword"
              className={NavbarStyle.linkStyle}
            >
              <span className={"material-icons " + NavbarStyle.accounticon}>
                manage_accounts
              </span>
            </Link>
          </div>
          <div className={NavbarStyle.logout}>
            <button className={NavbarStyle.logoutButton}>Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
