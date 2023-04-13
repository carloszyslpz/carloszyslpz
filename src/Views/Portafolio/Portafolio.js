import "./Portafolio.css";
import { Button } from "@mui/material";
import { ExternalLink } from "react-external-link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Portafolio = () => {
  return (
    <div className="main-portafolio">
      <div>
        <Card
          sx={{ maxWidth: 345, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
          className="portfolio-card"
        >
          <CardMedia
            component="img"
            alt="El Surtidor"
            image="img/surtidor-confirmacion-de-pago.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="white">
              El Surtidor
            </Typography>
            <Typography gutterBottom variant="h6" component="div" color="white">
              HTML
            </Typography>
            <Typography variant="body2" color="white;">
              Plantilla HTML para invoice de emails de la empresa
            </Typography>
          </CardContent>
          <CardActions className="portfolio-btns">
            <Button>
              <ExternalLink className="portfolio-btn" href="#">
                Ver Página
              </ExternalLink>
            </Button>
            <Button>
              <ExternalLink className="portfolio-btn" href="#">
                Código
              </ExternalLink>
            </Button>
          </CardActions>
        </Card>
      </div>
      <div>
        <Card
          sx={{ maxWidth: 345, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
          className="portfolio-card"
        >
          <CardMedia
            component="img"
            alt="Adivina Mi Número"
            image="img/adivina-mi-numero.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="white">
              Adivina Mi Número
            </Typography>
            <Typography gutterBottom variant="h6" component="div" color="white">
              HTML, CSS, JavaScript
            </Typography>
            <Typography variant="body2" color="white;">
              Juego al que debes adivinar qué número está escondido en la caja
            </Typography>
          </CardContent>
          <CardActions className="portfolio-btns">
            <Button>
              <ExternalLink className="portfolio-btn" href="#">
                Ver Página
              </ExternalLink>
            </Button>
            <Button>
              <ExternalLink className="portfolio-btn" href="#">
                Código
              </ExternalLink>
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Portafolio;
