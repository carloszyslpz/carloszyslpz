import "./NavBar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <p>Carlos Zayas</p>
      <ul>
        <Link to="/">
          <li>Inicio</li>
        </Link>
        <Link to="/SobreMi">
          <li>Sobre Mi</li>
        </Link>
        <Link to="/Portafolio">
          <li>Portafolio</li>
        </Link>
        <Link to={"/Skills"}>
          <li>Skills</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
