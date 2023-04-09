import React, { Component } from "react";
import TrainIcon from '@mui/icons-material/Train';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import FlightIcon from '@mui/icons-material/Flight';
import { Col, Container, Row } from "react-bootstrap";
import InputCard from "./InputCard";
import chapati from '../../chapati.jpg'
import vegetable from '../../vegetable.jpg'
import rice from '../../rice.jpg'
import egg from '../../egg.png'
import milk from '../../milk.jpg'
import chiken from '../../chiken.jpg'
import mutton from '../../mutton-1.jpg'
import fish from '../../fish.jpg'

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
            icon={<img src={chapati} alt="hellow" style={{ width: "50px", height: "50px", marginRight: "10px" }} />}
            icon={<img src={chapati} alt="hellow" style={{ width: "50px", height: "50px", marginRight: "10px" }} />}
            title="Chapati"
            units={["chapati/day"]}
            handler={this.handler}
            />
          </Col>
          <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
            <InputCard
            icon={<img src={rice} alt="hellow" style={{ width: "50px", height: "50px", marginRight: "10px" }} />}
            
            title="Rice"
            units={["bowl-Rice/day"]}
            value={100}
              handler={this.handler}
              />
          </Col>
          <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
            <InputCard
              icon={<img src={vegetable} alt="hellow" style={{ width: "50px", height: "50px", marginRight: "10px" }} />}
              
              title="Vegetables"
              units={["bowl-vegies/day"]}
              handler={this.handler}
              />
          </Col>
          <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
            <InputCard
              icon={<img src={egg} alt="hellow" style={{ width: "50px", height: "50px", marginRight: "10px" }} />}
              title="Egg"
              units={["Eggs/day"]}
              handler={this.handler}
              />
          </Col>
            <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
              <InputCard
                icon={<img src={milk} alt="hellow" style={{ width: "50px", height: "50px", marginRight: "10px" }} />}
                
                title="Milk"
                units={["glass/day"]}
                handler={this.handler}
                />
                </Col>
          <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
            <InputCard
              icon={<img src={chiken} alt="hellow" style={{ width: "50px", height: "50px", marginRight: "10px" }} />}
              title="Chiken"
              units={["kg/week"]}
              handler={this.handler}
            />
          </Col>
          <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
            <InputCard
              icon={<img src={mutton} alt="hellow" style={{ width: "50px", height: "50px", marginRight: "10px" }} />}
              title="Mutton"
              units={["kg/week"]}
              handler={this.handler}
            />
          </Col>
          <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
            <InputCard
              icon={<img src={fish} alt="hellow" style={{ width: "50px", height: "50px", marginRight: "10px" }} />}
              title="Fish"
              units={["kg/week"]}
              handler={this.handler}
            />
          </Col>
        
        </Row>
      </Container>
    );
  }
}

export default Food;
