import React from 'react';
import { Line } from 'react-chartjs-2';
import { format } from 'date-fns';
import { register } from 'date-fns';
// import {TimeSeriesScale, TimeScale } from 'chart.js';
// import { TimeSeriesScale } from 'chart.js';
// register(TimeSeriesScale, { format });


import {
    Chart as ChartJS,
    LineElement,
    CategoryScale, // x axis
    LinearScale, // y axis
    Legend,
    PointElement,
    Tooltip,
    Scale,
    TimeScale,
    TimeSeriesScale,

} from "chart.js";

ChartJS.register(
    LineElement,
    CategoryScale, // x axis
    LinearScale, // y axis
    Legend,
    PointElement,
    Tooltip, 
    Scale,
    // TimeScale,
    // TimeSeriesScale
    TimeScale, { format },
    TimeSeriesScale, { format }
)


const ExpenseChart = ({ incomes, expenses }) => {
  const formatData = (data) => {
    return data.map((item) => ({
      x: new Date(item.date).getTime(),
      y: item.amount,
    }));
  };

  const incomeData = formatData(incomes);
  const expenseData = formatData(expenses);

  const data = {
    datasets: [
      {
        label: 'Income',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(144, 238, 144, 0.4)',
        borderColor: 'green',
        data: incomeData,
      },
      {
        label: 'Expense',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(255, 99, 71, 0.4)',
        borderColor: 'red',
        data: expenseData,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
          displayFormats: {
            day: 'MM/DD/YYYY',
          },
        },
        ticks: {
          maxTicksLimit: 10,
        },
      },
      y: {
        type: 'linear',
        position: 'left',
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const dataPoint = tooltipItem.dataset.data[tooltipItem.dataIndex];
            return `${tooltipItem.dataset.label}: $${dataPoint.y.toFixed(2)}`;
          },
        },
      },
    },
  };  
  
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default ExpenseChart;
