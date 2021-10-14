import React from 'react';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'

const Errors500Error = ({ name, title }) => {
  return (
    <>
      <Breadcrumb name={name} title={title} />
      <div class="error-404 d-flex align-items-center justify-content-center">
        <div class="container">
          <div class="card py-5">
            <div class="row g-0">
              <div class="col-xl-5">
                <div class="card-body p-4">
                  <h1 class="display-1"><span class="text-warning">5</span><span class="text-danger">0</span><span class="text-primary">0</span></h1>
                  <h2 class="font-weight-bold display-4">Sorry, unexpected error</h2>
                  <p>Looks like you are lost!
                    <br />May be you are not connected to the internet!</p>
                  <div class="mt-5">	<a href="javascript:;" class="btn btn-lg btn-primary px-md-5 radius-30">Go Home</a>
                    <a href="javascript:;" class="btn btn-lg btn-outline-dark ms-3 px-md-5 radius-30">Back</a>
                  </div>
                </div>
              </div>
              <div class="col-xl-7">
                <img src="assets/images/error/505-error.png" class="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Errors500Error;