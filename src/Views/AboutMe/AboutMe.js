import "./AboutMe.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { ExternalLink } from "react-external-link";
import { Button } from "@mui/material";

const AboutMe = () => {
  return (
    <div className="main-about">
      <div className="card-img">
        <Card>
          <CardMedia
            className="cardMedia-img"
            component="img"
            image="./img/foto-portafolio.jpg"
            alt="foto-portafolio"
          />
        </Card>
      </div>
      <div className="container-descripcion">
        <h1>CARLOS ZAYAS</h1>
        <p>
          Soy desarrollador front end junior, apasionado por la ciencia ficción,
          tecnología, la música y la fotografía. Mi objetivo es combinar mi
          creatividad con mis habilidades técnicas para poder crear experiencias
          web que sean de utilidad. Estoy en busqueda de una oportunidad laboral
          que me haga explotar mis habilidades y conocimientos, así como que me
          ayude a crecer profesional y personalmente. Los perritos son mejor que
          los gatos, no pienso discutirlo.
        </p>
        <div className="cv-btns">
          <Button>
            <ExternalLink
              className="cv-btn"
              href="https://drive.google.com/file/d/1Dd5J7kIK9PnORRj9QZBZhROA6z6Nm58U/view?usp=sharing"
            >
              Ver CV
            </ExternalLink>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
