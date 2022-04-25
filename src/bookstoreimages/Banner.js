import React from "react";
import { WiDirectionRight } from "react-icons/wi";
import "../Bannercomponent/Banner.css";

function Banner() {
  return (
    <div>
      <div className="bannerconatiner">
        <div className="bannerconetent">
          <div className="bannertext">
            <div className="orgainicProduct">
              <h1>Organic Product</h1>
              <span>to Suite your skin.</span>
              <p>
                at cute we bring to you the best organic product that will
                beautify your skin
              </p>
              <button>Explore Product <WiDirectionRight/></button>
            </div>
          </div>
          <div className="bannerimage">
            <img src="/img/b1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
