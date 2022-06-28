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
      <input hidden id="menu__toggle" type="checkbox" />
      <label className="menu__btn" for="menu__toggle">
        <span></span>
      </label>
      <ul className="menu__box">
        <ButtonGroup
          variant="text"
          aria-label="text button group"
          className="menu__item"
        >
          <Link to={"/"} className="nav-inicio">
            <Button className="menu__item">Inicio</Button>
          </Link>
          <Link to={"/SobreMi"} className="nav-sobreMi">
            <Button className="menu__item">Sobre Mi</Button>
          </Link>
          <Link to={"/Portafolio"} className="nav-portafolio">
            <Button className="menu__item">Portafolio</Button>
          </Link>
          <Link to={"/Skills"} className="nav-skills">
            <Button className="menu__item">Skills</Button>
          </Link>
        </ButtonGroup>
      </ul>
    </div>
  );
};

export default Navbar;
