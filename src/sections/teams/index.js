import React from "react";
import Img1 from "../../assets/images/img9.png";
import Img2 from "../../assets/images/34.png";
import Img3 from "../../assets/images/27.png";
import Img4 from "../../assets/images/img8.png";
import Img5 from "../../assets/images/img11.png";
import Img6 from "../../assets/images/img10.png";
import Img7 from "../../assets/images/40.png";
import Twitter from "../../assets/images/twitter.png";
import Discord from "../../assets/images/discord.png";
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
            href="https://twitter.com/zbits33"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Twitter} alt="twitter" />
          </a>
          &nbsp;
          <a
            href="https://discord.gg/zbits33"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Discord} alt="discord" />
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
              <p className="social-icon">CFO &nbsp;
              
              <a
            href="https://twitter.com/JxT_2288"
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
              <p className="social-icon">Artist &nbsp;
               
              <a
            href="https://twitter.com/NSzero07"
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
                <img src={Img5} alt="" className="img-fluid" />
              </div>
              <p className="social-icon">Public Relations Officer &nbsp;
               
              <a
            href="https://twitter.com/@whisper0829"
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
                <img src={Img4} alt="" className="img-fluid" />
              </div>
              <p className="social-icon">Blockchain Dev &nbsp;
               
              <a
            href="https://twitter.com/mattdykema"
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
                <img src={Img6} alt="" className="img-fluid" />
              </div>
              <p className="social-icon">Web Dev &nbsp;
               
              <a
            href="https://twitter.com/supsavedamarine"
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
                <img src={Img7} alt="" className="img-fluid" />
              </div>
              <p className="social-icon">Creative Designer &nbsp;
               
              <a
            href=" https://twitter.com/wozurd"
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
         {/*   <div id="theVideo" className="container text-center">     
                <video  autoplay="autoplay" loop="loop" width="300" height="480" controls>
                    <source src="https://i.gyazo.com/eb7c0cc720d03a3358a9b821e386b257.mp4" type="video/mp4" />
                </video>
            </div> */}
      </div>
    </section>
  );
};

export default Index;
