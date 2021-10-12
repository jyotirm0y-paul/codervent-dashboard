import React from 'react';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'

const ListGroups = ({name, title}) => {
  return (
    <>
    <Breadcrumb name={name} title={title} />
      <div class="row">
        <div class="col col-lg-9 mx-auto">
          <h6 class="mb-0 text-uppercase">Color List Group</h6>
          <hr />
          <div class="card bg-primary">
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item bg-transparent text-white"><i
                  class="bi bi-cloud-check-fill font-18 align-middle me-2"></i>Cras justo odio</li>
                <li class="list-group-item bg-transparent text-white"><i
                  class="bi bi-bell-fill font-18 align-middle me-2"></i>Dapibus ac facilisis in</li>
                <li class="list-group-item bg-transparent text-white"><i
                  class="bi bi-bookmark-check-fill font-18 align-middle me-2"></i>Morbi leo risus</li>
                <li class="list-group-item bg-transparent text-white"><i
                  class="bi bi-chat-right-text-fill font-18 align-middle me-2"></i>Porta ac consectetur ac</li>
                <li class="list-group-item bg-transparent text-white"><i
                  class="bi bi-collection-play-fill font-18 align-middle me-2"></i>Vestibulum at eros</li>
              </ul>
            </div>
          </div>
          <div class="card bg-danger">
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item bg-transparent text-white"><i
                  class="bi bi-cloud-check-fill font-18 align-middle me-2"></i>Cras justo odio</li>
                <li class="list-group-item bg-transparent text-white"><i
                  class="bi bi-bell-fill font-18 align-middle me-2"></i>Dapibus ac facilisis in</li>
                <li class="list-group-item bg-transparent text-white"><i
                  class="bi bi-bookmark-check-fill font-18 align-middle me-2"></i>Morbi leo risus</li>
                <li class="list-group-item bg-transparent text-white"><i
                  class="bi bi-chat-right-text-fill font-18 align-middle me-2"></i>Porta ac consectetur ac</li>
                <li class="list-group-item bg-transparent text-white"><i
                  class="bi bi-collection-play-fill font-18 align-middle me-2"></i>Vestibulum at eros</li>
              </ul>
            </div>
          </div>
          <div class="card bg-info">
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item bg-transparent text-white"><i
                  class="bi bi-cloud-check-fill font-18 align-middle me-2"></i>Cras justo odio</li>
                <li class="list-group-item bg-transparent text-white"><i
                  class="bi bi-bell-fill font-18 align-middle me-2"></i>Dapibus ac facilisis in</li>
                <li class="list-group-item bg-transparent text-white"><i
                  class="bi bi-bookmark-check-fill font-18 align-middle me-2"></i>Morbi leo risus</li>
                <li class="list-group-item bg-transparent text-white"><i
                  class="bi bi-chat-right-text-fill font-18 align-middle me-2"></i>Porta ac consectetur ac</li>
                <li class="list-group-item bg-transparent text-white"><i
                  class="bi bi-collection-play-fill font-18 align-middle me-2"></i>Vestibulum at eros</li>
              </ul>
            </div>
          </div>
          <div class="card bg-warning">
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item bg-transparent text-white"><i
                  class="bi bi-cloud-check-fill font-18 align-middle me-2"></i>Cras justo odio</li>
                <li class="list-group-item bg-transparent text-white"><i
                  class="bi bi-bell-fill font-18 align-middle me-2"></i>Dapibus ac facilisis in</li>
                <li class="list-group-item bg-transparent text-white"><i
                  class="bi bi-bookmark-check-fill font-18 align-middle me-2"></i>Morbi leo risus</li>
                <li class="list-group-item bg-transparent text-white"><i
                  class="bi bi-chat-right-text-fill font-18 align-middle me-2"></i>Porta ac consectetur ac</li>
                <li class="list-group-item bg-transparent text-white"><i
                  class="bi bi-collection-play-fill font-18 align-middle me-2"></i>Vestibulum at eros</li>
              </ul>
            </div>
          </div>
          <div class="card bg-purple">
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item bg-transparent text-white"><i
                  class="bi bi-cloud-check-fill font-18 align-middle me-2"></i>Cras justo odio</li>
                <li class="list-group-item bg-transparent text-white"><i
                  class="bi bi-bell-fill font-18 align-middle me-2"></i>Dapibus ac facilisis in</li>
                <li class="list-group-item bg-transparent text-white"><i
                  class="bi bi-bookmark-check-fill font-18 align-middle me-2"></i>Morbi leo risus</li>
                <li class="list-group-item bg-transparent text-white"><i
                  class="bi bi-chat-right-text-fill font-18 align-middle me-2"></i>Porta ac consectetur ac</li>
                <li class="list-group-item bg-transparent text-white"><i
                  class="bi bi-collection-play-fill font-18 align-middle me-2"></i>Vestibulum at eros</li>
              </ul>
            </div>
          </div>
          <h6 class="mb-0 text-uppercase">BASIC EXAMPLE</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
          </div>
          <h6 class="mb-0 text-uppercase">ACTIVE ITEMS</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item active" aria-current="true">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
          </div>
          <h6 class="mb-0 text-uppercase">List Group Flush</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
          </div>
          <h6 class="mb-0 text-uppercase">List Group With badges</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">Cras justo odio <span
                  class="badge bg-primary rounded-pill">14</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">Dapibus ac facilisis in
                  <span class="badge bg-success rounded-pill">2</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">Morbi leo risus <span
                  class="badge bg-danger rounded-pill">8</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">Porta ac consectetur ac
                  <span class="badge bg-orange rounded-pill">10</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">Vestibulum at eros <span
                  class="badge bg-purple rounded-pill">22</span>
                </li>
              </ul>
            </div>
          </div>
          <h6 class="mb-0 text-uppercase">List Group With badges</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <div class="list-group">
                <a href="javascript" class="list-group-item list-group-item-action active" aria-current="true">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1 text-white">List group item heading</h5>
                    <small>3 days ago</small>
                  </div>
                  <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                    blandit.</p> <small>Donec id elit non mi porta.</small>
                </a>
                <a href="javascript" class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-muted">3 days ago</small>
                  </div>
                  <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                    blandit.</p> <small class="text-muted">Donec id elit non mi porta.</small>
                </a>
                <a href="javascript" class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-muted">3 days ago</small>
                  </div>
                  <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                    blandit.</p> <small class="text-muted">Donec id elit non mi porta.</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListGroups;