import React from "react";
import { Col, Row } from "react-bootstrap";
import sustainable_1 from "./images/sustainable-1.jpg";
import sustainable_2 from "./images/sustainable-2.jpg";

function Goals() {
  return (
    <Row className="d-flex">
      <div className="card my-5">
        <div className="imgBox">
          <img className="sustainable" src={sustainable_1} />
        </div>
        <div className="content">
          <h2>No Poverty</h2>
          <p>Eradicate extreme poverty, halving the number of people living in poverty and increasing their resilience to exposure and extreme events</p>
        </div>
      </div>

      <div className="card my-5 mx-5">
        <div className="imgBox">
          <img className="sustainable" src={sustainable_2} />
        </div>
        <div className="content">
          <h2>Climate Action</h2>
          <p>Take urgent action to combat climate change and its impacts, increasing every countries resilience and ability to adapt to climate change .</p>
        </div>
      </div>

    </Row>
  );
}

export default Goals;
