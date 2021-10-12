import React from 'react';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'

const OrdersDetail = ({name, title}) => {
  return (
    <>
    <Breadcrumb name={name} title={title} />
      <div class="card">
        <div class="card-header py-3">
          <div class="row g-3 align-items-center">
            <div class="col-12 col-lg-4 col-md-6 me-auto">
              <h5 class="mb-1">Tue, Apr 15, 2020, 8:44PM</h5>
              <p class="mb-0">Order ID : #8965327</p>
            </div>
            <div class="col-12 col-lg-3 col-6 col-md-3">
              <select class="form-select">
                <option>Change Status</option>
                <option>Awaiting Payment</option>
                <option>Confirmed</option>
                <option>Shipped</option>
                <option>Delivered</option>
              </select>
            </div>
            <div class="col-12 col-lg-3 col-6 col-md-3">
              <button type="button" class="btn btn-primary">Save</button>
              <button type="button" class="btn btn-secondary"><i class="bi bi-printer-fill"></i> Print</button>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="row row-cols-1 row-cols-xl-2 row-cols-xxl-3">
            <div class="col">
              <div class="card border shadow-none radius-10">
                <div class="card-body">
                  <div class="d-flex align-items-center gap-3">
                    <div class="icon-box bg-light-primary border-0">
                      <i class="bi bi-person text-primary"></i>
                    </div>
                    <div class="info">
                      <h6 class="mb-2">Customer</h6>
                      <p class="mb-1">Jhon Michle</p>
                      <p class="mb-1">jhon@_78@example.com</p>
                      <p class="mb-1">+91-9910XXXXXX</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border shadow-none radius-10">
                <div class="card-body">
                  <div class="d-flex align-items-center gap-3">
                    <div class="icon-box bg-light-success border-0">
                      <i class="bi bi-truck text-success"></i>
                    </div>
                    <div class="info">
                      <h6 class="mb-2">Order info</h6>
                      <p class="mb-1"><strong>Shipping</strong> : Red Express</p>
                      <p class="mb-1"><strong>Pay Method</strong> : Master Card</p>
                      <p class="mb-1"><strong>Status</strong> : New</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border shadow-none radius-10">
                <div class="card-body">
                  <div class="d-flex align-items-center gap-3">
                    <div class="icon-box bg-light-danger border-0">
                      <i class="bi bi-geo-alt text-danger"></i>
                    </div>
                    <div class="info">
                      <h6 class="mb-2">Deliver to</h6>
                      <p class="mb-1"><strong>City</strong> : Sydney, Australia</p>
                      <p class="mb-1"><strong>Address</strong> : 47-A, Street Name, <br />Sydney Australia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-lg-8">
              <div class="card border shadow-none radius-10">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table align-middle mb-0">
                      <thead class="table-light">
                        <tr>
                          <th>Product</th>
                          <th>Unit Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="orderlist">
                              <a class="d-flex align-items-center gap-2" href="javascript">
                                <div class="product-box">
                                  <img src="assets/images/products/01.png" alt="" />
                                </div>
                                <div>
                                  <p class="mb-0 product-title">Men White Polo T-shirt</p>
                                </div>
                              </a>
                            </div>
                          </td>
                          <td>$35.00</td>
                          <td>2</td>
                          <td>$70.00</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="orderlist">
                              <a class="d-flex align-items-center gap-2" href="javascript">
                                <div class="product-box">
                                  <img src="assets/images/products/02.png" alt="" />
                                </div>
                                <div>
                                  <p class="mb-0 product-title">Formal Black Coat Pant</p>
                                </div>
                              </a>
                            </div>
                          </td>
                          <td>$25.00</td>
                          <td>1</td>
                          <td>$25.00</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="orderlist">
                              <a class="d-flex align-items-center gap-2" href="javascript">
                                <div class="product-box">
                                  <img src="assets/images/products/03.png" alt="" />
                                </div>
                                <div>
                                  <p class="mb-0 product-title">Blue Shade Jeans</p>
                                </div>
                              </a>
                            </div>
                          </td>
                          <td>$65.00</td>
                          <td>2</td>
                          <td>$130.00</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="orderlist">
                              <a class="d-flex align-items-center gap-2" href="javascript">
                                <div class="product-box">
                                  <img src="assets/images/products/04.png" alt="" />
                                </div>
                                <div>
                                  <p class="mb-0 product-title">Yellow Winter Jacket for Men</p>
                                </div>
                              </a>
                            </div>
                          </td>
                          <td>$56.00</td>
                          <td>1</td>
                          <td>$56.00</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="orderlist">
                              <a class="d-flex align-items-center gap-2" href="javascript">
                                <div class="product-box">
                                  <img src="assets/images/products/05.png" alt="" />
                                </div>
                                <div>
                                  <p class="mb-0 product-title">Men Sports Shoes Nike</p>
                                </div>
                              </a>
                            </div>
                          </td>
                          <td>$85.00</td>
                          <td>1</td>
                          <td>$85.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div class="card border shadow-none bg-light radius-10">
                <div class="card-body">
                  <div class="d-flex align-items-center mb-4">
                    <div>
                      <h5 class="mb-0">Order Summary</h5>
                    </div>
                    <div class="ms-auto">
                      <button type="button" class="btn alert-success radius-30 px-4">Confirmed</button>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <div>
                      <p class="mb-0">Subtotal</p>
                    </div>
                    <div class="ms-auto">
                      <h5 class="mb-0">$198.00</h5>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <div>
                      <p class="mb-0">Shipping Price</p>
                    </div>
                    <div class="ms-auto">
                      <h5 class="mb-0">$0.00</h5>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <div>
                      <p class="mb-0">Taxes</p>
                    </div>
                    <div class="ms-auto">
                      <h5 class="mb-0">$24.00</h5>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <div>
                      <p class="mb-0">Payment Fee</p>
                    </div>
                    <div class="ms-auto">
                      <h5 class="mb-0">$14.00</h5>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <div>
                      <p class="mb-0">Discount</p>
                    </div>
                    <div class="ms-auto">
                      <h5 class="mb-0 text-danger">-$36.00</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card border shadow-none bg-warning radius-10">
                <div class="card-body">
                  <h5>Payment info</h5>
                  <div class="d-flex align-items-center gap-3">
                    <div class="fs-1">
                      <i class="bi bi-credit-card-2-back-fill"></i>
                    </div>
                    <div class="">
                      <p class="mb-0 fs-6">Master Card **** **** 8956 </p>
                    </div>
                  </div>
                  <p>Business name: Template Market LLP <br />
                    Phone: +91-9910XXXXXX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersDetail;