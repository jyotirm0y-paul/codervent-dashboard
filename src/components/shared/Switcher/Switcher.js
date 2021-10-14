/* eslint-disable no-unused-expressions */
import React from 'react';
import '../../../assets/css/style.css'
import '../../../assets/css/icons.css'
import $ from "jquery";

const Switcher = () => {
   const [visible, setVisible] = React.useState(false)
  
   const toggleVisible = () => {
     const scrolled = document.documentElement.scrollTop;
     if (scrolled > 200){
       setVisible(true)
     } 
     else if (scrolled <= 200){
       setVisible(false)
     }
   };
   
   $(function() {
      "use strict";
      // switcher 
   
      $("#LightTheme").on("click", function() {
         $("html").attr("class", "light-theme")
      }),
   
      $("#DarkTheme").on("click", function() {
         $("html").attr("class", "dark-theme")
      }),
   
      $("#SemiDarkTheme").on("click", function() {
         $("html").attr("class", "semi-dark")
      }),
   
      $("#MinimalTheme").on("click", function() {
         $("html").attr("class", "minimal-theme")
      })
   
   
      $("#headercolor1").on("click", function() {
         $("html").addClass("color-header headercolor1"), $("html").removeClass("headercolor2 headercolor3 headercolor4 headercolor5 headercolor6 headercolor7 headercolor8")
      }), $("#headercolor2").on("click", function() {
         $("html").addClass("color-header headercolor2"), $("html").removeClass("headercolor1 headercolor3 headercolor4 headercolor5 headercolor6 headercolor7 headercolor8")
      }), $("#headercolor3").on("click", function() {
         $("html").addClass("color-header headercolor3"), $("html").removeClass("headercolor1 headercolor2 headercolor4 headercolor5 headercolor6 headercolor7 headercolor8")
      }), $("#headercolor4").on("click", function() {
         $("html").addClass("color-header headercolor4"), $("html").removeClass("headercolor1 headercolor2 headercolor3 headercolor5 headercolor6 headercolor7 headercolor8")
      }), $("#headercolor5").on("click", function() {
         $("html").addClass("color-header headercolor5"), $("html").removeClass("headercolor1 headercolor2 headercolor4 headercolor3 headercolor6 headercolor7 headercolor8")
      }), $("#headercolor6").on("click", function() {
         $("html").addClass("color-header headercolor6"), $("html").removeClass("headercolor1 headercolor2 headercolor4 headercolor5 headercolor3 headercolor7 headercolor8")
      }), $("#headercolor7").on("click", function() {
         $("html").addClass("color-header headercolor7"), $("html").removeClass("headercolor1 headercolor2 headercolor4 headercolor5 headercolor6 headercolor3 headercolor8")
      }), $("#headercolor8").on("click", function() {
         $("html").addClass("color-header headercolor8"), $("html").removeClass("headercolor1 headercolor2 headercolor4 headercolor5 headercolor6 headercolor7 headercolor3")
      })
   });
   
   const scrollToTop = () =>{
     window.scrollTo({
       top: 0, 
       behavior: 'smooth'
       /* you can also use 'auto' behaviour
          in place of 'smooth' */
     });
   };
   
   window.addEventListener('scroll', toggleVisible);

  return (
    <div>
      {/* start overlay */}
      <div class="overlay nav-toggle-icon"></div>
      {/* end overlay */}

      {/* Start Back To Top Button */}
      <a class="back-to-top"><i class='bx bxs-up-arrow-alt' onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}}></i></a>
      {/* End Back To Top Button */}

      {/* start switcher */}
      <div class="switcher-body">
        <button class="btn btn-primary btn-switcher shadow-sm" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="bi bi-paint-bucket me-0"></i></button>
        <div class="offcanvas offcanvas-end shadow border-start-0 p-2" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling">
          <div class="offcanvas-header border-bottom">
            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Theme Customizer</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
          </div>
          <div class="offcanvas-body">
            <h6 class="mb-0">Theme Variation</h6>
            <hr />
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="LightTheme" value="option1" checked />
              <label class="form-check-label" for="LightTheme">Light</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="DarkTheme" value="option2" />
              <label class="form-check-label" for="DarkTheme">Dark</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="SemiDarkTheme" value="option3" />
              <label class="form-check-label" for="SemiDarkTheme">Semi Dark</label>
            </div>
            <hr />
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="MinimalTheme" value="option3" />
              <label class="form-check-label" for="MinimalTheme">Minimal Theme</label>
            </div>
            <hr />
            <h6 class="mb-0">Header Colors</h6>
            <hr />
            <div class="header-colors-indigators">
              <div class="row row-cols-auto g-3">
                <div class="col">
                  <div class="indigator headercolor1" id="headercolor1"></div>
                </div>
                <div class="col">
                  <div class="indigator headercolor2" id="headercolor2"></div>
                </div>
                <div class="col">
                  <div class="indigator headercolor3" id="headercolor3"></div>
                </div>
                <div class="col">
                  <div class="indigator headercolor4" id="headercolor4"></div>
                </div>
                <div class="col">
                  <div class="indigator headercolor5" id="headercolor5"></div>
                </div>
                <div class="col">
                  <div class="indigator headercolor6" id="headercolor6"></div>
                </div>
                <div class="col">
                  <div class="indigator headercolor7" id="headercolor7"></div>
                </div>
                <div class="col">
                  <div class="indigator headercolor8" id="headercolor8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Switcher;