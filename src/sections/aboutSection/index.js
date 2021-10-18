import React from "react";
import "./style.css";
import Bear2 from "../../assets/images/bear-2.png";
import Bear3 from "../../assets/images/bear-5.png";
import Bear4 from "../../assets/images/bear-4.png";
import Bear5 from "../../assets/images/bear-3.png";
const Index = () => {
  return (
    <section id="about" className="text-white">
      <div className="container">
        <div class="row align-items-center">
          <div className="col-12 col-md-4 d-none d-md-block">
            <div className="d-flex justify-content-center imageBox">
              <img src={Bear2} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-8 mt-4 mt-sm-0">
            <div className="content-box">
              <h6>about</h6>
              <p>
                The Secret Bear Society is made up of 11,111 programmatically
                generated images with over 380 unique traits. Each bear is a
                special agent on a secret mission to protect the bears, the
                climate, and the lands in which they live. In order to do so,
                they need your help. All bears are dope, but some are more rare
                than others. Recruit your bear today!
              </p>
            </div>
            <div className="content-box">
              <h6>The Society</h6>
              <p>
                When you buy a bear, you are not only buying collectible digital
                art, but you gain access to a decentralized collective secret
                society where the benefits increase over time. You are also
                helping with land conservation, climate change, and rescuing
                bears.
              </p>
            </div>
          </div>
        </div>
        <div className="row image-row">
          <div className="col-12 col-sm-4">
            <div className="card-image">
              <img src={Bear3} alt="bear3" />
              <p>11,111 Characters</p>
            </div>
          </div>
          <div className="col-12 col-sm-4">
            <div className="card-image">
              <img src={Bear4} alt="bear3" />
              <p>Randomly Generated</p>
            </div>
          </div>
          <div className="col-12 col-sm-4">
            <div className="card-image">
              <img src={Bear5} alt="bear3" />
              <p>383 Traits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
