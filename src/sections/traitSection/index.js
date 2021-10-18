import React from "react";
import "./style.css";
import Bear6 from "../../assets/images/bear-6.png";
import Element1 from "../../assets/images/element-bg.png";
import Element2 from "../../assets/images/element-bg2.png";
import Element3 from "../../assets/images/element-bg3.png";
import Element4 from "../../assets/images/element-bg4.png";
const Index = () => {
  return (
    <section className="section-space" id="traits">
      <div className="container">
        <div class="section-heading">
          <h2>Traits</h2>
        </div>
        <div className="row align-items-center justify-content-between traits">
          <div class="col-12 col-md-4">
            <div class="traits-list ">
              <ul>
                <li>
                  <span>11</span> Backgrounds
                </li>
                <li>
                  <span>45</span> Skins{" "}
                </li>
                <li>
                  <span>37</span> Pants
                </li>
                <li>
                  <span>80</span> Shirts
                </li>
                <li>
                  <span>18</span> Mouths
                </li>
                <li>
                  <span>18</span> Eyes
                </li>
                <li>
                  <span>21</span> Glasses
                </li>
                <li>
                  <span>75</span> Shoes
                </li>
                <li>
                  <span>57</span> Headwear
                </li>
                <li>
                  <span>18</span> Accessories
                </li>
              </ul>
              <button class="total-traits">
                <span>383</span> Total Traits
              </button>
            </div>
          </div>
          <div class="col-md-8  traitImage d-none d-md-block ">
            <div class="traits-box ">
              <div class="bear-modal">
                <div class="modalimg">
                  <img src={Bear6} alt="" />
                </div>

                {/* <!-- modal elements --> */}

                <div class="modal-elements element-1">
                  {/* <!-- <span><img src="images/cap@2x.png"></span> --> */}
                  <img src={Element1} alt="" />
                </div>

                <div class="modal-elements element-2">
                  <img src={Element2} alt="" />
                </div>

                <div class="modal-elements element-3">
                  <img src={Element3} alt="" />
                </div>

                <div class="modal-elements element-4">
                  <img src={Element4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
