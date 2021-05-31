import React from "react";
import "../css/Navbar.css";

function Navbar() {
  return (
    <div className="navgation">
      <div className="logoSection">
        <div className="logodiv">
          <div className="logo"></div>
          <div className="logoname">
            <h1 className="logonameStyle">Ruwantha Furniture</h1>
          </div>
        </div>
      </div>
      <div className="searchSection">
        <div className="search">
          <div className="searchicon">
            <span className="material-icons md-36">search</span>
          </div>
          <div className="searchText">
            <input
              id="search"
              type="search"
              placeholder="Search Here"
              className="searchinput"
            />
          </div>
        </div>
      </div>
      <div className="profileSection">
        <div className="alignSection">
          <div className="profileIcon">
            <span className="material-icons accounticon"> account_circle </span>
          </div>
          <div className="logout">
            <button className="logoutButton">Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
