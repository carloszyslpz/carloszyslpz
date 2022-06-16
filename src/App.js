import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
//Views
import Home from "./Views/Home/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
