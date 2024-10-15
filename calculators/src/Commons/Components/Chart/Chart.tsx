import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { ChartOptions,ChartData } from 'chart.js';
import { chartPropTypes } from "./types";

const Chart:React.FC<chartPropTypes> = ({ amount, growth }) => {
  console.log({ amount, growth });
  const data:ChartData<'doughnut'> = {
    datasets: [
      {
        data: [amount, growth],
        backgroundColor: ["#497cb6", "#d686cf"],
        /* radius: "90%",
        innerRadius: "75%", */
      },
    ],
  };

  const options:ChartOptions<'doughnut'> = {
    cutout: '50%',
    elements: {
      arc: {
        borderWidth: 2,
      },
    },
  };
  return (
    <>
      <div className="chart-container">
        <Doughnut data={data} options={options} className="doughnut-chart" />
      </div>
    </>
  );
};

export default Chart;
