import React from "react";
import Navbar from "./common/Navbar";
import Sidebar from "./common/Sidebar";
import "./css/Dashboard.css";
import "./css/Sidebar.css";

function Dashboard() {
  return (
    <div className="bodycontainer">
      <div className="navSection">
        <Navbar />
      </div>
      {/* Body */}
      <div className="bodySection">
        <div className="sidebarSection">
          <Sidebar />
        </div>
        <div className="cardSection">Hello Wordl</div>
      </div>
    </div>
  );
}

export default Dashboard;
