/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import minus from "../../assets/images/minus.svg";
import plus from "../../assets/images/plus.svg";
// import Qcircle from "../../assets/images/q-circle.png";
import FaqImage from "../../assets/images/FAQ-vector.png";
import "./style.css";
 
const Index = () => {
  const [accordion1, setAccordion1] = useState(false); 
  const [accordion2, setAccordion2] = useState(false);
  const [accordion3, setAccordion3] = useState(true);
  const [accordion4, setAccordion4] = useState(false);
  const [accordion5, setAccordion5] = useState(false);
  const [accordion6, setAccordion6] = useState(false);

  const handleAccordion1 = () => {
    setAccordion1((prev) => !prev);
    setAccordion2(false);
    setAccordion3(false);
    setAccordion4(false);
    setAccordion5(false);
    setAccordion6(false);
  };

  const handleAccordion2 = () => {
    setAccordion1(false);
    setAccordion2((prev) => !prev);
    setAccordion3(false);
    setAccordion4(false);
    setAccordion5(false);
    setAccordion6(false);
  };

  const handleAccordion3 = () => {
    setAccordion1(false);
    setAccordion2(false);
    setAccordion3((prev) => !prev);
    setAccordion4(false);
    setAccordion5(false);
    setAccordion6(false);
  };

  const handleAccordion4 = () => {
    setAccordion1(false);
    setAccordion2(false);
    setAccordion3(false);
    setAccordion4((prev) => !prev);
    setAccordion5(false);
    setAccordion6(false);
  };

  const handleAccordion5 = () => {
    setAccordion1(false);
    setAccordion2(false);
    setAccordion3(false);
    setAccordion4(false);
    setAccordion5((prev) => !prev);
    setAccordion6(false);
  };

  const handleAccordion6 = () => {
    setAccordion1(false);
    setAccordion2(false);
    setAccordion3(false);
    setAccordion4(false);
    setAccordion5(false);
    setAccordion6((prev) => !prev);
  };

  

  return ( 
    <section id="faq" class="section-space" className="faq-Section-main-wrapper">
      <div className="container">    
      <div className="section-heading">
           <h2>FAQ's <img src={FaqImage} width="5%" alt="" /></h2>
       </div>
        
        <div className="row faq align-items-center">  
        <div className="col-12 col-md-6">
        <div className="qwrapper">
        <div className="question-wrapper" onClick={() => handleAccordion1()}>
          <img src={accordion1 ? minus : plus} alt="minus" />
          <h2>What do I need to mint a GoosePunk?</h2>
        </div>
        <p
          className="faq-answer"
          style={!accordion1 ? { display: "none" } : null}
        >
          You will need a bit of ETH and a MetaMask wallet. You can buy ETH
          either on Coinbase or another exchange then deposit that into your
          MetaMask wallet. Make sure your wallet is connected!
        </p>
        </div>
        <div className="qwrapper">
        <div className="question-wrapper" onClick={() => handleAccordion2()}>
          <img src={accordion2 ? minus : plus} alt="minus" />
          <h2>How do I use Metamask?</h2>
        </div>
        <p
          className="faq-answer"
          style={!accordion2 ? { display: "none" } : null}
        >
          Please{" "}
          <a href="https://metamask.io/faqs" target="_blank">
            {" "}
            click this link
          </a>{" "}
          and follow it straight from the source.
        </p>
        </div>
        <div className="qwrapper">
        <div className="question-wrapper" onClick={() => handleAccordion3()}>
          <img src={accordion3 ? minus : plus} alt="minus" />
          <h2>What does my GoosePunk do?</h2>
        </div>
        <p
          className="faq-answer"
          style={!accordion3 ? { display: "none" } : null}
        >
          Each GoosePunks NFT is an amazing piece of art, but the value doesn’t stop there. 
          Ownership of a GoosePunk is your key to unique, exclusive possibilities. 
          Let’s break down a few of those…
          {" "}
          <a href="https://medium.com/@GoosePunks/what-does-my-goosepunk-do-2799e75dbe86" target="_blank">
            {" "}
            Read more...
          </a>{" "}
        </p>
        </div>
        </div>




        
        <div className="col-12 col-md-6">
        <div className="qwrapper">
        <div className="question-wrapper" onClick={() => handleAccordion4()}>
          <img src={accordion4 ? minus : plus} alt="minus" />
          <h2>WTF is an NFT?</h2>
        </div>
        <p
          className="faq-answer"
          style={!accordion4 ? { display: "none" } : null}
        >
          A non-fungible token (NFT) is a unique digital asset that represents ownership of real-world items like art, 
          video clips, music, and more. 
          NFTs use the same blockchain technology that powers cryptocurrencies, but they're not a currency.
          {" "}
          <a href="https://www.businessinsider.com/nft-meaning?amp" target="_blank">
            {" "}
            Read more...
          </a>{" "}
        </p>
        </div>
        <div className="qwrapper">
        <div className="question-wrapper" onClick={() => handleAccordion5()}>
          <img src={accordion5 ? minus : plus} alt="minus" />
          <h2>When can I see my GoosePunk?</h2>
        </div>
        <p
          className="faq-answer"
          style={!accordion5 ? { display: "none" } : null}
        >
          Right after you click mint.
          visit 
          {" "}
          <a href="https://opensea.io/collection/goosepunks-renegades" target="_blank">
            {" "}
            https://opensea.io/collection/goosepunks-renegades 
          </a>{" "}
          to view your NFT
        </p>
        </div>
        <div className="qwrapper">
        <div className="question-wrapper" onClick={() => handleAccordion6()}>
          <img src={accordion6 ? minus : plus} alt="minus" />
          <h2>Where can I sell my NFT?</h2>
        </div>
        <p
          className="faq-answer"
          style={!accordion6 ? { display: "none" } : null}
        >
          All GoosePunk NFTs will be available on opensea.io for purchase or
          sales. You can also transfer to secondary markets that support ETH. 
          The GoosePunks marketplace will also be available for the sale & purchase of GoosePunks NFTs.
        </p>
        </div>
        </div>
      </div>
      </div>
    </section>
  );  
};

export default Index;
