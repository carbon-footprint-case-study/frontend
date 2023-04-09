import React from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar , Label} from 'recharts';


const StackedBarGraph = (props) => {
  const homeData = props.homeData
  const travelData = props.travelData
  const foodData = props.foodData
  const data = [
    { name: 'Home', Electricity: homeData[0], LPG: homeData[1], Water : homeData[2] },
    { name: 'Travel', Private: travelData[0], Bus: travelData[1] , Train: travelData[2] , Metro: travelData[3] , Flight: travelData[4]},
    { name: 'Food', Chapati: foodData[0], Rice: foodData[1] , Vegetables: foodData[2] , Egg: foodData[3] , Milk: foodData[4] , Chicken : foodData[5] , Mutton : foodData[6] , Fish : foodData[7]},
  
  ];
  return (
    <BarChart width={1000} height={500} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
      <Bar dataKey="Bus" stackId="a" fill="#82ca9d" />
      <Bar dataKey="Train" stackId="a" fill="#FF0000" />
      <Bar dataKey="Metro" stackId="a" fill="#00FFFF" />
      <Bar dataKey="Flight" stackId="a" fill="#0000FF" />
      <Bar dataKey="Chapati" stackId="a" fill="#00008B" />
      <Bar dataKey="Rice" stackId="a" fill="#ADD8E6" />
      <Bar dataKey="Vegetables" stackId="a" fill="#800080" />
      <Bar dataKey="Egg" stackId="a" fill="#FFFF00" />
      <Bar dataKey="Milk" stackId="a" fill="#00FF00" />
      <Bar dataKey="Chiken" stackId="a" fill="#FF00FF" />
      <Bar dataKey="Mutton" stackId="a" fill="#FFC0CB" />
      <Bar dataKey="Fish" stackId="a" fill="#C0C0C0" />

    </BarChart>
  );
};

export default StackedBarGraph;
