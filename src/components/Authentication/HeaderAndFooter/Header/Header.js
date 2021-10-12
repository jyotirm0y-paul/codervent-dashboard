import React from 'react';

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-white rounded-0 border-bottom">
        <div class="container">
          <a class="navbar-brand" href="javascript"><img src="assets/images/brand-logo-2.png" width="140" alt="" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="javascriptnavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0 align-items-center">
              <li class="nav-item">
                <a class="nav-link" href="javascript">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript">About</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript" data-bs-toggle="dropdown">
                  Services <i class="bi bi-chevron-down align-middle ms-2"></i>
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="javascript">Action</a></li>
                  <li><a class="dropdown-item" href="javascript">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="javascript">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript">Contact Us</a>
              </li>
            </ul>

            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript" data-bs-toggle="dropdown">
                  English
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="javascript">Action</a></li>
                  <li><a class="dropdown-item" href="javascript">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="javascript">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript">Support</a>
              </li>
            </ul>
            <div class="d-flex ms-3 gap-3">
              <a href="authentication-signin-with-header-footer.html" class="btn btn-primary btn-sm px-4 radius-30">Login</a>
              <a href="authentication-signup-with-header-footer.html" class="btn btn-white btn-sm px-4 radius-30">Register</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;