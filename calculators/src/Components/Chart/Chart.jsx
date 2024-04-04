import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const Chart = ({ amount, growth }) => {
  console.log({ amount, growth });
  const data = {
    datasets: [
      {
        data: [amount, growth],
        backgroundColor: ["#497cb6", "#d686cf"],
        radius: "90%",
        innerRadius: "75%",
      },
    ],
  };

  const options = {
    cutoutPercentage: 50, // Adjust the size of the center hole
    elements: {
      arc: {
        innerRadius: 100, // Adjust the inner radius of the doughnut
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
