import React, { Component } from "react";
// import logo from "./logo.svg";
import "./resources/styles.css";
import Featured from "./components/featured";

import Header from "./components/header_footer/Header";
import VenueInfo from "./components/venue_info";

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
        <Featured />
        <VenueInfo />
      </div>
    );
  }
}

export default App;
