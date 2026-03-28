import "./Hero.css";
import model from "../assets/car-you.png";
import model1 from "../assets/car-C.png";
import model2 from "../assets/Roy.png";
import model3 from "../assets/car-C.png";


const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <span className="tag">NEW ARRIVALS</span>
        <h1>
          new car 👋 <br />
          Collections <br />
          for everyone
        </h1>
        <button className="hero-btn">Latest Collection →</button>
      </div>

      <div className="hero-right">
        <div className="slider">
          <img src={model} alt="model" />
          <img src={model1} alt="model" />
          <img src={model2} alt="model" />
         <img src={model3} alt="model" />
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
