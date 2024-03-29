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
              <ExternalLink
                className="portfolio-btn"
                href="https://el-surtidor-comprobacion-pago.vercel.app/comprobacion_pago.html"
              >
                Ver Página
              </ExternalLink>
            </Button>
            <Button>
              <ExternalLink
                className="portfolio-btn"
                href="https://github.com/carloszyslpz/El-Surtidor-Comprobacion-Pago.git"
              >
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
              <ExternalLink
                className="portfolio-btn"
                href="https://juego-adivina-numero.vercel.app/"
              >
                Ver Página
              </ExternalLink>
            </Button>
            <Button>
              <ExternalLink
                className="portfolio-btn"
                href="https://github.com/carloszyslpz/Juego-Adivina-Numero.git"
              >
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
            alt="DennDenn Design & Illustration"
            image="img/DennDenn.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="white">
              DennDenn Design & Illustration
            </Typography>
            <Typography gutterBottom variant="h6" component="div" color="white">
              HTML, CSS, JavaScript, ReactJS, Material UI, Firebase
            </Typography>
            <Typography variant="body2" color="white;">
              Tienda/Portafolio profesional de diseños e ilustraciones
            </Typography>
          </CardContent>
          <CardActions className="portfolio-btns">
            <Button>
              <ExternalLink
                className="portfolio-btn"
                href="https://denndenn-design-illustration.vercel.app/"
              >
                Ver Página
              </ExternalLink>
            </Button>
            <Button>
              <ExternalLink
                className="portfolio-btn"
                href="https://github.com/carloszyslpz/petonets-app.git"
              >
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
            alt="E-commerce"
            image="img/ecommerce.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="white">
              E-commerce
            </Typography>
            <Typography gutterBottom variant="h6" component="div" color="white">
              HTML, CSS, JavaScript, ReactJS, Firebase
            </Typography>
            <Typography variant="body2" color="white;">
              Tienda en línea de diversos productos
            </Typography>
          </CardContent>
          <CardActions className="portfolio-btns">
            <Button>
              <ExternalLink
                className="portfolio-btn"
                href="https://project-e-commerce-reactjs.vercel.app/"
              >
                Ver Página
              </ExternalLink>
            </Button>
            <Button>
              <ExternalLink
                className="portfolio-btn"
                href="https://github.com/carloszyslpz/e-commerce.git"
              >
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
