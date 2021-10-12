import React from 'react';
import logo from "../../../assets/images/logo-icon.png";
// import { Link } from "react-router-dom"
import SidebarNav from "./SidebarNav"
import 'react-perfect-scrollbar/dist/css/styles.css';
// import PerfectScrollbar from 'react-perfect-scrollbar'

const Sidebar = () => {
  return (
    <aside class="sidebar-wrapper" data-simplebar="true">
      <div class="sidebar-header">
        <div>
          <img src={logo} class="logo-icon" alt="logo icon" />
        </div>
        <div>
          <h4 class="logo-text">Snacked</h4>
        </div>
        <div class="toggle-icon ms-auto"> <i class="bi bi-list"></i>
        </div>
      </div>
      {/* <PerfectScrollbar> */}
      <SidebarNav />
      {/* </PerfectScrollbar> */}
    </aside>
  );
};

export default Sidebar;