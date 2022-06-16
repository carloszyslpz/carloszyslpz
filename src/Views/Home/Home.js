import "./Home.css";

const Home = () => {
  return (
    <div className="main-home">
      <div className="text-home">
        <p>Hola, soy</p>
        <h1>Carlos Zayas</h1>
        <h2>Front-End Developer Jr.</h2>
      </div>
      <div>IMAGEN CON CSS</div>
      <video
        className="video-background"
        src="./fondo-proyecto.mp4"
        type="video/mp4"
        autoPlay
        muted
        loop
      ></video>
    </div>
  );
};

export default Home;
