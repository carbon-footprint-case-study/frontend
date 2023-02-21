import React from "react";
import TungstenRoundedIcon from "@mui/icons-material/TungstenRounded";
import PropaneTankTwoToneIcon from "@mui/icons-material/PropaneTankTwoTone";
import { Col, Container, Row } from "react-bootstrap";
import InputCard from "./InputCard";

function Travel() {
    const unit = ["litre/month", "km/month"]

    return (
      <Container>
        <Row className="justify-content-md-center my-5">
          <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
            <InputCard
              icon={<TungstenRoundedIcon />}
              title="Private Vehicle"
              units={unit}
              value={100}
            />
          </Col>
          <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
            <InputCard
              icon={<PropaneTankTwoToneIcon />}
              title="Public Transport"
              units={unit}
            />
          </Col>
        </Row>
      </Container>
    );
}

export default Travel