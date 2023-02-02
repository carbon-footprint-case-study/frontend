import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Calculator from './Calculator'
import SubwayIcon from '@mui/icons-material/Subway';
import HomeIcon from '@mui/icons-material/Home';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Co2Icon from '@mui/icons-material/Co2';
import PanToolIcon from '@mui/icons-material/PanTool';
function Tabbar() {
  return (
    <Tabs
      defaultActiveKey="home"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title = {<span><HomeIcon/>Home</span>} >
        <Calculator title = {"Your Home"}/>
      </Tab>
      <Tab eventKey="travel"  title = {<span><SubwayIcon/> Travel</span>}>
        <Calculator title = {"Your fule consumtion"}/>
      </Tab>
      <Tab eventKey="food" title={<span><FastfoodIcon/> Food</span>}>
        <Calculator/>
      </Tab>
      <Tab eventKey="shopping" title = {<span><ShoppingCartIcon/> Shopping</span>}>
        <Calculator/>
      </Tab>
      <Tab eventKey="footprint" title= {<span><Co2Icon/> Footprint</span>}>
        <Calculator/>
      </Tab>
      <Tab eventKey="action" title={<span><PanToolIcon/> Action</span>}>
        <Calculator />
      </Tab>
    </Tabs>
  );
}

export default Tabbar;