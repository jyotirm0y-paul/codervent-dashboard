import React from 'react';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'

const Notifications = ({name, title}) => {
  return (
    <>
    <Breadcrumb name={name} title={title} />
      <div class="row">
        <div class="col col-lg-10 mx-auto">

          <h6 class="mb-0 text-uppercase">Default Notifications</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <div class="row row-cols-auto g-3">
                <div class="col">
                  <button type="button" class="btn btn-dark px-5" onclick="default_noti()">Default</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-info px-5" onclick="info_noti()"><i class="bx bx-info-circle mr-1"></i> Info</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-warning px-5" onclick="warning_noti()"><i class="bx bx-error mr-1"></i> Warning</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-danger px-5" onclick="error_noti()"><i class="bx bx-x-circle mr-1"></i> Danger</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-success px-5" onclick="success_noti()"><i class="bx bx-check-circle mr-1"></i> Success</button>
                </div>
              </div>
            </div>
          </div>


          <h6 class="mb-0 text-uppercase">Default Notifications</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <div class="row row-cols-auto g-3">
                <div class="col">
                  <button type="button" class="btn btn-dark px-5" onclick="round_default_noti()">Default</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-info px-5" onclick="round_info_noti()"><i class="bx bx-info-circle mr-1"></i>Info</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-warning px-5" onclick="round_warning_noti()"><i class="bx bx-error mr-1"></i>Warning</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-danger px-5" onclick="round_error_noti()"><i class="bx bx-x-circle mr-1"></i> Danger</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-success px-5" onclick="round_success_noti()"><i class="bx bx-check-circle mr-1"></i>Success</button>
                </div>
              </div>
            </div>
          </div>

          <h6 class="mb-0 text-uppercase">Rounded Corners Notifications</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <div class="row row-cols-auto g-3">
                <div class="col">
                  <button type="button" class="btn btn-dark px-5" onclick="img_default_noti()">Default</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-info px-5" onclick="img_info_noti()"><i class="bx bx-info-circle"></i>Info</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-warning px-5" onclick="img_warning_noti()"><i class="bx bx-error"></i>Warning</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-danger px-5" onclick="img_error_noti()"><i class="bx bx-x-circle"></i> Danger</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-success px-5" onclick="img_success_noti()"><i class="bx bx-check-circle"></i>Success</button>
                </div>
              </div>
            </div>
          </div>


          <h6 class="mb-0 text-uppercase">Notifications With image</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <div class="row row-cols-auto g-3">
                <div class="col">
                  <button type="button" class="btn btn-dark px-5" onclick="img_default_noti()">Default</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-info px-5" onclick="img_info_noti()"><i class="bx bx-info-circle"></i>Info</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-warning px-5" onclick="img_warning_noti()"><i class="bx bx-error"></i>Warning</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-danger px-5" onclick="img_error_noti()"><i class="bx bx-x-circle"></i> Danger</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-success px-5" onclick="img_success_noti()"><i class="bx bx-check-circle"></i>Success</button>
                </div>
              </div>
            </div>
          </div>

          <h6 class="mb-0 text-uppercase">Alternative Position</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <div class="row row-cols-auto g-3">
                <div class="col">
                  <button type="button" class="btn btn-dark px-5" onclick="pos1_default_noti()">Default</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-info px-5" onclick="pos2_info_noti()"><i class="bx bx-info-circle mr-1"></i>Info</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-warning px-5" onclick="pos3_warning_noti()"><i class="bx bx-error"></i>Warning</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-danger px-5" onclick="pos4_error_noti()"><i class="bx bx-x-circle"></i> Danger</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-success px-5" onclick="pos5_success_noti()"><i class="bx bx-check-circle"></i>Success</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;