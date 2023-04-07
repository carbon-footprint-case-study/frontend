import React, { Component } from "react";
import TrainIcon from '@mui/icons-material/Train';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import FlightIcon from '@mui/icons-material/Flight';
import { Col, Container, Row } from "react-bootstrap";
import InputCard from "./InputCard";

class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      e: [0, 0],
    };
    this.unit = ["litre/month", "km/month"];

    this.handler = props.handler;
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center my-5">
          <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
            <InputCard
              icon={<DriveEtaIcon />}
              title="Private Vehicle"
              units={this.unit}
              value={100}
              handler={this.handler}
            />
          </Col>
          <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
            <InputCard
              icon={<DirectionsBusIcon />}
              title="Bus"
              units={["km/month"]}
              handler={this.handler}
            />
          </Col>
          <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
            <InputCard
              icon={<TrainIcon />}
              title="Train"
              units={["km/month"]}
              handler={this.handler}
            />
          </Col>
          <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
            <InputCard
              icon={<TrainIcon />}
              title="Metro"
              units={["km/month"]}
              handler={this.handler}
            />
          </Col>
          <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
            <InputCard
              icon={<FlightIcon />}
              title="Flight"
              units={["km/month"]}
              handler={this.handler}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Food;
