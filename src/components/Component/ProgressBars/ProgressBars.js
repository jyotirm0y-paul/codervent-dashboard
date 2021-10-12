import React from 'react';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'

const ProgressBars = ({name, title}) => {
  return (
    <>
    <Breadcrumb name={name} title={title} />
      <div class="row">
        <div class="col col-lg-9 mx-auto">
          <div class="card radius-10">
            <div class="card-body">
              <div class="card-title">
                <h5 class="mb-0">Basic progress bars</h5>
              </div>
              <hr />
              <div class="progress mb-4" style={{height: "7px"}}>
                <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div class="progress mb-4" style={{height: "7px"}}>
                <div class="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div class="progress mb-4" style={{height: "7px"}}>
                <div class="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div class="progress mb-4" style={{height: "7px"}}>
                <div class="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div class="progress" style={{height: "7px"}}>
                <div class="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="card-body">
              <div class="card-title">
                <h5 class="mb-0">Labels</h5>
              </div>
              <hr />
              <div class="progress">
                <div class="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
              </div>
            </div>
            <div class="card-body">
              <div class="card-title">
                <h5 class="mb-0">Backgrounds</h5>
              </div>
              <hr />
              <div class="progress mb-3" style={{height: "7px"}}>
                <div class="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div class="progress mb-3" style={{height: "7px"}}>
                <div class="progress-bar bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div class="progress mb-3" style={{height: "7px"}}>
                <div class="progress-bar bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div class="progress mb-3" style={{height: "7px"}}>
                <div class="progress-bar bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="card-body">
              <div class="card-title">
                <h5 class="mb-0">Multiple bars</h5>
              </div>
              <hr />
              <div class="progress" style={{height: "7px"}}>
                <div class="progress-bar" role="progressbar" style={{width: "15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar bg-success" role="progressbar" style={{width: "30%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar bg-info" role="progressbar" style={{width: "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="card-body">
              <div class="card-title">
                <h5 class="mb-0">Striped</h5>
              </div>
              <hr />
              <div class="progress mb-3" style={{height: "7px"}}>
                <div class="progress-bar progress-bar-striped" role="progressbar" style={{width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div class="progress mb-3" style={{height: "7px"}}>
                <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div class="progress mb-3" style={{height: "7px"}}>
                <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div class="progress mb-3" style={{height: "7px"}}>
                <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div class="progress" style={{height: "7px"}}>
                <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="card-body">
              <div class="card-title">
                <h5 class="mb-0">Animated stripes</h5>
              </div>
              <hr />
              <div class="progress" style={{height: "7px"}}>
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBars;