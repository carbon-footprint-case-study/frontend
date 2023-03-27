import React , {Component} from "react";
import TungstenRoundedIcon from "@mui/icons-material/TungstenRounded";
import PropaneTankTwoToneIcon from "@mui/icons-material/PropaneTankTwoTone";
import { Col, Container, Row } from "react-bootstrap";
import InputCard from "./InputCard";

class  Travel extends Component {
    constructor(props){
      super(props)
      this.state = {
        e : [0 , 0 ]
      }
      this.unit = ["litre/month", "km/month"]

      this.handler = props.handler

    }

    // handler = (n, d) => {
    //   let nextE = this.state.e;
     
    //   if (n === "Private Vehicle") {
    //     nextE[0] = d;
    //   }
    //   else {
    //     nextE[1] = d;
    //   }


    //   this.setState({
    //     e : nextE
    //   })
     
      
  
  
    // }



    render(){
      return (
        <Container>
          <Row className="justify-content-md-center my-5">
            <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
              <InputCard
                icon={<TungstenRoundedIcon />}
                title="Private Vehicle"
                units={this.unit}
                value={100}
                handler = {this.handler}
              />
            </Col>
            <Col className="my-1" xs={{ span: 12 }} md={{ span: 10 }}>
              <InputCard
                icon={<PropaneTankTwoToneIcon />}
                title="Public Transport"
                units={this.unit}
                handler = {this.handler}
              />
            </Col>
          </Row>

          

        </Container>
      );

    }



}

export default Travel