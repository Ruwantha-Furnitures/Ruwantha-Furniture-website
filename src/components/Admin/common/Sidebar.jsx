import React from "react";
import "../css/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebarBar">
      <div className="sideList">
        <ul>
          <li>
            <div className="lineSection">
              <div className="lineIcon">
                <span className="material-icons iconWidth">home</span>
              </div>
              <div className="lineText">
                <h1 className="lineTextStyle">Dashboard</h1>
              </div>
            </div>
          </li>
          <li>
            <div className="lineSection">
              <div className="lineIcon">
                <span className="material-icons iconWidth">chair</span>
              </div>
              <div className="lineText">
                <h1 className="lineTextStyle">Product</h1>
              </div>
            </div>
          </li>
          <li>
            <div className="lineSection">
              <div className="lineIcon">
                <span className="material-icons iconWidth">local_offer</span>
              </div>
              <div className="lineText">
                <h1 className="lineTextStyle">Sell Product</h1>
              </div>
            </div>
          </li>
          <li>
            <div className="lineSection margin-bottom">
              <div className="lineIcon">
                <span className="material-icons iconWidth">
                  space_dashboard
                </span>
              </div>
              <div className="lineText">
                <h1 className="lineTextStyle">Website</h1>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
