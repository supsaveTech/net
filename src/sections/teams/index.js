import React from "react";
import Img1 from "../../assets/images/22.png";
import Img2 from "../../assets/images/34.png";
import Img3 from "../../assets/images/27.png";
import "./style.css";
const Index = () => {
  return (
    <section className="section-space" id="team">
      <div className="container">
        <div className="section-heading">
          <h2>Team</h2>
        </div>
        <div className="row team">
          <div className="col-12 col-md-4">
            <div className="team-content">
              <div className="img-wrapper">
                <img src={Img1} alt="" className="img-fluid" />
              </div>
              <p>Founder</p>
              <span>
                {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam corrupti similique. */}
              </span>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="team-content">
              <div className="img-wrapper">
                <img src={Img2} alt="" className="img-fluid" />
              </div>
              <p>Community Manager</p>
              <span>
                {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam corrupti similique. */}
              </span>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="team-content">
              <div className="img-wrapper">
                <img src={Img3} alt="" className="img-fluid" />
              </div>
              <p>CFO</p>
              <span>
                {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam corrupti similique. */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
