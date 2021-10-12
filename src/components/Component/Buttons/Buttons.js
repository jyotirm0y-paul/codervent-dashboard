import React from 'react';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'

const Buttons = ({name, title}) => {
  return (
    <>
    <Breadcrumb name={name} title={title} />
      <div class="row">
        <div class="col col-lg-9 mx-auto">
          <div class="card radius-10">
            <div class="card-body">
              <h5 class="card-title">Basic Examples</h5>
              <div class="my-3 border-top"></div>
              <div class="row row-cols-auto g-3">
                <div class="col">
                  <button type="button" class="btn btn-primary px-5">Primary</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-danger px-5">Danger</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-success px-5">Success</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-info px-5">Info</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-warning px-5">Warning</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-dark px-5">Dark</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-secondary px-5">Secondary</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-light px-5">Light</button>
                </div>
              </div>
            </div>
          </div>
          <div class="card radius-10">
            <div class="card-body">
              <h5 class="card-title">Outline Examples</h5>
              <div class="my-3 border-top"></div>
              <div class="row row-cols-auto g-3">
                <div class="col">
                  <button type="button" class="btn btn-outline-primary px-5">Primary</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-outline-danger px-5">Danger</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-outline-success px-5">Success</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-outline-info px-5">Info</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-outline-warning px-5">Warning</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-outline-dark px-5">Dark</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-outline-secondary px-5">Secondary</button>
                </div>
              </div>
            </div>
          </div>
          <div class="card radius-10">
            <div class="card-body">
              <h5 class="card-title">Rounded Buttons</h5>
              <div class="my-3 border-top"></div>
              <div class="row row-cols-auto g-3">
                <div class="col">
                  <button type="button" class="btn btn-primary px-5 radius-30">Primary</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-danger px-5 radius-30">Danger</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-success px-5 radius-30">Success</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-info px-5 radius-30">Info</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-warning px-5 radius-30">Warning</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-dark px-5 radius-30">Dark</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-secondary px-5 radius-30">Secondary</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-light px-5 radius-30">Light</button>
                </div>
              </div>
            </div>
          </div>
          <div class="card radius-10">
            <div class="card-body">
              <h5 class="card-title">Rounded Outline Buttons</h5>
              <div class="my-3 border-top"></div>
              <div class="row row-cols-auto g-3">
                <div class="col">
                  <button type="button" class="btn btn-outline-primary px-5 radius-30">Primary</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-outline-danger px-5 radius-30">Danger</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-outline-success px-5 radius-30">Success</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-outline-info px-5 radius-30">Info</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-outline-warning px-5 radius-30">Warning</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-outline-dark px-5 radius-30">Dark</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-outline-secondary px-5 radius-30">Secondary</button>
                </div>
              </div>
            </div>
          </div>
          <div class="card radius-10">
            <div class="card-body">
              <h5 class="card-title">Square Buttons</h5>
              <div class="my-3 border-top"></div>
              <div class="row row-cols-auto g-3">
                <div class="col">
                  <button type="button" class="btn btn-primary px-5 rounded-0">Primary</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-danger px-5 rounded-0">Danger</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-success px-5 rounded-0">Success</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-info px-5 rounded-0">Info</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-warning px-5 rounded-0">Warning</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-dark px-5 rounded-0">Dark</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-secondary px-5 rounded-0">Secondary</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-light px-5 rounded-0">Light</button>
                </div>
              </div>
            </div>
          </div>
          <div class="card radius-10">
            <div class="card-body">
              <h5 class="card-title">Square Outline Buttons</h5>
              <div class="my-3 border-top"></div>
              <div class="row row-cols-auto g-3">
                <div class="col">
                  <button type="button" class="btn btn-outline-primary px-5 rounded-0">Primary</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-outline-danger px-5 rounded-0">Danger</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-outline-success px-5 rounded-0">Success</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-outline-info px-5 rounded-0">Info</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-outline-warning px-5 rounded-0">Warning</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-outline-dark px-5 rounded-0">Dark</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-outline-secondary px-5 rounded-0">Secondary</button>
                </div>
              </div>
            </div>
          </div>
          <div class="card radius-10">
            <div class="card-body">
              <h5 class="card-title">Button With Icons</h5>
              <div class="my-3 border-top"></div>
              <div class="row row-cols-auto g-3">
                <div class="col">
                  <button type="button" class="btn btn-primary px-5"><i class="bi bi-person-circle"></i>Person</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-danger px-5"><i class="bi bi-bookmark-check-fill"></i>Bookmark</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-success px-5"><i class="bi bi-house-fill"></i>Home</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-info px-5"><i class="bi bi-cloud-arrow-down-fill"></i>Downloads</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-warning px-5"><i class="bi bi-heart-fill"></i>Love</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-dark px-5"><i class="bi bi-upload"></i>Upload</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-secondary px-5"><i class="bi bi-chat-left-text-fill"></i>Comments</button>
                </div>
                <div class="w-100 border-top"></div>

                <div class="col">
                  <button type="button" class="btn btn-lg btn-primary px-5"><i class="bi bi-bag-check-fill"></i>Checkout</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-lg btn-danger px-5"><i class="bi bi-bookmarks-fill"></i>Bookmark</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-lg btn-success px-5"><i class="bi bi-house-door-fill"></i>Home</button>
                </div>
                <div class="w-100 border-top"></div>

                <div class="col">
                  <button type="button" class="btn btn-sm btn-primary px-5"><i class="bi bi-person-fill"></i>Person</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-sm btn-danger px-5"><i class="bi bi-star-fill"></i>Star</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-sm btn-success px-5"><i class="bi bi-skip-start-btn-fill"></i>Music</button>
                </div>
              </div>
            </div>
          </div>
          <div class="card radius-10">
            <div class="card-body">
              <h5 class="card-title">Outline Button With Icons</h5>
              <div class="my-3 border-top"></div>
              <div class="row row-cols-auto g-3">
                <div class="col">
                  <button type="button" class="btn btn-outline-primary px-5"><i class="bi bi-person-circle"></i>Person</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-outline-danger px-5"><i class="bi bi-bookmark-check-fill"></i>Bookmark</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-outline-success px-5"><i class="bi bi-house-fill"></i>Home</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-outline-info px-5"><i class="bi bi-cloud-arrow-down-fill"></i>Downloads</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-outline-warning px-5"><i class="bi bi-heart-fill"></i>Love</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-outline-dark px-5"><i class="bi bi-upload"></i>Upload</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-outline-secondary px-5"><i class="bi bi-chat-left-text-fill"></i>Comments</button>
                </div>
                <div class="w-100 border-top"></div>

                <div class="col">
                  <button type="button" class="btn btn-lg btn-outline-primary px-5"><i class="bi bi-bag-check-fill"></i>Checkout</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-lg btn-outline-danger px-5"><i class="bi bi-bookmarks-fill"></i>Bookmark</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-lg btn-outline-success px-5"><i class="bi bi-house-door-fill"></i>Home</button>
                </div>
                <div class="w-100 border-top"></div>

                <div class="col">
                  <button type="button" class="btn btn-sm btn-outline-primary px-5"><i class="bi bi-person-fill"></i>Person</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-sm btn-outline-danger px-5"><i class="bi bi-star-fill"></i>Star</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-sm btn-outline-success px-5"><i class="bi bi-skip-start-btn-fill"></i>Music</button>
                </div>
              </div>
            </div>
          </div>

          <div class="card radius-10">
            <div class="card-body">
              <h5 class="card-title">Group Buttons</h5>
              <div class="my-3 border-top"></div>
              <div class="row row-cols-auto g-3">
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-primary">Button</button>
                    <button type="button" class="btn btn-primary">Button</button>
                    <button type="button" class="btn btn-primary">Button</button>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-danger">Button</button>
                    <button type="button" class="btn btn-danger">Button</button>
                    <button type="button" class="btn btn-danger">Button</button>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-success">Button</button>
                    <button type="button" class="btn btn-success">Button</button>
                    <button type="button" class="btn btn-success">Button</button>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-dark">Button</button>
                    <button type="button" class="btn btn-dark">Button</button>
                    <button type="button" class="btn btn-dark">Button</button>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-warning">Button</button>
                    <button type="button" class="btn btn-warning">Button</button>
                    <button type="button" class="btn btn-warning">Button</button>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-info">Button</button>
                    <button type="button" class="btn btn-info">Button</button>
                    <button type="button" class="btn btn-info">Button</button>
                  </div>
                </div>

                <div class="w-100 border-top"></div>

                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-primary"><i class="bi bi-bookmark-heart-fill"></i></button>
                    <button type="button" class="btn btn-primary"><i class="bi bi-suit-heart-fill"></i></button>
                    <button type="button" class="btn btn-primary"><i class="bi bi-emoji-heart-eyes-fill"></i></button>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-danger"><i class="bi bi-alarm"></i></button>
                    <button type="button" class="btn btn-danger"><i class="bi bi-archive"></i></button>
                    <button type="button" class="btn btn-danger"><i class="bi bi-badge-3d"></i></button>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-success"><i class="bi bi-arrow-left-square"></i></button>
                    <button type="button" class="btn btn-success"><i class="bi bi-arrow-right-square"></i></button>
                    <button type="button" class="btn btn-success"><i class="bi bi-arrow-up-square"></i></button>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-dark"><i class="bi bi-hand-index-thumb-fill"></i></button>
                    <button type="button" class="btn btn-dark"><i class="bi bi-hand-thumbs-down-fill"></i></button>
                    <button type="button" class="btn btn-dark"><i class="bi bi-pin-fill"></i></button>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-warning"><i class="bi bi-brightness-high-fill"></i></button>
                    <button type="button" class="btn btn-warning"><i class="bi bi-broadcast"></i></button>
                    <button type="button" class="btn btn-warning"><i class="bi bi-cloud-fog-fill"></i></button>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-info"><i class="bi bi-hurricane"></i></button>
                    <button type="button" class="btn btn-info"><i class="bi bi-moon-stars-fill"></i></button>
                    <button type="button" class="btn btn-info"><i class="bi bi-lightning-charge-fill"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="card radius-10">
            <div class="card-body">
              <h5 class="card-title">Outline Group Buttons</h5>
              <div class="my-3 border-top"></div>
              <div class="row row-cols-auto g-3">
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-outline-primary">Button</button>
                    <button type="button" class="btn btn-outline-primary">Button</button>
                    <button type="button" class="btn btn-outline-primary">Button</button>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-outline-danger">Button</button>
                    <button type="button" class="btn btn-outline-danger">Button</button>
                    <button type="button" class="btn btn-outline-danger">Button</button>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-outline-success">Button</button>
                    <button type="button" class="btn btn-outline-success">Button</button>
                    <button type="button" class="btn btn-outline-success">Button</button>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-outline-dark">Button</button>
                    <button type="button" class="btn btn-outline-dark">Button</button>
                    <button type="button" class="btn btn-outline-dark">Button</button>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-outline-warning">Button</button>
                    <button type="button" class="btn btn-outline-warning">Button</button>
                    <button type="button" class="btn btn-outline-warning">Button</button>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-outline-info">Button</button>
                    <button type="button" class="btn btn-outline-info">Button</button>
                    <button type="button" class="btn btn-outline-info">Button</button>
                  </div>
                </div>

                <div class="w-100 border-top"></div>

                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-outline-primary"><i class="bi bi-bookmark-heart-fill"></i></button>
                    <button type="button" class="btn btn-outline-primary"><i class="bi bi-suit-heart-fill"></i></button>
                    <button type="button" class="btn btn-outline-primary"><i class="bi bi-emoji-heart-eyes-fill"></i></button>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-outline-danger"><i class="bi bi-alarm"></i></button>
                    <button type="button" class="btn btn-outline-danger"><i class="bi bi-archive"></i></button>
                    <button type="button" class="btn btn-outline-danger"><i class="bi bi-badge-3d"></i></button>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-outline-success"><i class="bi bi-arrow-left-square"></i></button>
                    <button type="button" class="btn btn-outline-success"><i class="bi bi-arrow-right-square"></i></button>
                    <button type="button" class="btn btn-outline-success"><i class="bi bi-arrow-up-square"></i></button>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-outline-dark"><i class="bi bi-hand-index-thumb-fill"></i></button>
                    <button type="button" class="btn btn-outline-dark"><i class="bi bi-hand-thumbs-down-fill"></i></button>
                    <button type="button" class="btn btn-outline-dark"><i class="bi bi-pin-fill"></i></button>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-outline-warning"><i class="bi bi-brightness-high-fill"></i></button>
                    <button type="button" class="btn btn-outline-warning"><i class="bi bi-broadcast"></i></button>
                    <button type="button" class="btn btn-outline-warning"><i class="bi bi-cloud-fog-fill"></i></button>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-outline-info"><i class="bi bi-hurricane"></i></button>
                    <button type="button" class="btn btn-outline-info"><i class="bi bi-moon-stars-fill"></i></button>
                    <button type="button" class="btn btn-outline-info"><i class="bi bi-lightning-charge-fill"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card radius-10">
            <div class="card-body">
              <div>
                <h5 class="card-title">Dropdown Buttons</h5>
              </div>
              <hr />
              <div class="row row-cols-auto g-3">
                <div class="col">
                  <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Primary</button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript">Action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Another action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Something else here</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col">
                  <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Secondary</button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript">Action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Another action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Something else here</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col">
                  <div class="dropdown">
                    <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Success</button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript">Action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Another action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Something else here</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col">
                  <div class="dropdown">
                    <button class="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Info</button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript">Action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Another action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Something else here</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col">
                  <div class="dropdown">
                    <button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Warning</button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript">Action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Another action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Something else here</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col">
                  <div class="dropdown">
                    <button class="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Danger</button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript">Action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Another action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Something else here</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="w-100 border-top"></div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-primary">Primary</button>
                    <button type="button" class="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">	<span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript">Action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Another action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Something else here</a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li><a class="dropdown-item" href="javascript">Separated link</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-secondary">Secondary</button>
                    <button type="button" class="btn btn-secondary split-bg-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">	<span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript">Action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Another action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Something else here</a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li><a class="dropdown-item" href="javascript">Separated link</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-success">Success</button>
                    <button type="button" class="btn btn-success split-bg-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">	<span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript">Action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Another action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Something else here</a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li><a class="dropdown-item" href="javascript">Separated link</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-info">Info</button>
                    <button type="button" class="btn btn-info split-bg-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">	<span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript">Action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Another action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Something else here</a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li><a class="dropdown-item" href="javascript">Separated link</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-warning">Warning</button>
                    <button type="button" class="btn btn-warning split-bg-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">	<span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript">Action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Another action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Something else here</a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li><a class="dropdown-item" href="javascript">Separated link</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-danger">Danger</button>
                    <button type="button" class="btn btn-danger split-bg-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">	<span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript">Action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Another action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Something else here</a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li><a class="dropdown-item" href="javascript">Separated link</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="w-100 border-top"></div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-outline-primary">Dropdown</button>
                    <button type="button" class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">	<span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript">Action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Another action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Something else here</a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li><a class="dropdown-item" href="javascript">Separated link</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-outline-secondary">Dropdown</button>
                    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">	<span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript">Action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Another action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Something else here</a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li><a class="dropdown-item" href="javascript">Separated link</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-outline-success">Dropdown</button>
                    <button type="button" class="btn btn-outline-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">	<span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript">Action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Another action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Something else here</a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li><a class="dropdown-item" href="javascript">Separated link</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-outline-info">Dropdown</button>
                    <button type="button" class="btn btn-outline-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">	<span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript">Action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Another action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Something else here</a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li><a class="dropdown-item" href="javascript">Separated link</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-outline-warning">Dropdown</button>
                    <button type="button" class="btn btn-outline-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">	<span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript">Action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Another action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Something else here</a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li><a class="dropdown-item" href="javascript">Separated link</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col">
                  <div class="btn-group">
                    <button type="button" class="btn btn-outline-danger">Dropdown</button>
                    <button type="button" class="btn btn-outline-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">	<span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript">Action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Another action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Something else here</a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li><a class="dropdown-item" href="javascript">Separated link</a>
                      </li>
                    </ul>
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

export default Buttons;