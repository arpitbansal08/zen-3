import React from "react";
import { revenueData } from "../assets/Data.js";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";
import { revenueByJobType } from "../assets/Data.js";
const MetricCard = ({ value, title }) => {
  return (
    <div className="item bg-white h-20 w-48 p-2 flex flex-col justify-between border-l-red-400 border-2">
      <div>{value}</div>
      <div className="align-bottom">{title}</div>
    </div>
  );
};

const Dashboard = () => {
  const metricData = [
    { value: "$64,942", title: "Total Revenue" },
    { value: "$608", title: "Total Jobs Abg" },
    { value: "106", title: "Tickets Created" },
    { value: "66", title: "Tickets Scheduled" },
    { value: "$19,304.52", title: "Outstanding Amount" },
    { value: "0", title: "Membership Sold" },
    { value: "8", title: "Jobs Completed" },
    { value: "2", title: "Total Canceled" },
  ];

  const [revenue, setRevenue] = useState({
    labels: revenueData.map((data) => {
      return data.city;
    }),

    datasets: [
      {
        label: "Revenue for December 2023",
        axis: "y",
        data: revenueData.map((data) => {
          return data.revenue;
        }),
      },
    ],
  });
  const [revenueJob, setRevenueJob] = useState({
    labels: revenueByJobType.map((data) => {
      return data.job;
    }),
    datasets: [
      {
        label: "Revenue by Job Type",
        axis: "y",
        data: revenueByJobType.map((data) => {
          return data.revenue;
        }),
      },
    ],
  });

  return (
    <div className="m-8 p-8 bg-slate-200 h-screen w-80vh">
      <h3>Company Metrics</h3>

      <div className="grid grid-cols-4 gap-4 m-4 p-2">
        {metricData.map((metric) => (
          <MetricCard
            key={metric.title}
            value={metric.value}
            title={metric.title}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 ">
        <div className="item border-2 border-black m-1 p-2">
          <h4>Revenue By Job Location</h4>
          <Bar
            data={revenue}
            options={{
              indexAxis: "y",
              backgroundColor: "rgba(248,113,113,1)",
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                },
                y: {
                  grid: {
                    display: false,
                  },
                },
              },
            }}
          />
        </div>
        <div className="item border-2 border-black m-1 p-2">
          <h4>Revenue by Job Type</h4>
          <Bar
            data={revenueJob}
            options={{
              indexAxis: "y",
              backgroundColor: "rgba(248,113,113,1)",
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                },
                y: {
                  grid: {
                    display: false,
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
