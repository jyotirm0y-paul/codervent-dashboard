import React from 'react';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'

const ErrorsComingSoon = ({ name, title }) => {
  return (
    <>
      <Breadcrumb name={name} title={title} />
       <div class="row">
              <div class="col-12 col-lg-6 mx-auto">
                <div class="card shadow-none bg-transparent">
                  <div class="card-body text-center">
                    <h1 class="display-4 mt-5">We are Coming Soon!</h1>
                    <p>We are currently working hard on this page. Subscribe our newsletter
                      <br/>to get update when it'll be live.</p>
                    <div class="row">
                      <div class="col-12 col-lg-12 mx-auto">
                        <form class="">
                          <div class="input-group input-group-lg">
                            <input type="text" class="form-control" placeholder="Enter Your Email ID"/>
                            <button class="btn btn-primary" type="button"><i class="bx bx-right-arrow-alt"></i>
                            </button>
                          </div>
                        </form>
                        <h4 class="mt-3">Follow Us :</h4>
                        <div class="error-social mt-3"> <a href="javascript:;" class="bg-facebook"><i class="bx bxl-facebook"></i></a>
                          <a href="javascript:;" class="bg-twitter"><i class="bx bxl-twitter"></i></a>
                          <a href="javascript:;" class="bg-google"><i class="bx bxl-google"></i></a>
                          <a href="javascript:;" class="bg-linkedin"><i class="bx bxl-linkedin"></i></a>
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

export default ErrorsComingSoon;