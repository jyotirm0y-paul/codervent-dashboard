import React from 'react';
import { VectorMap } from '@south-paw/react-vector-maps';
import world from './world.json';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'

const VectorMaps = ({ name, title }) => {
  return (
    <>
      <Breadcrumb name={name} title={title} />
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <h6 class="text-uppercase">World Map</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <VectorMap {...world} style={{height: '350px'}}/>
            </div>
          </div>
          <h6 class="text-uppercase">India</h6>
          <hr />
          <div class="card">
            <div class="card-body">
            <VectorMap {...world} style={{height: '350px'}}/>
            </div>
          </div>
          <h6 class="text-uppercase">Usa</h6>
          <hr />
          <div class="card">
            <div class="card-body">
            <VectorMap {...world} style={{height: '350px'}}/>
            </div>
          </div>
          <h6 class="text-uppercase">Australia Map</h6>
          <hr />
          <div class="card">
            <div class="card-body">
            <VectorMap {...world} style={{height: '350px'}}/>
            </div>
          </div>
          <h6 class="text-uppercase">Uk Map</h6>
          <hr />
          <div class="card">
            <div class="card-body">
            <VectorMap {...world} style={{height: '350px'}}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VectorMaps;