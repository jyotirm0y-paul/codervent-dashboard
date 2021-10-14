import React from 'react';

const Cards = () => {
  return (
    <>
      <div class="card bg-transparent shadow-none">
        <div class="card-body">
          <h6 class="mb-0 text-uppercase">Card With Images</h6>
          <div class="my-3 border-top"></div>
          <div class="row row-cols-1 row-cols-lg-3 justify-content-center g-lg-5">
            <div class="col">
              <div class="card">
                <img src="../../assets/images/gallery/01.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                  <a href="javascript" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="../../assets/images/gallery/02.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                  <a href="javascript" class="btn btn-danger">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="w-100 border-top"></div>
            <div class="col">
              <div class="card">
                <img src="../../assets/images/gallery/03.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                  <a href="javascript" class="btn btn-success">Go somewhere</a>
                  <a href="javascript" class="btn btn-light">Cancel</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="../../assets/images/gallery/04.png" class="card-img-top" alt="..." />
                <div class="card-body text-center">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                  <a href="javascript" class="btn btn-warning">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="card bg-transparent shadow-none">
        <div class="card-body">
          <h6 class="mb-0 text-uppercase">Card With List Group</h6>
          <div class="my-3 border-top"></div>
          <div class="row row-cols-1 row-cols-lg-3 justify-content-center g-lg-5">
            <div class="col">
              <div class="card">
                <img src="../../assets/images/gallery/05.png" class="card-img-top" alt="..." />
                <div class="card-body border-bottom">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">An item</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body border-top">
                  <a href="javascript" class="card-link">Card link</a>
                  <a href="javascript" class="card-link">Another link</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="../../assets/images/gallery/06.png" class="card-img-top" alt="..." />
                <div class="card-body border-bottom">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">An item</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body border-top">
                  <a href="javascript" class="card-link">Card link</a>
                  <a href="javascript" class="card-link">Another link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card bg-transparent shadow-none">
        <div class="card-body">
          <h6 class="mb-0 text-uppercase">Horizontal Card</h6>
          <div class="my-3 border-top"></div>
          <div class="row row-cols-1 row-cols-lg-2 justify-content-center g-lg-5">
            <div class="col">
              <div class="card">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="../../assets/images/gallery/11.png" alt="..." class="card-img" />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="../../assets/images/gallery/12.png" alt="..." class="card-img" />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card bg-transparent shadow-none">
        <div class="card-body">
          <h6 class="mb-0 text-uppercase">Card With Group</h6>
          <div class="my-3 border-top"></div>
          <div class="card-group">
            <div class="card border-end">
              <img src="../../assets/images/gallery/07.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="javascript" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div class="card border-end">
              <img src="../../assets/images/gallery/08.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="javascript" class="btn btn-danger">Go somewhere</a>
              </div>
            </div>
            <div class="card border-end">
              <img src="../../assets/images/gallery/09.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="javascript" class="btn btn-success">Go somewhere</a>
              </div>
            </div>
            <div class="card">
              <img src="../../assets/images/gallery/10.png" class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="javascript" class="btn btn-warning">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="card bg-transparent shadow-none">
        <div class="card-body">
          <h6 class="mb-0 text-uppercase">CARD WITH TEXT</h6>
          <div class="my-3 border-top"></div>
          <div class="row row-cols-1 row-cols-lg-3 justify-content-center g-lg-5">
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <div>
                    <h5 class="card-title">Special title treatment</h5>
                  </div>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="javascript" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body text-center">
                  <div>
                    <h5 class="card-title">Special title treatment</h5>
                  </div>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="javascript" class="btn btn-danger">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body text-end">
                  <div>
                    <h5 class="card-title">Special title treatment</h5>
                  </div>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="javascript" class="btn btn-dark">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="w-100 border-top"></div>
            <div class="col">
              <div class="card bg-primary text-white">
                <div class="card-body">
                  <div>
                    <h5 class="card-title">Special title treatment</h5>
                  </div>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-danger text-white">
                <div class="card-body">
                  <div>
                    <h5 class="card-title">Special title treatment</h5>
                  </div>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-success text-white">
                <div class="card-body">
                  <div>
                    <h5 class="card-title">Special title treatment</h5>
                  </div>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-dark text-white">
                <div class="card-body">
                  <div>
                    <h5 class="card-title">Special title treatment</h5>
                  </div>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-warning text-dark">
                <div class="card-body">
                  <div>
                    <h5 class="card-title">Special title treatment</h5>
                  </div>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-info text-dark">
                <div class="card-body">
                  <div>
                    <h5 class="card-title">Special title treatment</h5>
                  </div>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-purple text-white">
                <div class="card-body">
                  <div>
                    <h5 class="card-title">Special title treatment</h5>
                  </div>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-orange text-white">
                <div class="card-body">
                  <div>
                    <h5 class="card-title">Special title treatment</h5>
                  </div>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-pink text-white">
                <div class="card-body">
                  <div>
                    <h5 class="card-title">Special title treatment</h5>
                  </div>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;