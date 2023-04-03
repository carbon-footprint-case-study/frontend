import React from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar , Label} from 'recharts';


const StackedBarGraph = (props) => {
  const homeData = props.homeData
  const travelData = props.travelData
  const data = [
    { name: 'Home', Electricity: homeData[0], LPG: homeData[1], Water : homeData[2] },
    { name: 'Travel', Private: travelData[0], Public: travelData[1] },
  
  ];
  return (
    <BarChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <XAxis dataKey="name" />
      <YAxis >
      <Label value="CO2 emmision in Kg" position="inside" angle={-90} offset={10} />
      </YAxis>
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Bar dataKey="Electricity" stackId="a" fill="#8884d8" />
      <Bar dataKey="LPG" stackId="a" fill="#82ca9d" />
      <Bar dataKey="Water" stackId="a" fill="#ffc658" />
      <Bar dataKey="Private" stackId="a" fill="#8884d8" />
      <Bar dataKey="Public" stackId="a" fill="#82ca9d" />

    </BarChart>
  );
};

export default StackedBarGraph;
