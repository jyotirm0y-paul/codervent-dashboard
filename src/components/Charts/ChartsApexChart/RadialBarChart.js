import React from 'react';
import ReactApexChart from 'react-apexcharts';

const RadialBarChart = () => {
  const series= [70];
  const options= {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '70%',
          }
        },
      },
      labels: ['Cricket'],
    };
  return (
    <div>
    <ReactApexChart options={options} series={series} type="radialBar" height={350} />
      
    </div>
  );
};

export default RadialBarChart;