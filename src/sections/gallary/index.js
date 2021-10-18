import React from "react";
import Gal1 from "../../assets/images/gal-1.jpg";
import Gal2 from "../../assets/images/gal-2.jpg";
import Gal3 from "../../assets/images/gal-3.jpg";
import Gal4 from "../../assets/images/gal-4.jpg";
import Gal5 from "../../assets/images/gal-5.jpg";
import Gal6 from "../../assets/images/gal-6.jpg";
import Gal7 from "../../assets/images/gal-7.jpg";
import Gal8 from "../../assets/images/gal-8.jpg";
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
