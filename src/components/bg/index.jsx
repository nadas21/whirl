import ot from "../../assets/img/ot.png";
import pochta from "../../assets/img/pochta.png";
import telegram from "../../assets/img/telegram.png";
import card from "../../assets/img/card.png";
import tez from "../../assets/img/tez.png";
import pul from "../../assets/img/pul.png"
import qol from "../../assets/img/qol.png"
import "./index.css";

export const Bg = () => {
  return (
    <section className="bg">
      <div className="container">
        <div className="bg-inner">
          <div className="bg-now">
            <div className="bg-box">
              <h2 className="bg-text">Trusted by 50,000+ companies</h2>
              <ul className="bg-list">
                <li className="bg-link">
                  <img src={ot} alt="" />
                </li>
                <li className="bg-link">
                  <img src={pochta} alt="" />
                </li>
                <li className="bg-link">
                  <img src={telegram} alt="" />
                </li>
                <li className="bg-link">
                  <img src={card} alt="" />
                </li>
              </ul>
            </div>
            <nav className="nav-inner">
              <div className="nav-box">
               <div className="nav-link-list">
               <ul className="nav-list">
                  <li className="nav-link">
                    <img className="nav-tez" src={tez} alt="" />
                    <h3 className="nav-text">Fast. Really fast.</h3>
                    <p className="nav-p">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </li>
                </ul>
                <ul className="nav-list">
                  <li className="nav-link">
                    <img className="nav-tez" src={pul} alt="" />
                    <h3 className="nav-text">Fast. Really fast.</h3>
                    <p className="nav-p">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </li>
                </ul>
                <ul className="nav-list">
                  <li className="nav-link">
                    <img className="nav-tez" src={qol} alt="" />
                    <h3 className="nav-text">Fast. Really fast.</h3>
                    <p className="nav-p">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </li>
                </ul>
               </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};
