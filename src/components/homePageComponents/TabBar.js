



import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Button from 'react-bootstrap/Button';

import SubwayIcon from '@mui/icons-material/Subway';
import HomeIcon from '@mui/icons-material/Home';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Co2Icon from '@mui/icons-material/Co2';
import PanToolIcon from '@mui/icons-material/PanTool';
import Home from './Home';
import Travel from './Travel';
import FootPrint from './FootPrint';


import { StackedBarChart } from '@mui/icons-material';
import Food from './Food';


class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 'home',
      home : [0 , 0 , 0],
      travel : [0 , 0 , 0 , 0 , 0],
      food : [0, 0 , 0 , 0 , 0 , 0 , 0 , 0],
      total : [0 , 0 , 0]
    };
     this.homeLabels = ["Electricity", "LPG", "Water Usage"]
     this.travelLabels = ["Private", "Bus" , "Train" , "Metro" , "Flight"]
     this.foodLabels = ["Chapati" , "Rice" , "Vegetables" , "Egg" , "Milk" , "Chicken" , "Mutton" , "Fish"]
  }
  
  
  
  homeHandler = (n, d) => {
    let nextE = this.state.home;
    let sum1 = nextE.reduce((a , b) => a + b)
    if (n === "Electricity") {
      nextE[0] = d;
    }
    else if (n === "LPG") {
      nextE[1] = d;
    }
    else {
      nextE[2] = d;
    }
    let sum2 =  nextE.reduce((a , b) => a + b)

    let t = this.state.total

    t[0] += sum2 - sum1
    this.setState({
      home : nextE,
      total : t
    })

  }
  travelHandler = (n, d) => {
    let nextE = this.state.travel;
    let sum1 = nextE.reduce((a , b) => a + b)

     
    if (n === "Private Vehicle") {
      nextE[0] = d;
    }
    else if(n == "Bus"){
      nextE[1] = d;
    }
    else if(n == "Train"){
      nextE[2] = d;
    }
    else if(n == "Metro"){
      nextE[3] = d;
    }
    else{
      nextE[4] = d;
    }

    let sum2 = nextE.reduce((a , b) => a + b)
    let t = this.state.total
    t[1] += sum2 - sum1
   
    this.setState({
      travel : nextE,
      total : t
    })

  }
  foodHandler = (n, d) => {
    let nextE = this.state.food;
    let sum1 = nextE.reduce((a , b) => a + b)

     
    if (n === "Chapati") {
      nextE[0] = d;
    }
    else if(n == "Rice"){
      nextE[1] = d;
    }
    else if(n == "Vegetables"){
      nextE[2] = d;
    }
    else if(n == "Egg"){
      nextE[3] = d;
    }
    else if(n == "Milk"){
      nextE[4] = d;
    }
    else if(n == "Chiken"){
      nextE[5] = d;
    }
    else if(n == "Mutton"){
      nextE[6] = d;
    }
    else{
      nextE[7] = d;
    }
    let sum2 = nextE.reduce((a , b) => a + b)
    let t = this.state.total
    t[2] += sum2 - sum1
   
    this.setState({
      food : nextE,
      total : t
    })

  }

  handlePrev = () => {
    const tabs = ['home', 'travel', 'food', 'shopping', 'footprint', 'action'];
    const currentTabIndex = tabs.indexOf(this.state.activeKey);

    const prevTabIndex = currentTabIndex - 1;
    if (prevTabIndex >= 0) {
      this.setState({ activeKey: tabs[prevTabIndex] });
    }
  };


  handleNext = () => {
    const tabs = ['home', 'travel', 'food', 'shopping', 'footprint', 'action'];
    const currentTabIndex = tabs.indexOf(this.state.activeKey);

    const nextTabIndex = currentTabIndex + 1;
    if (nextTabIndex < tabs.length) {
      this.setState({ activeKey: tabs[nextTabIndex] });
    }
  };

  render() {
    return (
      <>
        <Tabs
          activeKey={this.state.activeKey}
          onSelect={(k) => this.setState({ activeKey: k })}
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="home" title={<span><HomeIcon />Hosehold</span>}>
            <Home handler = {this.homeHandler}/>
          </Tab>
          <Tab eventKey="travel" title={<span><SubwayIcon /> Travel</span>}>
            <Travel handler = {this.travelHandler}/>
          </Tab>
          <Tab eventKey="food" title={<span><FastfoodIcon /> Food</span>}>
            <Food  handler = {this.foodHandler}/>
          </Tab>

          <Tab eventKey="footprint" title={<span><Co2Icon /> Footprint</span>}>
            <FootPrint homeData = {this.state.home} travelData = {this.state.travel} foodData = {this.state.food} totalData = {this.state.total} homeLabels = {this.homeLabels} travelLabels = {this.travelLabels} foodLabels = {this.foodLabels}/>
          </Tab>
          <Tab eventKey="action" title={<span><PanToolIcon /> Action</span>}>
           
          </Tab>
        </Tabs>
        <div className="d-flex justify-content-between mb-3">
          <Button onClick={this.handlePrev} disabled={this.state.activeKey === 'home'}>Prev</Button>
          <Button onClick={this.handleNext} disabled={this.state.activeKey === 'action'}>Next</Button>
        </div>
        
      </>
    );
  }

}

export default Tabbar;




