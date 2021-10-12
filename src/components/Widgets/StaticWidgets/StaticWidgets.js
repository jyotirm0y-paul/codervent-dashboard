import React from 'react';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'

const StaticWidgets = ({name, title}) => {
  return (
    <>
    <Breadcrumb name={name} title={title} />
      <h6 class="mb-0 text-uppercase">circular Icon Widgets</h6>
      <hr/>
        <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-6 row-cols-xxl-6">
          <div class="col">
            <div class="card radius-10">
              <div class="card-body text-center">
                <div class="widget-icon mx-auto mb-3 bg-light-primary text-primary">
                  <i class="bi bi-chat-left-fill"></i>
                </div>
                <h3>25</h3>
                <p class="mb-0">Messages</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card radius-10">
              <div class="card-body text-center">
                <div class="widget-icon mx-auto mb-3 bg-light-danger text-danger">
                  <i class="bi bi-hdd-fill"></i>
                </div>
                <h3>35</h3>
                <p class="mb-0">Storage</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card radius-10">
              <div class="card-body text-center">
                <div class="widget-icon mx-auto mb-3 bg-light-success text-success">
                  <i class="bi bi-people-fill"></i>
                </div>
                <h3>16</h3>
                <p class="mb-0">Members</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card radius-10">
              <div class="card-body text-center">
                <div class="widget-icon mx-auto mb-3 bg-light-info text-info">
                  <i class="bi bi-archive-fill"></i>
                </div>
                <h3>18</h3>
                <p class="mb-0">Files</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card radius-10">
              <div class="card-body text-center">
                <div class="widget-icon mx-auto mb-3 bg-light-purple text-purple">
                  <i class="bi bi-flag-fill"></i>
                </div>
                <h3>22</h3>
                <p class="mb-0">New Tasks</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card radius-10">
              <div class="card-body text-center">
                <div class="widget-icon mx-auto mb-3 bg-light-orange text-orange">
                  <i class="bi bi-pie-chart-fill"></i>
                </div>
                <h3>45</h3>
                <p class="mb-0">Projects</p>
              </div>
            </div>
          </div>
        </div>

        <h6 class="mb-0 text-uppercase">Color Icon Widgets</h6>
        <hr/>
          <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-6 row-cols-xxl-6">
            <div class="col">
              <div class="card radius-10 bg-tiffany">
                <div class="card-body text-center">
                  <div class="widget-icon mx-auto mb-3 bg-white-1 text-white">
                    <i class="bi bi-chat-left-fill"></i>
                  </div>
                  <h3 class="text-white">25</h3>
                  <p class="mb-0 text-white">Messages</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card radius-10 bg-danger">
                <div class="card-body text-center">
                  <div class="widget-icon mx-auto mb-3 bg-white-1 text-white">
                    <i class="bi bi-hdd-fill"></i>
                  </div>
                  <h3 class="text-white">35</h3>
                  <p class="mb-0 text-white">Storage</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card radius-10 bg-success">
                <div class="card-body text-center">
                  <div class="widget-icon mx-auto mb-3 bg-white-1 text-white">
                    <i class="bi bi-people-fill"></i>
                  </div>
                  <h3 class="text-white">16</h3>
                  <p class="mb-0 text-white">Members</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card radius-10 bg-dark">
                <div class="card-body text-center">
                  <div class="widget-icon mx-auto mb-3 bg-white-1 text-white">
                    <i class="bi bi-archive-fill"></i>
                  </div>
                  <h3 class="text-white">18</h3>
                  <p class="mb-0 text-white">Files</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card radius-10 bg-purple">
                <div class="card-body text-center">
                  <div class="widget-icon mx-auto mb-3 bg-white-1 text-white">
                    <i class="bi bi-flag-fill"></i>
                  </div>
                  <h3 class="text-white">22</h3>
                  <p class="mb-0 text-white">New Tasks</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card radius-10 bg-orange">
                <div class="card-body text-center">
                  <div class="widget-icon mx-auto mb-3 bg-white-1 text-white">
                    <i class="bi bi-pie-chart-fill"></i>
                  </div>
                  <h3 class="text-white">45</h3>
                  <p class="mb-0 text-white">Projects</p>
                </div>
              </div>
            </div>
          </div>


          <h6 class="mb-0 text-uppercase">Right Icon Widgets</h6>
          <hr/>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 row-cols-xxl-4">
              <div class="col">
                <div class="card radius-10 border-0 border-start border-tiffany border-3">
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <div class="">
                        <p class="mb-1">Total Orders</p>
                        <h4 class="mb-0 text-tiffany">248</h4>
                      </div>
                      <div class="ms-auto widget-icon bg-tiffany text-white">
                        <i class="bi bi-bag-check-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card radius-10 border-0 border-start border-success border-3">
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <div class="">
                        <p class="mb-1">Total Revenue</p>
                        <h4 class="mb-0 text-success">$1,245</h4>
                      </div>
                      <div class="ms-auto widget-icon bg-success text-white">
                        <i class="bi bi-currency-dollar"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card radius-10 border-0 border-start border-pink border-3">
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <div class="">
                        <p class="mb-1">Bounce Rate</p>
                        <h4 class="mb-0 text-pink">24.25%</h4>
                      </div>
                      <div class="ms-auto widget-icon bg-pink text-white">
                        <i class="bi bi-bar-chart-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card radius-10 border-0 border-start border-orange border-3">
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <div class="">
                        <p class="mb-1">New Users</p>
                        <h4 class="mb-0 text-orange">214</h4>
                      </div>
                      <div class="ms-auto widget-icon bg-orange text-white">
                        <i class="bi bi-person-plus-fill"></i>
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
                        <p class="mb-1">Total Orders</p>
                        <h4 class="mb-0 text-pink">542</h4>
                      </div>
                      <div class="ms-auto fs-2 text-pink">
                        <i class="bi bi-cup"></i>
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
                        <h4 class="mb-0 text-info">$875</h4>
                      </div>
                      <div class="ms-auto fs-2 text-info">
                        <i class="bi bi-wallet"></i>
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
                        <h4 class="mb-0 text-purple">59</h4>
                      </div>
                      <div class="ms-auto fs-2 text-purple">
                        <i class="bi bi-chat-right"></i>
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
                        <p class="mb-1">Tickets</p>
                        <h4 class="mb-0 text-primary">145</h4>
                      </div>
                      <div class="ms-auto fs-2 text-primary">
                        <i class="bi bi-truck"></i>
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
                    <hr class="my-2"/>
                    <small class ="mb-0"><i class ="bi bi-arrow-up"></i> <span>+12.3% from last week</span></small>
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
                    <hr class="my-2"/>
                    <small class ="mb-0"><i class ="bi bi-arrow-up"></i> <span>+10.5% from last week</span></small>
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
                    <hr class="my-2"/>
                    <small class ="mb-0"><i class ="bi bi-arrow-up"></i> <span>+15.8% from last week</span></small>
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
                    <hr class="my-2"/>
                    <small class ="mb-0"><i class ="bi bi-arrow-up"></i> <span>+16.5% from last week</span></small>
                  </div>
                </div>
              </div>
            </div>


            <h6 class="mb-0 text-uppercase">Color Icon Widgets</h6>
            <hr/>
              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 row-cols-xxl-4">
                <div class="col">
                  <div class="card radius-10 bg-primary">
                    <div class="card-body">
                      <div class="d-flex align-items-center">
                        <div class="">
                          <p class="mb-1 text-white">Total Orders</p>
                          <h4 class="mb-0 text-white">248</h4>
                        </div>
                        <div class="ms-auto widget-icon bg-white-1 text-white">
                          <i class="bi bi-bag-check-fill"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card radius-10 bg-success">
                    <div class="card-body">
                      <div class="d-flex align-items-center">
                        <div class="">
                          <p class="mb-1 text-white">Total Revenue</p>
                          <h4 class="mb-0 text-white">$1,245</h4>
                        </div>
                        <div class="ms-auto widget-icon bg-white-1 text-white">
                          <i class="bi bi-currency-dollar"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card radius-10 bg-pink">
                    <div class="card-body">
                      <div class="d-flex align-items-center">
                        <div class="">
                          <p class="mb-1 text-white">Bounce Rate</p>
                          <h4 class="mb-0 text-white">24.25%</h4>
                        </div>
                        <div class="ms-auto widget-icon bg-white-1 text-white">
                          <i class="bi bi-bar-chart-fill"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card radius-10 bg-orange">
                    <div class="card-body">
                      <div class="d-flex align-items-center">
                        <div class="">
                          <p class="mb-1 text-white">New Users</p>
                          <h4 class="mb-0 text-white">214</h4>
                        </div>
                        <div class="ms-auto widget-icon bg-white-1 text-white">
                          <i class="bi bi-person-plus-fill"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card radius-10 bg-danger">
                    <div class="card-body">
                      <div class="d-flex align-items-center">
                        <div class="">
                          <p class="mb-1 text-white">Total Orders</p>
                          <h4 class="mb-0 text-white">542</h4>
                        </div>
                        <div class="ms-auto fs-2 text-white">
                          <i class="bi bi-cup"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card radius-10 bg-info">
                    <div class="card-body">
                      <div class="d-flex align-items-center">
                        <div class="">
                          <p class="mb-1 text-white">Total Income</p>
                          <h4 class="mb-0 text-white">$875</h4>
                        </div>
                        <div class="ms-auto fs-2 text-white">
                          <i class="bi bi-wallet"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card radius-10 bg-purple">
                    <div class="card-body">
                      <div class="d-flex align-items-center">
                        <div class="">
                          <p class="mb-1 text-white">Comments</p>
                          <h4 class="mb-0 text-white">59</h4>
                        </div>
                        <div class="ms-auto fs-2 text-white">
                          <i class="bi bi-chat-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card radius-10 bg-primary">
                    <div class="card-body">
                      <div class="d-flex align-items-center">
                        <div class="">
                          <p class="mb-1 text-white">Tickets</p>
                          <h4 class="mb-0 text-white">145</h4>
                        </div>
                        <div class="ms-auto fs-2 text-white">
                          <i class="bi bi-truck"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card radius-10 bg-primary">
                    <div class="card-body">
                      <div class="d-flex align-items-center">
                        <div class="">
                          <p class="mb-1 text-white">Notifications</p>
                          <h4 class="mb-0 text-white">145</h4>
                        </div>
                        <div class="ms-auto fs-2 text-white">
                          <i class="bi bi-bell"></i>
                        </div>
                      </div>
                      <hr class="my-2 border-top border-light"/>
                      <small class ="mb-0 text-white"><i class ="bi bi-arrow-up"></i> <span>+12.3% from last week</span></small>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card radius-10 bg-orange">
                    <div class="card-body">
                      <div class="d-flex align-items-center">
                        <div class="">
                          <p class="mb-1 text-white">Total Posts</p>
                          <h4 class="mb-0 text-white">249</h4>
                        </div>
                        <div class="ms-auto fs-2 text-white">
                          <i class="bi bi-pencil"></i>
                        </div>
                      </div>
                      <hr class="my-2 border-top border-light"/>
                      <small class ="mb-0 text-white"><i class ="bi bi-arrow-up"></i> <span>+10.5% from last week</span></small>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card radius-10 bg-success">
                    <div class="card-body">
                      <div class="d-flex align-items-center">
                        <div class="">
                          <p class="mb-1 text-white">Messages</p>
                          <h4 class="mb-0 text-white">845</h4>
                        </div>
                        <div class="ms-auto fs-2 text-white">
                          <i class="bi bi-envelope"></i>
                        </div>
                      </div>
                      <hr class="my-2 border-top border-light"/>
                      <small class ="mb-0 text-white"><i class ="bi bi-arrow-up"></i> <span>+15.8% from last week</span></small>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card radius-10 bg-purple">
                    <div class="card-body">
                      <div class="d-flex align-items-center">
                        <div class="">
                          <p class="mb-1 text-white">Articles</p>
                          <h4 class="mb-0 text-white">645</h4>
                        </div>
                        <div class="ms-auto fs-2 text-white">
                          <i class="bi bi-book"></i>
                        </div>
                      </div>
                      <hr class="my-2 border-top border-light"/>
                      <small class ="mb-0 text-white"><i class ="bi bi-arrow-up"></i> <span>+16.5% from last week</span></small>
                    </div>
                  </div>
                </div>
              </div>
            </>
            );
};

            export default StaticWidgets;