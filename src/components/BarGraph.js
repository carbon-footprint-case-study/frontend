import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2';





export default class BarGraph extends React.Component {
  constructor(props) {
    super(props)
    this.data = props.data
    this.labels = props.labels

    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'];
    // Define an array of colors, you can add or remove colors according to your preference.

    this.s = {
      labels: this.labels,
      datasets: [
        {
          label: 'Carbon Emission',
          backgroundColor: colors.slice(0, this.data.length), // Use slice to get a subset of colors that matches the number of bars
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: this.data
        }
      ]
    }
  }

  render() {
    return (
      <div style={{ width: '500px', height: '300px' }}>
        <Bar
          data={this.s}
          options={{
            scales: {
              y: {
                
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'CO2 emission in Kg'
                }
              }
            },
            title: {
              display: true,
              text: 'Average Rainfall per month',
              fontSize: 15
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
      </div>
    );
  }
}





