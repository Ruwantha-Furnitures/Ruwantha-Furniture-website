import React from "react";
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
      <div className={NavbarStyle.searchSection}>
        <div className={NavbarStyle.search}>
          <div className={NavbarStyle.searchicon}>
            <span className={"material-icons " + NavbarStyle.searchIconStyle}>
              search
            </span>
          </div>
          <div className={NavbarStyle.searchText}>
            <input
              type="search"
              placeholder="Search Here"
              className={NavbarStyle.searchinput}
            />
          </div>
        </div>
      </div>
      <div className={NavbarStyle.profileSection}>
        <div className={NavbarStyle.alignSection}>
          <div className={NavbarStyle.profileIcon}>
            <span className={"material-icons " + NavbarStyle.accounticon}>
              {" "}
              account_circle{" "}
            </span>
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
