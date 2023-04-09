import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Action(props) {
  const totalData = props.totalData;
  const homeData = props.homeData;
  const travelData = props.travelData;
  const foodData = props.foodData;

  // let mx = Math.max(totalData[0], Math.max(totalData[1], totalData[2]));
  let heading;
  let content = "Hurrah! Your carbon emissions are lower than harmful";
  // if (mx == totalData[0]) {
  //   heading = <h1>Maximum emission due to Hosehold</h1>;
  // } else if (mx == totalData[1]) {
  //   heading = <h1>Maximum emission die to Travel</h1>;
  // } else {
  //   heading = <h1>Maximum emission due to Food</h1>;
  // }
  if (homeData[0] > 124.2852) {
    content = (
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
          {homeData[0] >= 150 && 
          <li>
            Use LED Lighting and BLDC fans: LED bulbs use up to 90% less energy
            than traditional incandescent bulbs and can last up to 25 times
            longer. BLDC fans are called brushless dc fans and consumes lower
            electricity compare to normal induction fans.
          </li>}
          {homeData[0] >= 175 &&
          <li>
            Use Energy-Efficient Appliances: Look for appliances with the ENERGY
            STAR label, which indicates that they meet energy efficiency
            guidelines set by the U.S. Environmental Protection Agency. Using
            energy-efficient appliances can significantly reduce the amount of
            electricity you use.
          </li>
          }
          {homeData[0] >= 200 &&
            <li>
            Install Solar Panels: Installing solar panels on your rooftop is an
            effective way to reduce your electricity consumption from the grid,
            and therefore reduce your carbon footprint.
          </li>}
        </ul>
      </div>
    );
  }

  return (
    <Container>
      <Row className="justify-content-md-center my-5">
        <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
          {heading}
          {content}
        </Col>
      </Row>
    </Container>
  );
}

export default Action;
