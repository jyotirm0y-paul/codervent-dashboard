import React from 'react';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'

const ProductsList = ({name, title}) => {
  return (
    <>
    <Breadcrumb name={name} title={title} />
      <div class="card">
        <div class="card-header py-3">
          <div class="row align-items-center m-0">
            <div class="col-md-3 col-12 me-auto mb-md-0 mb-3">
              <select class="form-select">
                <option>All category</option>
                <option>Fashion</option>
                <option>Electronics</option>
                <option>Furniture</option>
                <option>Sports</option>
              </select>
            </div>
            <div class="col-md-2 col-6">
              <input type="date" class="form-control" />
            </div>
            <div class="col-md-2 col-6">
              <select class="form-select">
                <option>Status</option>
                <option>Active</option>
                <option>Disabled</option>
                <option>Show all</option>
              </select>
            </div>
          </div>
        </div>
        <div class="card-body">

          <div class="table-responsive">
            <table class="table align-middle table-striped">
              <tbody>
                <tr>
                  <td>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="productlist">
                    <a class="d-flex align-items-center gap-2" href="javascript">
                      <div class="product-box">
                        <img src="../../assets/images/products/01.png" alt="" />
                      </div>
                      <div>
                        <h6 class="mb-0 product-title">Men White Polo T-shirt</h6>
                      </div>
                    </a>
                  </td>
                  <td><span>$18.00</span></td>
                  <td><span class="badge rounded-pill alert-success">Active</span></td>
                  <td><span>5-31-2020</span></td>
                  <td>
                    <div class="d-flex align-items-center gap-3 fs-6">
                      <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                      <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                      <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="productlist">
                    <a class="d-flex align-items-center gap-2" href="javascript">
                      <div class="product-box">
                        <img src="../../assets/images/products/02.png" alt="" />
                      </div>
                      <div>
                        <h6 class="mb-0 product-title">Formal Black Coat Pant</h6>
                      </div>
                    </a>
                  </td>
                  <td><span>$18.00</span></td>
                  <td><span class="badge rounded-pill alert-success">Active</span></td>
                  <td><span>5-31-2020</span></td>
                  <td>
                    <div class="d-flex align-items-center gap-3 fs-6">
                      <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                      <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                      <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="productlist">
                    <a class="d-flex align-items-center gap-2" href="javascript">
                      <div class="product-box">
                        <img src="../../assets/images/products/03.png" alt="" />
                      </div>
                      <div>
                        <h6 class="mb-0 product-title">Blue Shade Jeans</h6>
                      </div>
                    </a>
                  </td>
                  <td><span>$18.00</span></td>
                  <td><span class="badge rounded-pill alert-warning">Archived</span></td>
                  <td><span>5-31-2020</span></td>
                  <td>
                    <div class="d-flex align-items-center gap-3 fs-6">
                      <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                      <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                      <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="productlist">
                    <a class="d-flex align-items-center gap-2" href="javascript">
                      <div class="product-box">
                        <img src="../../assets/images/products/04.png" alt="" />
                      </div>
                      <div>
                        <h6 class="mb-0 product-title">Yellow Winter Jacket for Men</h6>
                      </div>
                    </a>
                  </td>
                  <td><span>$18.00</span></td>
                  <td><span class="badge rounded-pill alert-danger">Disabled</span></td>
                  <td><span>5-31-2020</span></td>
                  <td>
                    <div class="d-flex align-items-center gap-3 fs-6">
                      <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                      <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                      <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="productlist">
                    <a class="d-flex align-items-center gap-2" href="javascript">
                      <div class="product-box">
                        <img src="../../assets/images/products/05.png" alt="" />
                      </div>
                      <div>
                        <h6 class="mb-0 product-title">Men Sports Shoes Nike</h6>
                      </div>
                    </a>
                  </td>
                  <td><span>$18.00</span></td>
                  <td><span class="badge rounded-pill alert-warning">Archived</span></td>
                  <td><span>5-31-2020</span></td>
                  <td>
                    <div class="d-flex align-items-center gap-3 fs-6">
                      <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                      <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                      <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="productlist">
                    <a class="d-flex align-items-center gap-2" href="javascript">
                      <div class="product-box">
                        <img src="../../assets/images/products/06.png" alt="" />
                      </div>
                      <div>
                        <h6 class="mb-0 product-title">Fancy Home Sofa</h6>
                      </div>
                    </a>
                  </td>
                  <td><span>$18.00</span></td>
                  <td><span class="badge rounded-pill alert-success">Active</span></td>
                  <td><span>5-31-2020</span></td>
                  <td>
                    <div class="d-flex align-items-center gap-3 fs-6">
                      <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                      <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                      <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="productlist">
                    <a class="d-flex align-items-center gap-2" href="javascript">
                      <div class="product-box">
                        <img src="../../assets/images/products/07.png" alt="" />
                      </div>
                      <div>
                        <h6 class="mb-0 product-title">Sports Time Watch</h6>
                      </div>
                    </a>
                  </td>
                  <td><span>$18.00</span></td>
                  <td><span class="badge rounded-pill alert-success">Active</span></td>
                  <td><span>5-31-2020</span></td>
                  <td>
                    <div class="d-flex align-items-center gap-3 fs-6">
                      <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                      <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                      <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="productlist">
                    <a class="d-flex align-items-center gap-2" href="javascript">
                      <div class="product-box">
                        <img src="../../assets/images/products/08.png" alt="" />
                      </div>
                      <div>
                        <h6 class="mb-0 product-title">Women Blue Heals</h6>
                      </div>
                    </a>
                  </td>
                  <td><span>$18.00</span></td>
                  <td><span class="badge rounded-pill alert-success">Active</span></td>
                  <td><span>5-31-2020</span></td>
                  <td>
                    <div class="d-flex align-items-center gap-3 fs-6">
                      <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                      <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                      <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="productlist">
                    <a class="d-flex align-items-center gap-2" href="javascript">
                      <div class="product-box">
                        <img src="../../assets/images/products/09.png" alt="" />
                      </div>
                      <div>
                        <h6 class="mb-0 product-title">Men Sport Hat Nike</h6>
                      </div>
                    </a>
                  </td>
                  <td><span>$18.00</span></td>
                  <td><span class="badge rounded-pill alert-success">Active</span></td>
                  <td><span>5-31-2020</span></td>
                  <td>
                    <div class="d-flex align-items-center gap-3 fs-6">
                      <a href="javascript" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                      <a href="javascript" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                      <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td class="productlist">
                    <a class="d-flex align-items-center gap-2" href="javascript">
                      <div class="product-box">
                        <img src="../../assets/images/products/10.png" alt="" />
                      </div>
                      <div>
                        <h6 class="mb-0 product-title">Orange Micro Headphone </h6>
                      </div>
                    </a>
                  </td>
                  <td><span>$18.00</span></td>
                  <td><span class="badge rounded-pill alert-success">Active</span></td>
                  <td><span>5-31-2020</span></td>
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

          <nav class="float-end mt-4" aria-label="Page navigation">
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
    </>
  );
};

export default ProductsList;