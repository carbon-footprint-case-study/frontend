import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/homePageComponents/HomePage";
import Deforestation from "./components/information/Deforestation";
import MemberCard from "./components/MemberCard";
import AboutUs from "./components/AboutUs";


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>

          <Route path="/information/deforestaion" element={<Deforestation />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
