import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function TabBar() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Home">
       
      </Tab>
      <Tab eventKey="profile" title="Profile">
        
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
      </Tab>
    </Tabs>
  );
}

export default TabBar;