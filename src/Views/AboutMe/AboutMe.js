import "./AboutMe.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const AboutMe = () => {
  return (
    <div className="main-about">
      <div className="card-img">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="400"
            image="./foto-portafolio.jpg"
            alt="green iguana"
          />
        </Card>
      </div>
      <div className="container-descripcion">
        <h1>Carlos Zayas</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit
          amet hendrerit tortor. Nunc vel felis vestibulum, varius tortor quis,
          faucibus magna. Nullam diam augue, lacinia sit amet ultricies at,
          ornare nec augue. Phasellus nec lorem nibh. Cras eget eros nunc.
          Integer purus ligula, viverra id egestas id, fermentum eget ante.
          Donec lacus est, tristique sed justo a, hendrerit porta ex. Vestibulum
          ut neque in tortor auctor luctus ac sit amet nunc. Etiam fermentum
          congue dapibus. Quisque pretium placerat imperdiet. Praesent eu odio
          maximus, mattis erat sed, fringilla nunc.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
