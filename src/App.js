import React, { Component } from "react";
// import logo from "./logo.svg";
import "./resources/styles.css";
import Featured from "./components/featured";

import Header from "./components/header_footer/Header";
import VenueInfo from "./components/venue_info";
import Highlights from "./components/highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/header_footer/Footer";

import { Element } from "react-scroll";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          height: "1500px"
        }}
      >
        <Header />
        <Element name="featured">
          <Featured />
        </Element>
        <Element name="venue">
          <VenueInfo />
        </Element>
        <Element name="highlight">
          <Highlights />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
