import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Breadcrumb from '../../shared/Breadcrumb/Breadcrumb'

const HighCharts = ({ name, title }) => {


  const options = {
    title: {
      text: 'My chart'
    },
    series: [{
      data: [1, 2, 3]
    }]
  }

  return (
    <>

      <Breadcrumb name={name} title={title} />
      <div class="row">
        <div class="col-xl-9 mx-auto">

          <div class="card">
            <div class="card-body">
              <HighchartsReact
                highcharts={Highcharts}
                options={options}
              />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <HighchartsReact
                highcharts={Highcharts}
                options={options}
              />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <HighchartsReact
                highcharts={Highcharts}
                options={options}
              />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <HighchartsReact
                highcharts={Highcharts}
                options={options}
              />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <HighchartsReact
                highcharts={Highcharts}
                options={options}
              />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <HighchartsReact
                highcharts={Highcharts}
                options={options}
              />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <HighchartsReact
                highcharts={Highcharts}
                options={options}
              />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <HighchartsReact
                highcharts={Highcharts}
                options={options}
              />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <HighchartsReact
                highcharts={Highcharts}
                options={options}
              />
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <HighchartsReact
                highcharts={Highcharts}
                options={options}
              />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <HighchartsReact
                highcharts={Highcharts}
                options={options}
              />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <HighchartsReact
                highcharts={Highcharts}
                options={options}
              />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <HighchartsReact
                highcharts={Highcharts}
                options={options}
              />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <HighchartsReact
                highcharts={Highcharts}
                options={options}
              />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <HighchartsReact
                highcharts={Highcharts}
                options={options}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HighCharts;