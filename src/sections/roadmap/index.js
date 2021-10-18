import React from "react";
import "./style.css";
import Roadmap from "../../assets/images/roadmap-line.jpg";
const Index = () => {
  return (
    <section class="road-map section-space" id="roadmap">
      <div class="container">
        <div class="section-heading">
          <h2 className="text-center">Roadmap</h2>
        </div>
        <div class="map-chart d-none d-lg-block">
          <span>
            <img src={Roadmap} alt="" />
          </span>
          <div class="mapbox-1 wow fadeInLeft">
            <div class="mapbox-inner">
              <h4>25% sold</h4>
              <p>10 ETH donation to land conservation</p>
              <a
                href="https://www.nature.org/en-us/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.nature.org/en-us/
              </a>
            </div>
          </div>
          <div class="mapbox-2 wow fadeInRight">
            <div class="mapbox-inner">
              <h4>50% sold</h4>
              <p>15 ETH donation to climate change</p>
              <a href="https://www.edf.org/" target="_blank" rel="noreferrer">
                https://www.edf.org/
              </a>
            </div>
          </div>
          <div class="mapbox-3 wow fadeInLeft">
            <div class="mapbox-inner" target="_blank">
              <h4>75% sold </h4>
              <p>25 ETH donation to rescue bears</p>
              <a href="https://freethebears.org/">https://freethebears.org/</a>
            </div>
          </div>
          <div class="mapbox-4 wow fadeInRight">
            <div class="mapbox-inner">
              <h4>100%</h4>
              <p> We will create the Secret Baby Bear Society.</p>
            </div>
          </div>
        </div>

        <div className="row map-mobile d-lg-none">
          <div className="col-12">
            <div className="map-box map-box-1">
              <h4>25% sold</h4>
              <p>10 ETH donation to land conservation</p>
              <a
                href="https://www.nature.org/en-us/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.nature.org/en-us/
              </a>
            </div>
          </div>
          <div className="col-12">
            <div className="map-box map-box-2">
              <h4>50% sold</h4>
              <p>15 ETH donation to climate change</p>
              <a href="https://www.edf.org/" target="_blank" rel="noreferrer">
                https://www.edf.org/
              </a>
            </div>
          </div>
          <div className="col-12">
            <div className="map-box map-box-3">
              <h4>75% sold </h4>
              <p>25 ETH donation to rescue bears</p>
              <a href="https://freethebears.org/">https://freethebears.org/</a>
            </div>
          </div>
          <div className="col-12">
            <div className="map-box ">
              <h4>100%</h4>
              <p>We will create the Secret Baby Bear Society.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
