import React from "react";
import "./style.css";
import Roadmap from "../../assets/images/roadmap-line.jpg";
const Index = () => {  
  return (
    <section class="road-map section-space" id="roadmap">
      <div class="container">
        <div class="section-heading">
          <h2 className="text-center">Utility Roadmap</h2>
        </div>
        <div class="map-chart d-none d-lg-block">
          <span>
            <img src={Roadmap} alt="" />
          </span>
          <div class="mapbox-1 wow fadeInLeft">
            <div class="mapbox-inner">
              <h4>Q1/U1: Goosepunks' Lore</h4>
              <p>This quarter shall feature the lunch of Goosepunks Lore,
                an Artifical Intelligence (AI) powered utility that would enable all
                goose create a backdrop story to their NFT. Stay tuned, stay updated. 
                More announcements will be communicated in due course.
              </p>
              <a
                href="https://www.app.goosepunks.com"
                target="_blank"
                rel="noreferrer"
              >
                https://www.app.goosepunks.com
              </a>
            </div>
          </div>
          <div class="mapbox-2 wow fadeInRight">
            <div class="mapbox-inner">
              <h4>Q2/U2: Goosepunks' Marketplace</h4>
              <p>This quarter shall feature the lunch of Goosepunks Marketplace,
                a market where all goose can mint their NFTs as well as upload and sell their NFTs.</p>
              <a href="https://www.app.goosepunks.com" target="_blank" rel="noreferrer">
              https://www.app.goosepunks.com
              </a>
            </div>
          </div>
          <div class="mapbox-3 wow fadeInLeft">
            <div class="mapbox-inner" target="_blank">
              <h4>Q2/U3: Goosepunks' Gaggle</h4>
              <p>We shall be launching the Goosepunks Gaggle in this quarter also,
                 an interactive platfrom where all goose can come together to have fun, learn from one another
                 and most importantly just GAGGLE.</p>
              <a href="https://www.app.goosepunks.com">https://www.app.goosepunks.com</a>
            </div>
          </div>
          <div class="mapbox-4 wow fadeInRight">
            <div class="mapbox-inner">
              <h4>Q3/U4: Goosepunks' Rarible Integration</h4>
              <p> Who doesn't love easter eggs, we would let you guess what Goosepunks' Rarible Integration
                would be all about. But fear not for this goose shall continue to drop hints about that as we progress in due course...
                Goose Gaggles
              </p>
            </div>
          </div>
        </div>

        <div className="row map-mobile d-lg-none">
          <div className="col-12">
            <div className="map-box map-box-1">
            <h4>Q1/U1: Goosepunks' Lore</h4>
              <p>This quarter shall feature the lunch of Goosepunks Lore,
                an Artifical Intelligence (AI) powered utility that would enable all
                goose create a backdrop story to their NFT. Stay tuned, stay updated. 
                More announcements will be communicated in due course.
              </p>
              <a
                href="https://www.app.goosepunks.com"
                target="_blank"
                rel="noreferrer"
              >
                https://www.app.goosepunks.com
              </a>
            </div>
          </div>
          <div className="col-12">
            <div className="map-box map-box-2">
            <h4>Q2/U2: Goosepunks' Marketplace</h4>
              <p>This quarter shall feature the lunch of Goosepunks Marketplace,
                a market where all goose can mint their NFTs as well as upload and sell their NFTs.</p>
              <a href="https://www.app.goosepunks.com" target="_blank" rel="noreferrer">
              https://www.app.goosepunks.com
              </a>
            </div>
          </div>
          <div className="col-12">
            <div className="map-box map-box-3">
            <h4>Q2/U3: Goosepunks' Gaggle</h4>
              <p>We shall be launching the Goosepunks Gaggle in this quarter also,
                 an interactive platfrom where all goose can come together to have fun, learn from one another
                 and most importantly just GAGGLE.</p>
              <a href="https://www.app.goosepunks.com">https://www.app.goosepunks.com</a>
            </div>
          </div>
          <div className="col-12">
            <div className="map-box ">
            <h4>Q3/U4: Goosepunks' Rarible Integration</h4>
              <p> Who doesn't love easter eggs, we would let you guess what Goosepunks' Rarible Integration
                would be all about. But fear not for this goose shall continue to drop hints about that as we progress in due course...
                Goose Gaggles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default Index;
