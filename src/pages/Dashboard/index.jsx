import React from "react";
import HorizontalBarChart from "../../components/HorizontalBarsChart";
import LineChart from "../../components/LineChart";

const Dashboard = () => {
  return (
    <>
    <div style={{width:"800px", height:"500px"}}>
      <HorizontalBarChart />
    </div>
    <div style={{width:"800px", height:"500px"}}>
      <LineChart />
    </div>
    </>
  );
};

export default Dashboard;
