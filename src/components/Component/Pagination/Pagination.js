import React from 'react';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'

const Pagination = ({name, title}) => {
  return (
    <>
    <Breadcrumb name={name} title={title} />
      <div class="row">
        <div class="col col-lg-9 mx-auto">
          <div class="card radius-10">
            <div class="card-body">
              <div class="card-title">
                <h5 class="mb-0">Basic pagination</h5>
              </div>
              <hr />
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item"><a class="page-link" href="javascript">Previous</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript">1</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript">2</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript">3</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="card-body">
              <div class="card-title">
                <h5 class="mb-0">Round pagination</h5>
              </div>
              <hr />
              <nav aria-label="Page navigation example">
                <ul class="pagination round-pagination">
                  <li class="page-item"><a class="page-link" href="javascript">Previous</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript">1</a>
                  </li>
                  <li class="page-item active"><a class="page-link" href="javascript">2</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript">3</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript">Next</a>
                  </li>
                </ul>
              </nav>
              <nav aria-label="Page navigation">
                <ul class="pagination pagination-lg round-pagination">
                  <li class="page-item"><a class="page-link" href="javascript">Previous</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript">1</a>
                  </li>
                  <li class="page-item active"><a class="page-link" href="javascript">2</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript">3</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="card-body">
              <div class="card-title">
                <h5 class="mb-0">Working with icons</h5>
              </div>
              <hr />
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="javascript" aria-label="Previous">	<span aria-hidden="true">«</span>
                    </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript">1</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript">2</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript">3</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="javascript" aria-label="Next">	<span aria-hidden="true">»</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="card-body">
              <div class="card-title">
                <h5 class="mb-0">Disabled and active states</h5>
              </div>
              <hr />
              <nav aria-label="...">
                <ul class="pagination">
                  <li class="page-item disabled"><a class="page-link" href="javascript" tabindex="-1" aria-disabled="true">Previous</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript">1</a>
                  </li>
                  <li class="page-item active" aria-current="page"><a class="page-link" href="javascript">2 <span class="visually-hidden">(current)</span></a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript">3</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="card-body">
              <div class="card-title">
                <h5 class="mb-0">Sizing</h5>
              </div>
              <hr />
              <nav aria-label="...">
                <ul class="pagination pagination-lg">
                  <li class="page-item disabled"><a class="page-link" href="javascript" tabindex="-1" aria-disabled="true">Previous</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript">1</a>
                  </li>
                  <li class="page-item active" aria-current="page"><a class="page-link" href="javascript">2 <span class="visually-hidden">(current)</span></a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript">3</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript">Next</a>
                  </li>
                </ul>
              </nav>
              <nav aria-label="...">
                <ul class="pagination pagination-sm">
                  <li class="page-item disabled"><a class="page-link" href="javascript" tabindex="-1" aria-disabled="true">Previous</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript">1</a>
                  </li>
                  <li class="page-item active" aria-current="page"><a class="page-link" href="javascript">2 <span class="visually-hidden">(current)</span></a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript">3</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="javascript">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;