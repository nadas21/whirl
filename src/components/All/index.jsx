import "./index.css";
import tra from "../../assets/img/tra.png";
import lupa from "../../assets/img/lupa.png";

export const All = () => {
  return (
    <section className="all">
      <div className="container">
        <div className="all-inner">
          <div className="all-now">
            <h2 className="all-h2">What's Whirl all about?</h2>
            <ul className="all-list">
              <li className="all-link-list">
                <h3 className="all-h3">All on one place.</h3>
                <p className="all-p">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </li>
            </ul>
            <ul className="all-list">
              <li className="all-link-list">
                <img src={lupa} alt="" />
                <h3 className="all-h3">All on one place.</h3>
                <p className="all-p">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </li>
            </ul>
            <ul className="all-list">
              <li className="all-link-list">
                <img src={tra} alt="" />
                <h3 className="all-h3">All on one place.</h3>
                <p className="all-p">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
