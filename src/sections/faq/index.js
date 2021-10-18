import React from "react";
import "./style.css";
import Qcircle from "../../assets/images/q-circle.png";
import FaqImage from "../../assets/images/FAQ-vector.png";
const Index = () => {
  return (
    <section className="section-space" id="faq">
      <div className="container">
        <div className="section-heading">
          <h2>FAQ's</h2>
        </div>
        <div className="row faq align-items-center">
          <div class="col-12 col-md-6">
            <div class="faq-left">
              <img src={FaqImage} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="faq-item">
              <img src={Qcircle} alt="" className="d-none d-md-block" />
              <p>How can I mint an SBS agent?</p>
              <span>
                {" "}
                An SBS agent can be minted from the 1st of October at 5pm EST
                (4pm EST for presale). To be able to mint, you will have to
                connect your metamask wallet to our website, and ensure there is
                enough ETH available to mint your desired amount of agents. It
                will cost 0.05 Eth + Gas fees to mint an agent. A maximum of 20
                can be minted per transaction.
              </span>
            </div>

            <div className="faq-item">
              <img src={Qcircle} alt="" className="d-none d-md-block" />
              <p>What comes with purchasing an SBS agent?</p>
              <span>
                By purchasing a Secret Bear Society Agent, you will be
                recruiting a unique NFT stored on the Ethereum forever! With
                this, when you purchase a bear, you gain the creative and
                commercial rights to your agent!
              </span>
            </div>
            <div className="faq-item">
              <img src={Qcircle} alt="" className="d-none d-md-block" />
              <p>Is there a presale involved in this project! </p>
              <span>
                Yes, there sure is! A presale will occur 1 hour before the main
                sale, with a maximum of 200 spots and 1000 agents being
                available to recruit!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
