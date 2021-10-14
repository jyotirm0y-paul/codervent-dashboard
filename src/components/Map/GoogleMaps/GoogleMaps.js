import React from 'react';
import GoogleMapReact from 'google-map-react';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'

const GoogleMaps = ({ name, title }) => {

  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const props = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  
  
  return (
    <>
    <Breadcrumb name={name} title={title} />
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <h6 class="text-uppercase">Simple Basic Map</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              {/* <div id="simple-map" class="gmaps"></div> */}
              <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                  bootstrapURLKeys={45465}
                  defaultCenter={props.center}
                  defaultZoom={props.zoom}
                  options={props.getMapOptions}
                >
                  <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                  />
                </GoogleMapReact>
              </div>
            </div>
          </div>
          <h6 class="text-uppercase">Map With Marker</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                  bootstrapURLKeys={45465}
                  defaultCenter={props.center}
                  defaultZoom={props.zoom}
                  options={props.getMapOptions}
                >
                  <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                  />
                </GoogleMapReact>
              </div>
            </div>
          </div>
          <h6 class="text-uppercase">Over Layer Map</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                  bootstrapURLKeys={45465}
                  defaultCenter={props.center}
                  defaultZoom={props.zoom}
                  options={props.getMapOptions}
                >
                  <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                  />
                </GoogleMapReact>
              </div>
            </div>
          </div>
          <h6 class="text-uppercase">Polygonal Map</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                  bootstrapURLKeys={45465}
                  defaultCenter={props.center}
                  defaultZoom={props.zoom}
                  options={props.getMapOptions}
                >
                  <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                  />
                </GoogleMapReact>
              </div>
            </div>
          </div>
          <h6 class="text-uppercase">Styled Map</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                  bootstrapURLKeys={45465}
                  defaultCenter={props.center}
                  defaultZoom={props.zoom}
                  options={props.getMapOptions}
                >
                  <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                  />
                </GoogleMapReact>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoogleMaps;