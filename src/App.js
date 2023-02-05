import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/homePageComponents/HomePage";
import Deforestation from "./components/information/Deforestation";
import ContactForm from "./components/contactForm/contactform";

function App() {
  return (
    <div className="App">
      
      <Router>
      <NavBar />
        <Routes>
          <Route path="/information/deforestaion" element={<Deforestation />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactForm/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
