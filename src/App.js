import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
//Views
import Home from "./Views/Home/Home";
import AboutMe from "./Views/AboutMe/AboutMe";
import Portafolio from "./Views/Portafolio/Portafolio";
import Skills from "./Views/Skills/Skills";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SobreMi" element={<AboutMe />} />
        <Route path="/Portafolio" element={<Portafolio />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
