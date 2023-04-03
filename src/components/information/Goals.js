import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import sustainable_1 from "./images/sustainable-1.jpg";
import sustainable_2 from "./images/sustainable-2.jpg";
import sustainable_3 from "./images/sustainable-3.jpg";

function Goals() {
  return (
    <Container fluid>
      <Row className="my-5">
        <Col className="card" md={{ span: 2 , offset: 1}}>
          <div className="imgBox">
            <img className="sustainable" src={sustainable_1} />
          </div>
          <div className="content">
            <h2>No Poverty</h2>
            <p>
              Eradicate extreme poverty, halving the number of people living in
              poverty and increasing their resilience to exposure and extreme
              events
            </p>
          </div>
        </Col>

        <Col className="card" md={{ span: 2, offset: 1 }}>
          <div className="imgBox">
            <img className="sustainable" src={sustainable_2} />
          </div>
          <div className="content">
            <h2>Climate Action</h2>
            <p>
              Take urgent action to combat climate change and its impacts,
              increasing every countries resilience and ability to adapt to
              climate change .
            </p>
          </div>
        </Col>

        <Col className="card" md={{ span: 2, offset: 1 }}>
          <div className="imgBox">
            <img className="sustainable" src={sustainable_3} />
          </div>
          <div className="content">
            <h2>Affordable and Clean Energy</h2>
            <p>
              Ensure access to affordable, reliable, sustainable and modern
              energy for all.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="my-4">
        <Col className="card" md={{ span: 2, offset: 1 }}>
          <div className="imgBox">
            <img className="sustainable" src={sustainable_3} />
          </div>
          <div className="content">
            <h2>Affordable and Clean Energy</h2>
            <p>
              Ensure access to affordable, reliable, sustainable and modern
              energy for all.
            </p>
          </div>
        </Col>
        <Col className="card" md={{ span: 2, offset: 1 }}>
          <div className="imgBox">
            <img className="sustainable" src={sustainable_3} />
          </div>
          <div className="content">
            <h2>Affordable and Clean Energy</h2>
            <p>
              Ensure access to affordable, reliable, sustainable and modern
              energy for all.
            </p>
          </div>
        </Col>
        <Col className="card" md={{ span: 2, offset: 1 }}>
          <div className="imgBox">
            <img className="sustainable" src={sustainable_3} />
          </div>
          <div className="content">
            <h2>Affordable and Clean Energy</h2>
            <p>
              Ensure access to affordable, reliable, sustainable and modern
              energy for all.
            </p>
          </div>
        </Col>

      </Row>
    </Container>
  );
}

export default Goals;
