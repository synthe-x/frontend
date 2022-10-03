import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Legend } from 'chart.js'
Chart.register(ArcElement);

export default function DonutChart({available_to_Borrow,CollateralBalance,BorrowBalance}){
  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    plugins: {

    },
    cutout: '70%',
    responsive: true,
    maintainAspectRatio: false,
    datasets: [{
      label: 'My First Dataset',
      data: [available_to_Borrow, CollateralBalance, BorrowBalance],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],

    }]
  };
  const Options = {
    plugins: {
      tooltip: {
        enabled: true,
      }
    },
    cutout: '60%',
    responsive: true,
    maintainAspectRatio: false,
  }
  return (
    <>
    <div  style={{ width: "200px" }}>
      <Doughnut
        data={data}
        width={100}
        height={100}
        options={Options}
      />
    </div>
      

    </>

  )
}

