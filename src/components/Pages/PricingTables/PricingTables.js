import React from 'react';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'

const PricingTables = ({ name, title }) => {
  return (
    <>
      <Breadcrumb name={name} title={title} />
      <h6 class="mb-0 text-uppercase">Basic Pricing Table</h6>
      <hr />
      <div class="row row-cols-1 row-cols-lg-4 gx-0">
        <div class="col">
          <div class="card rounded-0">
            <div class="card-body">
              <div class="text-center">
                <h5 class="mb-4">Basic</h5>
                <h1 class="card-price"><span class="fs-6 text-secondary">$</span>49<span class="fs-6 text-secondary">/mo</span></h1>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><i class="bi bi-check-circle me-2"></i>3 Months Support</li>
                <li class="list-group-item"><i class="bi bi-check-circle me-2"></i>Demo Installation</li>
                <li class="list-group-item"><i class="bi bi-check-circle me-2"></i>Automatic Updates</li>
                <li class="list-group-item"><i class="bi bi-check-circle me-2"></i>Theme Documentation</li>
                <li class="list-group-item"><i class="bi bi-check-circle me-2"></i>Free Subdomain</li>
                <li class="list-group-item"><i class="bi bi-check-circle me-2"></i>Community Access</li>
                <li class="list-group-item"><i class="bi bi-check-circle me-2"></i>Dedicated Phone Support</li>
              </ul>
              <div class="text-center mt-3 d-grid d-lg-block">
                <a href="javascript" class="btn btn-outline-primary rounded-0 px-4 shadow">BUY NOW</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card rounded-0">
            <div class="card-body">
              <div class="text-center">
                <h5 class="mb-4">Small Business</h5>
                <h1 class="card-price"><span class="fs-6 text-secondary">$</span>299<span class="fs-6 text-secondary">/mo</span></h1>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><i class="bi bi-check-circle me-2"></i>3 Months Support</li>
                <li class="list-group-item"><i class="bi bi-check-circle me-2"></i>Demo Installation</li>
                <li class="list-group-item"><i class="bi bi-check-circle me-2"></i>Automatic Updates</li>
                <li class="list-group-item"><i class="bi bi-check-circle me-2"></i>Theme Documentation</li>
                <li class="list-group-item"><i class="bi bi-check-circle me-2"></i>Free Subdomain</li>
                <li class="list-group-item"><i class="bi bi-check-circle me-2"></i>Community Access</li>
                <li class="list-group-item"><i class="bi bi-check-circle me-2"></i>Dedicated Phone Support</li>
              </ul>
              <div class="text-center mt-3 d-grid d-lg-block">
                <a href="javascript" class="btn btn-outline-primary rounded-0 px-4 shadow">BUY NOW</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card rounded-0 border border-3 border-primary">
            <div class="card-body">
              <div class="text-center">
                <h5 class="mb-4">Professional</h5>
                <h1 class="card-price"><span class="fs-6 text-secondary">$</span>399<span class="fs-6 text-secondary">/mo</span></h1>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><i class="bi bi-check-circle me-2"></i>3 Months Support</li>
                <li class="list-group-item"><i class="bi bi-check-circle me-2"></i>Demo Installation</li>
                <li class="list-group-item"><i class="bi bi-check-circle me-2"></i>Automatic Updates</li>
                <li class="list-group-item"><i class="bi bi-check-circle me-2"></i>Theme Documentation</li>
                <li class="list-group-item"><i class="bi bi-check-circle me-2"></i>Free Subdomain</li>
                <li class="list-group-item"><i class="bi bi-check-circle me-2"></i>Community Access</li>
                <li class="list-group-item"><i class="bi bi-check-circle me-2"></i>Dedicated Phone Support</li>
              </ul>
              <div class="text-center mt-3 d-grid d-lg-block">
                <a href="javascript" class="btn btn-primary rounded-0 px-4 shadow">BUY NOW</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card rounded-0">
            <div class="card-body">
              <div class="text-center">
                <h5 class="mb-4">Enterprise</h5>
                <h1 class="card-price"><span class="fs-6 text-secondary">$</span>499<span class="fs-6 text-secondary">/mo</span></h1>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><i class="bi bi-check-circle me-2"></i>3 Months Support</li>
                <li class="list-group-item"><i class="bi bi-check-circle me-2"></i>Demo Installation</li>
                <li class="list-group-item"><i class="bi bi-check-circle me-2"></i>Automatic Updates</li>
                <li class="list-group-item"><i class="bi bi-check-circle me-2"></i>Theme Documentation</li>
                <li class="list-group-item"><i class="bi bi-check-circle me-2"></i>Free Subdomain</li>
                <li class="list-group-item"><i class="bi bi-check-circle me-2"></i>Community Access</li>
                <li class="list-group-item"><i class="bi bi-check-circle me-2"></i>Dedicated Phone Support</li>
              </ul>
              <div class="text-center mt-3 d-grid d-lg-block">
                <a href="javascript" class="btn btn-outline-primary rounded-0 px-4 shadow">BUY NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <h6 class="mb-0 text-uppercase">Color Pricing Table</h6>
      <hr />
      <div class="row row-cols-1 row-cols-lg-4 gx-0">
        <div class="col">
          <div class="card rounded-0 bg-purple">
            <div class="card-body">
              <div class="text-center text-white">
                <h5 class="mb-4 text-white">Basic</h5>
                <h1 class="card-price text-white"><span class="fs-6">$</span>49<span class="fs-6">/mo</span></h1>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item text-white bg-transparent border-light-1"><i class="bi bi-check-circle me-2"></i>3 Months Support</li>
                <li class="list-group-item text-white bg-transparent border-light-1"><i class="bi bi-check-circle me-2"></i>Demo Installation</li>
                <li class="list-group-item text-white bg-transparent border-light-1"><i class="bi bi-check-circle me-2"></i>Automatic Updates</li>
                <li class="list-group-item text-white bg-transparent border-light-1"><i class="bi bi-check-circle me-2"></i>Theme Documentation</li>
                <li class="list-group-item text-white bg-transparent border-light-1"><i class="bi bi-check-circle me-2"></i>Free Subdomain</li>
                <li class="list-group-item text-white bg-transparent border-light-1"><i class="bi bi-check-circle me-2"></i>Community Access</li>
                <li class="list-group-item text-white bg-transparent border-light-1"><i class="bi bi-check-circle me-2"></i>Dedicated Phone Support</li>
              </ul>
              <div class="text-center mt-3 d-grid d-lg-block">
                <a href="javascript" class="btn btn-outline-light rounded-0 px-4 shadow">BUY NOW</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card rounded-0 bg-success">
            <div class="card-body">
              <div class="text-center text-white">
                <h5 class="mb-4 text-white">Small Business</h5>
                <h1 class="card-price text-white"><span class="fs-6">$</span>299<span class="fs-6">/mo</span></h1>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item text-white bg-transparent border-light-1"><i class="bi bi-check-circle me-2"></i>3 Months Support</li>
                <li class="list-group-item text-white bg-transparent border-light-1"><i class="bi bi-check-circle me-2"></i>Demo Installation</li>
                <li class="list-group-item text-white bg-transparent border-light-1"><i class="bi bi-check-circle me-2"></i>Automatic Updates</li>
                <li class="list-group-item text-white bg-transparent border-light-1"><i class="bi bi-check-circle me-2"></i>Theme Documentation</li>
                <li class="list-group-item text-white bg-transparent border-light-1"><i class="bi bi-check-circle me-2"></i>Free Subdomain</li>
                <li class="list-group-item text-white bg-transparent border-light-1"><i class="bi bi-check-circle me-2"></i>Community Access</li>
                <li class="list-group-item text-white bg-transparent border-light-1"><i class="bi bi-check-circle me-2"></i>Dedicated Phone Support</li>
              </ul>
              <div class="text-center mt-3 d-grid d-lg-block">
                <a href="javascript" class="btn btn-outline-light rounded-0 px-4 shadow">BUY NOW</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card rounded-0 bg-primary">
            <div class="card-body">
              <div class="text-center text-white">
                <h5 class="mb-4 text-white">Professional</h5>
                <h1 class="card-price text-white"><span class="fs-6">$</span>399<span class="fs-6">/mo</span></h1>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item text-white bg-transparent border-light-1"><i class="bi bi-check-circle me-2"></i>3 Months Support</li>
                <li class="list-group-item text-white bg-transparent border-light-1"><i class="bi bi-check-circle me-2"></i>Demo Installation</li>
                <li class="list-group-item text-white bg-transparent border-light-1"><i class="bi bi-check-circle me-2"></i>Automatic Updates</li>
                <li class="list-group-item text-white bg-transparent border-light-1"><i class="bi bi-check-circle me-2"></i>Theme Documentation</li>
                <li class="list-group-item text-white bg-transparent border-light-1"><i class="bi bi-check-circle me-2"></i>Free Subdomain</li>
                <li class="list-group-item text-white bg-transparent border-light-1"><i class="bi bi-check-circle me-2"></i>Community Access</li>
                <li class="list-group-item text-white bg-transparent border-light-1"><i class="bi bi-check-circle me-2"></i>Dedicated Phone Support</li>
              </ul>
              <div class="text-center mt-3 d-grid d-lg-block">
                <a href="javascript" class="btn btn-light rounded-0 px-4 shadow">BUY NOW</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card rounded-0 bg-danger">
            <div class="card-body">
              <div class="text-center text-white">
                <h5 class="mb-4 text-white">Enterprise</h5>
                <h1 class="card-price text-white"><span class="fs-6">$</span>499<span class="fs-6">/mo</span></h1>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item text-white bg-transparent border-light-1"><i class="bi bi-check-circle me-2"></i>3 Months Support</li>
                <li class="list-group-item text-white bg-transparent border-light-1"><i class="bi bi-check-circle me-2"></i>Demo Installation</li>
                <li class="list-group-item text-white bg-transparent border-light-1"><i class="bi bi-check-circle me-2"></i>Automatic Updates</li>
                <li class="list-group-item text-white bg-transparent border-light-1"><i class="bi bi-check-circle me-2"></i>Theme Documentation</li>
                <li class="list-group-item text-white bg-transparent border-light-1"><i class="bi bi-check-circle me-2"></i>Free Subdomain</li>
                <li class="list-group-item text-white bg-transparent border-light-1"><i class="bi bi-check-circle me-2"></i>Community Access</li>
                <li class="list-group-item text-white bg-transparent border-light-1"><i class="bi bi-check-circle me-2"></i>Dedicated Phone Support</li>
              </ul>
              <div class="text-center mt-3 d-grid d-lg-block">
                <a href="javascript" class="btn btn-outline-light rounded-0 px-4 shadow">BUY NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingTables;