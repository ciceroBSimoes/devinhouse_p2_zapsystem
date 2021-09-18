import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["MX Linux", "EndeavourOS", "Manjaro", "Mint", "Pop!_OS"],
  datasets: [
    {
      label: "Acessos (Últimos 6 meses)",
      data: [3162, 2463, 2316, 1936, 1568],
      backgroundColor: ["#008080", "#800080", "#00FF00", "#808080", "#00FFFF"],
    },
  ],
};

const options = {
  indexAxis: "y",
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Top 5 - DistroWatch",
    },
  },
};

const HorizontalBarChart = () => (
  <>
    <Bar data={data} options={options} />
  </>
);

export default HorizontalBarChart;
