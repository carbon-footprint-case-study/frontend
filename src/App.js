import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/homePageComponents/HomePage";
import Deforestation from "./components/information/Deforestation";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/contactForm/contactform";

import BarGraph from './components/BarGraph'
import Sustainable from "./components/information/Sustainable";

function App() {
  return (
    <div className="App">
      
      <Router>
      <NavBar />
        <Routes>

          <Route path="/information/deforestaion" element={<Deforestation />} />
          <Route path="/information/sustainable-development" element={<Sustainable/>} />

          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<ContactForm/>} />
          <Route path="/" element={<HomePage />} />
          
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;


