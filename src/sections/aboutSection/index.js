import React from "react";
import "./style.css";
import Bear2 from "../../assets/images/goose-2.png";
import copy1 from "../../assets/images/physical_copy1.jpg";
import copy2 from "../../assets/images/physical_copy2.jpg";
import copy3 from "../../assets/images/physical_copy3.jpg"; 
const Index = () => {
  return (   
    <section id="about" className="text-white">
      <div className="container">
        <div class="row align-items-center"> 
          <div className="col-12 col-md-4 d-none d-md-block">
            <div className="d-flex justify-content-center imageBo">
              <img src={Bear2} width="100%" alt="" />
            </div> 
          </div>
          <div className="col-12 col-md-8 mt-4 mt-sm-0">
            <div className="content-box">
              <h6>What are GoosePunks? 🦢</h6>
              <p>
              GoosePunks is a collection of unique NFT avatars. 
              This series is called GoosePunks Renegades Each GoosePunk is algorithmically 
              generated by randomly combining together numerous professionally illustrated properties across various categories. 
              There are more numerous assets inside the algorithm! When you own a GoosePunk you have full ownership over this character. 
              Ownership of a GoosePunk is your exclusive invitation into the Khena Metaverse. 
              Read more below.
              </p>
            </div>
            <div className="content-box">
            <h6>GoosePunks Lore</h6>
              <p>
                2034. The humans of the planet once called Earth, reach for extraordinary technological heights. 
                During a great time of suspicion and accusation, the world’s governments couldn’t maintain peace. 
                Four mega-nations arm themselves for war. In these days, legends clash and lives are lost. 
                Ground forces are deployed, and they prepare fortifications. 
                What made this war different from the ones before or since? 
                One technician disobeyed orders - not wanting fame, power, or riches, 
                but rather for all of humanity to be obliterated.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div class="row align-items-center mt-sm-3"> 
          <div className="col-12 col-md-3 d-md-block physical-box">
          <h6>IMPORTANT ANNOUNCEMENT!</h6>
          <p>[All GoosePunk NFT holders are entitled to 1 physical panel for FREE! Subscribe to our Newsletter for updates]</p>
          <br />
          </div>
          <div className="col-12 col-sm-3">
            <div className="card-image">
              <img src={copy1} alt="bear3" />
           
            </div><br />
          </div>
          <div className="col-12 col-sm-3">
            <div className="card-image">
              <img src={copy2} alt="bear3" />
             
            </div><br />
          </div>
          <div className="col-12 col-sm-3">
            <div className="card-image">
              <img src={copy3} alt="bear3" />
            
            </div><br />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
