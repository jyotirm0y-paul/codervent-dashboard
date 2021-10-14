import React from 'react';
import logo from "../../../assets/images/logo-icon.png";
import SidebarNav from "./SidebarNav"
import 'react-perfect-scrollbar/dist/css/styles.css';
import $ from "jquery";

const Sidebar = () => {
   $(function() {
      // "use strict";
       $(".nav-toggle-icon").on("click", function() {
         $(".wrapper").toggleClass("toggled")
      })
   
       $(".mobile-toggle-icon").on("click", function() {
         $(".wrapper").addClass("toggled")
      })
   
      $(function() {
         for (var e = window.location, o = $(".metismenu li a").filter(function() {
               return this.href == e
            }).addClass("").parent().addClass("mm-active"); o.is("li");) o = o.parent("").addClass("mm-show").parent("").addClass("mm-active")
      })
   
   
      $(".toggle-icon").click(function() {
         // eslint-disable-next-line no-unused-expressions
         $(".wrapper").hasClass("toggled") ? ($(".wrapper").removeClass("toggled"), $(".sidebar-wrapper").unbind("hover")) : ($(".wrapper").addClass("toggled"), $(".sidebar-wrapper").hover(function() {
            $(".wrapper").addClass("sidebar-hovered")
         }, function() {
            $(".wrapper").removeClass("sidebar-hovered")
         }))
      })
   });
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
      <div class="mt-5 pt-2">
      <SidebarNav />
      </div>
    </aside>
  );
};

export default Sidebar;