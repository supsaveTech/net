import React from "react";
import "./style.css";
import Roadmap from "../../assets/images/roadmap-line.jpg";
import roadmapPoint from "../../assets/images/roadmap-point.svg";
const Index = () => {  
  return (
    <section class="road-map section-space" id="roadmap">
      <div class="container">
        <div class="section-heading">
          <h2 className="text-center">GoosePunks Roadmap <br /> 🦢🛤️🧭</h2><br />
        </div>   
        <div class="map-chart d-none d-lg-block">
          <span>
            <img src={Roadmap} alt="" />
          </span>
          <div class="mapbox-1 wow fadeInLeft">
            <div class="mapbox-inner">
              <h4> Phase 1: ✔️</h4>
              <li> Community Development. </li> 
             <li> Website Development. </li>   
             <li> Private sale. </li>
             <li> Website & GoosePunks lore tool launch. </li>
             <li> General whitelist sale. </li>
             <li> Community contests. </li>
             <li> GoosePunks Game roadmap released. </li>
             <li> Staking development for GoosePunks starts. </li>
             <li> First 3D render of a GoosePunk is live. </li>
             <li> GoosePunks Marketplace development. </li>
             <li> Series 2 “Drifters” development starts with the community. </li>
            </div>
          </div>
          <div class="mapbox-2 wow fadeInRight">
            <div class="mapbox-inner">
            <h4> Phase 1 Utility: GoosePunks' Lore ✔️ </h4>
              <p>
                This phase shall feature the launch of GoosePunks Lore
                 - an Artifical Intelligence (AI) powered utility that would enable all
                geese to create a backdrop story to their NFT. Stay tuned, stay updated. 
                More announcements will be communicated in due course.
              </p>
              <a href="#lore" rel="noreferrer">
              https://www.goosepunks.com
              </a> 
            </div>
          </div>
          <div class="mapbox-3 wow fadeInLeft">
            <div class="mapbox-inner" target="_blank">
            <h4>
            <img
              className="roadmap-point3"
              src={roadmapPoint}
              alt="roadmapPoint"
            />&nbsp;
              Phase 2:</h4>
              
            <li> GoosePunks Marketplace Launch. </li> 
             <li> Game Map Development starts. </li>   
             <li> Hiring and onboarding Project Manager and Game Developers. </li>
             <li> In Game item development starts with community input. </li>
             <li> GoosePunks metaverse integration (sandbox, decentraland, NFT worlds). </li>
             <li> Submissions for receiving a physical copy of a GoosePunk loaded on the website. </li>
              
            </div>
          </div>
          <div class="mapbox-4 wow fadeInRight">
            <div class="mapbox-inner">
              <h4><img
              className="roadmap-point3"
              src={roadmapPoint}
              alt="roadmapPoint"
            />&nbsp;Phase 2 Utility: GoosePunks' Marketplace</h4>
              <p> This phase shall feature the launch of GoosePunks Marketplace
               - a market where all geese can mint their NFTs as well as upload and sell their NFTs.
              </p>
              <a href="https://www.app.goosepunks.com" target="_blank" rel="noreferrer">
              https://www.app.goosepunks.com
              </a>
            </div>
          </div>
          <div class="mapbox-5 wow fadeInLeft">
            <div class="mapbox-inner" target="_blank">
            <h4>
            <img
              className="roadmap-point3"
              src={roadmapPoint}
              alt="roadmapPoint"
            />&nbsp;
              Phase 3:</h4>
              
             <li> Launch of the GoosePunks Gaggle. </li>   
             <li> Merchandise partnership and concepts for merchandise begins. </li>
             <li> Game map is live and viewable on goosepunks.com, users can then purchase land plots. </li>
             <li> In game items are now live for purchase. </li>
             <li> GoosePunk holders can now customize their NFT and pair their ingame assets to their user profile. </li>
            </div>
          </div>
          <div class="mapbox-6 wow fadeInRight">
            <div class="mapbox-inner">
              <h4><img
              className="roadmap-point3"
              src={roadmapPoint}
              alt="roadmapPoint"
            />&nbsp;Phase 3 Utility: GoosePunks' Gaggle</h4>
              <p> In this phase, we shall be launching the GoosePunks' Gaggle
                 - an interactive platform where all geese can come together to have fun, 
                learn from one another, and most importantly just GAGGLE.
              </p>
              <a href="https://www.app.goosepunks.com" target="_blank" rel="noreferrer">
              https://www.app.goosepunks.com
              </a>
            </div> 
          </div>
          <div class="mapbox-7 wow fadeInLeft">
            <div class="mapbox-inner" target="_blank">
            <h4>
            <img
              className="roadmap-point3"
              src={roadmapPoint}
              alt="roadmapPoint"
            />&nbsp;
              Phase 4:</h4>
              <li> Rarible Intergration. </li> 
             <li> GoosePunks in game currency development. </li> 
             <li> GoosePunks staking is live. </li>   
             <li> To be continued… </li>
            </div> 
          </div>
          <div class="mapbox-8 wow fadeInRight">
            <div class="mapbox-inner">
              <h4><img
              className="roadmap-point3"
              src={roadmapPoint}
              alt="roadmapPoint"
            />&nbsp;Phase 4 Utility: Rarible Integration</h4>
              <p> Who doesn't love easter eggs? We would let you guess what GoosePunks' Rarible Integration
                would be all about. But fear not, for this goose shall continue to drop hints about 
                that as we progress in due course... Goose Gaggles.
              </p>
              <a href="https://www.app.goosepunks.com" target="_blank" rel="noreferrer">
              https://www.app.goosepunks.com
              </a>
            </div>
          </div>

        </div>

        <div className="row map-mobile d-lg-none">
          <div className="col-12">
            <div className="map-box map-box-1">
            <h4>Phase 1: ✔️</h4>
            <li> Community Development. </li> 
             <li> Website Development. </li>   
             <li> Private sale. </li>
             <li> Website & GoosePunks lore tool launch. </li>
             <li> General whitelist sale. </li>
             <li> Community contests. </li>
             <li> GoosePunks Game roadmap released. </li>
             <li> Staking development for GoosePunks starts. </li>
             <li> First 3D render of a GoosePunk is live. </li>
             <li> GoosePunks Marketplace development. </li>
             <li> Series 2 “Drifters” development starts with the community. </li>
            </div>
          </div>
          <div className="col-12">
            <div className="map-box map-box-2">
            <h4> Phase 1 Utility: GoosePunks' Lore ✔️ </h4>
                <p>
                This quarter shall feature the launch of GoosePunks Lore
                 - an Artifical Intelligence (AI) powered utility that would enable all
                geese to create a backdrop story to their NFT. Stay tuned, stay updated. 
                More announcements will be communicated in due course.
            </p>
            <a href="#lore" rel="noreferrer">
            https://www.goosepunks.com
            </a>
            </div>
          </div>
          <div className="col-12">
            <div className="map-box map-box-3">
            <h4>Phase 2:</h4>
              
              <li> GoosePunks Marketplace Launch. </li> 
               <li> Game Map Development starts. </li>   
               <li> Hiring and onboarding Project Manager and Game Developers. </li>
               <li> In Game item development starts with community input. </li>
               <li> GoosePunks metaverse integration (sandbox, decentraland, NFT worlds). </li>
               <li> Submissions for receiving a physical copy of a GoosePunk loaded on the website. </li>
            </div>
          </div>
          <div className="col-12">
            <div className="map-box map-box-4"> 
            <h4>Phase 2 Utility: GoosePunks' Marketplace</h4>
              <p> This phase shall feature the launch of GoosePunks Marketplace
               - a market where all geese can mint their NFTs as well as upload and sell their NFTs.
              </p>
              <a href="https://www.app.goosepunks.com" target="_blank" rel="noreferrer">
              https://www.app.goosepunks.com
              </a>
            </div>
            <div className="map-box map-box-5">
            <h4>Phase 3:</h4>
              
              <li> Launch of the GoosePunks Gaggle. </li>   
              <li> Merchandise partnership and concepts for merchandise begins. </li>
              <li> Game map is live and viewable on goosepunks.com, users can then purchase land plots. </li>
              <li> In game items are now live for purchase. </li>
              <li> GoosePunk holders can now customize their NFT and pair their ingame assets to their user profile. </li>
            </div>
            <div className="map-box map-box-6"> 
            <h4>Phase 3 Utility: GoosePunks' Gaggle</h4>
              <p> In this phase, we shall be launching the GoosePunks' Gaggle
                 - an interactive platform where all geese can come together to have fun, 
                learn from one another, and most importantly just GAGGLE.
              </p>
              <a href="https://www.app.goosepunks.com" target="_blank" rel="noreferrer">
              https://www.app.goosepunks.com
              </a>
            </div>
            <div className="map-box map-box-7">
            <h4>Phase 4:</h4>
              <li> Rarible Intergration. </li> 
             <li> GoosePunks in game currency development. </li> 
             <li> GoosePunks staking is live. </li>   
             <li> To be continued… </li>
            </div>
            <div className="map-box map-box-8">
            <h4>Phase 4 Utility: Rarible Integration</h4>
              <p> Who doesn't love easter eggs? We would let you guess what GoosePunks' Rarible Integration
                would be all about. But fear not, for this goose shall continue to drop hints about 
                that as we progress in due course... Goose Gaggles.
              </p>
              <a href="https://www.app.goosepunks.com" target="_blank" rel="noreferrer">
              https://www.app.goosepunks.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default Index;
