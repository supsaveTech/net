import React from "react";
import Gal1 from "../../assets/images/21.png";  
import Gal2 from "../../assets/images/34.png";
import Gal3 from "../../assets/images/26.png";
import Gal4 from "../../assets/images/37.png";
import Gal5 from "../../assets/images/32.png";
import Gal6 from "../../assets/images/38.png";
import Gal7 from "../../assets/images/24.png";
import Gal8 from "../../assets/images/39.png";
import "./style.css";

const Index = () => {
  return (
    <section className="section-space">
      <div className="container-fluid">
        <div className="row p-0">
          <div className="col-6 col-sm-6 col-md-3 p-0">
            <img className="img-fluid" src={Gal1} alt="gallary" />
          </div>
          <div className="col-6 col-sm-6 col-md-3 p-0">
            <img className="img-fluid" src={Gal2} alt="gallary" />
          </div>
          <div className="col-6 col-sm-6 col-md-3 p-0">
            <img className="img-fluid" src={Gal3} alt="gallary" />
          </div>
          <div className="col-6 col-sm-6 col-md-3 p-0">
            <img className="img-fluid" src={Gal4} alt="gallary" />
          </div>
          <div className="col-6 col-sm-6 col-md-3 p-0">
            <img className="img-fluid" src={Gal5} alt="gallary" />
          </div>
          <div className="col-6 col-sm-6 col-md-3 p-0">
            <img className="img-fluid" src={Gal6} alt="gallary" />
          </div>
          <div className="col-6 col-sm-6 col-md-3 p-0">
            <img className="img-fluid" src={Gal7} alt="gallary" />
          </div>
          <div className="col-6 col-sm-6 col-md-3 p-0">
            <img className="img-fluid" src={Gal8} alt="gallary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
