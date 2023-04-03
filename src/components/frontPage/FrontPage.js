import React from "react";
import carbon_1 from "./images/carbon-footprint-1.jpg";
import carbon_2 from "./images/carbon-footprint-2.jpg";
import "./FrontPage.scss";
import { Col, Row } from "react-bootstrap";

function FrontPage() {
  return (
    <div className="frontPage container">
      <div>
        <img src={carbon_1} alt="Carbon Footprint" />
      </div>
      <div className="text-content">
        <h3>
          Use our interactive calculator to learn your Carbon Footprint and
          actions to take to reduce it.
        </h3>
      </div>
      <Row className="my-5">
        <Col>
          <h3>What is Carbon Footprint ?</h3>
          <hr />
          <p>
            "Carbon footprint" refers to the total amount of greenhouse gases,
            particularly carbon dioxide, that are emitted into the atmosphere by
            an individual, organization, or product. This measure is used to
            assess the impact that human activities have on the environment and
            climate change.
          </p>
          <p>
            Generally speaking, the carbon footprint of an individual or
            organization is calculated by taking into account the amount of
            energy consumed and the associated emissions of carbon dioxide and
            other greenhouse gases, as well as other factors like
            transportation, waste production, and food consumption. By
            understanding and reducing our carbon footprint, we can take steps
            to mitigate the negative effects of climate change and promote a
            more sustainable future.
          </p>
        </Col>
        <Col>
          <img src={carbon_2} alt="Carbon Footprint" />
        </Col>
      </Row>
    </div>
  );
}

export default FrontPage;