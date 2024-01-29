import chiziq from "../../assets/img/chiziq.png";
import monitor from "../../assets/img/monitor.png"
import "./index.css";

export const Hello = () => {
  return (
    <section className="bg">
      <div className="container">
        <div className="hello-inner">
          <div className="hello-now">
            <div className="hello-box">
              <h2 className="hello-h2">
                We will take care of everything, so you can get back to
                relaxing.
              </h2>
              <img src={chiziq} alt="" />
              <h3 className="hello-h3">Anti-loss technology</h3>
              <p className="hello-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <img src={chiziq} alt="" />
              <h3 className="hello-text-h3">Exchange easily</h3>
              <img src={chiziq} alt="" />
              <h3 className="hello-text-h3">Fully encrypted</h3>
              <img src={chiziq} alt="" />
              <h3 className="hello-text-h3">Plenty of options</h3>
              <img src={chiziq} alt="" />
            </div>
            <img src={monitor} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
