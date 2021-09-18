import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: [
    "Nov 2020",
    "Dez 2020",
    "Jan 2021",
    "Fev 2021",
    "Mar 2021",
    "Abr 2021",
    "Mai 2021",
    "Jun 2021",
    "Jul 2021",
    "Ago 2021",
  ],
  datasets: [
    {
      label: "Qtd - Transações Pix",
      data: [
        33510753, 144404423, 201061731, 275462055, 393713691, 499992874,
        649101807, 745586488, 885182241, 973889580,
      ],
      fill: false,
      backgroundColor: "#DB4035",
      borderColor: "#B8B8B8",
    },
  ],
};

const LineChart = () => (
  <>
    <Line data={data} />
  </>
);

export default LineChart;
