import React from 'react';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'

const FileManager = ({name, title}) => {
  return (
    <>
    <Breadcrumb name={name} title={title}/>
        <div class="row">
          <div class="col-12 col-xl-3"> 
            <div class="card">
              <div class="card-body border-bottom">
                <div class="d-grid"> <a href="javascript" class="btn btn-primary"><i class="bi bi-plus-lg"></i> Add File</a>
                </div>
              </div>
              <div class="fm-menu">
                <div class="list-group list-group-flush m-3">
                  <a href="javascript" class="list-group-item py-1"><i class='bx bx-folder me-2 text-primary'></i><span>All Files</span></a>
                  <a href="javascript" class="list-group-item py-1"><i class='bi bi-folder-fill me-2 text-danger'></i><span>My Devices</span></a>
                  <a href="javascript" class="list-group-item py-1"><i class='bi bi-hdd-fill me-2 text-success'></i><span>Recants</span></a>
                  <a href="javascript" class="list-group-item py-1"><i class='bi bi-compass-fill me-2 text-orange'></i><span>Important</span></a>
                  <a href="javascript" class="list-group-item py-1"><i class='bi bi-trash-fill me-2 text-purple'></i><span>Deleted Files</span></a>
                  <a href="javascript" class="list-group-item py-1"><i class='bi bi-file-earmark-break-fill me-2 text-info'></i><span>Documents</span></a>
                  <a href="javascript" class="list-group-item py-1"><i class='bi bi-file-earmark-image-fill me-2 text-warning'></i><span>Images</span></a>
                  <a href="javascript" class="list-group-item py-1"><i class='bi bi-camera-reels-fill me-2 text-primary'></i><span>Videos</span></a>
                  <a href="javascript" class="list-group-item py-1"><i class='bi bi-play-btn-fill me-2 text-bronze'></i><span>Audio</span></a>
                  <a href="javascript" class="list-group-item py-1"><i class='bi bi-file-earmark-zip-fill me-2 text-option'></i><span>Zip Files</span></a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="mb-0 text-primary font-weight-bold">45.5 GB <span class="float-end text-secondary">50 GB</span></h5>
                <p class="mb-0 mt-2"><span class="text-secondary">Used</span><span class="float-end text-primary">Upgrade</span>
                </p>
                <hr />
                <div class="mb-4">
                  <div class="d-flex align-items-center gap-2">
                    <div class="fs-6 text-primary"><i class="bi bi-collection-play-fill"></i></div>
                    <div>Media Files</div>
                    <div class="ms-auto">100 GB</div>
                  </div>
                  <div class="progress mt-2" style={{height:"4px"}}>
                    <div class="progress-bar bg-primary" role="progressbar" style={{width: "65%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div class="mb-4">
                  <div class="d-flex align-items-center gap-2">
                    <div class="fs-6 text-success"><i class="bi bi-images"></i></div>
                    <div>Images</div>
                    <div class="ms-auto">15 GB</div>
                  </div>
                  <div class="progress mt-2" style={{height: "4px"}}>
                    <div class="progress-bar bg-success" role="progressbar" style={{width: "45%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div class="mb-4">
                  <div class="d-flex align-items-center gap-2">
                    <div class="fs-6 text-warning"><i class="bi bi-file-earmark-bar-graph-fill"></i></div>
                    <div>Documents</div>
                    <div class="ms-auto">7 GB</div>
                  </div>
                  <div class="progress mt-2" style={{height: "4px"}}>
                    <div class="progress-bar bg-warning" role="progressbar" style={{width: "45%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div class="mb-4">
                  <div class="d-flex align-items-center gap-2">
                    <div class="fs-6 text-purple"><i class="bi bi-file-earmark-richtext-fill"></i></div>
                    <div>Other Files</div>
                    <div class="ms-auto">5 GB</div>
                  </div>
                  <div class="progress mt-2" style={{height: "4px"}}>
                    <div class="progress-bar bg-purple" role="progressbar" style={{width: "35%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div class="mb-0">
                  <div class="d-flex align-items-center gap-2">
                    <div class="fs-6 text-secondary"><i class="bi bi-file-post-fill"></i></div>
                    <div>Unknown Files</div>
                    <div class="ms-auto">8 GB</div>
                  </div>
                  <div class="progress mt-2" style={{height: "4px"}}>
                    <div class="progress-bar bg-secondary" role="progressbar" style={{width: "25%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="col-12 col-xl-9">
            <div class="card">
              <div class="card-body">
                <div class="ms-auto position-relative">
                  <div class="position-absolute top-50 translate-middle-y search-icon fs-5 px-3"><i class="bi bi-search"></i></div>
                  <input class="form-control form-control-lg ps-5" type="text" placeholder="Search the files" />
                </div>
                <div class="row mt-3">
                  <div class="col-12 col-lg-4">
                    <div class="card shadow-none border radius-15">
                      <div class="card-body">
                        <div class="d-flex align-items-center">
                          <div class="fm-icon-box radius-15 bg-light-primary text-primary"><i class='lni lni-google-drive'></i>
                          </div>
                          <div class="ms-auto font-24"><i class='bx bx-dots-horizontal-rounded'></i>
                          </div>
                        </div>
                        <h5 class="mt-3 mb-0 text-primary">Google Drive</h5>
                        <p class="mb-1 mt-4"><span>45.5 GB</span>  <span class="float-end">50 GB</span>
                        </p>
                        <div class="progress" style={{height: "5px"}}>
                          <div class="progress-bar bg-primary" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4">
                    <div class="card shadow-none border radius-15">
                      <div class="card-body">
                        <div class="d-flex align-items-center">
                          <div class="fm-icon-box radius-15 bg-light-danger text-danger"><i class='lni lni-dropbox-original'></i>
                          </div>
                          <div class="ms-auto font-24"><i class='bx bx-dots-horizontal-rounded'></i>
                          </div>
                        </div>
                        <h5 class="mt-3 mb-0 text-danger">Dropbox</h5>
                        <p class="mb-1 mt-4"><span>1,2 GB</span>  <span class="float-end">3 GB</span>
                        </p>
                        <div class="progress" style={{height: "5px"}}>
                          <div class="progress-bar bg-danger" role="progressbar" style={{width: "45%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4">
                    <div class="card shadow-none border radius-15">
                      <div class="card-body">
                        <div class="d-flex align-items-center">
                          <div class="fm-icon-box radius-15 bg-light-success text-success"><i class='bx bxs-door-open'></i>
                          </div>
                          <div class="ms-auto font-24"><i class='bx bx-dots-horizontal-rounded'></i>
                          </div>
                        </div>
                        <h5 class="mt-3 mb-0 text-success">OneDrive</h5>
                        <p class="mb-1 mt-4"><span>2,5 GB</span>  <span class="float-end">3 GB</span>
                        </p>
                        <div class="progress" style={{height: "5px"}}>
                          <div class="progress-bar bg-success" role="progressbar" style={{width: "65%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end row */}
                <h5>Folders</h5>
                <div class="row mt-3">
                  <div class="col-12 col-lg-4">
                    <div class="card shadow-none border radius-15">
                      <div class="card-body">
                        <div class="d-flex align-items-center">
                          <div class="font-30 text-primary"><i class='bx bxs-folder'></i>
                          </div>
                          <div class="user-groups ms-auto">
                            <img src="assets/images/avatars/avatar-1.png" width="35" height="35" class="rounded-circle" alt="" />
                            <img src="assets/images/avatars/avatar-2.png" width="35" height="35" class="rounded-circle" alt="" />
                          </div>
                          <div class="user-plus">+</div>
                        </div>
                        <h6 class="mb-0 text-primary">Analytics</h6>
                        <small>15 files</small>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4">
                    <div class="card shadow-none border radius-15">
                      <div class="card-body">
                        <div class="d-flex align-items-center">
                          <div class="font-30 text-primary"><i class='bx bxs-folder'></i>
                          </div>
                          <div class="user-groups ms-auto">
                            <img src="assets/images/avatars/avatar-4.png" width="35" height="35" class="rounded-circle" alt="" />
                          </div>
                        </div>
                        <h6 class="mb-0 text-primary">Assets</h6>
                        <small>345 files</small>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4">
                    <div class="card shadow-none border radius-15">
                      <div class="card-body">
                        <div class="d-flex align-items-center">
                          <div class="font-30 text-primary"><i class='bx bxs-folder'></i>
                          </div>
                          <div class="user-groups ms-auto">
                            <img src="assets/images/avatars/avatar-7.png" width="35" height="35" class="rounded-circle" alt="" />
                            <img src="assets/images/avatars/avatar-8.png" width="35" height="35" class="rounded-circle" alt="" />
                          </div>
                        </div>
                        <h6 class="mb-0 text-primary">Marketing</h6>
                        <small>143 files</small>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end row */}

              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div>
                    <h5 class="mb-0">Recent Files</h5>
                  </div>
                  <div class="ms-auto"><a href="javascript" class="btn btn-sm btn-outline-secondary">View all</a>
                  </div>
                </div>
                <div class="table-responsive mt-3">
                  <table class="table table-hover mb-0">
                    <thead class="table-light">
                      <tr>
                        <th>Name <i class='bx bx-up-arrow-alt ms-2'></i>
                        </th>
                        <th>Members</th>
                        <th>Last Modified</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div><i class='bx bxs-file-pdf me-2 font-24 text-danger'></i>
                            </div>
                            <div class="font-weight-bold text-danger">Competitor Analysis Template</div>
                          </div>
                        </td>
                        <td>Only you</td>
                        <td>Sep 3, 2019</td>
                        <td><i class='bx bx-dots-horizontal-rounded font-24'></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div><i class='bx bxs-file me-2 font-24 text-primary'></i>
                            </div>
                            <div class="font-weight-bold text-primary">How to Create a Case Study</div>
                          </div>
                        </td>
                        <td>3 members</td>
                        <td>Jun 12, 2019</td>
                        <td><i class='bx bx-dots-horizontal-rounded font-24'></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div><i class='bx bxs-file me-2 font-24 text-primary'></i>
                            </div>
                            <div class="font-weight-bold text-primary">Landing Page Structure</div>
                          </div>
                        </td>
                        <td>10 members</td>
                        <td>Jul 17, 2019</td>
                        <td><i class='bx bx-dots-horizontal-rounded font-24'></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div><i class='bx bxs-file-pdf me-2 font-24 text-danger'></i>
                            </div>
                            <div class="font-weight-bold text-danger">Meeting Report</div>
                          </div>
                        </td>
                        <td>5 members</td>
                        <td>Aug 28, 2019</td>
                        <td><i class='bx bx-dots-horizontal-rounded font-24'></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div><i class='bx bxs-file me-2 font-24 text-primary'></i>
                            </div>
                            <div class="font-weight-bold text-primary">Project Documents</div>
                          </div>
                        </td>
                        <td>Only you</td>
                        <td>Aug 17, 2019</td>
                        <td><i class='bx bx-dots-horizontal-rounded font-24'></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div><i class='bx bxs-file-doc me-2 font-24 text-success'></i>
                            </div>
                            <div class="font-weight-bold text-success">Review Checklist Template</div>
                          </div>
                        </td>
                        <td>7 members</td>
                        <td>Sep 8, 2019</td>
                        <td><i class='bx bx-dots-horizontal-rounded font-24'></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div><i class='bx bxs-file me-2 font-24 text-primary'></i>
                            </div>
                            <div class="font-weight-bold text-primary">How to Create a Case Study</div>
                          </div>
                        </td>
                        <td>3 members</td>
                        <td>Jun 12, 2019</td>
                        <td><i class='bx bx-dots-horizontal-rounded font-24'></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div><i class='bx bxs-file me-2 font-24 text-primary'></i>
                            </div>
                            <div class="font-weight-bold text-primary">Landing Page Structure</div>
                          </div>
                        </td>
                        <td>10 members</td>
                        <td>Jul 17, 2019</td>
                        <td><i class='bx bx-dots-horizontal-rounded font-24'></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div><i class='bx bxs-file-doc me-2 font-24 text-success'></i>
                            </div>
                            <div class="font-weight-bold text-success">Review Checklist Template</div>
                          </div>
                        </td>
                        <td>7 members</td>
                        <td>Sep 8, 2019</td>
                        <td><i class='bx bx-dots-horizontal-rounded font-24'></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default FileManager;