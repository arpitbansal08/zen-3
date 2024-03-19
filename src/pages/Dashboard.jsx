import React from "react";

const MetricCard = ({ value, title }) => {
  return (
    <div className="bg-white h-20 w-48 p-2 flex flex-col justify-between border-l-red-400 border-2">
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

    </div>
  );
};

export default Dashboard;
