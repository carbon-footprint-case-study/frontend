
// import React, { useState } from 'react';
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';

// import Button from 'react-bootstrap/Button';



// import SubwayIcon from '@mui/icons-material/Subway';
// import HomeIcon from '@mui/icons-material/Home';
// import FastfoodIcon from '@mui/icons-material/Fastfood';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import Co2Icon from '@mui/icons-material/Co2';
// import PanToolIcon from '@mui/icons-material/PanTool';
// import Home from './Home';
// import Travel from './Travel';
// import FootPrint from '../FootPrint';

// function Tabbar() {
//   const [activeKey, setActiveKey] = useState('home');

//   const handlePrev = () => {
//     const tabs = ['home', 'travel', 'food', 'shopping', 'footprint', 'action'];
//     const currentTabIndex = tabs.indexOf(activeKey);
//     const prevTabIndex = currentTabIndex - 1;
//     if (prevTabIndex >= 0) {
//       setActiveKey(tabs[prevTabIndex]);
//     }
//   };

//   const handleNext = () => {
//     const tabs = ['home', 'travel', 'food', 'shopping', 'footprint', 'action'];
//     const currentTabIndex = tabs.indexOf(activeKey);
//     const nextTabIndex = currentTabIndex + 1;
//     if (nextTabIndex < tabs.length) {
//       setActiveKey(tabs[nextTabIndex]);
//     }
//   };

//   return (
//     <>
//       <Tabs
//         activeKey={activeKey}
//         onSelect={(k) => setActiveKey(k)}
//         id="fill-tab-example"
//         className="mb-3"
//         fill
//       >
//         <Tab eventKey="home" title={<span><HomeIcon />Hosehold</span>}>
//           <Home />
//         </Tab>
//         <Tab eventKey="travel" title={<span><SubwayIcon /> Travel</span>}>
//           <Travel />
//         </Tab>
//         <Tab eventKey="food" title={<span><FastfoodIcon /> Food</span>}>
      
//         </Tab>
//         <Tab eventKey="shopping" title={<span><ShoppingCartIcon /> Shopping</span>}>
       
//         </Tab>
//         <Tab eventKey="footprint" title={<span><Co2Icon /> Footprint</span>}>
//           <FootPrint/>
//         </Tab>
//         <Tab eventKey="action" title={<span><PanToolIcon /> Action</span>}>
         
//         </Tab>
//       </Tabs>
//       <div className="d-flex justify-content-between mb-3">
//         <Button onClick={handlePrev} disabled={activeKey === 'home'}>Prev</Button>
//         <Button onClick={handleNext} disabled={activeKey === 'action'}>Next</Button>
//       </div>
//     </>
//   );
// }

// export default Tabbar;


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
import FootPrint from '../FootPrint';
import BarGraph from "../BarGraph";


class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 'home',
      home : [0 , 0 , 0],
      travel : [0 , 0]
    };
  }
  

  
  homeHandler = (n, d) => {
    let nextE = this.state.home;
   
    if (n === "Electricity") {
      nextE[0] = d;
    }
    else if (n === "LPG") {
      nextE[1] = d;
    }
    else {
      nextE[2] = d;
    }
    this.setState({
      home : nextE
    })

  }
  travelHandler = (n, d) => {
    let nextE = this.state.travel;
     
    if (n === "Private Vehicle") {
      nextE[0] = d;
    }
    else {
      nextE[1] = d;
    }

    this.setState({
      travel : nextE
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
            
          </Tab>
          <Tab eventKey="shopping" title={<span><ShoppingCartIcon /> Shopping</span>}>
            
          </Tab>
          <Tab eventKey="footprint" title={<span><Co2Icon /> Footprint</span>}>
            <FootPrint homeData = {this.state.home} travelData = {this.state.travel} homeLabels={["Electricity", "LPG", "Water Usage"]} travelLabels = {["Private", "Public"]}/>
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

