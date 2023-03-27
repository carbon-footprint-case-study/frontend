import React, { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import SubwayIcon from "@mui/icons-material/Subway";
import HomeIcon from "@mui/icons-material/Home";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Co2Icon from "@mui/icons-material/Co2";
import PanToolIcon from "@mui/icons-material/PanTool";
import Home from "./Home";
import Travel from "./Travel";
import FootPrint from "../FootPrint";

function Tabbar() {
  const [activeKey, setActiveKey] = useState("home");
  const [home, setHome] = useState([0, 0, 0]);
  const [travel, setTravel] = useState([0, 0]);

  
  const homeHandler = (data) => {
    console.log("home handler after calling");
    console.log(`data ${data}`);
    setHome(data);
  };
  const travelHandler = (data) => {
    setTravel(data);
  };
  useEffect(() => {
    console.log("home state updated, triggering re-render of FootPrint");
  }, [home]);

  const handlePrev = () => {
    const tabs = ["home", "travel", "food", "shopping", "footprint", "action"];
    const currentTabIndex = tabs.indexOf(activeKey);
    const prevTabIndex = currentTabIndex - 1;
    if (prevTabIndex >= 0) {
      setActiveKey(tabs[prevTabIndex]);
    }
  };

  const handleNext = () => {
    const tabs = ["home", "travel", "food", "shopping", "footprint", "action"];
    const currentTabIndex = tabs.indexOf(activeKey);
    const nextTabIndex = currentTabIndex + 1;
    if (nextTabIndex < tabs.length) {
      setActiveKey(tabs[nextTabIndex]);
    }
  };

  return (
    <>
      <Tabs
        activeKey={activeKey}
        onSelect={(k) => setActiveKey(k)}
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab
          eventKey="home"
          title={
            <span>
              <HomeIcon />
              Household
            </span>
          }
        >
          <Home homeHandler={homeHandler} />
        </Tab>
        <Tab
          eventKey="travel"
          title={
            <span>
              <SubwayIcon /> Travel
            </span>
          }
        >
          <Travel travelHandler={travelHandler} />
        </Tab>
        <Tab
          eventKey="food"
          title={
            <span>
              <FastfoodIcon /> Food
            </span>
          }
        >
          <Travel travelHandler={travelHandler} />
        </Tab>
        <Tab
          eventKey="shopping"
          title={
            <span>
              <ShoppingCartIcon /> Shopping
            </span>
          }
        >
          <Travel travelHandler={travelHandler} />
        </Tab>
        <Tab
          eventKey="footprint"
          title={
            <span>
              <Co2Icon /> Footprint
            </span>
          }
        >
          <FootPrint data={home} labels={["i", "luv", "u"]} />
        </Tab>
        <Tab
          eventKey="action"
          title={
            <span>
              <PanToolIcon /> Action
            </span>
          }
        >
          <Travel travelHandler={travelHandler} />
        </Tab>
      </Tabs>
      <div className="d-flex justify-content-center mb-3">
        <Button
          className="mx-1"
          onClick={handlePrev}
          disabled={activeKey === "home"}
        >
          Prev
        </Button>
        <Button
          className="mx-1"
          onClick={handleNext}
          disabled={activeKey === "action"}
        >
          Next
        </Button>
      </div>
    </>
  );
}

export default Tabbar;
