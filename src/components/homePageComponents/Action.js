import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import ActionCard from "../ActionCard";

function Action(props) {
  const totalData = props.totalData;
  const homeData = props.homeData;
  // const travelData = props.travelData;
  // const foodData = props.foodData;
  const footPrint = totalData.reduce((a , b) => (a + b)) / 1000

  // let mx = Math.max(totalData[0], Math.max(totalData[1], totalData[2]));
  let heading;
  let ElecContent = "Hurrah! Your carbon emissions are lower than harmful due to electricity";
  let FoodContent = "Hurrah! Your carbon emissions are lower than harmful due to food";
  // if (mx == totalData[0]) {
  //   heading = <h1>Maximum emission due to Hosehold</h1>;
  // } else if (mx == totalData[1]) {
  //   heading = <h1>Maximum emission die to Travel</h1>;
  // } else {
  //   heading = <h1>Maximum emission due to Food</h1>;
  // }
  if (homeData[0] > 61.38*(1.05)) {
    ElecContent = (
      <div>
        <h2>You are not using electricity efficiently</h2>
        <p>
          Here are some sugession for reducing your carbon footprint due to
          electricity
        </p>
        <ul>
          <li>
            Reduce Phantom Power: There may be some electricity usage by
            electronics and appliances even when they are turned off. To reduce
            phantom power, you can unplug appliances when they are not in use.
          </li>
          {homeData[0] >= 61.38*1.25 && 
          <li>
            Use LED Lighting and BLDC fans: LED bulbs use up to 90% less energy
            than traditional incandescent bulbs and can last up to 25 times
            longer. BLDC fans are called brushless dc fans and consumes lower
            electricity compare to normal induction fans.
          </li>}
          {homeData[0] >= 61.38*1.5 &&
          <li>
            Use Energy-Efficient Appliances: Look for appliances with the ENERGY
            STAR label, which indicates that they meet energy efficiency
            guidelines set by the U.S. Environmental Protection Agency. Using
            energy-efficient appliances can significantly reduce the amount of
            electricity you use.
          </li>
          }
          {homeData[0] >= 61.38*2 &&
            <li>
            Install Solar Panels: Installing solar panels on your rooftop is an
            effective way to reduce your electricity consumption from the grid,
            and therefore reduce your carbon footprint.
          </li>}
        </ul>
      </div>
    );
  }
  if (totalData[2] > 183*(1.05)) {
    FoodContent = (
      <div>
        <h2>Your carbon foot print due to food is higher that average</h2>
        <p>
          Here are some sugession for reducing your carbon footprint due to
          food
        </p>
        <ul>
          <li>
          Eat a plant-based diet: A plant-based diet has a significantly lower carbon footprint than a diet based on meat and dairy products. You don't have to give up meat entirely, but reducing your meat consumption and incorporating more plant-based meals into your diet can make a big difference.
          </li>
          {totalData[2] >= 183*1.25 && 
          <li>
Choose locally sourced and seasonal foods: When you buy food that is grown locally and in season, you're reducing the carbon footprint associated with transportation and refrigeration. You can also visit farmers' markets, where you can meet local farmers and learn about the foods they grow.
          </li>}
          {totalData[2] >= 183*1.5 &&
          <li>
Reduce food waste: When food is thrown away, it contributes to greenhouse gas emissions. Try to plan your meals and buy only what you need, and use up leftovers to avoid food waste.
          </li>
          }
          {totalData[2] >= 183*2 &&
            <li>
Use reusable containers and bags: When you bring your own reusable containers and bags to the grocery store, you can reduce the amount of plastic and other materials that are used and discarded.
          </li>}
        </ul>
      </div>
    );
  }

  
  return (
    <Container>
      <Row className="justify-ElecContent-md-center my-5">
        <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
          {heading}
          {ElecContent}
          {FoodContent}
        </Col>
      </Row>
    </Container>

  );
};

export default Action;
