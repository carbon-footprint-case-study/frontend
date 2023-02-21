import React from "react";
import TungstenRoundedIcon from "@mui/icons-material/TungstenRounded";
import PropaneTankTwoToneIcon from "@mui/icons-material/PropaneTankTwoTone";
import WaterIcon from "@mui/icons-material/Water";
import { Col, Container, Row } from "react-bootstrap";
import InputCard from "./InputCard";

function Home() {
  const rm = "Rs./month";

  const elecUnit = [rm, "KWhr/month"];
  const lpgUnit = ["cylinder/month", "litre/month"];
  const waterUnit = [rm, "litre/month"];

  return (
    <Container>
      <Row className="justify-content-md-center my-5">
        <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
          <InputCard
            icon={<TungstenRoundedIcon />}
            title="Electricity"
            units={elecUnit}
            value={100}
          />
        </Col>
        <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
          <InputCard
            icon={<PropaneTankTwoToneIcon />}
            title="LPG"
            units={lpgUnit}
          />
        </Col>

        <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
          <InputCard
            icon={<WaterIcon />}
            title="Water Usage"
            units={waterUnit}
            value={100}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
