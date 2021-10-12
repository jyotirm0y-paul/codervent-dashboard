import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChartServerLoad = () => {
 const series= [50];
           const options= {
              chart: {
                height: 150,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: '50%',
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

export default PieChartServerLoad;