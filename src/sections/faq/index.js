import React from "react";
import "./style.css";
import Qcircle from "../../assets/images/logo.png";
import FaqImage from "../../assets/images/FAQ-vector.png";
const Index = () => {
  return (
    <section className="section-space" id="faq">
      <div className="container">
        <div className="section-heading">
          <h2>FAQ's <img src={FaqImage} width="5%" alt="" /></h2>
        </div>
          {/* <div class="col-12 col-md-12">
            <div class="faq-left">
              <img src={FaqImage} width="1%" alt="" />
            </div>
          </div> */}
        <div className="row faq align-items-center"> 
          
          <div className="col-12 col-md-6">
            <div className="faq-item">
              <img src={Qcircle} alt="" className="d-none d-md-block" />
              <p>What is a GoosePunk?</p>
              <span>
                {" "}
                Owner ship of a GoosePunk is your exclusive invitation into the Gaggle, a place where other Geese meetup, hangout, listen to music, exchange art and talk about strategies moving forward inside the GoosePunks project.
              </span>
            </div>

            <div className="faq-item">
              <img src={Qcircle} alt="" className="d-none d-md-block" />
              <p>How were the GoosePunks generated?</p>
              <span>
              Each GoosePunk was generated from a collection of more than 1,100+ colored hand drawn attributes.
              </span>
            </div>
            <div className="faq-item">
              <img src={Qcircle} alt="" className="d-none d-md-block" />
              <p>What determines the GoosePunk I receive?</p>
              <span>
              Each GoosePunk is hatched with different traits everytime you send a transaction to “mint”.
              </span>
            </div>
            <div className="faq-item">
              <img src={Qcircle} alt="" className="d-none d-md-block" />
              <p>What do I need to mint a GoosePunk?</p>
              <span>
              You will need a bit of ETH and a MetaMask wallet, you can buy ETH either on Coinbase or another exchange then deposit that into your MetaMask wallet. Make sure your wallet is connected!
              </span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="faq-item">
              <img src={Qcircle} alt="" className="d-none d-md-block" />
              <p>How do I use Metamask?</p>
              <span>
                {" "}
                Please 
          <a href="https://metamask.io/faqs" target="_blank" rel="noreferrer"> 
            &nbsp;click this link
          </a> and follow it straight from the source
              </span>
            </div>

            <div className="faq-item">
              <img src={Qcircle} alt="" className="d-none d-md-block" />
              <p>What does my GoosePunk do?</p>
              <span>
              With ownership of a GoosePunk NFT you will have the ability to stake and render the NFT inside the GoosePunks game. Collect in game currency, travel to cities, participate in the GoosePunk ecosystem, build a house, buy city’s, land deeds and more. Users will be able to interact with other players, have a dance party, duel, and form factions.
              </span>
            </div>
            <div className="faq-item">
              <img src={Qcircle} alt="" className="d-none d-md-block" />
              <p>When can I see my GoosePunk?</p>
              <span>
              Right after you click mint
              </span>
            </div>
            <div className="faq-item">
              <img src={Qcircle} alt="" className="d-none d-md-block" />
              <p>Where can I sell my NFT?</p>
              <span>
              All GoosePunk NFTs will be available on opensea.io for purchase or sales, you can also transfer to secondary markets that support ETH.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
