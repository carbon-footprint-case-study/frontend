import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MemberCard from "./MemberCard";
import  Akash from './img/Members/Akash.jpeg'
import  Abhay from './img/Members/Abhay.jpeg'
import  Ankit from './img/Members/Ankit.jpg'
import  Anuvrat from './img/Members/Anuvrat.jpeg'
import  Mohil from './img/Members/Mohil.jpeg'
import  Adarsh from './img/Members/Adarsh.png'
import Ishan from './img/Members/Ishan.jpeg'


function AboutUs() {
  return (
    // <MemberCard/>
    
    <Container>
        <h1 className="text-center mb-5">Meet Our Team</h1>
        <Row className="my-10 justify-content-center">

         <Col md="4">
        <MemberCard name="Ishan" mobileNo = "+91XXXXXXXXXX" email = "mailto:ibajaj@iitk.ac.in" location = "Kanpur" photo = {Ishan} ln = "https://www.linkedin.com/in/ishan-bajaj-32aa7386/?originalSubdomain=in"/>
         </Col>
      </Row>
      <Row className = "my-4">
        <Col >
          <MemberCard name="Akash" mobileNo = "+918502805391" email = "mailto:akash_ks@ch.iitr.ac.in" location = "Bihar" photo = {Akash} ln = "https://www.linkedin.com/in/akash-kumar-singh-317959202/" />
        </Col>
        <Col >
          <MemberCard name="Abhay" mobileNo = "+917972379981" email="mailto:ahire_am@ch.iitr.ac.in" location = "Mumbai" photo = {Abhay} ln = "https://www.linkedin.com/in/abhay-ahire-722514239/" />
        </Col>
        <Col >
          <MemberCard name="Adarsh" mobileNo = "+917464054955" email="mailto:adarsh@ch.iitr.ac.in" location = "Patna" photo = {Adarsh} ln = "https://www.linkedin.com/in/adarsh-k-715994217/" />
        </Col>
      </Row>
      <Row className = "my-4">
        <Col>
          <MemberCard name="Ankit" mobileNo ="+918340351674" email="mailto:ankit_k2@ch.iitr.ac.in" location ="Roorkee" photo = {Ankit} />
        </Col>
        <Col>
          <MemberCard name="Anuvrat" mobileNo = "+91672345698" email="mailto:anuvrat_k@ch.iitr.ac.in" location="gaya" photo = {Anuvrat} ln = "https://www.linkedin.com/in/anuvrat-kumar-76aaaa204/" />
        </Col>
        <Col>
          <MemberCard name="Mohil" mobileNo = "+918769876508" email="mailto:mohil_k@ch.iitr.ac.in" location="surat" photo = {Mohil} ln = "https://www.linkedin.com/in/mohil-kapuriya-556a7a228/" />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
