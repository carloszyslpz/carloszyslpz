import "./Home.css";

const Home = () => {
  return (
    <div className="main-home text-home">
      <p>Hola, soy</p>
      <h1 className="name-home">Carlos Zayas</h1>
      <h2>Front-End Developer Jr.</h2>
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
