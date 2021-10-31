import React from "react";
import Img1 from "../../assets/images/22.png";
import Img2 from "../../assets/images/34.png";
import Img3 from "../../assets/images/27.png";
import Twitter from "../../assets/images/twitter.png";
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
              <p className="social-icon">Founder &nbsp;

              {/* <div className="social-icons"> */}
          <a
            href="https://twitter.com/goosepunks"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Twitter} alt="twitter" />
          </a>
           
        {/* </div> */}
 
              </p>
              {/* <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam corrupti similique.
              </span> */}
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="team-content">
              <div className="img-wrapper">
                <img src={Img2} alt="" className="img-fluid" />
              </div>
              <p className="social-icon">Community Manager &nbsp;
              
              <a
            href="https://twitter.com/goosepunks"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Twitter} alt="twitter" />
          </a>
              </p>
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
              <p className="social-icon">Robin Goose &nbsp;
              
              <a
            href="https://twitter.com/goosepunks"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Twitter} alt="twitter" />
          </a>
              
              </p>
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
