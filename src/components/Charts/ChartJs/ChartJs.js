import React from 'react';
import 'chartjs-adapter-date-fns';
// import { enUS } from 'date-fns/locale';
// import { ReactChart } from 'chartjs-react';
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'

const ChartJs = ({ name, title }) => {

  // const myChartInstance = Chart.getChart('unique-chart-id');

//   const chartOption = {
//     scales: {
//       x: {
//         type: 'time',
//         adapters: {
//           date: enUS,
//         },
//       },
//       y: {
//         type: 'linear',
//       },
//     },
//   };

//   const chartData = [
//     { name: 'joti', value: 200 }, 
//     { name: 'nran', value: 500 }, 
//     { name: 'ayon', value: 10000 }
// ];
  
  return (
    <>

      <Breadcrumb name={name} title={title} />

{/* <ReactChart
      type="bar"
      id="unique-chart-id"
      data={chartData}
      options={chartOption}
      height={400}
    /> */}

      <div class="row">
        <div class="col-xl-9 mx-auto">
          <h6 class="mb-0 text-uppercase">Bar Chart</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <div class="chart-container1">
                <canvas id="chart2"></canvas>
              </div>
            </div>
          </div>
          <h6 class="mb-0 text-uppercase">Line Chart</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <div class="chart-container1">
                <canvas id="chart1"></canvas>
              </div>
            </div>
          </div>
          <h6 class="mb-0 text-uppercase">Pie Chart</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <div class="chart-container1">
                <canvas id="chart3"></canvas>
              </div>
            </div>
          </div>
          <h6 class="mb-0 text-uppercase">Radar Chart</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <div class="chart-container1">
                <canvas id="chart4"></canvas>
              </div>
            </div>
          </div>
          <h6 class="mb-0 text-uppercase">Polar Area Chart</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <div class="chart-container1">
                <canvas id="chart5"></canvas>
              </div>
            </div>
          </div>
          <h6 class="mb-0 text-uppercase">Doughnut Chart</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <div class="chart-container1">
                <canvas id="chart6"></canvas>
              </div>
            </div>
          </div>
          <h6 class="mb-0 text-uppercase">Horizontal Bar Chart</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <div class="chart-container1">
                <canvas id="chart7"></canvas>
              </div>
            </div>
          </div>
          <h6 class="mb-0 text-uppercase">Grouped Bar Chart</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <div class="chart-container1">
                <canvas id="chart8"></canvas>
              </div>
            </div>
          </div>
          <h6 class="mb-0 text-uppercase">Mixed Chart</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <div class="chart-container1">
                <canvas id="chart9"></canvas>
              </div>
            </div>
          </div>
          <h6 class="mb-0 text-uppercase">Bubble Chart</h6>
          <hr />
          <div class="card">
            <div class="card-body">
              <div class="chart-container1">
                <canvas id="chart10"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartJs;