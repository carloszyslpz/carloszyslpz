import "./NavBar.css";
import { Link } from "react-router-dom";
import ButtonGroup from "@mui/material/ButtonGroup/ButtonGroup";
import Button from "@mui/material/Button/Button";

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/" className="nav-logo">
        <p>Carlos Zayas</p>
      </Link>
      <ul>
        <ButtonGroup variant="text" aria-label="text button group">
          <Link to={"/"} className="nav-inicio">
            <Button>Inicio</Button>
          </Link>
          <Link to={"/SobreMi"} className="nav-sobreMi">
            <Button>Sobre Mi</Button>
          </Link>
          <Link to={"/Portafolio"} className="nav-portafolio">
            <Button>Portafolio</Button>
          </Link>
          <Link to={"/Skills"} className="nav-skills">
            <Button>Skills</Button>
          </Link>
        </ButtonGroup>
      </ul>
    </div>
  );
};

export default Navbar;
