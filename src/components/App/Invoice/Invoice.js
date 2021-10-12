import React from 'react';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'

const Invoice = ({name, title}) => {
  return (
    <>
    <Breadcrumb name={name} title={title}/>
      <div class="card border shadow-none">
        <div class="card-header py-3">
          <div class="row align-items-center g-3">
            <div class="col-12 col-lg-6">
              <h5 class="mb-0">Company Name, Inc</h5>
            </div>
            <div class="col-12 col-lg-6 text-md-end">
              <a href="javascript" class="btn btn-sm btn-danger me-2"><i class="bi bi-file-earmark-pdf-fill"></i> Export as PDF</a>
              <a href="javascript" onclick="window.print()" class="btn btn-sm btn-secondary"><i class="bi bi-printer-fill"></i> Print</a>
            </div>
          </div>
        </div>
        <div class="card-header py-2 bg-light">
          <div class="row row-cols-1 row-cols-lg-3">
            <div class="col">
              <div class="">
                <small>from</small>
                <address class="m-t-5 m-b-5">
                  <strong class="text-inverse">Twitter, Inc.</strong><br />
                  Street Address<br />
                  City, Zip Code<br />
                  Phone: (123) 456-7890<br />
                  Fax: (123) 456-7890
                </address>
              </div>
            </div>
            <div class="col">
              <div class="">
                <small>to</small>
                <address class="m-t-5 m-b-5">
                  <strong class="text-inverse">Company Name</strong><br />
                  Street Address<br />
                  City, Zip Code<br />
                  Phone: (123) 456-7890<br />
                  Fax: (123) 456-7890
                </address>
              </div>
            </div>
            <div class="col">
              <div class="">
                <small>Invoice / July period</small>
                <div class=""><b>August 3,2012</b></div>
                <div class="invoice-detail">
                  #0000123DSS<br />
                  Services Product
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-invoice">
              <thead>
                <tr>
                  <th>TASK DESCRIPTION</th>
                  <th class="text-center" width="10%">RATE</th>
                  <th class="text-center" width="10%">HOURS</th>
                  <th class="text-right" width="20%">LINE TOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span class="text-inverse">Website design &amp; development</span><br />
                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sagittis arcu.</small>
                  </td>
                  <td class="text-center">$50.00</td>
                  <td class="text-center">50</td>
                  <td class="text-right">$2,500.00</td>
                </tr>
                <tr>
                  <td>
                    <span class="text-inverse">Branding</span><br />
                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sagittis arcu.</small>
                  </td>
                  <td class="text-center">$50.00</td>
                  <td class="text-center">40</td>
                  <td class="text-right">$2,000.00</td>
                </tr>
                <tr>
                  <td>
                    <span class="text-inverse">Redesign Service</span><br />
                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sagittis arcu.</small>
                  </td>
                  <td class="text-center">$50.00</td>
                  <td class="text-center">50</td>
                  <td class="text-right">$2,500.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="row bg-light align-items-center m-0">
            <div class="col col-auto p-4">
              <p class="mb-0">SUBTOTAL</p>
              <h4 class="mb-0">$4,500.00</h4>
            </div>
            <div class="col col-auto p-4">
              <i class="bi bi-plus-lg text-muted"></i>
            </div>
            <div class="col col-auto me-auto p-4">
              <p class="mb-0">PAYPAL FEE (5.4%)</p>
              <h4 class="mb-0">$108.00</h4>
            </div>
            <div class="col bg-dark col-auto p-4">
              <p class="mb-0 text-white">TOTAL</p>
              <h4 class="mb-0 text-white">$4508.00</h4>
            </div>
          </div>
          {/* end row */}

          <hr />
          {/* begin invoice-note */}
          <div class="my-3">
            * Make all cheques payable to [Your Company Name]<br />
            * Payment is due within 30 days<br />
            * If you have any questions concerning this invoice, contact  [Name, Phone Number, Email]
          </div>
          {/* end invoice-note */}
        </div>

        <div class="card-footer py-3">
          <p class="text-center mb-2">
            THANK YOU FOR YOUR BUSINESS
          </p>
          <p class="text-center d-flex align-items-center gap-3 justify-content-center mb-0">
            <span class=""><i class="bi bi-globe"></i> www.domain.com</span>
            <span class=""><i class="bi bi-telephone-fill"></i> T:+11-0462879</span>
            <span class=""><i class="bi bi-envelope-fill"></i> info@example.com</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Invoice;