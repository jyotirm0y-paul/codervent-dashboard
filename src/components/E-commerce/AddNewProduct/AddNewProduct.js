import React from 'react';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'

const AddNewProduct = ({name, title}) => {
  return (
    <>
    <Breadcrumb name={name} title={title} />
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="card">
            <div class="card-header py-3 bg-transparent">
              <h5 class="mb-0">Add New Product</h5>
            </div>
            <div class="card-body">
              <div class="border p-3 rounded">
                <form class="row g-3">
                  <div class="col-12">
                    <label class="form-label">Product title</label>
                    <input type="text" class="form-control" placeholder="Product title" />
                  </div>
                  <div class="col-12">
                    <label class="form-label">Full description</label>
                    <textarea class="form-control" placeholder="Full description" rows="4" cols="4"></textarea>
                  </div>
                  <div class="col-12">
                    <label class="form-label">Images</label>
                    <input class="form-control" type="file" />
                  </div>
                  <div class="col-12">
                    <label class="form-label">Tags</label>
                    <input type="text" class="form-control" placeholder="Enter tags" />
                  </div>
                  <div class="col-12 col-md-6">
                    <label class="form-label">Category</label>
                    <select class="form-select">
                      <option>Fashion</option>
                      <option>Electronics</option>
                      <option>Furniture</option>
                      <option>Sports</option>
                    </select>
                  </div>
                  <div class="col-12 col-md-6">
                    <label class="form-label">Sub-category</label>
                    <select class="form-select">
                      <option>Jeans</option>
                      <option>T-Shirts</option>
                      <option>Shoes</option>
                      <option>Mobiles</option>
                    </select>
                  </div>
                  <div class="col-12">
                    <label class="form-label">Price</label>
                    <div class="row g-3">
                      <div class="col-lg-9">
                        <input type="text" class="form-control" placeholder="Price" />
                      </div>
                      <div class="col-lg-3">
                        <div class="input-group">
                          <select class="form-select">
                            <option> USD </option>
                            <option> EUR </option>
                            <option> RUBL </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label class="form-check-label" for="flexCheckDefault">
                        Publish on website
                      </label>
                    </div>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary px-4">Submit Item</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewProduct;