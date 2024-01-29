import "./index.css";
import chiroq from "../../assets/img/chiroq.png";

export const Set = () => {
  return (
    <section className="set">
      <div className="container">
        <div className="set-now">
          <dir className="set-box">
            <img className="set-img" src={chiroq} alt="" width={382} height={374} />
            <div className="set-text">
              <h2 className="set-h2">Set, forget, and then track.</h2>
              <p className="set-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <h3 className="set-h3">Understand your options</h3>
              <h3 className="set-h3">No lock-ins</h3>
              <h3 className="set-h3">You own the shares</h3>
              <button className="set-btn">Book a Demo</button>
            </div>
          </dir>
        </div>
      </div>
    </section>
  );
};
