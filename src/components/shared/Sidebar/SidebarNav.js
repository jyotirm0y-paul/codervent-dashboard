import React from 'react';
import { Link } from "react-router-dom"
import sidebarData from './SidebarData'
// import ReactDOM from 'react-dom';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import $ from "jquery";
// import MetisMenu from 'react-metismenu';

const SidebarNav = () => {
  
  const side = () =>{
    $(function() {
      $("#menu").metisMenu()
    })}

  return (
    <>
      <PerfectScrollbar>
        {sidebarData?.map((item, idx) => {
          return (
            <ul class="metismenu" id="menu">

              {item.mainName?.map((item, idx) => {
                return (
                  <li key={idx}>
                    {(item.path)
                      ? <Link to={item.path} class={item.arrow}>
                        <div class="parent-icon"><i class={item.icon}></i>
                        </div>
                        <div class="menu-title">{item.name}</div>
                      </Link> :
                      <a class="has-arrow" href="javascript:;">
                        <div class="parent-icon"><i class={item.icon}></i>
                        </div>
                        <div class="menu-title">{item.name}</div>
                      </a>}
                    {item.subName?.map((item, idx) => {
                      return (
                        <ul key={idx}>
                          <li> <Link to={item.path}><i class="bi bi-circle"></i>{item.name}</Link>
                          </li>
                        </ul>
                      )
                    })}
                  </li>
                )
              })}
            </ul>
          )
          
        })}
      </PerfectScrollbar>
    </>
  );

};

export default SidebarNav;