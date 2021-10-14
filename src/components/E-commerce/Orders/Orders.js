import React from 'react';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'

const Orders = ({name, title}) => {
  return (
    <>
    <Breadcrumb name={name} title={title} />
      <div class="row">
        <div class="col-12 col-lg-9 d-flex">
          <div class="card w-100">
            <div class="card-header py-3">
              <div class="row g-3">
                <div class="col-lg-4 col-md-6 me-auto">
                  <div class="ms-auto position-relative">
                    <div class="position-absolute top-50 translate-middle-y search-icon px-3"><i class="bi bi-search"></i></div>
                    <input class="form-control ps-5" type="text" placeholder="search products" />
                  </div>
                </div>
                <div class="col-lg-2 col-6 col-md-3">
                  <select class="form-select">
                    <option>Status</option>
                    <option>Active</option>
                    <option>Disabled</option>
                    <option>Pending</option>
                    <option>Show All</option>
                  </select>
                </div>
                <div class="col-lg-2 col-6 col-md-3">
                  <select class="form-select">
                    <option>Show 10</option>
                    <option>Show 30</option>
                    <option>Show 50</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table align-middle">
                  <thead class="table-light">
                    <tr>
                      <th>ID</th>
                      <th>Customer name</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>javascript872</td>
                      <td>Thomas Hardy</td>
                      <td>$24.00</td>
                      <td><span class="badge rounded-pill alert-success">Received</span></td>
                      <td>24-06-2020</td>
                      <td>
                        <div class="d-flex align-items-center gap-3 fs-6">
                          <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                          <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                          <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>javascript976</td>
                      <td>Thomas Hardy</td>
                      <td>$24.00</td>
                      <td><span class="badge rounded-pill alert-success">Received</span></td>
                      <td>24-06-2020</td>
                      <td>
                        <div class="d-flex align-items-center gap-3 fs-6">
                          <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                          <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                          <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>javascript683</td>
                      <td>Victoria Hardy</td>
                      <td>$24.00</td>
                      <td><span class="badge rounded-pill alert-danger">Cancelled</span></td>
                      <td>24-06-2020</td>
                      <td>
                        <div class="d-flex align-items-center gap-3 fs-6">
                          <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                          <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                          <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>javascript456</td>
                      <td>Maria Anders</td>
                      <td>$24.00</td>
                      <td><span class="badge rounded-pill alert-success">Received</span></td>
                      <td>24-06-2020</td>
                      <td>
                        <div class="d-flex align-items-center gap-3 fs-6">
                          <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                          <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                          <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>javascript658</td>
                      <td>Martin Loother</td>
                      <td>$24.00</td>
                      <td><span class="badge rounded-pill alert-warning">Pending</span></td>
                      <td>24-06-2020</td>
                      <td>
                        <div class="d-flex align-items-center gap-3 fs-6">
                          <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                          <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                          <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>javascript653</td>
                      <td>Dianne Russell</td>
                      <td>$24.00</td>
                      <td><span class="badge rounded-pill alert-warning">Pending</span></td>
                      <td>24-06-2020</td>
                      <td>
                        <div class="d-flex align-items-center gap-3 fs-6">
                          <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                          <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                          <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>javascript875</td>
                      <td>Jacob Jones</td>
                      <td>$24.00</td>
                      <td><span class="badge rounded-pill alert-success">Received</span></td>
                      <td>24-06-2020</td>
                      <td>
                        <div class="d-flex align-items-center gap-3 fs-6">
                          <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                          <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                          <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>javascript869</td>
                      <td>Albert Flores</td>
                      <td>$24.00</td>
                      <td><span class="badge rounded-pill alert-danger">Cancelled</span></td>
                      <td>24-06-2020</td>
                      <td>
                        <div class="d-flex align-items-center gap-3 fs-6">
                          <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                          <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                          <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>javascript245</td>
                      <td>Guy Hawkins</td>
                      <td>$24.00</td>
                      <td><span class="badge rounded-pill alert-success">Received</span></td>
                      <td>24-06-2020</td>
                      <td>
                        <div class="d-flex align-items-center gap-3 fs-6">
                          <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                          <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                          <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>javascript758</td>
                      <td>Eleanor Pena</td>
                      <td>$24.00</td>
                      <td><span class="badge rounded-pill alert-success">Received</span></td>
                      <td>24-06-2020</td>
                      <td>
                        <div class="d-flex align-items-center gap-3 fs-6">
                          <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                          <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                          <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>javascript356</td>
                      <td>Savannah Nguyen</td>
                      <td>$24.00</td>
                      <td><span class="badge rounded-pill alert-success">Received</span></td>
                      <td>24-06-2020</td>
                      <td>
                        <div class="d-flex align-items-center gap-3 fs-6">
                          <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                          <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                          <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>javascript689</td>
                      <td>Devon Lane</td>
                      <td>$24.00</td>
                      <td><span class="badge rounded-pill alert-success">Received</span></td>
                      <td>24-06-2020</td>
                      <td>
                        <div class="d-flex align-items-center gap-3 fs-6">
                          <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                          <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                          <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <nav class="float-end" aria-label="Page navigation">
                <ul class="pagination">
                  <li class="page-item disabled"><a class="page-link" href="javascript">Previous</a></li>
                  <li class="page-item active"><a class="page-link" href="javascript">1</a></li>
                  <li class="page-item"><a class="page-link" href="javascript">2</a></li>
                  <li class="page-item"><a class="page-link" href="javascript">3</a></li>
                  <li class="page-item"><a class="page-link" href="javascript">Next</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-3 d-flex">
          <div class="card w-100">
            <div class="card-header py-3">
              <h5 class="mb-0">Filter by</h5>
            </div>
            <div class="card-body">
              <form class="row g-3">
                <div class="col-12">
                  <label class="form-label">Order ID</label>
                  <input type="text" class="form-control" placeholder="Order ID" />
                </div>
                <div class="col-12">
                  <label class="form-label">Customer</label>
                  <input type="text" class="form-control" placeholder="Customer name" />
                </div>
                <div class="col-12">
                  <label class="form-label">Order Status</label>
                  <select class="form-select">
                    <option>Published</option>
                    <option>Draft</option>
                  </select>
                </div>
                <div class="col-12">
                  <label class="form-label">Total</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="col-12">
                  <label class="form-label">Date Added</label>
                  <input type="date" class="form-control" />
                </div>
                <div class="col-12">
                  <label class="form-label">Date Modified</label>
                  <input type="date" class="form-control" />
                </div>
                <div class="col-12">
                  <div class="d-grid">
                    <button class="btn btn-primary">Filter Product</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;