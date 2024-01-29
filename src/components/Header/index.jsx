import "./index.css";
import whirli from "../../assets/img/whirl.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="header-box">
            <div className="header-list">
              <ul className="header-list-item">
                <li className="header-li">
                  <a className="header-link" href="#">
                    <img src={whirli} alt="" width={106} height={37} />
                  </a>
                </li>
                <li className="header-li">
                  <a className="header-link" href="#">
                    <h3>Featuras</h3>
                  </a>
                </li>
                <li className="header-li">
                  <a className="header-link" href="#">
                    <h3>Pricing</h3>
                  </a>
                </li>
                <li className="header-li">
                  <a className="header-link" href="#">
                    <h3>Integrations</h3>
                  </a>
                </li>
                <li className="header-li">
                  <a className="header-link" href="#">
                    <h3>Learn</h3>
                  </a>
                </li>
                <div className="header-btn-list">
                  <button className="header-btn">Sig in</button>
                  <button className="header-btn-item">Book a demo</button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
