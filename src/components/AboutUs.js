import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MemberCard from "./MemberCard";
import  Akash from './img/Members/Akash.jpeg'
import  Abhay from './img/Members/Abhay.jpeg'
import  Ankit from './img/Members/Ankit.jpg'
import  Anuvrat from './img/Members/Anuvrat.jpeg'
import  Mohil from './img/Members/Mohil.jpeg'
import  Adarsh from './img/Members/Adarsh.png'


function AboutUs() {
  return (
    // <MemberCard/>
    
    <Container>
        <h1 className="text-center mb-5 ">Meet Our Team</h1>
      <Row className = "my-4">
        <Col >
          <MemberCard name="Akash" mobileNo = "+918502805391" email = "akash_ks@ch.iitr.ac.in" location = "Los Angeles" photo = {Akash} />
        </Col>
        <Col >
          <MemberCard name="Abhay" mobileNo = "+917972379981" email="ahire_am@ch.iitr.ac.in" location = "California" photo = {Abhay}/>
        </Col>
        <Col >
          <MemberCard name="Adarsh" mobileNo = "+917464054955" email="adarsh_k@ch.iitr.ac.in" location = "Switzerland" photo = {Adarsh}/>
        </Col>
      </Row>
      <Row className = "my-4">
        <Col>
          <MemberCard name="Ankit" mobileNo ="+918340351674" email="ankit_k2@ch.iitr.ac.in" location ="Paris" photo = {Ankit}/>
        </Col>
        <Col>
          <MemberCard name="Anuvrat" mobileNo = "+91672345698" email="anuvrat_k@ch.iitr.ac.in" location="Washington" photo = {Anuvrat}/>
        </Col>
        <Col>
          <MemberCard name="Mohil" mobileNo = "+918769876508" email="mohil_k@ch.iitr.ac.in" location="Moscow" photo = {Mohil}/>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
