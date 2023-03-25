import React from "react";
import TabBar from "./TabBar";
import Carousels from "./Carousels";
import { Container } from "react-bootstrap";

function HomePage() {
  // const [data , setData] = useState([0 , 0 , 0 , 0])

  return (
    <div>
      <Carousels />
      <Container>
        <h1 style={{textAlign : "center"}} className="mx-5 my-5">CARBON FOOTPRINT CALCULATOR</h1>
        <TabBar />
      </Container>
    </div>
  );
}

export default HomePage;