import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/homePageComponents/HomePage";
import Deforestation from "./components/information/Deforestation";
import Climate from "./components/information/Climate"
import AboutUs from "./components/aboutUs/AboutUs";
import ContactForm from "./components/contactForm/contactform";

import BarGraph from './components/homePageComponents/BarGraph'
import Sustainable from "./components/information/Sustainable";
import FrontPage from "./components/frontPage/FrontPage";
import References from "./components/information/References";


function App() {
  return (
    <div className="App">
      
      
      <Router>
      <NavBar className='navbar' />
        <Routes>

          <Route path="/information/deforestaion" element={<Deforestation />} />
          <Route path="/information/references" element={<References />} />
          <Route path="/information/sustainable-development" element={<Sustainable/>} />
          <Route path="/information/climate" element={<Climate/>} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<ContactForm/>} />
          <Route path="/calculator" element={<HomePage />} />
          <Route path="/" element={<FrontPage />} />
          
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;


