import { Bar} from "react-chartjs-2";
import React from "react"

export  const BarChar=(props)=> { 
     
  const labels=props.labels
  const data=props.data
  return (
    <div>
      <Bar
        data={{
          labels:labels,
          datasets: [{
            label: 'Dealership sales in EGP',
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
        }}
        height={400}
        width={900}
        options={{
          maintainAspectRatio: false,
        }}
      
      />
    </div>
  );
}
