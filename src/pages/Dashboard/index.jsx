import React from "react";
import HorizontalBarChart from "../../components/HorizontalBarsChart";
import LineChart from "../../components/LineChart";

const Dashboard = () => {
  return (
    <div className="charts">
      <div>
        <HorizontalBarChart />
      </div>
      <div>
        <LineChart />
      </div>
    </div>
  );
};

export default Dashboard;
