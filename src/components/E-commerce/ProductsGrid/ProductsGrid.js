import React from 'react';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'

const ProductsGrid = ({name, title}) => {
  return (
    <>
    <Breadcrumb name={name} title={title} />
      <div class="card">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col-lg-3 col-xl-2">
              <a href="javascript" class="btn btn-primary mb-3 mb-lg-0"><i class="bi bi-plus-square-fill"></i>Add Product</a>
            </div>
            <div class="col-lg-9 col-xl-10">
              <form class="float-lg-end">
                <div class="row row-cols-lg-auto g-2">
                  <div class="col-12">
                    <a href="javascript" class="btn btn-light mb-3 mb-lg-0"><i class="bi bi-download"></i>Export</a>
                  </div>
                  <div class="col-12">
                    <a href="javascript" class="btn btn-light mb-3 mb-lg-0"><i class="bi bi-upload"></i>Import</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header py-3">
          <div class="row g-3 align-items-center">
            <div class="col-lg-3 col-md-6 me-auto">
              <div class="ms-auto position-relative">
                <div class="position-absolute top-50 translate-middle-y search-icon px-3"><i class="bi bi-search"></i></div>
                <input class="form-control ps-5" type="text" placeholder="search products" />
              </div>
            </div>
            <div class="col-lg-2 col-6 col-md-3">
              <select class="form-select">
                <option>All category</option>
                <option>Fashion</option>
                <option>Electronics</option>
                <option>Furniture</option>
                <option>Sports</option>
              </select>
            </div>
            <div class="col-lg-2 col-6 col-md-3">
              <select class="form-select">
                <option>Latest added</option>
                <option>Cheap first</option>
                <option>Most viewed</option>
              </select>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="product-grid">
            <div class="row row-cols-1 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-3">
              <div class="col">
                <div class="card border shadow-none mb-0">
                  <div class="card-body text-center">
                    <img src="../../assets/images/products/01.png" class="img-fluid mb-3" alt="" />
                    <h6 class="product-title">Men White Polo T-shirt</h6>
                    <p class="product-price fs-5 mb-1"><span>$250.99</span></p>
                    <div class="rating mb-0">
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                    </div>
                    <small>74 Reviews</small>
                    <div class="actions d-flex align-items-center justify-content-center gap-2 mt-3">
                      <a href="javascript" class="btn btn-sm btn-outline-primary"><i class="bi bi-pencil-fill"></i> Edit</a>
                      <a href="javascript" class="btn btn-sm btn-outline-danger"><i class="bi bi-trash-fill"></i> Delete</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card border shadow-none mb-0">
                  <div class="card-body text-center">
                    <img src="../../assets/images/products/02.png" class="img-fluid mb-3" alt="" />
                    <h6 class="product-title">Men White Polo T-shirt</h6>
                    <p class="product-price fs-5 mb-1"><span>$250.99</span></p>
                    <div class="rating mb-0">
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                    </div>
                    <small>65 Reviews</small>
                    <div class="actions d-flex align-items-center justify-content-center gap-2 mt-3">
                      <a href="javascript" class="btn btn-sm btn-outline-primary"><i class="bi bi-pencil-fill"></i> Edit</a>
                      <a href="javascript" class="btn btn-sm btn-outline-danger"><i class="bi bi-trash-fill"></i> Delete</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card border shadow-none mb-0">
                  <div class="card-body text-center">
                    <img src="../../assets/images/products/03.png" class="img-fluid mb-3" alt="" />
                    <h6 class="product-title">Men White Polo T-shirt</h6>
                    <p class="product-price fs-5 mb-1"><span>$250.99</span></p>
                    <div class="rating mb-0">
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-secondary"></i>
                      <i class="bi bi-star-fill text-secondary"></i>
                    </div>
                    <small>96 Reviews</small>
                    <div class="actions d-flex align-items-center justify-content-center gap-2 mt-3">
                      <a href="javascript" class="btn btn-sm btn-outline-primary"><i class="bi bi-pencil-fill"></i> Edit</a>
                      <a href="javascript" class="btn btn-sm btn-outline-danger"><i class="bi bi-trash-fill"></i> Delete</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card border shadow-none mb-0">
                  <div class="card-body text-center">
                    <img src="../../assets/images/products/04.png" class="img-fluid mb-3" alt="" />
                    <h6 class="product-title">Men White Polo T-shirt</h6>
                    <p class="product-price fs-5 mb-1"><span>$250.99</span></p>
                    <div class="rating mb-0">
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-secondary"></i>
                    </div>
                    <small>65 Reviews</small>
                    <div class="actions d-flex align-items-center justify-content-center gap-2 mt-3">
                      <a href="javascript" class="btn btn-sm btn-outline-primary"><i class="bi bi-pencil-fill"></i> Edit</a>
                      <a href="javascript" class="btn btn-sm btn-outline-danger"><i class="bi bi-trash-fill"></i> Delete</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card border shadow-none mb-0">
                  <div class="card-body text-center">
                    <img src="../../assets/images/products/05.png" class="img-fluid mb-3" alt="" />
                    <h6 class="product-title">Men White Polo T-shirt</h6>
                    <p class="product-price fs-5 mb-1"><span>$250.99</span></p>
                    <div class="rating mb-0">
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-secondary"></i>
                    </div>
                    <small>35 Reviews</small>
                    <div class="actions d-flex align-items-center justify-content-center gap-2 mt-3">
                      <a href="javascript" class="btn btn-sm btn-outline-primary"><i class="bi bi-pencil-fill"></i> Edit</a>
                      <a href="javascript" class="btn btn-sm btn-outline-danger"><i class="bi bi-trash-fill"></i> Delete</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card border shadow-none mb-0">
                  <div class="card-body text-center">
                    <img src="../../assets/images/products/06.png" class="img-fluid mb-3" alt="" />
                    <h6 class="product-title">Men White Polo T-shirt</h6>
                    <p class="product-price fs-5 mb-1"><span>$250.99</span></p>
                    <div class="rating mb-0">
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                    </div>
                    <small>74 Reviews</small>
                    <div class="actions d-flex align-items-center justify-content-center gap-2 mt-3">
                      <a href="javascript" class="btn btn-sm btn-outline-primary"><i class="bi bi-pencil-fill"></i> Edit</a>
                      <a href="javascript" class="btn btn-sm btn-outline-danger"><i class="bi bi-trash-fill"></i> Delete</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card border shadow-none mb-0">
                  <div class="card-body text-center">
                    <img src="../../assets/images/products/07.png" class="img-fluid mb-3" alt="" />
                    <h6 class="product-title">Men White Polo T-shirt</h6>
                    <p class="product-price fs-5 mb-1"><span>$250.99</span></p>
                    <div class="rating mb-0">
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                    </div>
                    <small>42 Reviews</small>
                    <div class="actions d-flex align-items-center justify-content-center gap-2 mt-3">
                      <a href="javascript" class="btn btn-sm btn-outline-primary"><i class="bi bi-pencil-fill"></i> Edit</a>
                      <a href="javascript" class="btn btn-sm btn-outline-danger"><i class="bi bi-trash-fill"></i> Delete</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card border shadow-none mb-0">
                  <div class="card-body text-center">
                    <img src="../../assets/images/products/08.png" class="img-fluid mb-3" alt="" />
                    <h6 class="product-title">Men White Polo T-shirt</h6>
                    <p class="product-price fs-5 mb-1"><span>$250.99</span></p>
                    <div class="rating mb-0">
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-secondary"></i>
                      <i class="bi bi-star-fill text-secondary"></i>
                      <i class="bi bi-star-fill text-secondary"></i>
                    </div>
                    <small>24 Reviews</small>
                    <div class="actions d-flex align-items-center justify-content-center gap-2 mt-3">
                      <a href="javascript" class="btn btn-sm btn-outline-primary"><i class="bi bi-pencil-fill"></i> Edit</a>
                      <a href="javascript" class="btn btn-sm btn-outline-danger"><i class="bi bi-trash-fill"></i> Delete</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card border shadow-none mb-0">
                  <div class="card-body text-center">
                    <img src="../../assets/images/products/09.png" class="img-fluid mb-3" alt="" />
                    <h6 class="product-title">Men White Polo T-shirt</h6>
                    <p class="product-price fs-5 mb-1"><span>$250.99</span></p>
                    <div class="rating mb-0">
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-secondary"></i>
                    </div>
                    <small>55 Reviews</small>
                    <div class="actions d-flex align-items-center justify-content-center gap-2 mt-3">
                      <a href="javascript" class="btn btn-sm btn-outline-primary"><i class="bi bi-pencil-fill"></i> Edit</a>
                      <a href="javascript" class="btn btn-sm btn-outline-danger"><i class="bi bi-trash-fill"></i> Delete</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card border shadow-none mb-0">
                  <div class="card-body text-center">
                    <img src="../../assets/images/products/10.png" class="img-fluid mb-3" alt="" />
                    <h6 class="product-title">Men White Polo T-shirt</h6>
                    <p class="product-price fs-5 mb-1"><span>$250.99</span></p>
                    <div class="rating mb-0">
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                      <i class="bi bi-star-fill text-warning"></i>
                    </div>
                    <small>74 Reviews</small>
                    <div class="actions d-flex align-items-center justify-content-center gap-2 mt-3">
                      <a href="javascript" class="btn btn-sm btn-outline-primary"><i class="bi bi-pencil-fill"></i> Edit</a>
                      <a href="javascript" class="btn btn-sm btn-outline-danger"><i class="bi bi-trash-fill"></i> Delete</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default ProductsGrid;