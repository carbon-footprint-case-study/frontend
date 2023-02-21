import React, { useState, Component } from "react";
import TungstenRoundedIcon from "@mui/icons-material/TungstenRounded";
import PropaneTankTwoToneIcon from "@mui/icons-material/PropaneTankTwoTone";
import WaterIcon from "@mui/icons-material/Water";
import { Col, Container, Row } from "react-bootstrap";
import InputCard2 from "./InputCard2";
import InputCard from "./InputCard";
import BarGraph from "../BarGraph";





class Home extends Component  {

    constructor(props) {
      super(props)
    
      this.state = {
         e : [0 , 0 , 0]
      }
       this.rm = "Rs./month";
  
      this.elecUnit = [this.rm, "KWhr/month"];
      this.lpgUnit = ["cylinder/month", "litre/month"];
      this.waterUnit = [this.rm, "litre/month"];
    }



  
   



   handler = (n, d) => {
    let nextE = this.state.e;
   
    if (n === "Electricity") {
      nextE[0] = d;
    }
    else if (n === "LPG") {
      nextE[1] = d;
    }
    else {
      nextE[2] = d;
    }
    this.setState({
      e : nextE
    })
    console.log(this.state.e)
    


  }

    render() {
      return (
        <Container>
          <Row className="justify-content-md-center my-5">
            <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
              <InputCard
                icon={<TungstenRoundedIcon />}
                title="Electricity"
                units={this.elecUnit}
                value={100}
                handler={this.handler}
                data = {this.state.e}
  
              />
            </Col>
            <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
              <InputCard
                icon={<PropaneTankTwoToneIcon />}
                title="LPG"
                units={this.lpgUnit}
                handler={this.handler}
                data  = {this.state.e}
  
              />
            </Col>
  
            <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
              <InputCard
                icon={<WaterIcon />}
                title="Water Usage"
                units={this.waterUnit}
                value={100}
                handler={this.handler}
                data = {this.state.e}
  
              />
            </Col>
          </Row>
          <BarGraph data = {this.state.e}/>
        </Container>
      );

    }

  

}

export default Home;
