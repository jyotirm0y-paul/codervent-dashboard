import React from 'react';
import ReactApexChart from 'react-apexcharts';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'
import AreaChart from './AreaChart';
import ColumnAndLineChart from './ColumnAndLineChart';
import ColumnChart from './ColumnChart';
import LineChart from './LineChart';
import MixChart from './MixChart';
import VerticalColumnChart from './VerticalColumnChart';
import PieChart from './PieChart';
import DoughtChart from './DoughtChart';
import RaderChart from './RaderChart';
import PolygonChart from './PolygonChart';
import RadialBarChart from './RadialBarChart';
import MultiRadialBarChart from './MultiRadialBarChart';

const ChartsApexChart = ({ name, title }) => {




  return (
    <>

      <Breadcrumb name={name} title={title} />
      <div class="row">
        <div class="col-xl-10 mx-auto">
          <h6 class="mb-0 text-uppercase">Area Chart</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <AreaChart />
            </div>
          </div>
          <h6 class="mb-0 text-uppercase">Line Chart</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <LineChart />
            </div>
          </div>
          <h6 class="mb-0 text-uppercase">Multi-Line Chart</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              {/* <div id="chart2"></div> */}
            </div>
          </div>

          <h6 class="mb-0 text-uppercase">Column Chart</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <ColumnChart />
            </div>
          </div>
          <h6 class="mb-0 text-uppercase">Vertical Column Chart</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <VerticalColumnChart />
            </div>
          </div>
          <h6 class="mb-0 text-uppercase">Column & Line Chart</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <ColumnAndLineChart />
            </div>
          </div>
          <h6 class="mb-0 text-uppercase">Mix Chart</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <MixChart />
            </div>
          </div>
          <h6 class="mb-0 text-uppercase">Pie Chart</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <PieChart />
            </div>
          </div>
          <h6 class="mb-0 text-uppercase">Dought Chart</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <DoughtChart />
            </div>
          </div>
          <h6 class="mb-0 text-uppercase">Radar Chart</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <RaderChart />
            </div>
          </div>
          <h6 class="mb-0 text-uppercase">Polygon Chart</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <PolygonChart />
            </div>
          </div>
          <h6 class="mb-0 text-uppercase">Radial Bar Chart</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <RadialBarChart />
            </div>
          </div>
          <h6 class="mb-0 text-uppercase">Multi Radial Bar Chart</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <MultiRadialBarChart/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartsApexChart;