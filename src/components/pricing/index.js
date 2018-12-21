import React, { Component } from "react";
import ReusableButton from "../utils/Button";
import Zoom from "react-reveal/Zoom";

export default class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Lower", "100 Level"],
    desc: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, nesciunt?",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, provident!",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, pariatur."
    ],
    linkTo: "https:\\p-d-banik.herokuapp.com",
    delay: [200, 0, 200]
  };

  showBoxes = () => {
    const { prices, positions, desc, linkTo, delay } = this.state;
    return prices.map((price, i) => (
      <Zoom key={i} delay={delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>{price}</span>
              <span>{positions[i]}</span>
            </div>
            <div className="pricing_description">{desc[i]}</div>
            <div className="pricing_buttons">
              <ReusableButton
                link={linkTo}
                text="Purchase"
                bck="#ffa800"
                color="#ffffff"
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  };

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}
