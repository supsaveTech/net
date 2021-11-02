import { useState } from "react";
import { Timer } from "../../components";

import "./style.css";
import HeroImg from "../../assets/images/bear-1.png";
import greenCheck from "../../assets/images/green-check.svg"; 
import Slider, { SliderTooltip } from "rc-slider";
import "rc-slider/assets/index.css";
const Index = ({
  days,
  hours,
  minutes,
  seconds,
  difference,
  account,
  mint,
  totalSupply,
  displayPrice,
  maxSupply,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState(7);
   
  const { Handle } = Slider;

  const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    if (value > 0) {
      setValue(value);
    }

    return (
      <SliderTooltip
        prefixCls="rc-slider-tooltip"
        overlay={`${value}`}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </SliderTooltip>
    );
  };

  return (
    <section className="text-white hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6 mt-3">
            <h2>Welcome to GoosePunks NFTs</h2> 
 
            <div className="bigger-button-wrapper">
              <div className="bigger-button">
                <img src={greenCheck} alt="greenCheck" />
                <p className="big-btn-text">
                  Tier 1-3, 4,500 Renegade GoosePunks minted
                </p>
              </div>
              <div className="virticle-dots" />
              <div className="bigger-button1">
                <img
                  style={{ display: "none" }}
                  src={greenCheck}
                  alt="greenCheck"
                />
                <p
                  // style={{ color: "grey", paddingLeft: "38px" }}
                  className="big-btn-text1"
                >
                  Tier 2-3 3,500 Renegade GoosePunks minted
                </p>
              </div>
              <div className="virticle-dots" />
              <div className="bigger-button1">
                <img
                  style={{ display: "none" }}
                  src={greenCheck}
                  alt="greenCheck"
                />
                <p
                  // style={{ color: "grey", paddingLeft: "38px" }}
                  className="big-btn-text1"
                >
                  Tier 3-3, 3,000 Renegade GoosePunks minted
                </p>
              </div>
            </div>

            {difference > 0 ? (
              <Timer
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
              />
            ) : (
              <div className="slider ml-0 ml-md-2 mx-auto text-center text-md-left">
                <div className="slider-text d-flex justify-content-between align-items-center mb-1 ">
                  <p>Total GoosePunks Minted</p>
                  <p>
                    {totalSupply}/{maxSupply}
                  </p>
                </div>
                <Slider min={1} max={20} defaultValue={1} handle={handle} />
                <p className="slider-bottom-text text-center mt-2">
                  {account
                    ? ` Mint ${value} GoosePunks (${(value * displayPrice).toFixed(
                        2
                      )}
                    Ether)`
                    : "Connect Account"}
                </p>
                <button
                  style={
                    !account || totalSupply === maxSupply
                      ? {
                          backgroundColor: "grey",
                          color: "white",
                          cursor: "default",
                          pointerEvents: "none",
                        }
                      : null
                  }
                  className="mint-now mx-auto "
                  onClick={() => mint(value)}
                >
                  Mint Now
                </button>
              </div>
              
            )}

          <br/>

          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <div className="hero-image-bo">
              <img src={HeroImg} width="100%" alt="heroImg" />
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Index;
