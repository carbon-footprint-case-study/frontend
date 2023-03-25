import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SubwayIcon from '@mui/icons-material/Subway';
import HomeIcon from '@mui/icons-material/Home';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Co2Icon from '@mui/icons-material/Co2';
import PanToolIcon from '@mui/icons-material/PanTool';
import Home from './Home';
import Travel from './Travel';



function Tabbar() {

  return (
    <>
    <Tabs
      defaultActiveKey="home"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title = {<span><HomeIcon/>Home</span>}>
        <Home />
      </Tab>
      <Tab eventKey="travel"  title = {<span><SubwayIcon/> Travel</span>}>
        <Travel />
      </Tab>
      <Tab eventKey="food" title={<span><FastfoodIcon/> Food</span>}>
      </Tab>
      <Tab eventKey="shopping" title = {<span><ShoppingCartIcon/> Shopping</span>}>
      </Tab>
      <Tab eventKey="footprint" title= {<span><Co2Icon/> Footprint</span>}>
      </Tab>
      <Tab eventKey="action" title={<span><PanToolIcon/> Action</span>}>
      </Tab>
    </Tabs>

    </>
  );
}

export default Tabbar;