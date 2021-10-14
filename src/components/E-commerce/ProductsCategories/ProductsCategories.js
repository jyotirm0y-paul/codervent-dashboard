import React from 'react';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'

const ProductsCategories = ({name, title}) => {
  return (
    <>
    <Breadcrumb name={name} title={title} />
      <div class="card">
        <div class="card-header py-3">
          <h6 class="mb-0">Add Product Category</h6>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-12 col-lg-4 d-flex">
              <div class="card border shadow-none w-100">
                <div class="card-body">
                  <form class="row g-3">
                    <div class="col-12">
                      <label class="form-label">Name</label>
                      <input type="text" class="form-control" placeholder="Category name" />
                    </div>
                    <div class="col-12">
                      <label class="form-label">Slug</label>
                      <input type="text" class="form-control" placeholder="Slug name" />
                    </div>
                    <div class="col-12">
                      <label class="form-label">Parent</label>
                      <select class="form-select">
                        <option>Fashion</option>
                        <option>Electronics</option>
                        <option>Furniture</option>
                        <option>Sports</option>
                      </select>
                    </div>
                    <div class="col-12">
                      <label class="form-label">Description</label>
                      <textarea class="form-control" rows="3" cols="3" placeholder="Product Description"></textarea>
                    </div>
                    <div class="col-12">
                      <div class="d-grid">
                        <button class="btn btn-primary">Add Category</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-8 d-flex">
              <div class="card border shadow-none w-100">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table align-middle">
                      <thead class="table-light">
                        <tr>
                          <th><input class="form-check-input" type="checkbox" /></th>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Description</th>
                          <th>Slug</th>
                          <th>Order</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><input class="form-check-input" type="checkbox" /></td>
                          <td>javascript85462</td>
                          <td>Fashion</td>
                          <td>Some lorem ipsum</td>
                          <td>/fashion</td>
                          <td>54</td>
                          <td>
                            <div class="d-flex align-items-center gap-3 fs-6">
                              <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                              <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                              <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><input class="form-check-input" type="checkbox" /></td>
                          <td>javascript63524</td>
                          <td>Jeans</td>
                          <td>Some lorem ipsum</td>
                          <td>/jeans</td>
                          <td>24</td>
                          <td>
                            <div class="d-flex align-items-center gap-3 fs-6">
                              <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                              <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                              <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><input class="form-check-input" type="checkbox" /></td>
                          <td>javascript758426</td>
                          <td>Shoes</td>
                          <td>Some lorem ipsum</td>
                          <td>/shoes</td>
                          <td>26</td>
                          <td>
                            <div class="d-flex align-items-center gap-3 fs-6">
                              <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                              <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                              <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><input class="form-check-input" type="checkbox" /></td>
                          <td>javascript98653</td>
                          <td>Electronics</td>
                          <td>Some lorem ipsum</td>
                          <td>/electronics</td>
                          <td>52</td>
                          <td>
                            <div class="d-flex align-items-center gap-3 fs-6">
                              <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                              <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                              <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><input class="form-check-input" type="checkbox" /></td>
                          <td>javascript85426</td>
                          <td>Furniture</td>
                          <td>Some lorem ipsum</td>
                          <td>/furniture</td>
                          <td>14</td>
                          <td>
                            <div class="d-flex align-items-center gap-3 fs-6">
                              <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                              <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                              <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><input class="form-check-input" type="checkbox" /></td>
                          <td>javascript36867</td>
                          <td>Mobiles</td>
                          <td>Some lorem ipsum</td>
                          <td>/mobiles</td>
                          <td>40</td>
                          <td>
                            <div class="d-flex align-items-center gap-3 fs-6">
                              <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                              <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                              <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><input class="form-check-input" type="checkbox" /></td>
                          <td>javascript85697</td>
                          <td>Women</td>
                          <td>Some lorem ipsum</td>
                          <td>/women</td>
                          <td>75</td>
                          <td>
                            <div class="d-flex align-items-center gap-3 fs-6">
                              <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                              <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                              <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><input class="form-check-input" type="checkbox" /></td>
                          <td>javascript36758</td>
                          <td>Kids Cloths</td>
                          <td>Some lorem ipsum</td>
                          <td>/sids</td>
                          <td>25</td>
                          <td>
                            <div class="d-flex align-items-center gap-3 fs-6">
                              <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                              <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                              <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><input class="form-check-input" type="checkbox" /></td>
                          <td>javascript98620</td>
                          <td>Sports</td>
                          <td>Some lorem ipsum</td>
                          <td>/sports</td>
                          <td>10</td>
                          <td>
                            <div class="d-flex align-items-center gap-3 fs-6">
                              <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                              <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                              <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><input class="form-check-input" type="checkbox" /></td>
                          <td>javascript84253</td>
                          <td>Accessories</td>
                          <td>Some lorem ipsum</td>
                          <td>/accessories</td>
                          <td>12</td>
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
                  <nav class="float-end mt-0" aria-label="Page navigation">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCategories;