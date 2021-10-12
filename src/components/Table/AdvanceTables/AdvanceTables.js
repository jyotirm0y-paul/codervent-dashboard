import React from 'react';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'

const AdvanceTables = ({ name, title }) => {
  return (
    <>
      <Breadcrumb name={name} title={title} />
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <h5 class="mb-0">Customer Details</h5>
            <form class="ms-auto position-relative">
              <div class="position-absolute top-50 translate-middle-y search-icon px-3"><i class="bi bi-search"></i></div>
              <input class="form-control ps-5" type="text" placeholder="search"/>
            </form>
          </div>
          <div class="table-responsive mt-3">
            <table class="table align-middle">
              <thead class="table-secondary">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Pin Code</th>
                  <th>Country</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <div class="d-flex align-items-center gap-3 cursor-pointer">
                      <img src="../../assets/images/avatars/avatar-1.png" class="rounded-circle" width="44" height="44" alt=""/>
                      <div class ="">
                      <p class ="mb-0">Thomas Hardy</p>
                      </div>
                    </div>
                  </td>
                  <td>89 Chicago UK</td>
                  <td>Chicago</td>
                  <td>8574201</td>
                  <td>United Kingdom</td>
                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Views"><i class="bi bi-eye-fill"></i></a>
                      <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit"><i class="bi bi-pencil-fill"></i></a>
                      <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Delete"><i class="bi bi-trash-fill"></i></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <div class="d-flex align-items-center gap-3 cursor-pointer">
                      <img src="../../assets/images/avatars/avatar-2.png" class="rounded-circle" width="44" height="44" alt=""/>
                      <div class ="">
                      <p class ="mb-0">Victoria Hardy</p>
                      </div>
                    </div>
                  </td>
                  <td>77 New York UK</td>
                  <td>New York</td>
                  <td>8956370</td>
                  <td>United Kingdom</td>
                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Views"><i class="bi bi-eye-fill"></i></a>
                      <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit"><i class="bi bi-pencil-fill"></i></a>
                      <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Delete"><i class="bi bi-trash-fill"></i></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <div class="d-flex align-items-center gap-3 cursor-pointer">
                      <img src="../../assets/images/avatars/avatar-3.png" class="rounded-circle" width="44" height="44" alt=""/>
                      <div class ="">
                      <p class ="mb-0">Maria Anders</p>
                      </div>
                    </div>
                  </td>
                  <td>56 Poland UK</td>
                  <td>Poland</td>
                  <td>3265840</td>
                  <td>United Kingdom</td>
                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Views"><i class="bi bi-eye-fill"></i></a>
                      <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit"><i class="bi bi-pencil-fill"></i></a>
                      <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Delete"><i class="bi bi-trash-fill"></i></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    <div class="d-flex align-items-center gap-3 cursor-pointer">
                      <img src="../../assets/images/avatars/avatar-4.png" class="rounded-circle" width="44" height="44" alt=""/>
                      <div class ="">
                      <p class ="mb-0">Maria Anders</p>
                      </div>
                    </div>
                  </td>
                  <td>47-A Delhi India</td>
                  <td>Delhi</td>
                  <td>6535420</td>
                  <td>India</td>
                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Views"><i class="bi bi-eye-fill"></i></a>
                      <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit"><i class="bi bi-pencil-fill"></i></a>
                      <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Delete"><i class="bi bi-trash-fill"></i></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    <div class="d-flex align-items-center gap-3 cursor-pointer">
                      <img src="../../assets/images/avatars/avatar-5.png" class="rounded-circle" width="44" height="44" alt=""/>
                      <div class ="">
                      <p class ="mb-0">Martin Loother</p>
                      </div>
                    </div>
                  </td>
                  <td>37 B Columbo Shrilanka</td>
                  <td>Columbo</td>
                  <td>9645230</td>
                  <td>Shri Lanka</td>
                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Views"><i class="bi bi-eye-fill"></i></a>
                      <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit"><i class="bi bi-pencil-fill"></i></a>
                      <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Delete"><i class="bi bi-trash-fill"></i></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    <div class="d-flex align-items-center gap-3 cursor-pointer">
                      <img src="../../assets/images/avatars/avatar-6.png" class="rounded-circle" width="44" height="44" alt=""/>
                      <div class ="">
                      <p class ="mb-0">Martin Loother</p>
                      </div>
                    </div>
                  </td>
                  <td>68 New York UK</td>
                  <td>New York</td>
                  <td>7854230</td>
                  <td>United Kingdom</td>
                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Views"><i class="bi bi-eye-fill"></i></a>
                      <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit"><i class="bi bi-pencil-fill"></i></a>
                      <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Delete"><i class="bi bi-trash-fill"></i></a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>



      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <h5 class="mb-0">Order Table</h5>
            <form class="ms-auto position-relative">
              <div class="position-absolute top-50 translate-middle-y search-icon px-3"><i class="bi bi-search"></i></div>
              <input class="form-control ps-5" type="text" placeholder="search"/>
            </form>
          </div>
          <div class="table-responsive mt-3">
            <table class="table align-middle mb-0">
              <thead class="table-light">
                <tr>
                  <th>Product</th>
                  <th>Photo</th>
                  <th>Product ID</th>
                  <th>Status</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Shipping</th>
                </tr>
              </thead>
              <tbody><tr>
                <td>Sport Shoes</td>
                <td><img src="../../../../../assets/images/products/01.png" class="product-img-2" alt="product img"/></td>
                <td>#9405822</td>
                <td><span class="badge bg-light-success text-success w-100">Paid</span></td>
                <td>$1250.00</td>
                <td>03 Feb 2020</td>
                <td><div class="progress" style={{height: "5px"}}>
                  <div class="progress-bar bg-success" role="progressbar" style={{width: "100%"}}></div>
                </div>
                </td>
              </tr>

                <tr>
                  <td>Man Headcap</td>
                  <td><img src="../../assets/images/products/02.png" class="product-img-2" alt="product img"/></td>
                  <td>#8304620</td>
                  <td><span class="badge bg-light-warning text-warning w-100">Pending</span></td>
                  <td>$1500.00</td>
                  <td>05 Feb 2020</td>
                  <td><div class="progress" style={{height: "5px"}}>
                    <div class="progress-bar bg-warning" role="progressbar" style={{width: "60%"}}></div>
                  </div></td>
                </tr>

                <tr>
                  <td>Sunglass</td>
                  <td><img src="../../assets/images/products/03.png" class="product-img-2" alt="product img"/></td>
                  <td>#4736890</td>
                  <td><span class="badge bg-light-danger text-danger w-100">Failed</span></td>
                  <td>$1400.00</td>
                  <td>06 Feb 2020</td>
                  <td><div class="progress" style={{height: "5px"}}>
                    <div class="progress-bar bg-danger" role="progressbar" style={{width: "70%"}}></div>
                  </div></td>
                </tr>

                <tr>
                  <td>Shirt Formal</td>
                  <td><img src="../../assets/images/products/04.png" class="product-img-2" alt="product img"/></td>
                  <td>#8543765</td>
                  <td><span class="badge bg-light-success text-success w-100">Paid</span></td>
                  <td>$1200.00</td>
                  <td>14 Feb 2020</td>
                  <td><div class="progress" style={{height: "5px"}}>
                    <div class="progress-bar bg-success" role="progressbar" style={{width: "100%"}}></div>
                  </div></td>
                </tr>
                <tr>
                  <td>Black Coat Pant</td>
                  <td><img src="../../assets/images/products/06.png" class="product-img-2" alt="product img"/></td>
                  <td>#9629240</td>
                  <td><span class="badge bg-light-warning text-warning w-100">Pending</span></td>
                  <td>$1500.00</td>
                  <td>18 Feb 2020</td>
                  <td><div class="progress" style={{height: "5px"}}>
                    <div class="progress-bar bg-warning" role="progressbar" style={{width: "60%"}}></div>
                  </div></td>
                </tr>
                <tr>
                  <td>Heals</td>
                  <td><img src="../../assets/images/products/05.png" class="product-img-2" alt="product img"/></td>
                  <td>#8506790</td>
                  <td><span class="badge bg-light-danger text-danger w-100">Failed</span></td>
                  <td>$1800.00</td>
                  <td>21 Feb 2020</td>
                  <td><div class="progress" style={{height: "5px"}}>
                    <div class="progress-bar bg-danger" role="progressbar" style={{width: "40%"}}></div>
                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvanceTables;