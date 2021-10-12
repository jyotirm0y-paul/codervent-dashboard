import React from 'react';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'

const NavBar = ({name, title}) => {
  return (
    <>
    <Breadcrumb name={name} title={title} />
      <div class="card">
        <div class="card-body">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
            <div class="container-fluid">	<a class="navbar-brand" href="javascript">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="javascriptnavbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent1">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item"> <a class="nav-link active" aria-current="page" href="javascript"><i class='bx bx-home-alt me-1'></i>Home</a>
                  </li>
                  <li class="nav-item"> <a class="nav-link" href="javascript"><i class='bx bx-user me-1'></i>About</a>
                  </li>
                  <li class="nav-item"> <a class="nav-link" href="javascript"><i class='bx bx-category-alt me-1'></i>Features</a>
                  </li>
                  <li class="nav-item"> <a class="nav-link" href="javascript"><i class='bx bx-microphone me-1'></i>Contact</a>
                  </li>
                  <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="javascript" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript">Action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Another action</a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li><a class="dropdown-item" href="javascript">Something else here</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form class="d-flex nav-search">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Some" />
                    <button class="btn" type="submit"><i class='bx bx-search'></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary rounded">
            <div class="container-fluid">	<a class="navbar-brand" href="javascript">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="javascriptnavbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent2">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item"> <a class="nav-link active" aria-current="page" href="javascript"><i class='bx bx-home-alt me-1'></i>Home</a>
                  </li>
                  <li class="nav-item"> <a class="nav-link" href="javascript"><i class='bx bx-user me-1'></i>About</a>
                  </li>
                  <li class="nav-item"> <a class="nav-link" href="javascript"><i class='bx bx-category-alt me-1'></i>Features</a>
                  </li>
                  <li class="nav-item"> <a class="nav-link" href="javascript"><i class='bx bx-microphone me-1'></i>Contact</a>
                  </li>
                  <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="javascript" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript">Action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Another action</a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li><a class="dropdown-item" href="javascript">Something else here</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form class="d-flex">
                  <button class="btn btn-light px-4" type="submit"><i class='bx bx-cart'></i> Buy Now</button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <nav class="navbar navbar-expand-lg navbar-dark bg-danger rounded">
            <div class="container-fluid">	<a class="navbar-brand" href="javascript">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="javascriptnavbarSupportedContent3" aria-controls="navbarSupportedContent3" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent3">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item"> <a class="nav-link active" aria-current="page" href="javascript"><i class='bx bx-home-alt me-1'></i>Home</a>
                  </li>
                  <li class="nav-item"> <a class="nav-link" href="javascript"><i class='bx bx-user me-1'></i>About</a>
                  </li>
                  <li class="nav-item"> <a class="nav-link" href="javascript"><i class='bx bx-category-alt me-1'></i>Features</a>
                  </li>
                  <li class="nav-item"> <a class="nav-link" href="javascript"><i class='bx bx-microphone me-1'></i>Contact</a>
                  </li>
                  <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="javascript" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript">Action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Another action</a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li><a class="dropdown-item" href="javascript">Something else here</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form class="d-flex">
                  <button class="btn btn-dark me-3 radius-30 px-4" type="submit"><i class='bx bx-lock'></i> Login</button>
                  <button class="btn btn-light radius-30 px-4" type="submit"><i class='bx bx-user'></i> Register</button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <nav class="navbar navbar-expand-lg navbar-dark bg-success rounded">
            <div class="container-fluid">	<a class="navbar-brand" href="javascript">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="javascriptnavbarSupportedContent4" aria-controls="navbarSupportedContent4" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent4">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item"> <a class="nav-link active" aria-current="page" href="javascript"><i class='bx bx-home-alt me-1'></i>Home</a>
                  </li>
                  <li class="nav-item"> <a class="nav-link" href="javascript"><i class='bx bx-user me-1'></i>About</a>
                  </li>
                  <li class="nav-item"> <a class="nav-link" href="javascript"><i class='bx bx-category-alt me-1'></i>Features</a>
                  </li>
                  <li class="nav-item"> <a class="nav-link" href="javascript"><i class='bx bx-microphone me-1'></i>Contact</a>
                  </li>
                  <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="javascript" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript">Action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Another action</a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li><a class="dropdown-item" href="javascript">Something else here</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item"> <a class="nav-link" href="javascript"><i class='bx bxl-facebook-square font-22 text-white'></i></a>
                  </li>
                  <li class="nav-item"> <a class="nav-link" href="javascript"><i class='bx bxl-twitter font-22 text-white'></i></a>
                  </li>
                  <li class="nav-item"> <a class="nav-link" href="javascript"><i class='bx bxl-linkedin-square font-22 text-white'></i></a>
                  </li>
                  <li class="nav-item"> <a class="nav-link" href="javascript"><i class='bx bxl-youtube font-22 text-white'></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <nav class="navbar navbar-expand-lg navbar-dark bg-secondary rounded">
            <div class="container-fluid">	<a class="navbar-brand" href="javascript">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="javascriptnavbarSupportedContent5" aria-controls="navbarSupportedContent5" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent5">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item"> <a class="nav-link active" aria-current="page" href="javascript"><i class='bx bx-home-alt me-1'></i>Home</a>
                  </li>
                  <li class="nav-item"> <a class="nav-link" href="javascript"><i class='bx bx-user me-1'></i>About</a>
                  </li>
                  <li class="nav-item"> <a class="nav-link" href="javascript"><i class='bx bx-category-alt me-1'></i>Features</a>
                  </li>
                  <li class="nav-item"> <a class="nav-link" href="javascript"><i class='bx bx-microphone me-1'></i>Contact</a>
                  </li>
                  <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="javascript" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript">Action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Another action</a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li><a class="dropdown-item" href="javascript">Something else here</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form class="d-flex">
                  <button class="btn btn-dark me-3 radius-30 px-4" type="submit"><i class='bx bx-lock'></i> Login</button>
                  <button class="btn btn-light radius-30 px-4" type="submit"><i class='bx bx-calendar-event'></i> Start For Free</button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;