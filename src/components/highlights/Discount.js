import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import ReusuableButton from "../utils/Button";

export default class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnds: 30
  };
  percentage = () => {
    if (this.state.discountStart < this.state.discountEnds) {
      this.setState(currentState => ({
        discountStart: currentState.discountStart + 1
      }));
    }
  };

  componentDidUpdate() {
    const { discountEnds } = this.state;
    setTimeout(() => {
      this.percentage();
    }, discountEnds);
  }

  render() {
    const { discountStart } = this.state;

    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_porcentage">
              <span>{discountStart}%</span>
              <span>Off</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 20th Feb</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officia, illo rerum. Dolore, assumenda eaque, magnam doloremque
                inventore animi aliquam repudiandae magni ab incidunt quam et
                quis facilis asperiores at hic!
              </p>
              <div>
                <ReusuableButton
                  text="Purchase Tickets"
                  bck="#ffa800"
                  color="#ffffff"
                  link="https:\\p-d-banik.herokuapp.com"
                />
              </div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}
