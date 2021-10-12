import React from 'react';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'

const DataWidgets = ({name, title}) => {
  return (
    <>
    <Breadcrumb name={name} title={title} />
      <h6 class="mb-0 text-uppercase">Bar Chart Widgets</h6>
      <hr/>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xxl-4">
          <div class="col">
            <div class="card radius-10">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="">
                    <p class="mb-1">Total Orders</p>
                    <h4 class="mb-0 text-tiffany">248</h4>
                  </div>
                  <div class="ms-auto">
                    <div id="chart1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card radius-10">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="">
                    <p class="mb-1">Total Revenue</p>
                    <h4 class="mb-0 text-success">$42K</h4>
                  </div>
                  <div class="ms-auto">
                    <div id="chart2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card radius-10">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="">
                    <p class="mb-1">Bounce Rate</p>
                    <h4 class="mb-0 text-pink">24.5%</h4>
                  </div>
                  <div class="ms-auto">
                    <div id="chart3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card radius-10">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="">
                    <p class="mb-1">New Users</p>
                    <h4 class="mb-0 text-orange">214</h4>
                  </div>
                  <div class="ms-auto">
                    <div id="chart4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <h6 class="mb-0 text-uppercase">Line & Area Chart Widgets</h6>
        <hr />
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xxl-4">
          <div class="col">
            <div class="card radius-10">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="">
                    <p class="mb-1">Total Orders</p>
                    <h4 class="mb-0 text-pink">542</h4>
                  </div>
                  <div class="ms-auto">
                    <div id="chart5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card radius-10">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="">
                    <p class="mb-1">Total Income</p>
                    <h4 class="mb-0 text-primary">$875</h4>
                  </div>
                  <div class="ms-auto">
                    <div id="chart6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card radius-10">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="">
                    <p class="mb-1">Comments</p>
                    <h4 class="mb-0 text-orange">59</h4>
                  </div>
                  <div class="ms-auto">
                    <div id="chart7"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card radius-10">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="">
                    <p class="mb-1">New Tickets</p>
                    <h4 class="mb-0 text-info">214</h4>
                  </div>
                  <div class="ms-auto">
                    <div id="chart8"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xxl-4">
          <div class="col">
            <div class="card radius-10">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="">
                    <p class="mb-1">Messages</p>
                    <h4 class="mb-0 text-primary">89</h4>
                  </div>
                  <div class="ms-auto">
                    <div id="chart9"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card radius-10">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="">
                    <p class="mb-1">Storage</p>
                    <h4 class="mb-0 text-danger">48</h4>
                  </div>
                  <div class="ms-auto">
                    <div id="chart10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card radius-10">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="">
                    <p class="mb-1">Members</p>
                    <h4 class="mb-0 text-success">18</h4>
                  </div>
                  <div class="ms-auto">
                    <div id="chart11"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card radius-10">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="">
                    <p class="mb-1">New Tasks</p>
                    <h4 class="mb-0 text-purple">25</h4>
                  </div>
                  <div class="ms-auto">
                    <div id="chart12"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xxl-4">
          <div class="col">
            <div class="card radius-10">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="">
                    <p class="mb-1">Messages</p>
                    <h4 class="mb-0 text-primary">89</h4>
                  </div>
                  <div class="dropdown ms-auto">
                    <div class="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i class="bi bi-three-dots fs-4"></i>
                    </div>
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
                  </div>
                </div>
                <div id="chart13"></div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card radius-10">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="">
                    <p class="mb-1">Storage</p>
                    <h4 class="mb-0 text-orange">48</h4>
                  </div>
                  <div class="dropdown ms-auto">
                    <div class="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i class="bi bi-three-dots fs-4"></i>
                    </div>
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
                  </div>
                </div>
                <div id="chart14"></div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card radius-10">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="">
                    <p class="mb-1">Members</p>
                    <h4 class="mb-0 text-success">18</h4>
                  </div>
                  <div class="dropdown ms-auto">
                    <div class="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i class="bi bi-three-dots fs-4"></i>
                    </div>
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
                  </div>
                </div>
                <div id="chart15"></div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card radius-10">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="">
                    <p class="mb-1">New Tasks</p>
                    <h4 class="mb-0 text-purple">25</h4>
                  </div>
                  <div class="dropdown ms-auto">
                    <div class="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i class="bi bi-three-dots fs-4"></i>
                    </div>
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
                  </div>
                </div>
                <div id="chart16"></div>
              </div>
            </div>
          </div>
        </div>


        <h6 class="mb-0 text-uppercase">Progress Chart Widgets</h6>
        <hr/>
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xxl-4">
            <div class="col">
              <div class="card radius-10">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="">
                      <p class="mb-1">Total Orders</p>
                      <h4 class="mb-0 text-pink">542</h4>
                    </div>
                    <div class="ms-auto">
                      <div class="w_chart" id="chart17" data-percent="60">
                        <span class="w_percent"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card radius-10">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="">
                      <p class="mb-1">Total Income</p>
                      <h4 class="mb-0 text-primary">15K</h4>
                    </div>
                    <div class="ms-auto">
                      <div class="w_chart" id="chart18" data-percent="60">
                        <span class="w_percent"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card radius-10">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="">
                      <p class="mb-1">Comments</p>
                      <h4 class="mb-0 text-success">59</h4>
                    </div>
                    <div class="ms-auto">
                      <div class="w_chart" id="chart19" data-percent="60">
                        <span class="w_percent"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card radius-10">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="">
                      <p class="mb-1">New Tickets</p>
                      <h4 class="mb-0 text-orange">214</h4>
                    </div>
                    <div class="ms-auto">
                      <div class="w_chart" id="chart20" data-percent="60">
                        <span class="w_percent"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card radius-10">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="">
                      <p class="mb-1">Notifications</p>
                      <h4 class="mb-0 text-primary">145</h4>
                    </div>
                    <div class="ms-auto fs-2 text-primary">
                      <i class="bi bi-bell"></i>
                    </div>
                  </div>
                  <div class="progress radius-10 my-2" style={{height: "5px"}}>
                    <div class="progress-bar bg-primary" role="progressbar" style={{width: "65%"}}></div>
                  </div>
                  <small class="mb-0"><i class="bi bi-arrow-up"></i> <span>+12.3% from last week</span></small>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card radius-10">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="">
                      <p class="mb-1">Total Posts</p>
                      <h4 class="mb-0 text-danger">249</h4>
                    </div>
                    <div class="ms-auto fs-2 text-danger">
                      <i class="bi bi-pencil"></i>
                    </div>
                  </div>
                  <div class="progress radius-10 my-2" style={{height: "5px"}}>
                    <div class="progress-bar bg-danger" role="progressbar" style={{width: "65%"}}></div>
                  </div>
                  <small class="mb-0"><i class="bi bi-arrow-up"></i> <span>+10.5% from last week</span></small>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card radius-10">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="">
                      <p class="mb-1">Messages</p>
                      <h4 class="mb-0 text-success">845</h4>
                    </div>
                    <div class="ms-auto fs-2 text-success">
                      <i class="bi bi-envelope"></i>
                    </div>
                  </div>
                  <div class="progress radius-10 my-2" style={{height: "5px"}}>
                    <div class="progress-bar bg-success" role="progressbar" style={{width: "65%"}}></div>
                  </div>
                  <small class="mb-0"><i class="bi bi-arrow-up"></i> <span>+15.8% from last week</span></small>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card radius-10">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="">
                      <p class="mb-1">Articles</p>
                      <h4 class="mb-0 text-orange">645</h4>
                    </div>
                    <div class="ms-auto fs-2 text-orange">
                      <i class="bi bi-book"></i>
                    </div>
                  </div>
                  <div class="progress radius-10 my-2" style={{height: "5px"}}>
                    <div class="progress-bar bg-orange" role="progressbar" style={{width: "65%"}}></div>
                  </div>
                  <small class="mb-0"><i class="bi bi-arrow-up"></i> <span>+16.5% from last week</span></small>
                </div>
              </div>
            </div>
          </div>

          <div class="card radius-10">
            <div class="card-body p-0">
              <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xxl-4">
                <div class="col border-end">
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <div class="">
                        <p class="mb-1">Notifications</p>
                        <h4 class="mb-0 text-purple">145</h4>
                      </div>
                      <div class="ms-auto fs-2 text-purple">
                        <i class="bi bi-lightbulb"></i>
                      </div>
                    </div>
                    <div class="progress radius-10 my-2" style={{height: "5px"}}>
                      <div class="progress-bar bg-purple" role="progressbar" style={{width: "65%"}}></div>
                    </div>
                    <small class="mb-0"><i class="bi bi-arrow-up"></i> <span>+12.3% from last week</span></small>
                  </div>
                </div>
                <div class="col border-end">
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <div class="">
                        <p class="mb-1">Total Posts</p>
                        <h4 class="mb-0 text-orange">249</h4>
                      </div>
                      <div class="ms-auto fs-2 text-orange">
                        <i class="bi bi-bookmark-heart"></i>
                      </div>
                    </div>
                    <div class="progress radius-10 my-2" style={{height: "5px"}}>
                      <div class="progress-bar bg-orange" role="progressbar" style={{width: "65%"}}></div>
                    </div>
                    <small class="mb-0"><i class="bi bi-arrow-up"></i> <span>+10.5% from last week</span></small>
                  </div>
                </div>
                <div class="col border-end">
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <div class="">
                        <p class="mb-1">Messages</p>
                        <h4 class="mb-0 text-info">845</h4>
                      </div>
                      <div class="ms-auto fs-2 text-info">
                        <i class="bi bi-bank2"></i>
                      </div>
                    </div>
                    <div class="progress radius-10 my-2" style={{height: "5px"}}>
                      <div class="progress-bar bg-info" role="progressbar" style={{width: "65%"}}></div>
                    </div>
                    <small class="mb-0"><i class="bi bi-arrow-up"></i> <span>+15.8% from last week</span></small>
                  </div>
                </div>
                <div class="col">
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <div class="">
                        <p class="mb-1">Articles</p>
                        <h4 class="mb-0 text-pink">645</h4>
                      </div>
                      <div class="ms-auto fs-2 text-pink">
                        <i class="bi bi-cloud-arrow-down"></i>
                      </div>
                    </div>
                    <div class="progress radius-10 my-2" style={{height: "5px"}}>
                      <div class="progress-bar bg-pink" role="progressbar" style={{width: "65%"}}></div>
                    </div>
                    <small class="mb-0"><i class="bi bi-arrow-up"></i> <span>+16.5% from last week</span></small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        );
};

        export default DataWidgets;