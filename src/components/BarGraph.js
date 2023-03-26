import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2';



export default class BarGraph extends React.Component {
  constructor(props) {
    super(props)
    this.data = props.data
    this.labels = props.labels
    this.s = {
      labels: this.labels,
      datasets: [
        {
          label: 'Carbon Emission',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: this.data
        }
      ]
    }
  }


  
  render() {
    return (
      <div>
        {this.x}
        <Bar
          data= {this.s}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}