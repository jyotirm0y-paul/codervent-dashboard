import React from 'react';

const Layouts = () => {
  return (
    <>
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <h6 class="mb-0 text-uppercase">Horizontal Form</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <div class="border p-4 rounded">
                <div class="card-title d-flex align-items-center">
                  <h5 class="mb-0">User Registration</h5>
                </div>
                <hr />
                <div class="row mb-3">
                  <label for="inputEnterYourName" class="col-sm-3 col-form-label">Enter Your Name</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="inputEnterYourName" placeholder="Enter Your Name" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputPhoneNo2" class="col-sm-3 col-form-label">Phone No</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" id="inputPhoneNo2" placeholder="Phone No" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmailAddress2" class="col-sm-3 col-form-label">Email Address</label>
                  <div class="col-sm-9">
                    <input type="email" class="form-control" id="inputEmailAddress2" placeholder="Email Address" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputChoosePassword2" class="col-sm-3 col-form-label">Choose Password</label>
                  <div class="col-sm-9">
                    <input type="email" class="form-control" id="inputChoosePassword2" placeholder="Choose Password" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputConfirmPassword2" class="col-sm-3 col-form-label">Confirm Password</label>
                  <div class="col-sm-9">
                    <input type="email" class="form-control" id="inputConfirmPassword2" placeholder="Confirm Password" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputAddress4" class="col-sm-3 col-form-label">Address</label>
                  <div class="col-sm-9">
                    <textarea class="form-control" id="inputAddress4" rows="3" placeholder="Address"></textarea>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputAddress4" class="col-sm-3 col-form-label"></label>
                  <div class="col-sm-9">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="gridCheck4" />
                      <label class="form-check-label" for="gridCheck4">Check me out</label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <label class="col-sm-3 col-form-label"></label>
                  <div class="col-sm-9">
                    <button type="submit" class="btn btn-primary px-5">Register</button>
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

export default Layouts;