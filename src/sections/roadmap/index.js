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
              <h4>
              {/* <img
              className="roadmap-point3"
              src={roadmapPoint}
              alt="roadmapPoint"
              />&nbsp; */}
              Q1: ✔️
              </h4>
              
             <li> Website development. </li> 
             <li> Community growth on social channels. </li>   
             <li> Airdrop and giveaway campaign. </li>
             <li> 3,500 Tier 1 Renegade GoosePunk NFTs minted. </li>
              
            </div>
          </div>
          <div class="mapbox-2 wow fadeInRight">
            <div class="mapbox-inner">
            <h4>
              <img
              className="roadmap-point3"
              src={roadmapPoint}
              alt="roadmapPoint"
            />&nbsp;Q1/U1: GoosePunks' Lore
                </h4>
              <p>
              
                This quarter shall feature the launch of GoosePunks Lore
                 - an Artifical Intelligence (AI) powered utility that would enable all
                geese to create a backdrop story to their NFT. Stay tuned, stay updated. 
                More announcements will be communicated in due course.
              </p>
              <a href="#lore" target="_blank" rel="noreferrer">
              https://www.goosepunks.com
              </a>
            </div>
          </div>
          <div class="mapbox-3 wow fadeInLeft">
            <div class="mapbox-inner" target="_blank">
            <h4>Q2:</h4>
              
             <li> 3,500 Tier 2 Renegade GoosePunk NFTs minted. </li> 
             <li> 3,000 Tier 3 Renegade GoosePunk NFTs minted. </li>   
             <li> 2,000 Random Tier 1-3 GoosePunk NFTs minted. </li>
             <li> Staking development initiation. </li>
              
            </div>
          </div>
          <div class="mapbox-4 wow fadeInRight">
            <div class="mapbox-inner">
              <h4><img
              className="roadmap-point3"
              src={roadmapPoint}
              alt="roadmapPoint"
            />&nbsp;Q2/U2: GoosePunks' Marketplace</h4>
              <p> This quarter shall feature the launch of GoosePunks Marketplace
               - a market where all geese can mint their NFTs as well as upload and sell their NFTs.
              </p>
              <a href="https://www.app.goosepunks.com" target="_blank" rel="noreferrer">
              https://www.app.goosepunks.com
              </a>
            </div>
          </div>
          <div class="mapbox-5 wow fadeInLeft">
            <div class="mapbox-inner" target="_blank">
            <h4>Q3:</h4>
              
             <li> Community art collab contests. </li> 
             <li> Development of Drifter GoosePunk NFTs. </li>   
             <li> Staking Implementation. </li>
             <li> Release of Drifter GoosePunk NFTs. </li>
            </div>
          </div>
          <div class="mapbox-6 wow fadeInRight">
            <div class="mapbox-inner">
              <h4><img
              className="roadmap-point3"
              src={roadmapPoint}
              alt="roadmapPoint"
            />&nbsp;Q3/U3: GoosePunks' Gaggle</h4>
              <p> In this quarter, we shall be launching the GoosePunks' Gaggle
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
            <h4>Q4:</h4>
              
             <li> GoosePunks game development starts. </li> 
             <li> Development of “The Swans” GoosePunk NFTs. </li>   
             <li> Airdrop and giveaway campaign. </li>
             <li> To be continued… </li>
            </div>
          </div>
          <div class="mapbox-8 wow fadeInRight">
            <div class="mapbox-inner">
              <h4><img
              className="roadmap-point3"
              src={roadmapPoint}
              alt="roadmapPoint"
            />&nbsp;Q4/U4: GoosePunks' Rarible Integration</h4>
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
            <h4>Q1: ✔️</h4>
            <li> Website development. </li> 
             <li>  Community growth on social channels. </li>   
             <li> Airdrop and giveaway campaign. </li>
             <li> 3,500 Tier 1 Renegade GoosePunk NFTs minted. </li>
            </div>
          </div>
          <div className="col-12">
            <div className="map-box map-box-2">
            <h4>
              <img
              className="roadmap-point3"
              src={roadmapPoint}
              alt="roadmapPoint"
            />&nbsp;Q1/U1: GoosePunks' Lore
                </h4>
                <p>
                  
                This quarter shall feature the launch of GoosePunks Lore
                 - an Artifical Intelligence (AI) powered utility that would enable all
                geese to create a backdrop story to their NFT. Stay tuned, stay updated. 
                More announcements will be communicated in due course.
            </p>
            <a href="https://www.app.goosepunks.com" target="_blank" rel="noreferrer">
            https://www.app.goosepunks.com
            </a>
            </div>
          </div>
          <div className="col-12">
            <div className="map-box map-box-3">
            <h4>Q2:</h4>
              
             <li> 3,500 Tier 2 Renegade GoosePunk NFTs minted. </li> 
             <li> 3,000 Tier 3 Renegade GoosePunk NFTs minted. </li>   
             <li> 2,000 Random Tier 1-3 GoosePunk NFTs minted. </li>
             <li> Staking development initiation. </li>
            </div>
          </div>
          <div className="col-12">
            <div className="map-box map-box-4">
            <h4><img
              className="roadmap-point3"
              src={roadmapPoint}
              alt="roadmapPoint"
            />&nbsp;Q2/U2: GoosePunks' Marketplace</h4>
              <p> This quarter shall feature the launch of GoosePunks Marketplace
               - a market where all geese can mint their NFTs as well as upload and sell their NFTs.
              </p>
              <a href="https://www.app.goosepunks.com" target="_blank" rel="noreferrer">
              https://www.app.goosepunks.com
              </a>
            </div>
            <div className="map-box map-box-5">
            <h4>Q3:</h4>
              
             <li> Community art collab contests. </li> 
             <li> Development of Drifter GoosePunk NFTs. </li>   
             <li> Staking Implementation. </li>
             <li> Release of Drifter GoosePunk NFTs. </li>
            </div>
            <div className="map-box map-box-6">
            <h4><img
              className="roadmap-point3"
              src={roadmapPoint}
              alt="roadmapPoint"
            />&nbsp;Q3/U3: GoosePunks' Gaggle</h4>
              <p> In this quarter, we shall be launching the GoosePunks' Gaggle
                 - an interactive platform where all geese can come together to have fun, 
                learn from one another, and most importantly just GAGGLE.
              </p>
              <a href="https://www.app.goosepunks.com" target="_blank" rel="noreferrer">
              https://www.app.goosepunks.com
              </a>
            </div>
            <div className="map-box map-box-7">
            <h4>Q4:</h4>
              
             <li> GoosePunks game development starts. </li> 
             <li> Development of “The Swans” GoosePunk NFTs. </li>   
             <li> Airdrop and giveaway campaign. </li>
             <li> To be continued… </li>
            </div>
            <div className="map-box map-box-8">
            <h4><img
              className="roadmap-point3"
              src={roadmapPoint}
              alt="roadmapPoint"
            />&nbsp;Q4/U4: GoosePunks' Rarible Integration</h4>
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
