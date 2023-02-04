import React from 'react'
import InputCard from './InputCard'
import TungstenRoundedIcon from '@mui/icons-material/TungstenRounded';
import PropaneTankTwoToneIcon from '@mui/icons-material/PropaneTankTwoTone';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import WaterIcon from '@mui/icons-material/Water';
import { Col, Container, Row } from 'react-bootstrap';

function Home() {

  const rm = "Rs./month";

  const elecUnit = [rm, "KWhr/month"];
  const natGasUnit = [rm, "therms/month"];
  const oilUnit = [rm, "gallons/month"];
  const waterUnit = [rm, "litre/month"];

  return (
    <Container>
      <Row className="justify-content-md-center my-5">
        <Col className='my-1' xs={{ span: 12 }} md={{ span: 10}}>
          <InputCard title ={<span><TungstenRoundedIcon /> Electricity</span>} units={elecUnit} value ={100}/>
        </Col>
        <Col className='my-1' xs={{ span: 12 }} md={{ span: 10}}>
          <InputCard title ={<span><PropaneTankTwoToneIcon /> Natural Gas</span>} units={natGasUnit} value ={100}/>
        </Col>
        <Col className='my-1' xs={{ span: 12 }} md={{ span: 10}}>
          <InputCard title ={<span><OilBarrelIcon /> Heating Oil</span>} units={oilUnit} value ={100}/>
        </Col>
        <Col className='my-1' xs={{ span: 12 }} md={{ span: 10}}>
          <InputCard title ={<span><WaterIcon /> Water Usage</span>} units={waterUnit} value ={100}/>
        </Col>
     </Row>
    </Container >
  )

}

export default Home