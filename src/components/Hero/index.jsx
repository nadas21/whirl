import "./index.css";
import daftar from "../../assets/img/daftar.png"


export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-now">
            <div className="hero-text">
              <h2 className="hero-h2">Your everyday tasks, automated.</h2>
              <p className="hero-p">Whirl lets you design and streamline your everyday tasks and workflows in just a few clicks.</p>
              <button className="hero-btn">Book a demo</button>
              <button className="hero-btn-item">Learn more</button>
            </div>
            <img className="hero-img" src={daftar} alt="" width={452} height={422} />  
          </div>
        </div>
      </div>
    </section>
  );
};
