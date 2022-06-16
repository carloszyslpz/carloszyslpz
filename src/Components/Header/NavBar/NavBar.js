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
        <Link to="/">
          <li>Sobre Mi</li>
        </Link>
        <Link to="/">
          <li>Portafolio</li>
        </Link>
        <Link to={"/"}>
          <li>Habilidades</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
