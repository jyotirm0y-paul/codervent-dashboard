import React from 'react';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'

const AddNewProduct2 = ({name, title}) => {
  return (
    <>
    <Breadcrumb name={name} title={title} />
      <div class="row">
        <div class="col-lg-12 mx-auto">
          <div class="card">
            <div class="card-header py-3 bg-transparent">
              <div class="d-sm-flex align-items-center">
                <h5 class="mb-2 mb-sm-0">Add New Product</h5>
                <div class="ms-auto">
                  <button type="button" class="btn btn-secondary">Save to Draft</button>
                  <button type="button" class="btn btn-primary">Publish Now</button>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="row g-3">
                <div class="col-12 col-lg-8">
                  <div class="card shadow-none bg-light border">
                    <div class="card-body">
                      <form class="row g-3">
                        <div class="col-12">
                          <label class="form-label">Product title</label>
                          <input type="text" class="form-control" placeholder="Product title" />
                        </div>
                        <div class="col-12 col-lg-4">
                          <label class="form-label">SKU</label>
                          <input type="text" class="form-control" placeholder="SKU" />
                        </div>
                        <div class="col-12 col-lg-4">
                          <label class="form-label">Color</label>
                          <input type="text" class="form-control" placeholder="Color" />
                        </div>
                        <div class="col-12 col-lg-4">
                          <label class="form-label">Size</label>
                          <input type="text" class="form-control" placeholder="Size" />
                        </div>
                        <div class="col-12">
                          <label class="form-label">Brand</label>
                          <input type="text" class="form-control" placeholder="Brand" />
                        </div>
                        <div class="col-12">
                          <label class="form-label">Images</label>
                          <input class="form-control" type="file" />
                        </div>
                        <div class="col-12">
                          <label class="form-label">Full description</label>
                          <textarea class="form-control" placeholder="Full description" rows="4" cols="4"></textarea>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-lg-4">
                  <div class="card shadow-none bg-light border">
                    <div class="card-body">
                      <div class="row g-3">
                        <div class="col-12">
                          <label class="form-label">Price</label>
                          <input type="text" class="form-control" placeholder="Price" />
                        </div>
                        <div class="col-12">
                          <label class="form-label">Status</label>
                          <select class="form-select">
                            <option>Published</option>
                            <option>Draft</option>
                          </select>
                        </div>
                        <div class="col-12">
                          <label class="form-label">Tags</label>
                          <input type="text" class="form-control" placeholder="Tags" />
                        </div>
                        <div class="col-12">
                          <div class="d-flex align-items-center gap-2">
                            <a href="javascript" class="btn btn-sm btn-light border shadow-sm bg-white">Woman <i class="bi bi-x"></i></a>
                            <a href="javascript" class="btn btn-sm btn-light border shadow-sm bg-white">Fashion <i class="bi bi-x"></i></a>
                            <a href="javascript" class="btn btn-sm btn-light border shadow-sm bg-white">Furniture <i class="bi bi-x"></i></a>
                          </div>
                        </div>
                        <div class="col-12">
                          <h5>Categories</h5>
                          <div class="category-list">
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="Jeans" />
                              <label class="form-check-label" for="Jeans">
                                Jeans
                              </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="FormalShirts" />
                              <label class="form-check-label" for="FormalShirts">
                                Formal Shirts
                              </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="WomenShirts" />
                              <label class="form-check-label" for="WomenShirts">
                                Women Shirts
                              </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="Electronics" />
                              <label class="form-check-label" for="Electronics">
                                Electronics
                              </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="SportsShoes" />
                              <label class="form-check-label" for="SportsShoes">
                                Sports Shoes
                              </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="Mobiles" />
                              <label class="form-check-label" for="Mobiles">
                                Mobiles
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewProduct2;