import { useState } from "react";
import { Timer } from "../../components";

import "./style.css";
import HeroImg from "../../assets/images/bear-1.png";
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
  const [value, setValue] = useState(0);
   
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
          <div className="col-12 col-md-5 col-lg-5 col-xl-5 mt-4">
            <h1>Welcome to GoosePunks NFTs</h1>
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
                    ? ` Mint ${value} Agent (${(value * displayPrice).toFixed(
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
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <div className="hero-image-bo">
              <img src={HeroImg} alt="heroImg" />
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Index;
