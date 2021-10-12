import React from 'react';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'

const AvatarsChips = ({name, title}) => {
  return (
    <>
    <Breadcrumb name={name} title={title} />
      <div class="row">
        <div class="col col-lg-10 mx-auto">

          <h5 class="mb-0">Chips</h5>
          <hr />
          <div class="card radius-10">
            <div class="card-body">
              <div class="chip">
                <img src="../../assets/images/avatars/avatar-1.png" alt="Contact Person" />John Doe</div>
              <div class="chip">
                <img src="../../assets/images/avatars/avatar-2.png" alt="Contact Person" />Jessica Doe</div>
              <div class="chip">
                <img src="../../assets/images/avatars/avatar-3.png" alt="Contact Person" />Michele Powa</div>
              <div class="chip">
                <img src="../../assets/images/avatars/avatar-4.png" alt="Contact Person" />Clark Natela</div>
              <div class="chip">
                <img src="../../assets/images/avatars/avatar-5.png" alt="Contact Person" />Anantu Painda <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
              </div>
              <div class="chip">
                <img src="../../assets/images/avatars/avatar-6.png" alt="Contact Person" />Tiger Xink <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
              </div>
              <div class="chip">
                <img src="../../assets/images/avatars/avatar-7.png" alt="Contact Person" />Salena Chain <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
              </div>
              <hr />
              <div class="chip">John Doe <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
              </div>
              <div class="chip">Jessica Doe <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
              </div>
              <div class="chip">Michele Powa <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
              </div>
              <div class="chip">Clark Natela <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
              </div>
              <div class="chip">Anantu Painda <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
              </div>
              <div class="chip">Tiger Xink <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
              </div>
              <div class="chip">Salena Chain <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
              </div>
            </div>
          </div>

          <h5 class="mb-0">Sizing and Colors</h5>
          <hr />
          <div class="card radius-10">
            <div class="card-body">
              <div class="chip chip-md">
                <img src="../../assets/images/avatars/avatar-1.png" alt="Contact Person" />John Doe</div>
              <div class="chip chip-md bg-light text-dark">
                <img src="../../assets/images/avatars/avatar-2.png" alt="Contact Person" />Jessica Doe</div>
              <div class="chip chip-md bg-dark text-white">
                <img src="../../assets/images/avatars/avatar-3.png" alt="Contact Person" />Michele Powa <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
              </div>
              <div class="chip chip-md bg-danger text-white">
                <img src="../../assets/images/avatars/avatar-4.png" alt="Contact Person" />Clark Natela <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
              </div>
              <hr />
              <div class="chip chip-lg">
                <img src="../../assets/images/avatars/avatar-5.png" alt="Contact Person" />Anantu Painda <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
              </div>
              <div class="chip chip-lg bg-primary text-white">
                <img src="../../assets/images/avatars/avatar-6.png" alt="Contact Person" />Tiger Xink <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
              </div>
              <div class="chip chip-lg bg-warning text-white">
                <img src="../../assets/images/avatars/avatar-7.png" alt="Contact Person" />Salena Chain <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
              </div>
              <hr />
              <div class="chip chip-md">John Doe <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
              </div>
              <div class="chip chip-md">Jessica Doe <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
              </div>
              <div class="chip chip-md bg-info text-white">Michele Powa <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
              </div>
              <div class="chip chip-md bg-success text-white">Clark Natela <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
              </div>
              <hr />
              <div class="chip chip-lg">Anantu Painda <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
              </div>
              <div class="chip chip-lg bg-secondary text-white">Tiger Xink <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
              </div>
              <div class="chip chip-lg bg-dark text-white">Salena Chain <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AvatarsChips;